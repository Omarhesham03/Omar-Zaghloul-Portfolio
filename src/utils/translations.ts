export const translations: Record<string, Record<string, string>> = {
  en: {
    // Navbar
    'nav.work':    'Work',
    'nav.services':'Services',
    'nav.about':   'About',
    'nav.faq':     'FAQ',
    'nav.contact': 'Contact',
    'nav.back':    '← Back',

    // Hero
    'hero.eyebrow': 'Technical Product Engineer',
    'hero.name':    'Omar Zaghloul',
    'hero.subhead': 'Custom systems, platforms and automations built to turn operational friction into leverage.',
    'hero.cta.primary':   'Book a free discovery call',
    'hero.cta.secondary': 'See the work',

    // Work Section
    'work.eyebrow': 'In production',
    'work.header':  'Selected work',

    // Project cards — category and outcome caption
    'projects.oncoflow.category':      'Healthcare / SaaS',
    'projects.oncoflow.caption':       'Replaced paper tracking with one dashboard for oncology treatment cycles.',
    'projects.altinkapi.category':     'Travel / E-Commerce',
    'projects.altinkapi.caption':      'Bilingual Hajj and Umrah booking platform with live availability.',
    'projects.educounsellor.category': 'EdTech / SaaS',
    'projects.educounsellor.caption':  'White label dashboard replacing WhatsApp chaos for application agencies.',
    'projects.spotter.category':       'Health & Fitness / Mobile',
    'projects.spotter.caption':        'One app replacing four for tracking, coaching and nutrition.',
    'projects.reverse-swing.category': 'Sports / Content',
    'projects.reverse-swing.caption':  'Long form cricket writing with a purpose built CMS behind it.',

    // Project subtitle (used on detail pages)
    'projects.oncoflow.subtitle':      'Oncology Clinical Pharmacist Platform',
    'projects.altinkapi.subtitle':     'Hajj & Umrah Booking Platform',
    'projects.educounsellor.subtitle': 'White-Label Student Application Management Dashboard',
    'projects.spotter.subtitle':       'AI-Powered Nutrition & Fitness Companion',
    'projects.reverse-swing.subtitle': 'Cricket Analysis & Stories Platform',

    // Project detail page labels
    'project.problem':            'The Problem',
    'project.solution':           'The Solution',
    'project.technicalDecisions': 'Technical Decisions',
    'project.status':             'Where it Stands',
    'project.next':               'Next Project',
    'project.year':               'Year',
    'project.role':               'Role',
    'project.category':           'Category',
    'project.techstack':          'Tech Stack',

    // Project detail bodies — OncoFlow
    'projects.oncoflow.problem':            'Oncology pharmacists track chemotherapy cycles, lab results, drug interactions, and patient timelines, often across disconnected spreadsheets, paper forms, and hospital systems that don\'t talk to each other. A missed lab value or a scheduling conflict in a treatment cycle isn\'t just inefficiency: it\'s a patient safety risk. The existing workflow depends on manual cross-referencing and institutional memory rather than structured, accessible data.',
    'projects.oncoflow.solution':           'OncoFlow is a web-based clinical dashboard purpose-built for oncology pharmacists. It centralizes patient management into three core modules:\n\nA Master Calendar that maps every patient\'s chemotherapy cycles, pre-medications, lab reviews, and follow-ups onto a single timeline, color-coded by event type, filterable by protocol. When a pharmacist assigns a treatment protocol to a patient, the system automatically generates the full cycle schedule, associated medications, expected symptoms, and treatment timeline, eliminating manual calendar entry and reducing scheduling errors.\n\nA Lab Values Tracker organized by clinical category (hematology, renal, hepatic, coagulation, electrolytes) with historical trending and flag-worthy thresholds, so pharmacists can assess treatment readiness at a glance rather than digging through paper records.\n\nA Patient Registry with search, protocol tagging (CHOP, FOLFOX, etc.), and admission tracking, giving pharmacists a structured, filterable view of their active caseload instead of a mental list.\n\nThe platform also generates printable patient reports and lab summaries, bridging the gap between the digital dashboard and the physical documentation that hospitals still require.',
    'projects.oncoflow.technicalDecisions': 'The stack is Next.js with Supabase for auth, database, and row-level security, chosen for rapid prototyping speed without sacrificing a real permission model. The calendar uses a custom implementation rather than a third-party library, allowing treatment cycle logic (21-day CHOP cycles, dose-day mapping) to be encoded directly into the scheduling layer. Supabase\'s real-time subscriptions keep the dashboard current across concurrent sessions.',
    'projects.oncoflow.whereItStands':      'Built in collaboration with a clinical pharmacy graduate as a working prototype. Currently being refined for proposal to oncology departments and private clinics as a lightweight alternative to full-scale hospital information systems.',

    // Project detail bodies — Altınkapı
    'projects.altinkapi.problem':            'Altınkapı is a travel company specializing in Hajj and Umrah pilgrimage tours, serving clients across multiple countries and languages. Their booking process was entirely manual — inquiries via phone and WhatsApp, package details shared as PDFs, and no way for customers to compare options, check availability, or self-serve. For a business handling high-value, time-sensitive religious travel, the lack of a digital storefront meant lost conversions and an overwhelming operational load on a small team.',
    'projects.altinkapi.solution':           'A bilingual (English/Turkish) booking platform that lets customers browse curated Hajj and Umrah packages, filter by departure city, class of service, and date, and view transparent pricing with itemized inclusions (flights, visa, hotel tiers, guided tours).\n\nThe package display system breaks down each offering with hotel proximity ratings, night splits between Makkah and Medina, and service tiers, giving customers the information density they need to make a decision without a phone call.\n\nThe platform includes dark mode, a custom package request flow for non-standard itineraries, and an admin backend for the operator to manage package inventory, pricing, and seasonal promotions.',
    'projects.altinkapi.technicalDecisions': 'Next.js with Firebase was chosen for its hosting simplicity and real-time database: the client needed to update package availability and pricing frequently without developer intervention. Internationalization was implemented at the routing level (not just string replacement) to support proper RTL-ready architecture for potential Arabic expansion. The UI uses a gold-and-black palette drawn from the client\'s existing brand identity.',
    'projects.altinkapi.whereItStands':      'Delivered and operational. The client\'s business operations are currently paused for reasons unrelated to the platform. The codebase and infrastructure remain deployment-ready.',

    // Project detail bodies — EduCounsellor
    'projects.educounsellor.problem':            'Educational counseling agencies — businesses that help students apply to universities abroad — typically manage their entire workflow over WhatsApp. Student documents (transcripts, recommendation letters, visa paperwork) are shared as chat attachments. Application statuses live in the counselor\'s memory or a messy spreadsheet. Commission tracking from partner universities is manual. When an agency scales past 20–30 active students, this workflow collapses: documents get lost in chat history, deadlines are missed, and there\'s no audit trail.',
    'projects.educounsellor.solution':           'A white-label SaaS dashboard designed to slot into any counseling agency\'s workflow without forcing them to change how they operate, just where they operate.\n\nThe Admin Dashboard gives agency managers a master view of all applications across all counselors, with status tracking (Preparing, Submitted, Under Review, Accepted), commission calculations, student assignment, and CSV export for reporting.\n\nThe Student Portal gives each applicant a personal dashboard to view their application statuses, upload required documents (with type classification and size validation), and track deadlines, eliminating the need to ask their counselor for updates over chat.\n\nThe platform is white-label by design: agency name, branding, and domain are configurable per deployment, so each organization presents it as their own tool.',
    'projects.educounsellor.technicalDecisions': 'Supabase row-level security handles multi-tenancy: each agency\'s data is isolated at the database level, not just the application layer. The document vault uses Supabase Storage with signed URLs for secure, time-limited access. The system is designed for independent deployment per agency rather than a shared multi-tenant instance, keeping data sovereignty simple and avoiding the compliance complexity of shared infrastructure.',
    'projects.educounsellor.whereItStands':      'Feature-complete and deployment-ready. Currently seeking a first agency partner for pilot deployment and feedback iteration.',

    // Project detail bodies — Spotter
    'projects.spotter.problem':            'Most fitness apps force users into one lane: either workout tracking or nutrition logging, rarely both in a way that feels integrated. Users who want a holistic view of their health — calories consumed vs. burned, workout recommendations based on their body metrics, hydration tracking, sleep patterns — end up juggling 3–4 separate apps. For casual fitness users (not bodybuilders or athletes), this fragmentation is the barrier to consistency.',
    'projects.spotter.solution':           'Spotter is a mobile application designed as a single-surface fitness companion. The onboarding flow collects body metrics (age, weight, goals) and uses them to generate a personalized dashboard that ties together:\n\nWorkout Discovery — curated exercise categories (fat burning, strength, flexibility) with difficulty ratings and video guidance, plus a challenge system to maintain engagement.\n\nNutrition & Hydration Tracking — daily calorie monitoring, water intake tracking with visual progress, and macro breakdowns.\n\nPersonal Dashboard — a unified daily report showing active calories, water consumption, sleep quality, and recommended workouts, all derived from the user\'s profile data.\n\nAI Chat Assistant — a built-in conversational chatbot that answers fitness and nutrition questions contextually, using the user\'s profile data and activity history to give personalized guidance rather than generic advice.',
    'projects.spotter.technicalDecisions': 'Flutter was chosen for cross-platform deployment from a single codebase — critical for a startup with limited resources targeting both iOS and Android. Firebase provides auth, user data storage, and the foundation for future AI recommendation features (workout personalization based on usage patterns and progress data).',
    'projects.spotter.whereItStands':      'Core UI and onboarding flow are built. Backend integration and AI recommendation engine are in progress. The startup behind Spotter is currently paused; the project remains in active development as part of the portfolio.',

    // Project detail bodies — Reverse Swing
    'projects.reverse-swing.problem':            'Cricket content online lives in two extremes: mass-market news aggregators (ESPNcricinfo, Cricbuzz) that prioritize speed and scores, and social media threads that disappear in hours. There\'s a gap for long-form cricket writing — tactical analysis, player career retrospectives, bowling mechanics breakdowns — presented in a reading experience that respects both the writer and the reader.',
    'projects.reverse-swing.solution':           'Reverse Swing is a purpose-built publishing platform for cricket content. It combines a public-facing article site with a custom admin dashboard for content management.\n\nThe Public Site features a cinematic dark-themed reading experience with article cards, category filtering (Stories & Analysis), player profiles with contextual statistics, and a mobile-responsive layout designed for long reading sessions.\n\nThe Admin Dashboard provides a content management interface with article creation, draft/publish workflow, media file management, and per-article analytics (view tracking over time). It\'s built as a lightweight CMS rather than a bloated general-purpose solution — every feature exists because cricket writers need it.',
    'projects.reverse-swing.technicalDecisions': 'Supabase handles content storage, auth, and real-time analytics. The architecture is intentionally simple — no static site generation complexity, no build-time content compilation. Articles are fetched at request time from Supabase, keeping the publishing workflow instant (write → publish → live) without waiting for rebuilds.',
    'projects.reverse-swing.whereItStands':      'Fully functional with the admin dashboard and public reading experience complete. Currently in pre-launch — pending custom domain setup and initial content seeding before public release.',

    // Services section
    'services.eyebrow': 'Where I help',
    'services.header':  'Services',
    'services.01.title': 'Custom Web Platforms',
    'services.01.desc':  'Built around how your team actually works, so people stop working around the software.',
    'services.02.title': 'AI & Workflow Automation',
    'services.02.desc':  'The manual steps between your tools disappear, and stay gone.',
    'services.03.title': 'E-Commerce Solutions',
    'services.03.desc':  'Storefronts, landing pages and portfolio sites launched fast, on a foundation that does not need rebuilding once it works.',
    'services.04.title': 'Business Operating Systems',
    'services.04.subtitle': 'SaaS, CRM & ERP platforms',
    'services.04.desc':  'SaaS, CRM and ERP platforms that put your data in one place instead of five.',

    // About section
    'about.header':  'The bottleneck is never demand. It is the system underneath it.',
    'about.p1':      'Every business I have worked with reached the same moment: growth outpaced the systems holding it together. A schedule kept on paper. Applications tracked across a hundred chat threads. Data nobody fully trusted. None of that needed another tool stacked on top, it needed one system designed around how the business actually runs.',
    'about.p2':      'A good system is leverage you only have to build once and it keeps paying you back. That is the work: computer engineering and product thinking applied to real operational pain, one person accountable from the first call to the last deploy. No handoffs, no account managers, no one relearning your business from scratch.',

    // FAQ section
    'faq.eyebrow': 'Before you ask',
    'faq.header':  'FAQ',
    'faq.q1': 'What services do you offer?',
    'faq.a1': 'Custom web platforms, AI and workflow automation, e-commerce, and SaaS, CRM and ERP systems, whatever the business actually needs to run better.',
    'faq.q2': 'How long does a typical project take?',
    'faq.a2': 'Depends on scope, always. A focused platform can ship in weeks, a full operating system takes longer. Timelines get locked in before work starts, never guessed at along the way.',
    'faq.q3': 'How do I get a price estimate?',
    'faq.a3': 'Every project is scoped on its own terms, never off a template. A free discovery call gets you a clear number, fast.',
    'faq.a3.linkText': 'Book one here.',
    'faq.q4': 'What is your payment process?',
    'faq.a4': 'Half upfront to begin, half on delivery. Simple, and it keeps both sides accountable to the timeline.',
    'faq.q5': 'Do you offer support after launch?',
    'faq.a5': 'Two weeks of support are included with every launch, free. After that, ongoing support runs monthly, priced to the project, not a flat rate.',

    // Footer / Contact
    'contact.header':    "Let's talk",
    'contact.cta':       'Book a free discovery call',
    'footer.copy':       '© 2026 Omar Zaghloul',

    // 404 page
    '404.heading':    'This page does not exist.',
    '404.body':       'The link may be broken, or the page may have been moved. Either way, nothing here.',
    '404.cta.home':   'Back to the homepage',
    '404.cta.call':   'Book a discovery call',
  },

  tr: {
    // Navbar
    'nav.work':    'Projeler',
    'nav.services':'Hizmetler',
    'nav.about':   'Hakkımda',
    'nav.faq':     'SSS',
    'nav.contact': 'İletişim',
    'nav.back':    '← Geri',

    // Hero
    'hero.eyebrow': 'Teknik Ürün Mühendisi',
    'hero.name':    'Omar Zaghloul',
    'hero.subhead': 'Operasyonel sürtünmeyi kaldıraca dönüştürmek için tasarlanmış özel sistemler, platformlar ve otomasyonlar.',
    'hero.cta.primary':   'Ücretsiz keşif görüşmesi planla',
    'hero.cta.secondary': 'Projelere bak',

    // Work Section
    'work.eyebrow': 'Yayında',
    'work.header':  'Seçili projeler',

    // Project cards
    'projects.oncoflow.category':      'Sağlık / SaaS',
    'projects.oncoflow.caption':       'Onkoloji tedavi döngüleri için kağıt takibini tek bir panelle değiştirdi.',
    'projects.altinkapi.category':     'Seyahat / E-Ticaret',
    'projects.altinkapi.caption':      'Gerçek zamanlı müsaitlik ile iki dilli Hac ve Umre rezervasyon platformu.',
    'projects.educounsellor.category': 'Eğitim Teknolojisi / SaaS',
    'projects.educounsellor.caption':  'Başvuru ajansları için WhatsApp kaosunun yerine geçen white-label panel.',
    'projects.spotter.category':       'Sağlık & Fitness / Mobil',
    'projects.spotter.caption':        'Takip, koçluk ve beslenme için dört uygulamanın yerini alan tek uygulama.',
    'projects.reverse-swing.category': 'Spor / İçerik',
    'projects.reverse-swing.caption':  'Arkasında özel yapım bir CMS olan uzun formatlı kriket yazarlığı.',

    // Project subtitle
    'projects.oncoflow.subtitle':      'Onkoloji Klinik Eczacı Platformu',
    'projects.altinkapi.subtitle':     'Hac & Umre Rezervasyon Platformu',
    'projects.educounsellor.subtitle': 'White-Label Öğrenci Başvuru Yönetim Paneli',
    'projects.spotter.subtitle':       'Yapay Zeka Destekli Beslenme & Fitness Asistanı',
    'projects.reverse-swing.subtitle': 'Kriket Analiz & Yazı Platformu',

    // Project detail labels
    'project.problem':            'Problem',
    'project.solution':           'Çözüm',
    'project.technicalDecisions': 'Teknik Kararlar',
    'project.status':             'Mevcut Durum',
    'project.next':               'Sonraki Proje',
    'project.year':               'Yıl',
    'project.role':               'Rol',
    'project.category':           'Kategori',
    'project.techstack':          'Teknoloji',

    // Project detail bodies — OncoFlow
    'projects.oncoflow.problem':            'Onkoloji eczacıları kemoterapi döngülerini, laboratuvar sonuçlarını, ilaç etkileşimlerini ve hasta zaman çizelgelerini takip ederler — genellikle birbirinden bağımsız elektronik tablolar, kağıt formlar ve birbiriyle konuşmayan hastane sistemleri üzerinden. Tedavi döngüsünde gözden kaçan bir laboratuvar değeri veya zamanlama çakışması sadece verimsizlik değildir — hastanın güvenliği için bir risktir.',
    'projects.oncoflow.solution':           'OncoFlow, onkoloji eczacıları için özel olarak tasarlanmış web tabanlı bir klinik gösterge panelidir. Hasta yönetimini üç temel modülde merkezileştirir:\n\nHer hastanın kemoterapi döngülerini, pre-medikasyonlarını, laboratuvar incelemelerini ve takiplerini tek bir zaman çizelgesi üzerinde haritalandıran Ana Takvim.\n\nKlinik kategoriye göre organize edilmiş tarihsel eğilimleri ve uyarı gerektiren sınır değerleri içeren Laboratuvar Değerleri Takipçisi.\n\nArama, protokol etiketleme ve yatış takibi içeren Hasta Kayıt Sistemi.',
    'projects.oncoflow.technicalDecisions': 'Next.js ile Supabase — gerçek bir izin modelinden ödün vermeden hızlı prototipleme için seçildi. Takvim, tedavi döngüsü mantığının doğrudan planlama katmanına kodlanmasını sağlayan özel bir uygulamaya sahiptir.',
    'projects.oncoflow.whereItStands':      'Klinik eczacılık mezunu bir kişiyle iş birliği içinde çalışan bir prototip olarak oluşturuldu. Onkoloji bölümlerine hafif bir alternatif olarak sunulmak üzere geliştirilmektedir.',

    // Project detail bodies — Altınkapı
    'projects.altinkapi.problem':            'Altınkapı, Hac ve Umre turlarında uzmanlaşmış bir seyahat şirketidir. Rezervasyon süreci tamamen manueldi — telefon ve WhatsApp üzerinden sorular, PDF olarak paylaşılan paket detayları.',
    'projects.altinkapi.solution':           'Müşterilerin Hac ve Umre paketlerini incelemesine, kalkış şehrine, hizmet sınıfına ve tarihe göre filtreleme yapmasına olanak tanıyan iki dilli rezervasyon platformu.\n\nPaket görüntüleme sistemi, otel yakınlık derecelendirmeleri, Mekke ve Medine arasındaki gece dağılımı ve hizmet seviyeleri ile her teklifi detaylandırır.',
    'projects.altinkapi.technicalDecisions': 'Next.js ile Firebase, hosting basitliği ve gerçek zamanlı veri tabanı nedeniyle seçildi. Uluslararasılaştırma, Arapça genişleme için uygun RTL mimarisini desteklemek amacıyla yönlendirme düzeyinde uygulandı.',
    'projects.altinkapi.whereItStands':      'Teslim edildi ve operasyonel. Müşterinin ticari faaliyetleri platformla ilgisi olmayan nedenlerden dolayı duraklatılmış. Altyapı dağıtıma hazır.',

    // Project detail bodies — EduCounsellor
    'projects.educounsellor.problem':            'Eğitim danışmanlık ajansları tüm iş akışlarını WhatsApp üzerinden yönetir. Ajans 20-30 aktif öğrencinin üzerine çıktığında bu iş akışı çöker: belgeler kaybolur, son teslim tarihleri kaçırılır.',
    'projects.educounsellor.solution':           'Herhangi bir danışmanlık ajansının iş akışına, çalışma biçimini değiştirmeden oturmak üzere tasarlanmış white-label SaaS paneli.\n\nYönetici Paneli tüm başvurulara genel bakış, durum takibi ve komisyon hesaplamaları sunar.\n\nÖğrenci Portalı her başvuru sahibine kişisel panel verir.',
    'projects.educounsellor.technicalDecisions': 'Supabase row-level security çok kullanıcılı yapıyı yönetir. Belge kasası güvenli erişim için imzalı URL\'ler ile Supabase Storage kullanır.',
    'projects.educounsellor.whereItStands':      'Tüm özellikleri tamamlanmış ve dağıtıma hazır. İlk ajans pilot ortaklığı aranıyor.',

    // Project detail bodies — Spotter
    'projects.spotter.problem':            'Çoğu fitness uygulaması kullanıcıları tek bir kulvara zorlar: ya antrenman takibi ya da beslenme kaydı. Bütünsel görünüm isteyen kullanıcılar 3-4 ayrı uygulamayla uğraşmak zorunda kalır.',
    'projects.spotter.solution':           'Spotter, tek yüzeyli bir fitness asistanı olarak tasarlanmış mobil uygulamadır.\n\nAntrenman Keşfi — zorluk dereceleri ve video rehberliği ile egzersiz kategorileri.\n\nBeslenme & Hidrasyon Takibi — günlük kalori izleme ve su alımı takibi.\n\nKişisel Gösterge Paneli — aktif kalori, su tüketimi ve önerilen antrenmanları gösteren birleşik rapor.',
    'projects.spotter.technicalDecisions': 'Flutter, tek kod tabanından iOS ve Android için çapraz platform dağıtımı sağlar. Firebase, kimlik doğrulama ve kullanıcı verisi depolama için kullanılır.',
    'projects.spotter.whereItStands':      'Çekirdek UI ve onboarding akışı tamamlandı. Backend entegrasyonu devam ediyor. Proje portföyün bir parçası olarak aktif geliştirmede.',

    // Project detail bodies — Reverse Swing
    'projects.reverse-swing.problem':            'Çevrimiçi kriket içerikleri iki uçta yaşar: hızı önceliklendiren haber toplayıcıları ve saatler içinde kaybolan sosyal medya konuları. Uzun formatlı kriket yazarlığı için bir boşluk var.',
    'projects.reverse-swing.solution':           'Reverse Swing, kriket içeriği için özel olarak oluşturulmuş bir yayın platformudur.\n\nHalka Açık Site, makale kartları, kategori filtreleme ve oyuncu profilleri ile sinematik koyu temalı okuma deneyimi sunar.\n\nYönetici Paneli, makale oluşturma ve analitik ile içerik yönetimi sağlar.',
    'projects.reverse-swing.technicalDecisions': 'Supabase içerik depolama ve gerçek zamanlı analizleri yönetir. Mimari bilerek basit tutuldu — anında yayın iş akışı için içerikler istek anında Supabase\'den getirilir.',
    'projects.reverse-swing.whereItStands':      'Yönetici paneli ve halka açık okuma deneyimi tamamlanmış olarak tam işlevsel. Özel alan adı kurulumunu ve içerik hazırlığını bekliyor.',

    // Services
    'services.eyebrow': 'Nerede yardımcı oluyorum',
    'services.header':  'Hizmetler',
    'services.01.title': 'Özel Web Platformları',
    'services.01.desc':  'Ekibinizin gerçekten nasıl çalıştığına göre inşa edilir, böylece insanlar yazılımın etrafında dolaşmak yerine onunla çalışır.',
    'services.02.title': 'Yapay Zeka & İş Akışı Otomasyonu',
    'services.02.desc':  'Araçlarınız arasındaki manuel adımlar ortadan kalkar ve öyle kalır.',
    'services.03.title': 'E-Ticaret Çözümleri',
    'services.03.desc':  'Vitriner, açılış sayfaları ve portföy siteleri hızlıca lansmanlanır, çalışınca yeniden yapılandırılması gerekmeyen bir temelde.',
    'services.04.title': 'İş İşletim Sistemleri',
    'services.04.subtitle': 'SaaS, CRM & ERP platformları',
    'services.04.desc':  'Verilerinizi beş yer yerine tek bir yere koyan SaaS, CRM ve ERP platformları.',

    // About
    'about.header':  'Darboğaz hiçbir zaman talep değildir. Altındaki sistemdir.',
    'about.p1':      'Çalıştığım her işletme aynı ana ulaştı: büyüme, onu bir arada tutan sistemleri geride bıraktı. Kağıtta tutulan bir takvim. Yüzlerce sohbet dizisinde takip edilen başvurular. Kimsenin tam güvenmediği veriler. Bunların hiçbiri üstüne yığılacak başka bir araç gerektirmiyordu — işletmenin gerçekte nasıl çalıştığı etrafında tasarlanmış bir sisteme ihtiyaç vardı.',
    'about.p2':      'İyi bir sistem, yalnızca bir kez inşa etmeniz gereken ve size geri ödemeye devam eden bir kaldıraçtır. Bu işin özü: gerçek operasyonel acıya uygulanan bilgisayar mühendisliği ve ürün düşüncesi, ilk görüşmeden son dağıtıma kadar tek bir sorumlu kişi. Devir teslim yok, hesap yöneticisi yok, işinizi sıfırdan öğrenen kimse yok.',

    // FAQ
    'faq.eyebrow': 'Sormadan önce',
    'faq.header':  'SSS',
    'faq.q1': 'Hangi hizmetleri sunuyorsunuz?',
    'faq.a1': 'Özel web platformları, yapay zeka ve iş akışı otomasyonu, e-ticaret ve SaaS, CRM ile ERP sistemleri, işletmenin gerçekten daha iyi çalışması için ne gerekiyorsa.',
    'faq.q2': 'Tipik bir proje ne kadar sürer?',
    'faq.a2': 'Her zaman kapsama bağlıdır. Odaklı bir platform haftalarda tamamlanabilir, tam bir işletim sistemi daha uzun sürer. Zaman çizelgeleri iş başlamadan önce sabitlenir, asla süreç içinde tahmin edilmez.',
    'faq.q3': 'Fiyat teklifi nasıl alabilirim?',
    'faq.a3': 'Her proje kendi koşullarına göre kapsamlandırılır, asla şablondan değil. Ücretsiz bir keşif görüşmesi size hızlıca net bir rakam verir.',
    'faq.a3.linkText': 'Buradan rezervasyon yapın.',
    'faq.q4': 'Ödeme süreci nasıl işliyor?',
    'faq.a4': 'Başlamak için yarısı peşin, teslimatta diğer yarısı. Basit ve her iki tarafı zaman çizelgesine karşı hesap verebilir tutar.',
    'faq.q5': 'Lansmanın ardından destek sunuyor musunuz?',
    'faq.a5': 'Her lansman ile birlikte iki haftalık destek ücretsiz olarak dahildir. Sonrasında süregelen destek, sabit bir ücret değil, projeye göre fiyatlandırılmış aylık bazda sağlanır.',

    // Footer
    'contact.header':    'Görüşelim',
    'contact.cta':       'Ücretsiz keşif görüşmesi planla',
    'footer.copy':       '© 2026 Omar Zaghloul',

    // 404
    '404.heading':    'Bu sayfa mevcut değil.',
    '404.body':       'Bağlantı bozuk olabilir veya sayfa taşınmış olabilir. Her halükarda burada bir şey yok.',
    '404.cta.home':   'Ana sayfaya dön',
    '404.cta.call':   'Keşif görüşmesi planla',
  },

  ar: {
    // Navbar
    'nav.work':    'الأعمال',
    'nav.services':'الخدمات',
    'nav.about':   'عنّي',
    'nav.faq':     'الأسئلة',
    'nav.contact': 'تواصل',
    'nav.back':    'رجوع ←',

    // Hero
    'hero.eyebrow': 'مهندس منتجات تقنية',
    'hero.name':    'عمر زغلول',
    'hero.subhead': 'أنظمة ومنصات وأتمتة مخصّصة، مصمَّمة لتحويل الفوضى التشغيلية إلى رافعة نمو حقيقية.',
    'hero.cta.primary':   'احجز استشارة تعريفية مجانية',
    'hero.cta.secondary': 'تصفح الأعمال',

    // Work Section
    'work.eyebrow': 'على أرض الواقع',
    'work.header':  'أعمال مختارة',

    // Project cards
    'projects.oncoflow.category':      'رعاية صحية / SaaS',
    'projects.oncoflow.caption':       'استبدل التتبع الورقي بلوحة تحكم واحدة لدورات علاج الأورام.',
    'projects.altinkapi.category':     'سفر / تجارة إلكترونية',
    'projects.altinkapi.caption':      'منصة حجز ثنائية اللغة للحج والعمرة، تعرض التوفر لحظة بلحظة.',
    'projects.educounsellor.category': 'تكنولوجيا التعليم / SaaS',
    'projects.educounsellor.caption':  'لوحة تحكم بهويتك الخاصة تُنهي الفوضى على واتساب في وكالات التقديم.',
    'projects.spotter.category':       'صحة ولياقة / موبايل',
    'projects.spotter.caption':        'تطبيق واحد يحلّ محل أربعة للتتبع والتدريب والتغذية.',
    'projects.reverse-swing.category': 'رياضة / محتوى',
    'projects.reverse-swing.caption':  'كتابة معمّقة عن الكريكيت، مدعومة بنظام إدارة محتوى مُخصّص.',

    // Project subtitle
    'projects.oncoflow.subtitle':      'منصة طبية',
    'projects.altinkapi.subtitle':     'منصة حجز الحج والعمرة',
    'projects.educounsellor.subtitle': 'لوحة إدارة طلبات الطلاب تحت علامة بيضاء',
    'projects.spotter.subtitle':       'مساعد التغذية واللياقة المدعوم بالذكاء الاصطناعي',
    'projects.reverse-swing.subtitle': 'منصة تحليل الكريكيت والقصص',

    // Project detail labels
    'project.problem':            'المشكلة',
    'project.solution':           'الحل',
    'project.technicalDecisions': 'القرارات التقنية',
    'project.status':             'أين يتميز المشروع',
    'project.next':               'المشروع التالي',
    'project.year':               'السنة',
    'project.role':               'الدور',
    'project.category':           'الفئة',
    'project.techstack':          'التقنيات المستخدمة',

    // Project detail bodies — OncoFlow
    'projects.oncoflow.problem':            'يتتبع صيادلة الأورام دورات العلاج الكيميائي ونتائج المختبر والتفاعلات الدوائية وجداول المرضى، غالباً عبر جداول بيانات منفصلة وأوراق ورقية وأنظمة مستشفيات لا تتواصل مع بعضها. القيمة المخبرية التي تفوت أو تعارض في جدول العلاج ليست مجرد ضعف في الكفاءة، بل خطر على سلامة المريض.',
    'projects.oncoflow.solution':           'OncoFlow لوحة تحكم سريرية على الويب مصممة خصيصاً لصيادلة الأورام. تُركّز إدارة المرضى في ثلاثة وحدات أساسية:\n\nتقويم رئيسي يرسم دورات العلاج الكيميائي والأدوية التمهيدية ومراجعات المختبر لكل مريض على خط زمني واحد.\n\nمتتبع قيم المختبر منظم حسب الفئة السريرية مع اتجاهات تاريخية وعتبات تستدعي التنبيه.\n\nسجل المرضى مع البحث والوسوم البروتوكولية وتتبع الإدخال.',
    'projects.oncoflow.technicalDecisions': 'Next.js مع Supabase للمصادقة وقاعدة البيانات والأمان على مستوى الصفوف. التقويم يستخدم تطبيقاً مخصصاً لترميز منطق دورات العلاج مباشرة في طبقة الجدولة.',
    'projects.oncoflow.whereItStands':      'بُني بالتعاون مع خريج صيدلة سريرية كنموذج أولي عملي. يُعدّ حالياً للعرض على أقسام الأورام كبديل خفيف الوزن لأنظمة معلومات المستشفيات الضخمة.',

    // Project detail bodies — Altınkapı
    'projects.altinkapi.problem':            'Altınkapı شركة سياحية متخصصة في رحلات الحج والعمرة. كانت عملية الحجز يدوية بالكامل، من استفسارات عبر الهاتف وواتساب، وتفاصيل الباقات تُشارك كملفات PDF، ولا توجد وسيلة للعملاء لمقارنة الخيارات أو التحقق من التوافر.',
    'projects.altinkapi.solution':           'منصة حجز ثنائية اللغة تتيح للعملاء تصفح باقات الحج والعمرة والتصفية حسب مدينة المغادرة ودرجة الخدمة والتاريخ، مع عرض تسعير شفاف مع بنود مفصّلة.\n\nنظام عرض الباقات يفصّل كل عرض بتقييمات قرب الفنادق وتوزيع الليالي بين مكة والمدينة ومستويات الخدمة.',
    'projects.altinkapi.technicalDecisions': 'Next.js مع Firebase لبساطة الاستضافة وقاعدة البيانات الفورية. التدويل طُبّق على مستوى التوجيه لدعم بنية RTL الجاهزة للتوسع نحو العربية.',
    'projects.altinkapi.whereItStands':      'تم التسليم والمنصة تعمل. نشاط العميل التجاري متوقف حالياً لأسباب غير متعلقة بالمنصة. البنية التحتية جاهزة للنشر.',

    // Project detail bodies — EduCounsellor
    'projects.educounsellor.problem':            'وكالات الإرشاد التعليمي تدير عملها بالكامل عبر واتساب. عندما تتجاوز الوكالة 20-30 طالباً نشطاً، تنهار هذه الطريقة: المستندات تضيع، المواعيد تفوت، ولا توجد آثار مراجعة.',
    'projects.educounsellor.solution':           'لوحة تحكم SaaS تحت علامة بيضاء مصممة لتناسب سير عمل أي وكالة دون إجبارها على تغيير أسلوب عملها.\n\nلوحة المشرف تمنح المديرين عرضاً شاملاً لجميع الطلبات مع تتبع الحالة وحسابات العمولة.\n\nبوابة الطالب تمنح كل متقدم لوحة تحكم شخصية لمتابعة الطلبات ورفع المستندات.',
    'projects.educounsellor.technicalDecisions': 'أمان Supabase على مستوى الصفوف يدير تعدد المستأجرين. خزينة المستندات تستخدم Supabase Storage مع روابط موقّعة للوصول الآمن.',
    'projects.educounsellor.whereItStands':      'مكتمل المزايا وجاهز للنشر. يبحث حالياً عن أول شريك وكالة للنشر التجريبي.',

    // Project detail bodies — Spotter
    'projects.spotter.problem':            'معظم تطبيقات اللياقة تجبر المستخدمين على مسار واحد: إما تتبع التمارين أو تسجيل التغذية. المستخدمون الذين يريدون رؤية شاملة لصحتهم ينتهي بهم الأمر بالتنقل بين 3-4 تطبيقات منفصلة.',
    'projects.spotter.solution':           'Spotter تطبيق موبايل مصمم كمساعد لياقة على سطح واحد.\n\nاستكشاف التمارين: فئات تمارين منتقاة مع تقييمات الصعوبة وإرشاد بالفيديو.\n\nتتبع التغذية والترطيب: مراقبة السعرات اليومية وتتبع استهلاك الماء.\n\nلوحة تحكم شخصية: تقرير يومي موحد.',
    'projects.spotter.technicalDecisions': 'Flutter للنشر عبر المنصات من قاعدة كود واحدة. Firebase للمصادقة وتخزين بيانات المستخدم.',
    'projects.spotter.whereItStands':      'واجهة المستخدم الأساسية وتدفق الإعداد مكتملان. تكامل الخلفية وخوارزمية التوصية قيد التطوير.',

    // Project detail bodies — Reverse Swing
    'projects.reverse-swing.problem':            'محتوى الكريكيت على الإنترنت يعيش في طرفين: مجمعات الأخبار التي تُعطي الأولوية للسرعة، ومحادثات وسائل التواصل الاجتماعي التي تختفي في ساعات. يوجد فراغ للكتابة المعمّقة عن الكريكيت.',
    'projects.reverse-swing.solution':           'Reverse Swing منصة نشر مخصصة لمحتوى الكريكيت.\n\nالموقع العام يقدم تجربة قراءة سينمائية بنمط داكن مع بطاقات المقالات وتصفية الفئات.\n\nلوحة المشرف توفر واجهة إدارة محتوى مع إنشاء المقالات وتحليلات لكل مقال.',
    'projects.reverse-swing.technicalDecisions': 'Supabase يتولى تخزين المحتوى والمصادقة والتحليلات. البنية بسيطة عمداً، المقالات تُجلب عند الطلب من Supabase.',
    'projects.reverse-swing.whereItStands':      'يعمل بكامل طاقته. في مرحلة ما قبل الإطلاق، بانتظار إعداد النطاق المخصص وبذر المحتوى الأولي.',

    // Services
    'services.eyebrow': 'أين أساعد',
    'services.header':  'الخدمات',
    'services.01.title': 'منصات ويب مخصصة',
    'services.01.desc':  'مبنية حول طريقة عمل فريقك فعلياً، ليصبح البرنامج أداة تُسهّل عملهم لا عائقاً يتحايلون عليه.',
    'services.02.title': 'ذكاء اصطناعي وأتمتة العمل',
    'services.02.desc':  'الخطوات اليدوية بين أدواتك تختفي، إلى الأبد.',
    'services.03.title': 'حلول التجارة الإلكترونية',
    'services.03.desc':  'متاجر إلكترونية وصفحات هبوط ومواقع بورتفوليو تُطلق بسرعة، على بنية لا تحتاج لإعادة بناء بمجرد أن تنجح.',
    'services.04.title': 'أنظمة تشغيل الأعمال',
    'services.04.subtitle': 'منصات SaaS وCRM وERP',
    'services.04.desc':  'منصات SaaS وCRM وERP تضع بياناتك في مكان واحد بدلاً من خمسة.',

    // About
    'about.header':  'المشكلة لم تكن يوماً في الطلب، بل في النظام الذي يعمل خلفه.',
    'about.p1':      'كل شركة تعاملت معها وصلت إلى اللحظة نفسها: نموها تجاوز قدرة الأنظمة التي تسيّره. جدول مواعيد محفوظ على الورق، طلبات تضيع بين مئات محادثات الدردشة، بيانات لا يثق بها أحد بالكامل. الحل لم يكن أداة جديدة تُضاف فوق الفوضى، بل نظام واحد مبني حول طريقة عمل الشركة الحقيقية.',
    'about.p2':      'النظام الجيد رافعة تبنيها مرة واحدة وتستمر في رد الفائدة عليك. هذا هو العمل: هندسة حاسوبية وتفكير منتجات، موجّهان لحل مشاكل تشغيلية حقيقية، بمسؤولية شخص واحد من أول مكالمة إلى آخر خطوة في النشر. بدون تسليم بين أطراف متعددة، بدون مدير حسابات، وبدون حاجة لأي شخص يتعلم تفاصيل شغلك من الصفر.',

    // FAQ
    'faq.eyebrow': 'قبل أن تسأل',
    'faq.header':  'الأسئلة الشائعة',
    'faq.q1': 'ما الخدمات التي تقدمها؟',
    'faq.a1': 'منصات ويب مخصصة، أتمتة بالذكاء الاصطناعي وسير العمل، التجارة الإلكترونية، وأنظمة SaaS وCRM وERP، كل ما تحتاجه شركتك لتعمل بكفاءة أكبر.',
    'faq.q2': 'كم يستغرق المشروع عادةً؟',
    'faq.a2': 'يعتمد ذلك على حجم المشروع. منصة بسيطة قد تكون جاهزة خلال أسابيع، بينما نظام تشغيل متكامل يحتاج وقتاً أطول. الجدول الزمني يُحدد قبل بدء العمل، لا يُخمَّن في منتصفه.',
    'faq.q3': 'كيف أحصل على تقدير للسعر؟',
    'faq.a3': 'نطاق كل مشروع يُحدد حسب احتياجاته الخاصة، وليس من قالب جاهز. استشارة مجانية تعطيك رقماً واضحاً بسرعة.',
    'faq.a3.linkText': 'احجزها من هنا.',
    'faq.q4': 'كيف تسير عملية الدفع؟',
    'faq.a4': 'النصف مقدماً للبدء، والنصف الآخر عند التسليم. بسيط، ويُبقي كلا الطرفين ملتزمَين بالجدول الزمني.',
    'faq.q5': 'هل تقدم دعماً بعد الإطلاق؟',
    'faq.a5': 'أسبوعان من الدعم مدرجان مع كل إطلاق مجاناً. بعد ذلك، الدعم المستمر شهري بسعر يُحدد حسب المشروع، ليس بسعر ثابت.',

    // Footer
    'contact.header':    'لنتحدث',
    'contact.cta':       'احجز استشارة تعريفية مجانية',
    'footer.copy':       '© 2026 عمر زغلول',

    // 404
    '404.heading':    'هذه الصفحة غير موجودة.',
    '404.body':       'يمكن أن يكون الرابط غير صحيح، أو أن الصفحة أُزيلت. في الحالتين، لا يوجد هنا شيء.',
    '404.cta.home':   'العودة للصفحة الرئيسية',
    '404.cta.call':   'احجز استشارة تعريفية مجانية',
  },
};
