/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        text: '#E0E0E0',
        'text-muted': '#6B7280',
        accent: '#00E5FF',
        'accent-dim': '#00B8D4',
        surface: '#111118',
        border: '#1E1E2E',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
