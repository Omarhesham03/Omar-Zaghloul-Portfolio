---
name: "Pose Estimation Research Helper"
description: "Assist with pose estimation research including MediaPipe, OpenPose, RGB-D camera pipelines, and machine learning model evaluation for human motion analysis. Use when the user mentions pose estimation, MediaPipe, skeleton tracking, joint angles, exercise classification, Intel RealSense, depth cameras, Random Forest, MLP classifiers for pose data, or biomechanical feature extraction. Covers thesis-level methodology, experimental design, and results analysis."
---

# Pose Estimation Research Helper

## What This Skill Does
Supports research workflows involving 2D/3D human pose estimation: pipeline design, feature engineering from skeletal data, classifier training and evaluation, depth camera integration, and academic writing for methodology/results sections.

---

## Quick Start

1. User describes research question or pipeline issue.
2. Claude assists with: architecture design, feature extraction code, model evaluation, or paper writing.

---

## Core Pipeline Architecture

### Standard Pose Estimation → Classification Pipeline

```
Input (RGB / RGB-D frames)
    ↓
Pose Estimation (MediaPipe / OpenPose / custom)
    ↓
Landmark Extraction (33 body landmarks × 3D coordinates)
    ↓
Feature Engineering (joint angles, distances, velocities, symmetry)
    ↓
Preprocessing (normalization, windowing, outlier removal)
    ↓
Classification / Regression (RF, MLP, SVM, LSTM)
    ↓
Output (pose label, correctness score, feedback)
```

### RGB-D Pipeline (Intel RealSense)

```
RealSense D435/D455
    ↓
RGB Stream → MediaPipe Pose → 2D landmarks
Depth Stream → Aligned depth map → 3D reconstruction
    ↓
Fuse: 2D landmarks + depth → 3D world coordinates
    ↓
Feature extraction on 3D coordinates
    ↓
Model inference
```

---

## MediaPipe Pose Landmarks

### Key landmark indices (33 total)
```
0: nose
11: left_shoulder    12: right_shoulder
13: left_elbow       14: right_elbow
15: left_wrist       16: right_wrist
23: left_hip         24: right_hip
25: left_knee        26: right_knee
27: left_ankle       28: right_ankle
```

### Feature Extraction Code

```python
import numpy as np
import mediapipe as mp

def calculate_angle(a, b, c):
    """Calculate angle at point b given three 3D landmarks."""
    ba = np.array(a) - np.array(b)
    bc = np.array(c) - np.array(b)
    cosine = np.dot(ba, bc) / (np.linalg.norm(ba) * np.linalg.norm(bc) + 1e-8)
    angle = np.degrees(np.arccos(np.clip(cosine, -1.0, 1.0)))
    return angle

def extract_features(landmarks):
    """Extract biomechanical features from MediaPipe landmarks."""
    features = {}

    # Joint angles
    features['left_elbow_angle'] = calculate_angle(
        landmarks[11], landmarks[13], landmarks[15]  # shoulder, elbow, wrist
    )
    features['right_elbow_angle'] = calculate_angle(
        landmarks[12], landmarks[14], landmarks[16]
    )
    features['left_knee_angle'] = calculate_angle(
        landmarks[23], landmarks[25], landmarks[27]  # hip, knee, ankle
    )
    features['right_knee_angle'] = calculate_angle(
        landmarks[24], landmarks[26], landmarks[28]
    )
    features['left_hip_angle'] = calculate_angle(
        landmarks[11], landmarks[23], landmarks[25]  # shoulder, hip, knee
    )
    features['right_hip_angle'] = calculate_angle(
        landmarks[12], landmarks[24], landmarks[26]
    )

    # Symmetry features
    features['elbow_symmetry'] = abs(
        features['left_elbow_angle'] - features['right_elbow_angle']
    )
    features['knee_symmetry'] = abs(
        features['left_knee_angle'] - features['right_knee_angle']
    )

    # Distances (normalized by torso length)
    torso_length = np.linalg.norm(
        np.array(landmarks[11]) - np.array(landmarks[23])
    )
    features['wrist_distance_norm'] = np.linalg.norm(
        np.array(landmarks[15]) - np.array(landmarks[16])
    ) / (torso_length + 1e-8)

    return features
```

---

## Model Evaluation Framework

### Classifiers for Pose Data

| Model | When to Use | Hyperparameters to Tune |
|-------|-------------|------------------------|
| Random Forest | Baseline, interpretable, tabular features | n_estimators, max_depth, min_samples_split |
| MLP | Non-linear relationships, moderate data | hidden_layer_sizes, learning_rate, alpha |
| SVM (RBF) | Small datasets, well-separated classes | C, gamma |
| LSTM | Temporal sequences (exercise reps) | units, sequence_length, dropout |

### Evaluation Metrics

```python
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, confusion_matrix, classification_report
)

def evaluate_model(y_true, y_pred, class_names):
    """Standard evaluation for pose classification."""
    results = {
        'accuracy': accuracy_score(y_true, y_pred),
        'precision_macro': precision_score(y_true, y_pred, average='macro'),
        'recall_macro': recall_score(y_true, y_pred, average='macro'),
        'f1_macro': f1_score(y_true, y_pred, average='macro'),
        'confusion_matrix': confusion_matrix(y_true, y_pred),
        'report': classification_report(y_true, y_pred, target_names=class_names)
    }
    return results
```

### Cross-Validation Strategy
- **Subject-wise split**: Never put same subject's data in both train and test. This is critical for pose estimation — subject-dependent splitting inflates accuracy.
- **k-Fold (k=5 or 10)**: Standard for tabular features.
- **Leave-One-Subject-Out (LOSO)**: Gold standard for generalizability claims.

---

## Exercise-Specific Applications

### Resistance Training Feedback System
```
Correct form criteria (example: bicep curl):
  - Elbow angle range: 30° (top) to 160° (bottom)
  - Upper arm stationary: shoulder-elbow angle change < 10°
  - Symmetry: left-right elbow angle diff < 15°
  - Rep counting: detect angle minima in temporal signal

Feedback types:
  - CORRECT: All criteria met
  - PARTIAL: 1-2 criteria violated (specify which)
  - INCORRECT: Major form breakdown (specify and suggest correction)
```

### Yoga Pose Classification
Common classes: Warrior I, Warrior II, Tree, Downward Dog, Plank, Chair, Triangle.
Key features: hip angle, knee angle, arm elevation, torso lean, foot distance.

### Plank Correctness Analysis
Criteria: hip sag (<170° hip angle), pike (>190°), shoulder alignment, head position.

---

## Academic Writing Assistance

### Methodology Section Template
```
This study employs [pose estimation model] to extract [N] body landmarks
from [RGB/RGB-D] video frames captured using [camera model] at [resolution]
and [FPS]. From the extracted landmarks, [N] biomechanical features are
computed, including joint angles (elbow, knee, hip), inter-joint distances,
and symmetry measures. Features are normalized using [method] and fed into
a [classifier] for [task]. The model is evaluated using [cross-validation
strategy] with [metrics].
```

### Results Table Template
```
| Classifier | Accuracy | Precision | Recall | F1-Score |
|-----------|----------|-----------|--------|----------|
| RF        | X.XX     | X.XX      | X.XX   | X.XX     |
| MLP       | X.XX     | X.XX      | X.XX   | X.XX     |
| SVM       | X.XX     | X.XX      | X.XX   | X.XX     |
```

---

## Troubleshooting

### Issue: MediaPipe landmarks jittering
**Cause**: Low confidence detections, occlusion, or poor lighting.
**Solution**: Apply temporal smoothing (moving average, Kalman filter). Discard frames with visibility score < 0.5.

### Issue: Poor classification despite good features
**Check**: (1) Subject-wise split used? (2) Class imbalance? (3) Feature correlation analysis run? (4) Hyperparameter tuning done?

### Issue: RealSense depth alignment issues
**Solution**: Use `rs2::align` to align depth to color frame. Verify intrinsic parameters. Check for depth holes (interpolate or discard).
