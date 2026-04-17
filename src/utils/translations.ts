export const translations: Record<string, Record<string, string>> = {
  en: {
    // Navbar
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.back': '← Back',
    'nav.logo': 'OZ',

    // Hero
    'hero.name': 'Omar <span class="relative inline-block whitespace-nowrap">Zaghloul<span class="absolute bottom-2 left-0 -z-10 h-[0.14em] w-full bg-accent/80"></span></span>',
    'hero.position': 'Product Engineer & AI Automation Specialist',
    'hero.desc': 'Full-Stack Developer & Technical Founder at RuneX',

    // About Section
    'about.header': 'About',
    'about.subheader': 'Building systems that grow with your business — not against it.',
    'about.p1': 'Most businesses hit a ceiling not because demand slows down, but because their internal systems can\'t keep up. Operations scattered across WhatsApp threads, spreadsheets, and disconnected tools. Data that lives in five places but is accurate in none of them. Teams spending hours on work that should take minutes. I build the platforms that permanently replace that friction.',
    'about.p2': 'Through <span class="font-semibold text-accent">RuneX</span>, I partner with businesses to turn operational bottlenecks into scalable, automated infrastructure. My work spans four areas:',
    
    'about.block1.title': 'Custom Web & Business Platforms',
    'about.block1.desc': 'Centralized dashboards and portals where your team manages operations and your clients track their own progress in real time. From oncology clinics coordinating treatment cycles to education agencies managing hundreds of student applications across universities — each platform is built around how your business actually runs, not how a generic tool thinks it should.',

    'about.block2.title': 'Mobile Applications',
    'about.block2.desc': 'Cross-platform apps that put your service directly in your users\' hands. From AI-powered fitness companions with integrated chatbot coaching to consumer-facing booking experiences, I build for both iOS and Android from a single codebase without compromising on feel.',

    'about.block3.title': 'AI & Workflow Automation',
    'about.block3.desc': 'If a process is repetitive, it should be automated. I design intelligent workflows that connect your existing tools, eliminate manual data transfer, and surface insights your team would otherwise spend hours compiling. Auto-generated treatment schedules, smart document routing, pipeline triggers that fire without human intervention — the goal is always to remove the busywork so your team focuses on growth.',

    'about.block4.title': 'Rapid Deployment & E-Commerce',
    'about.block4.desc': 'Not every project needs a six-month build cycle. For businesses that need to move fast — launching a booking platform, standing up a content-driven site, deploying an e-commerce storefront — I match the right technology to the timeline, getting you to market quickly with architecture that won\'t need to be thrown away when you scale.',

    'about.closing': 'Technology only matters if it drives your business forward. I bring a background in computer engineering and product management to every engagement — which means you\'re not just getting a developer who writes code to spec. You\'re getting an architect who understands the business objective and builds the exact technical foundation to execute it. One point of contact. No handoffs. No rotating juniors.',

    // Selected Work
    'work.header': 'Selected Work',

    // Projects Mapping (List)
    'projects.oncoflow.subtitle': 'Oncology Clinical Pharmacist Platform',
    'projects.oncoflow.category': 'Healthcare / SaaS',
    'projects.altinkapi.subtitle': 'Hajj & Umrah Booking Platform',
    'projects.altinkapi.category': 'Travel / E-Commerce',
    'projects.educounsellor.subtitle': 'White-Label Student Application Management Dashboard',
    'projects.educounsellor.category': 'EdTech / SaaS',
    'projects.spotter.subtitle': 'AI-Powered Nutrition & Fitness Companion',
    'projects.spotter.category': 'Health & Fitness / Mobile',
    'projects.reverse-swing.subtitle': 'Cricket Analysis & Stories Platform',
    'projects.reverse-swing.category': 'Sports / Content Platform',

    // Project Details pages
    'project.problem': 'The Problem',
    'project.solution': 'The Solution',
    'project.technicalDecisions': 'Technical Decisions',
    'project.status': 'Where it Stands',
    'project.next': 'Next Project',
    'project.year': 'Year',
    'project.role': 'Role',
    'project.category': 'Category',
    'project.techstack': 'Tech Stack',

    // Project Details Bodies - OncoFlow
    'projects.oncoflow.problem': 'Oncology pharmacists track chemotherapy cycles, lab results, drug interactions, and patient timelines — often across disconnected spreadsheets, paper forms, and hospital systems that don\'t talk to each other. A missed lab value or a scheduling conflict in a treatment cycle isn\'t just inefficiency — it\'s a patient safety risk. The existing workflow depends on manual cross-referencing and institutional memory rather than structured, accessible data.',
    'projects.oncoflow.solution': 'OncoFlow is a web-based clinical dashboard purpose-built for oncology pharmacists. It centralizes patient management into three core modules:\n\nA Master Calendar that maps every patient\'s chemotherapy cycles, pre-medications, lab reviews, and follow-ups onto a single timeline — color-coded by event type, filterable by protocol. When a pharmacist assigns a treatment protocol to a patient, the system automatically generates the full cycle schedule, associated medications, expected symptoms, and treatment timeline — eliminating manual calendar entry and reducing scheduling errors.\n\nA Lab Values Tracker organized by clinical category (hematology, renal, hepatic, coagulation, electrolytes) with historical trending and flag-worthy thresholds, so pharmacists can assess treatment readiness at a glance rather than digging through paper records.\n\nA Patient Registry with search, protocol tagging (CHOP, FOLFOX, etc.), and admission tracking — giving pharmacists a structured, filterable view of their active caseload instead of a mental list.\n\nThe platform also generates printable patient reports and lab summaries — bridging the gap between the digital dashboard and the physical documentation that hospitals still require.',
    'projects.oncoflow.technicalDecisions': 'The stack is Next.js with Supabase for auth, database, and row-level security — chosen for rapid prototyping speed without sacrificing a real permission model. The calendar uses a custom implementation rather than a third-party library, allowing treatment cycle logic (21-day CHOP cycles, dose-day mapping) to be encoded directly into the scheduling layer. Supabase\'s real-time subscriptions keep the dashboard current across concurrent sessions.',
    'projects.oncoflow.whereItStands': 'Built in collaboration with a clinical pharmacy graduate as a working prototype. Currently being refined for proposal to oncology departments and private clinics as a lightweight alternative to full-scale hospital information systems.',
    
    // Project Details Bodies - Altınkapı
    'projects.altinkapi.problem': 'Altınkapı is a travel company specializing in Hajj and Umrah pilgrimage tours, serving clients across multiple countries and languages. Their booking process was entirely manual — inquiries via phone and WhatsApp, package details shared as PDFs, and no way for customers to compare options, check availability, or self-serve. For a business handling high-value, time-sensitive religious travel, the lack of a digital storefront meant lost conversions and an overwhelming operational load on a small team.',
    'projects.altinkapi.solution': 'A bilingual (English/Turkish) booking platform that lets customers browse curated Hajj and Umrah packages, filter by departure city, class of service, and date, and view transparent pricing with itemized inclusions (flights, visa, hotel tiers, guided tours).\n\nThe package display system breaks down each offering with hotel proximity ratings, night splits between Makkah and Medina, and service tiers — giving customers the information density they need to make a decision without a phone call.\n\nThe platform includes dark mode, a custom package request flow for non-standard itineraries, and an admin backend for the operator to manage package inventory, pricing, and seasonal promotions.',
    'projects.altinkapi.technicalDecisions': 'Next.js with Firebase was chosen for its hosting simplicity and real-time database — the client needed to update package availability and pricing frequently without developer intervention. Internationalization was implemented at the routing level (not just string replacement) to support proper RTL-ready architecture for potential Arabic expansion. The UI uses a gold-and-black palette drawn from the client\'s existing brand identity.',
    'projects.altinkapi.whereItStands': 'Delivered and operational. The client\'s business operations are currently paused for reasons unrelated to the platform. The codebase and infrastructure remain deployment-ready.',

    // Project Details Bodies - EduCounsellor
    'projects.educounsellor.problem': 'Educational counseling agencies — businesses that help students apply to universities abroad — typically manage their entire workflow over WhatsApp. Student documents (transcripts, recommendation letters, visa paperwork) are shared as chat attachments. Application statuses live in the counselor\'s memory or a messy spreadsheet. Commission tracking from partner universities is manual. When an agency scales past 20–30 active students, this workflow collapses: documents get lost in chat history, deadlines are missed, and there\'s no audit trail.',
    'projects.educounsellor.solution': 'A white-label SaaS dashboard designed to slot into any counseling agency\'s workflow without forcing them to change how they operate — just where they operate.\n\nThe Admin Dashboard gives agency managers a master view of all applications across all counselors, with status tracking (Preparing → Submitted → Under Review → Accepted), commission calculations, student assignment, and CSV export for reporting.\n\nThe Student Portal gives each applicant a personal dashboard to view their application statuses, upload required documents (with type classification and size validation), and track deadlines — eliminating the need to ask their counselor for updates over chat.\n\nThe platform is white-label by design: agency name, branding, and domain are configurable per deployment, so each organization presents it as their own tool.',
    'projects.educounsellor.technicalDecisions': 'Supabase row-level security handles multi-tenancy — each agency\'s data is isolated at the database level, not just the application layer. The document vault uses Supabase Storage with signed URLs for secure, time-limited access. The system is designed for independent deployment per agency rather than a shared multi-tenant instance, keeping data sovereignty simple and avoiding the compliance complexity of shared infrastructure.',
    'projects.educounsellor.whereItStands': 'Feature-complete and deployment-ready. Currently seeking a first agency partner for pilot deployment and feedback iteration.',

    // Project Details Bodies - Spotter
    'projects.spotter.problem': 'Most fitness apps force users into one lane: either workout tracking or nutrition logging, rarely both in a way that feels integrated. Users who want a holistic view of their health — calories consumed vs. burned, workout recommendations based on their body metrics, hydration tracking, sleep patterns — end up juggling 3–4 separate apps. For casual fitness users (not bodybuilders or athletes), this fragmentation is the barrier to consistency.',
    'projects.spotter.solution': 'Spotter is a mobile application designed as a single-surface fitness companion. The onboarding flow collects body metrics (age, weight, goals) and uses them to generate a personalized dashboard that ties together:\n\nWorkout Discovery — curated exercise categories (fat burning, strength, flexibility) with difficulty ratings and video guidance, plus a challenge system to maintain engagement.\n\nNutrition & Hydration Tracking — daily calorie monitoring, water intake tracking with visual progress, and macro breakdowns.\n\nPersonal Dashboard — a unified daily report showing active calories, water consumption, sleep quality, and recommended workouts, all derived from the user\'s profile data.\n\nAI Chat Assistant — a built-in conversational chatbot that answers fitness and nutrition questions contextually, using the user\'s profile data and activity history to give personalized guidance rather than generic advice.\n\nThe UI follows a dark-mode-first mobile design language with high-contrast green accents for actionability — \'Get Started,\' progress bars, and achievement markers all use the accent color to guide attention.',
    'projects.spotter.technicalDecisions': 'Flutter was chosen for cross-platform deployment from a single codebase — critical for a startup with limited resources targeting both iOS and Android. Firebase provides auth, user data storage, and the foundation for future AI recommendation features (workout personalization based on usage patterns and progress data).',
    'projects.spotter.whereItStands': 'Core UI and onboarding flow are built. Backend integration and AI recommendation engine are in progress. The startup behind Spotter is currently paused; the project remains in active development as part of the portfolio.',

    // Project Details Bodies - Reverse Swing
    'projects.reverse-swing.problem': 'Cricket content online lives in two extremes: mass-market news aggregators (ESPNcricinfo, Cricbuzz) that prioritize speed and scores, and social media threads that disappear in hours. There\'s a gap for long-form cricket writing — tactical analysis, player career retrospectives, bowling mechanics breakdowns — presented in a reading experience that respects both the writer and the reader. Medium works but offers no sport-specific structure. WordPress works but looks like 2012.',
    'projects.reverse-swing.solution': 'Reverse Swing is a purpose-built publishing platform for cricket content. It combines a public-facing article site with a custom admin dashboard for content management.\n\nThe Public Site features a cinematic dark-themed reading experience with article cards, category filtering (Stories & Analysis), player profiles with contextual statistics, and a mobile-responsive layout designed for long reading sessions.\n\nThe Admin Dashboard provides a content management interface with article creation, draft/publish workflow, media file management, and per-article analytics (view tracking over time). It\'s built as a lightweight CMS rather than a bloated general-purpose solution — every feature exists because cricket writers need it.',
    'projects.reverse-swing.technicalDecisions': 'Supabase handles content storage, auth, and real-time analytics. The architecture is intentionally simple — no static site generation complexity, no build-time content compilation. Articles are fetched at request time from Supabase, keeping the publishing workflow instant (write → publish → live) without waiting for rebuilds. Image optimization is handled at the edge via Next.js image component and Vercel\'s CDN.',
    'projects.reverse-swing.whereItStands': 'Fully functional with the admin dashboard and public reading experience complete. Currently in pre-launch — pending custom domain setup and initial content seeding before public release.',

    // Contact / Footer
    'contact.title': 'Let\'s Talk',
    'contact.desc': 'Have a project in mind? Let\'s build something together.',
    'footer.copy': '© 2026 Omar Zaghloul / RuneX'
  },
  tr: {
    // Navbar
    'nav.work': 'Projeler',
    'nav.about': 'Hakkımda',
    'nav.contact': 'İletişim',
    'nav.resume': 'Özgeçmiş',
    'nav.back': '← Geri',
    'nav.logo': 'OZ',

    // Hero
    'hero.name': 'Omar <span class="relative inline-block whitespace-nowrap">Zaghloul<span class="absolute bottom-2 left-0 -z-10 h-[0.14em] w-full bg-accent/80"></span></span>',
    'hero.position': 'Ürün Mühendisi & Yapay Zeka Otomasyon Uzmanı',
    'hero.desc': 'Full-Stack Geliştirici & RuneX Teknik Kurucusu',

    // About Section
    'about.header': 'Hakkımda',
    'about.subheader': 'İşletmenizle birlikte büyüyen sistemler inşa ediyorum — onu kısıtlayacak şekilde değil.',
    'about.p1': 'Çoğu işletme, talep azaldığı için değil, iç sistemleri yetişemediği için büyüme sınırına takılır. WhatsApp gruplarına, elektronik tablolara ve birbirinden kopuk araçlara dağılmış operasyonlar. Beş farklı yerde tutulan ama hiçbirinde doğru olmayan veriler. Dakikalar alması gereken işlere saatlerini harcayan ekipler. Ben bu sürtünmeyi kalıcı olarak ortadan kaldıran platformları inşa ediyorum.',
    'about.p2': 'RuneX\'i tam da bunun için kurdum. İşletmelerle iş birliği yaparak operasyonel darboğazları ölçeklenebilir, otomatik altyapıya dönüştürüyorum. Çalışmalarım dört alanda yoğunlaşıyor:',
    
    'about.block1.title': 'Özel Web & İş Platformları',
    'about.block1.desc': 'Ekibinizin operasyonları yönettiği ve müşterilerinizin kendi ilerlemelerini gerçek zamanlı takip ettiği merkezi paneller ve portallar. Tedavi döngülerini koordine eden onkoloji kliniklerinden, yüzlerce öğrenci başvurusunu yöneten eğitim ajanslarına kadar — her biri işletmenizin gerçekte nasıl çalıştığına göre inşa edilir, jenerik bir aracın düşündüğü gibi değil.',

    'about.block2.title': 'Mobil Uygulamalar',
    'about.block2.desc': 'Hizmetinizi doğrudan kullanıcılarınızın eline veren çapraz platform uygulamaları. Entegre chatbot koçluğuna sahip yapay zeka destekli fitness asistanlarından tüketici odaklı rezervasyon deneyimlerine kadar, tek bir kod tabanından hem iOS hem de Android için kullanıcı deneyiminden ödün vermeden geliştiriyorum.',

    'about.block3.title': 'Yapay Zeka & İş Akışı Otomasyonu',
    'about.block3.desc': 'Tekrarlayan her süreç otomatikleştirilmelidir. Mevcut araçlarınızı birbirine bağlayan, manuel veri transferini ortadan kaldıran ve ekibinizin derlemek için saatler harcayacağı içgörüleri ortaya çıkaran akıllı iş akışları tasarlıyorum. Otomatik oluşturulan tedavi takvimleri, akıllı belge yönlendirme, insan müdahalesi gerektirmeyen tetikleyiciler — hedef her zaman angaryayı ortadan kaldırıp ekibinizin büyümeye odaklanmasını sağlamak.',

    'about.block4.title': 'Hızlı Lansman & E-Ticaret',
    'about.block4.desc': 'Her proje altı aylık bir geliştirme döngüsü gerektirmez. Hızlı hareket etmesi gereken işletmeler için — bir rezervasyon platformu kurmak, içerik odaklı bir site oluşturmak, bir e-ticaret vitrini açmak — teknolojiyi zaman çizelgenize uygun şekilde eşleştirip, büyüdüğünüzde çöpe atılmayacak bir altyapıyla sizi hızla pazara taşıyorum.',

    'about.closing': 'Teknoloji ancak işinizi ileriye taşıyorsa anlam ifade eder. Her projeye bilgisayar mühendisliği ve ürün yönetimi geçmişimi taşıyorum — bu da sadece şartnameye göre kod yazan bir geliştirici değil, iş hedefini anlayan ve onu hayata geçirecek teknik altyapıyı kuran bir mimar aldığınız anlamına gelir. Tek muhatap. Devir teslim yok. Sürekli değişen deneyimsiz (junior) çalışanlar yok.',

    // Selected Work
    'work.header': 'Seçili Projeler',

    // Projects Mapping (List)
    'projects.oncoflow.subtitle': 'Onkoloji Klinik Eczacı Platformu',
    'projects.oncoflow.category': 'Sağlık / SaaS',
    'projects.altinkapi.subtitle': 'Hac & Umre Rezervasyon Platformu',
    'projects.altinkapi.category': 'Seyahat / E-Ticaret',
    'projects.educounsellor.subtitle': 'White-Label Öğrenci Başvuru Yönetim Paneli',
    'projects.educounsellor.category': 'Eğitim Teknolojileri / SaaS',
    'projects.spotter.subtitle': 'Yapay Zeka Destekli Beslenme & Fitness Asistanı',
    'projects.spotter.category': 'Sağlık & Fitness / Mobil',
    'projects.reverse-swing.subtitle': 'Kriket Analiz & Yazı Platformu',
    'projects.reverse-swing.category': 'Spor / İçerik Platformu',

    // Project Details pages
    'project.problem': 'Problem',
    'project.solution': 'Çözüm',
    'project.technicalDecisions': 'Teknik Kararlar',
    'project.status': 'Mevcut Durum',
    'project.next': 'Sonraki Proje',
    'project.year': 'Yıl',
    'project.role': 'Rol',
    'project.category': 'Kategori',
    'project.techstack': 'Teknoloji',

    // Project Details Bodies - OncoFlow
    'projects.oncoflow.problem': 'Onkoloji eczacıları kemoterapi döngülerini, laboratuvar sonuçlarını, ilaç etkileşimlerini ve hasta zaman çizelgelerini takip ederler — ki bu genellikle birbirinden bağımsız elektronik tablolar, kağıt formlar ve birbiriyle konuşmayan hastane sistemleri üzerinden yapılır. Tedavi döngüsünde gözden kaçan bir laboratuvar değeri veya zamanlama çakışması sadece verimsizlik değildir — hastanın güvenliği için bir risktir. Mevcut iş akışı yapılandırılmış, erişilebilir verilerden ziyade manuel çapraz referanslara ve kurumsal hafızaya dayanmaktadır.',
    'projects.oncoflow.solution': 'OncoFlow, onkoloji eczacıları için özel olarak tasarlanmış web tabanlı bir klinik gösterge panelidir. Hasta yönetimini üç temel modülde merkezileştirir:\n\nHer hastanın kemoterapi döngülerini, pre-medikasyonlarını, laboratuvar incelemelerini ve takiplerini tek bir zaman çizelgesi üzerinde haritalandıran, olay türüne göre renk kodlu ve protokole göre filtrelenebilir bir Ana Takvim. Bir eczacı hastaya bir tedavi protokolü atadığında, sistem tüm döngü programını, ilgili ilaçları, beklenen semptomları ve tedavi çizelgesini otomatik olarak oluşturarak manuel takvim girişini ortadan kaldırır ve planlama hatalarını azaltır.\n\nKlinik kategoriye (hematoloji, renal, hepatik, pıhtılaşma, elektrolitler) göre organize edilmiş, tarihsel eğilimleri ve uyarı gerektiren sınır değerleri içeren bir Laboratuvar Değerleri Takipçisi, böylece eczacılar kağıt kayıtları karıştırmak yerine bir bakışta tedaviye hazır olma durumunu değerlendirebilirler.\n\nArama, protokol etiketleme (CHOP, FOLFOX vb.) ve yatış takibi içeren bir Hasta Kayıt Sistemi - eczacılara akıllarında tutacakları bir liste yerine aktif hasta yüklerinin yapılandırılmış, filtrelenebilir bir görünümünü sunar.\n\nPlatform ayrıca, dijital gösterge paneli ile hastanelerin hala ihtiyaç duyduğu fiziksel belgeler arasındaki boşluğu dolduran yazdırılabilir hasta raporları ve laboratuvar özetleri oluşturur.',
    'projects.oncoflow.technicalDecisions': 'Yazılım geliştirme yığını olarak Next.js ile birlikte auth, veri tabanı ve row-level security için Supabase kullanıldı — gerçek bir izin modelinden ödün vermeden hızlı prototipleme için seçildi. Takvim, üçüncü taraf bir kütüphane yerine, tedavi döngüsü mantığının (21 günlük CHOP döngüleri, doz-gün eşlemesi) doğrudan planlama katmanına kodlanmasını sağlayan özel uygulamaya (custom implementation) sahiptir. Supabase\'in real-time abonelikleri (subscriptions), eşzamanlı oturumlar boyunca gösterge panelini güncel tutar.',
    'projects.oncoflow.whereItStands': 'Klinik eczacılık mezunu bir kişiyle iş birliği içinde çalışan bir prototip olarak oluşturuldu. Şu anda, tam ölçekli hastane bilgi sistemlerine hafif bir alternatif olarak onkoloji bölümlerine ve özel kliniklere sunulmak üzere geliştirilmektedir.',
    
    // Project Details Bodies - Altınkapı
    'projects.altinkapi.problem': 'Altınkapı, hac ve umre turları konusunda uzmanlaşmış, çeşitli ülke ve dillerden müşterilere hizmet veren bir seyahat şirketidir. Rezervasyon süreçleri tamamen manuel işliyordu — telefon ve WhatsApp üzerinden sorular, PDF olarak paylaşılan paket detayları ve müşterilerin seçenekleri karşılaştırması, müsaitlik durumunu kontrol etmesi veya kendi kendine işlem yapması için hiçbir yol yoktu. Yüksek değerli, zamana duyarlı dini seyahatleri yöneten bir işletme için dijital bir vitrinin olmaması, kaçırılan dönüşümler ve küçük bir ekip üzerinde ezici bir operasyonel yük anlamına geliyordu.',
    'projects.altinkapi.solution': 'Müşterilerin özenle hazırlanmış Hac ve Umre paketlerini incelemesine, kalkış şehri, hizmet sınıfı ve tarihe göre filtreleme yapmasına ve dahil edilenleri (uçuşlar, vize, otel seviyeleri, rehberli turlar vb.) kalem kalem saydam fiyatlandırma ile görüntülemesine olanak tanıyan iki dilli (İngilizce/Türkçe) bir rezervasyon platformu.\n\nPaket görüntüleme sistemi, her teklifi otel yakınlık derecelendirmeleri, Mekke ve Medine arasındaki gece dağılımı ve hizmet seviyeleri ile detaylandırır — müşterilere telefon görüşmesine gerek kalmadan karar vermeleri için gereken yoğun bilgiyi sunar.\n\nPlatform, karanlık mod (dark mode), standart dışı programlar için özel bir paket talep akışı ve operatörün paket envanterini, fiyatlandırmayı ve sezonluk promosyonları yönetebilmesi için bir yönetici arka paneli (admin backend) içerir.',
    'projects.altinkapi.technicalDecisions': 'Next.js ile Firebase, hosting basitliği ve real-time veri tabanı nedeniyle seçildi — müşterinin geliştirici müdahalesi olmadan paket müsaitliğini ve fiyatlandırmasını sık sık güncellemesi gerekiyordu. Uluslararasılaştırma, olası Arapça genişlemesi için uygun RTL hazır mimarisini desteklemek amacıyla sadece string bazında değil, yönlendirme (routing) seviyesinde uygulandı. UI, müşterinin mevcut marka kimliğinden alınan altın ve siyah renk paletini kullanır.',
    'projects.altinkapi.whereItStands': 'Teslim edildi ve operasyonel durumda. Müşterinin ticari faaliyetleri platformla ilgisi olmayan nedenlerden dolayı şu anda duraklatılmış vaziyette. Kod tabanı ve altyapı dağıtıma hazır halde beklemektedir.',

    // Project Details Bodies - EduCounsellor
    'projects.educounsellor.problem': 'Eğitim danışmanlık ajansları — öğrencilerin yurt dışındaki üniversitelere başvurmalarına yardımcı olan işletmeler — genellikle tüm iş akışlarını WhatsApp üzerinden yönetir. Öğrenci belgeleri (transkriptler, tavsiye mektupları, vize evrakları) sohbet ekleri olarak paylaşılır. Başvuru durumları danışmanın hafızasında veya dağınık bir elektronik tabloda yaşar. Anlaşmalı üniversitelerden komisyon takibi manueldir. Bir ajans 20-30 aktif öğrencinin üzerine çıktığında bu iş akışı çöker: belgeler sohbet geçmişinde kaybolur, son teslim tarihleri kaçırılır ve denetim izi kalmaz.',
    'projects.educounsellor.solution': 'Herhangi bir danışmanlık ajansının iş akışına, onlara nasıl çalıştıklarını değiştirmelerini değil, sadece nerede çalıştıklarını değiştirmelerini dayatmadan oturmak üzere tasarlanmış white-label bir SaaS gösterge paneli (dashboard).\n\nYönetici Paneli (Admin Dashboard), ajans yöneticilerine tüm danışmanlardaki tüm başvuruların ana görünümünü, durum takibi (Hazırlanıyor → Gönderildi → İncelemede → Kabul Edildi), komisyon hesaplamaları, öğrenci atamaları ve raporlama için CSV dışa aktarımı ile birlikte sunar.\n\nÖğrenci Portalı (Student Portal), her başvuru sahibine başvuru durumlarını görüntülemesi, gerekli belgeleri yüklemesi (tür sınıflandırması ve boyut doğrulaması ile) ve son tarihleri takip etmesi için kişisel bir gösterge paneli verir — böylece danışmanlarından sohbet üzerinden güncelleme isteme ihtiyacını ortadan kaldırır.\n\nPlatform tasarımı gereği white-label\'dır: ajans adı, markalaşma ve etki alanı her dağıtım (deployment) için yapılandırılabilir, böylece her kuruluş bunu kendi aracı olarak sunar.',
    'projects.educounsellor.technicalDecisions': 'Supabase\'in row-level security özelliği çok kullanıcılı (multi-tenancy) yapıyı idare eder — her ajansın verileri yalnızca uygulama katmanında değil, veri tabanı düzeyinde de izole edilmiştir. Belge kasası (document vault), güvenli, zamanla sınırlı erişim için imzalı URL\'ler ile Supabase Storage kullanır. Sistem, paylaşılan altyapının uyumluluk karmaşıklığından kaçınarak ve veri egemenliğini basit tutarak, ortak çok kiracılı bir örnek (shared multi-tenant instance) yerine ajans başına bağımsız dağıtım (deployment) için tasarlanmıştır.',
    'projects.educounsellor.whereItStands': 'Tüm özellikleri tamamlanmış ve dağıtıma hazır. Şu anda pilot uygulama ve geri bildirim için ilk ajans ortaklığını arıyor.',

    // Project Details Bodies - Spotter
    'projects.spotter.problem': 'Çoğu fitness uygulaması kullanıcıları tek bir kulvara zorlar: ya antrenman takibi ya da beslenme kaydı, ancak nadiren her ikisi birden entegre hissettirecek şekilde sunulur. Tüketilen ve yakılan kalori, vücut ölçülerine dayalı antrenman önerileri, hidrasyon takibi, uyku düzeni gibi sağlığına dair bütünsel bir görünüm isteyen kullanıcılar, sonunda 3-4 ayrı uygulamayla hokkabazlık yapmak zorunda kalır. Vücut geliştiriciler veya sporcular değil de günlük fitness kullanıcıları için, bu parçalılık tutarlılığın önündeki en büyük engeldir.',
    'projects.spotter.solution': 'Spotter, tek yüzeyli bir fitness asistanı olarak tasarlanmış bir mobil uygulamadır. Kullanıcı katılım akışı (onboarding) vücut metriklerini (yaş, kilo, hedefler) toplar ve bunları aşağıdakileri birbirine bağlayan kişiselleştirilmiş bir gösterge paneli oluşturmak için kullanır:\n\nAntrenman Keşfi (Workout Discovery) — zorluk dereceleri ve video rehberliği içeren seçilmiş egzersiz kategorileri (yağ yakımı, güç, esneklik) ile etkileşimi sürdürmek için bir meydan okuma sistemi.\n\nBeslenme & Hidrasyon Takibi — günlük kalori izleme, görsel ilerleme ile su alımı takibi ve makro dağılımları.\n\nKişisel Gösterge Paneli (Personal Dashboard) — tümü kullanıcının profil verilerinden türetilen aktif kalorileri, su tüketimini, uyku kalitesini ve önerilen antrenmanları gösteren birleştirilmiş günlük rapor.\n\nYapay Zeka Sohbet Asistanı (AI Chat Assistant) — fitness ve beslenme sorularını bağlama uygun olarak yanıtlayan, jenerik tavsiyeler yerine kişiselleştirilmiş rehberlik sağlamak için kullanıcının profil verilerini ve etkinlik geçmişini kullanan yerleşik bir etkileşimli sohbet robotu.\n\nArayüz, harekete geçirilebilirlik için yüksek kontrastlı yeşil vurgulara sahip öncelikli olarak karanlık mod (dark-mode) tabanlı bir mobil tasarım dili izler — \'Başla\', ilerleme çubukları ve başarı işaretleyicilerinin hepsi dikkati yönlendirmek için vurgu rengini (accent color) kullanır.',
    'projects.spotter.technicalDecisions': 'Flutter, tek bir kod tabanından çapraz platform dağıtımı için seçildi — hem iOS hem de Android\'i hedefleyen sınırlı kaynaklara sahip bir girişim için bu kritik önem taşır. Firebase, kimlik doğrulama (auth), kullanıcı verisi depolama ve gelecekteki yapay zeka öneri özelliklerinin (kullanım kalıpları ve ilerleme verilerine dayalı antrenman kişiselleştirme) temelini oluşturur.',
    'projects.spotter.whereItStands': 'Çekirdek UI ve onboarding akışı (başlangıç katılımı) oluşturuldu. Backend entegrasyonu ve yapay zeka öneri motoru çalışmaları devam ediyor. Spotter\'ın arkasındaki girişim şu anda duraklatılmış durumda; proje, portföyün bir parçası olarak aktif geliştirmede kalmaya devam ediyor.',

    // Project Details Bodies - Reverse Swing
    'projects.reverse-swing.problem': 'Çevrimiçi kriket içerikleri iki uçta yaşar: hızı ve skorları önceliklendiren kitlesel pazar haber toplayıcıları (ESPNcricinfo, Cricbuzz) ve saatler içinde kaybolan sosyal medya konuları (threads). Taktiksel analiz, oyuncu kariyeri retrospektifleri, atış mekaniği incelemeleri gibi hem yazara hem de okuyucuya saygı duyan bir okuma deneyimiyle sunulan uzun formatlı kriket yazıları için bir boşluk var. Medium işe yarıyor ancak spora özgü bir yapı sunmuyor. WordPress çalışıyor ama 2012\'den fırlamış gibi görünüyor.',
    'projects.reverse-swing.solution': 'Reverse Swing, kriket içeriği için özel olarak oluşturulmuş bir yayın platformudur. Halka açık bir makale sitesini, içerik yönetimi için özel bir yönetici paneli ile birleştirir.\n\nHalka Açık Site, makale kartları, kategori filtreleme (Hikayeler & Analiz), bağlamsal istatistiklere sahip oyuncu profilleri ve uzun okuma oturumları için tasarlanmış mobil uyumlu bir düzen ile sinematik koyu temalı bir okuma deneyimi sunar.\n\nYönetici Paneli (Admin Dashboard), makale oluşturma, taslak/yayınlama iş akışı, medya dosyası yönetimi ve makale başına analitik (zaman içindeki görüntüleme takibi) ile bir içerik yönetimi arayüzü sağlar. Şişirilmiş genel amaçlı bir çözüm yerine hafif bir CMS (İçerik Yönetim Sistemi) olarak inşa edilmiştir — her özellik kriket yazarlarının ihtiyacı olduğu için var.',
    'projects.reverse-swing.technicalDecisions': 'Supabase, içerik depolama, auth ve real-time analizleri yürütür. Mimari bilerek basit tutuldu — static site generation karmaşıklığı yok, build-time içerik derlemesi yok. Makaleler, yeniden derlemeyi beklemeden yayın iş akışını anında (yaz → yayınla → canlıda) tutmak için istek anında (at request time) Supabase\'den getirilir. Görüntü optimizasyonu edge\'de Next.js image bileşeni ve Vercel CDN aracılığıyla gerçekleştirilir.',
    'projects.reverse-swing.whereItStands': 'Yönetici paneli ve halka açık okuma deneyimi tamamlanmış olarak tam işlevsel. Şu anda lansman öncesi aşamasında — genel sürümden (public release) önce özel alan adı (custom domain) kurulumu ve başlangıç içeriklerinin hazırlanmasını bekliyor.',

    // Contact / Footer
    'contact.title': 'Görüşelim',
    'contact.desc': 'Aklınızda bir proje mi var? Birlikte inşa edelim.',
    'footer.copy': '© 2026 Omar Zaghloul / RuneX'
  }
};
