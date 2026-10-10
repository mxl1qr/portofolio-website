/**
 * i18n.js — Shared language switcher for all portfolio pages
 * Usage: add data-i18n="key" to any element. Keys defined in TRANSLATIONS below.
 * Typed.js strings are also swapped on language change.
 */

const TRANSLATIONS = {
    en: {
        // NAV
        'nav.home':         'Home',
        'nav.about':        'About',
        'nav.achievements': 'Achievements',
        'nav.experience':   'Experience',
        'nav.projects':     'Projects',
        'nav.skills':       'Skills',
        'nav.contact':      'Contact',

        // HOME
        'home.greeting':    'Hi there!',
        'home.iam':         "I'm a",
        'home.desc':        '"I build websites that actually look good and work even better — blending clean code with a sharp eye for design to create experiences people enjoy using."',
        'home.cta.cv':      'Download CV',
        'home.cta.contact': 'Say Hello',
        'home.badge':       'Open to opportunities',

        // Typed strings array — handled separately by restartTyped()
        'typed.strings':    ['Frontend Developer', 'UI/UX Enthusiast', 'Cybersecurity Explorer', 'Problem Solver'],

        // ABOUT
        'about.heading':    'About',
        'about.span':       'Me',
        'about.role':       'Frontend Developer & Cybersecurity Enthusiast',
        'about.bio':        'Hey, I\'m <strong>Maliq Rizqi Ananda</strong> — a <span id="dynamic-age">17</span>-year-old Software Engineering student from Jakarta. I care a lot about building websites that are both beautiful and functional. At SMK Negeri 40 Jakarta, I\'ve been diving deep into modern web tech and design principles, turning ideas into clean, intuitive interfaces. On top of that, I\'m genuinely hooked on Cybersecurity — especially CTF challenges that push me to think differently.',
        'about.tools.lbl':  '// Tools I Work With',
        'about.stat.yrs':   'Yrs Coding',
        'about.stat.cert':  'Certs',
        'about.stat.proj':  'Projects',

        // SKILLS
        'skills.heading':   'My',
        'skills.span':      'Skills',
        'skills.sub':       'A mix of technical chops and people skills — here\'s what I bring to the table',
        'skills.hard':      'Hard Skills',
        'skills.soft':      'Soft Skills',
        'soft.teamwork':    'Teamwork',
        'soft.comm':        'Communication',
        'soft.problem':     'Problem Solving',
        'soft.creative':    'Creativity',
        'soft.time':        'Time Management',
        'soft.adapt':       'Adaptability',
        'soft.lead':        'Leadership',
        'soft.detail':      'Attention to Detail',

        // ACHIEVEMENTS
        'achieve.kicker':   '02 // Recognition',
        'achieve.heading':  'Achievements &amp;',
        'achieve.span':     'Competitions',
        'achieve.sub':      'Certificates, competitions, and programs I have completed',
        'achieve.tab.all':  'All',
        'achieve.tab.comp': 'Competitions',
        'achieve.tab.cloud':'Cloud &amp; AI',
        'achieve.tab.cyber':'Cyber',
        'achieve.viewcert': 'View Cert',
        'achieve.moreli':   'More on LinkedIn',
        'achieve.moreli.sub':'Full credential history &rarr;',

        // PROJECTS
        'projects.heading': 'My',
        'projects.span':    'Projects',
        'projects.sub':     'Things I\'ve built — some for school, some just for fun',
        'proj.kicker':      '04 // Selected Works',
        'proj.heading':     'Featured',
        'proj.span':        'Projects',
        'proj.sub':         'A curated collection of web applications, UI/UX prototypes, and experiments',
        'proj.tab.all':     'All Projects',
        'proj.tab.web':     'Web Apps',
        'proj.tab.uiux':    'UI/UX',
        'proj.expanded':    'Expanded Preview',
        'proj1.title':      'Personal Portfolio Website',
        'proj1.desc':       'A modern, responsive portfolio built with HTML5, CSS3 & JavaScript. Smooth animations, clean layout, works great on any screen.',
        'proj2.title':      'E-Commerce Prototype — SOLSTICE',
        'proj2.desc':       'A Figma prototype for an e-commerce app complete with product pages, testimonials, and cart flow. Minimalist aesthetic, fresh vibe.',
        'proj3.title':      'NebulaStream — Cloud Media Platform',
        'proj3.desc':       'A futuristic audio-video streaming web application with interactive player visualizer, responsive dark cyber aesthetics, and audio library exploration.',
        'proj.demo':        'Live Demo',
        'proj.code':        'View Code',
        'proj.template':    'Request Template',

        // EXPERIENCE
        'exp.heading':      'My',
        'exp.span':         'Journey',
        'exp.sub':          'Where I\'ve studied, what I\'ve built, and how I\'ve grown',
        'exp.edu':          'Education',
        'exp.work':         'Experience',
        'exp.cert':         'Certifications &amp; Courses',
        'exp.role.rpl':     'Software Engineering (RPL)',
        'exp.desc.rpl':     'Studying software engineering with a primary focus on frontend web development, database management systems, and programming fundamentals with C#, HTML5, CSS3, and JavaScript.',
        'edu1.title':       'Software Engineering',
        'edu1.sub':         'SMK Negeri 40 Jakarta',
        'edu1.desc':        'Studying web dev, database management, and picking up C#, HTML, CSS & JavaScript along the way.',
        'edu2.title':       'Junior High School',
        'edu2.sub':         'SMP Muhammadiyah 31 Jakarta',
        'edu2.desc':        'Graduated with great grades. This is where the curiosity for tech really started to kick in.',
        'work1.date':       'Jul \u2014 Sep 2026',
        'work1.title':      'Internship',
        'work1.sub':        'Sanggar Ananda Kawula Muda',
        'work1.desc':       'Got hands-on with design thinking, videography, video editing, and brand identity — a solid creative crash course.',
        'work2.date':       'Feb \u2014 Apr 2025',
        'work2.title':      'Student Project',
        'work2.sub':        'SMK Negeri 40 Jakarta',
        'work2.desc':       'Led the design of a responsive e-Commerce prototype in Figma as part of a school project.',
        'work3.date':       'Jan \u2014 Dec 2025',
        'work3.title':      'Wakil Divisi PSDM',
        'work3.sub':        'PIK-R SMK Negeri 40 Jakarta',
        'work3.desc':       'Assisted in running the HR & Empowerment division of the school\'s counseling org — helped plan and coordinate programs for each session.',

        // CONTACT
        'contact.heading':  'Get In',
        'contact.span':     'Touch',
        'contact.sub':      "Got a project idea? Want to collab? Or just want to say hi? My inbox is open.",
        'contact.getint':   'Reach Out',
        'contact.lbl.addr': 'Location',
        'contact.lbl.email':'Email',
        'contact.lbl.phone':'Phone',
        'contact.lbl.li':   'LinkedIn',
        'contact.sendmsg':  'Drop Me a Message',
        'contact.copied':   'Email copied to clipboard!',
        'contact.copybtn':  'Copy email address',
        'form.name':        'Your Name',
        'form.email':       'Your Email',
        'form.subject':     'Subject',
        'form.message':     'Message',
        'form.send':        'Send It',

        // FOOTER
        'footer.rights':    'All rights reserved.',
    },

    id: {
        // NAV
        'nav.home':         'Beranda',
        'nav.about':        'Tentang',
        'nav.achievements': 'Prestasi',
        'nav.experience':   'Pengalaman',
        'nav.projects':     'Proyek',
        'nav.skills':       'Skills',
        'nav.contact':      'Kontak',

        // HOME
        'home.greeting':    'Halo!',
        'home.iam':         'Saya seorang',
        'home.desc':        '"Saya bikin website yang enak dilihat sekaligus enak dipakai — perpaduan kode yang bersih dengan selera desain yang tajam, biar pengalaman digitalnya berkesan."',
        'home.cta.cv':      'Unduh CV',
        'home.cta.contact': 'Hubungi Saya',
        'home.badge':       'Terbuka untuk peluang baru',

        'typed.strings':    ['Frontend Developer', 'Penggemar UI/UX', 'Pemerhati Cybersecurity', 'Problem Solver'],

        // ABOUT
        'about.heading':    'Tentang',
        'about.span':       'Saya',
        'about.role':       'Frontend Developer & Penggemar Cybersecurity',
        'about.bio':        'Hai! Saya <strong>Maliq Rizqi Ananda</strong> — siswa RPL berusia <span id="dynamic-age">17</span> tahun dari Jakarta yang suka banget bikin website yang cantik sekaligus fungsional. Di SMK Negeri 40 Jakarta, saya terus eksplor teknologi web modern dan prinsip desain, dengan tujuan ngubah ide jadi interface yang bersih dan intuitif. Di luar dunia web, saya juga kecanduan Cybersecurity — terutama CTF challenge yang bikin saya harus mikir keras dan kreatif.',
        'about.tools.lbl':  '// Tools yang Saya Pakai',
        'about.stat.yrs':   'Thn Coding',
        'about.stat.cert':  'Sertifikat',
        'about.stat.proj':  'Proyek',

        // SKILLS
        'skills.heading':   'Skills',
        'skills.span':      'Saya',
        'skills.sub':       'Campuran kemampuan teknis dan soft skill — ini yang bisa saya bawa ke meja',
        'skills.hard':      'Hard Skills',
        'skills.soft':      'Soft Skills',
        'soft.teamwork':    'Kerja Tim',
        'soft.comm':        'Komunikasi',
        'soft.problem':     'Problem Solving',
        'soft.creative':    'Kreativitas',
        'soft.time':        'Manajemen Waktu',
        'soft.adapt':       'Adaptasi Cepat',
        'soft.lead':        'Kepemimpinan',
        'soft.detail':      'Detail-Oriented',

        // ACHIEVEMENTS
        'achieve.kicker':   '02 // Rekognisi',
        'achieve.heading':  'Prestasi &amp;',
        'achieve.span':     'Kompetisi',
        'achieve.sub':      'Sertifikat, kompetisi, dan program yang telah saya selesaikan',
        'achieve.tab.all':  'Semua',
        'achieve.tab.comp': 'Kompetisi',
        'achieve.tab.cloud':'Cloud &amp; AI',
        'achieve.tab.cyber':'Cyber',
        'achieve.viewcert': 'Lihat Sertifikat',
        'achieve.moreli':   'Lainnya di LinkedIn',
        'achieve.moreli.sub':'Riwayat lengkap kredensial &rarr;',

        // PROJECTS
        'projects.heading': 'Proyek',
        'projects.span':    'Saya',
        'projects.sub':     'Hal-hal yang udah saya bangun — ada yang buat tugas, ada yang emang iseng pengen coba',
        'proj.kicker':      '04 // Karya Pilihan',
        'proj.heading':     'Proyek',
        'proj.span':        'Unggulan',
        'proj.sub':         'Koleksi aplikasi web, prototipe UI/UX, dan eksperimen terpilih',
        'proj.tab.all':     'Semua Proyek',
        'proj.tab.web':     'Aplikasi Web',
        'proj.tab.uiux':    'UI/UX',
        'proj.expanded':    'Pratinjau Luas',
        'proj1.title':      'Personal Portfolio Website',
        'proj1.desc':       'Portfolio modern & responsif yang dibangun pakai HTML5, CSS3 & JavaScript. Animasinya smooth, layoutnya bersih, dan tampil oke di semua ukuran layar.',
        'proj2.title':      'Prototipe E-Commerce — SOLSTICE',
        'proj2.desc':       'Prototipe Figma buat aplikasi e-commerce dengan halaman produk, testimoni, dan alur keranjang belanja. Desain minimalis, tampilan segar.',
        'proj3.title':      'NebulaStream — Platform Media Cloud',
        'proj3.desc':       'Aplikasi web streaming audio-video futuristik dengan visualizer musik interaktif, estetika dark cyber responsif, dan eksplorasi pustaka audio.',
        'proj.demo':        'Live Demo',
        'proj.code':        'Lihat Kode',
        'proj.template':    'Minta Template',

        // EXPERIENCE
        'exp.heading':      'Perjalanan',
        'exp.span':         'Saya',
        'exp.sub':          'Di mana saya belajar, apa yang sudah saya bangun, dan bagaimana saya berkembang',
        'exp.edu':          'Pendidikan',
        'exp.work':         'Pengalaman',
        'exp.cert':         'Sertifikasi &amp; Kursus',
        'exp.role.rpl':     'Rekayasa Perangkat Lunak (RPL)',
        'exp.desc.rpl':     'Mempelajari rekayasa perangkat lunak berfokus pada pengembangan web frontend, sistem basis data, dan pemrograman dasar dengan C#, HTML5, CSS3, dan JavaScript.',
        'edu1.title':       'Rekayasa Perangkat Lunak',
        'edu1.sub':         'SMK Negeri 40 Jakarta',
        'edu1.desc':        'Belajar web dev, database management, dan ngulik C#, HTML, CSS & JavaScript sambil jalan.',
        'edu2.title':       'Sekolah Menengah Pertama',
        'edu2.sub':         'SMP Muhammadiyah 31 Jakarta',
        'edu2.desc':        'Lulus dengan nilai bagus. Di sini awal mula ketertarikan saya sama dunia teknologi mulai muncul.',
        'work1.date':       'Jul \u2014 Sep 2026',
        'work1.title':      'Magang',
        'work1.sub':        'Sanggar Ananda Kawula Muda',
        'work1.desc':       'Belajar langsung soal design thinking, videografi, editing video, dan identitas merek — crash course kreatif yang solid.',
        'work2.date':       'Feb \u2014 Apr 2025',
        'work2.title':      'Proyek Sekolah',
        'work2.sub':        'SMK Negeri 40 Jakarta',
        'work2.desc':       'Mendesain prototipe e-Commerce responsif di Figma sebagai bagian dari proyek sekolah.',
        'work3.date':       'Jan \u2014 Des 2025',
        'work3.title':      'Wakil Divisi PSDM',
        'work3.sub':        'PIK-R SMK Negeri 40 Jakarta',
        'work3.desc':       'Bantu jalanin divisi PSDM di organisasi konseling sekolah — ikut merancang dan koordinasi program buat setiap pertemuan.',

        // CONTACT
        'contact.heading':  'Kontak',
        'contact.span':     'Saya',
        'contact.sub':      'Ada ide proyek? Mau kolaborasi? Atau sekadar mau ngobrol? Inbox saya selalu terbuka.',
        'contact.getint':   'Hubungi Saya',
        'contact.lbl.addr': 'Lokasi',
        'contact.lbl.email':'Email',
        'contact.lbl.phone':'Telepon',
        'contact.lbl.li':   'LinkedIn',
        'contact.sendmsg':  'Kirim Pesan',
        'contact.copied':   'Email berhasil disalin!',
        'contact.copybtn':  'Salin alamat email',
        'form.name':        'Nama Kamu',
        'form.email':       'Email Kamu',
        'form.subject':     'Subjek',
        'form.message':     'Pesan',
        'form.send':        'Kirim Sekarang',

        // FOOTER
        'footer.rights':    'Hak cipta dilindungi.',
    }
};

// ─────────────────────────────────────────────
// CORE ENGINE
// ─────────────────────────────────────────────

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

/**
 * Apply translations to all [data-i18n] elements.
 *   data-i18n="key"              -> sets innerHTML
 *   data-i18n-attr="placeholder" -> sets that attribute instead
 */
function applyTranslations(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key  = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr');
        const val  = t[key];
        if (val === undefined || Array.isArray(val)) return;

        if (attr) {
            el.setAttribute(attr, val);
        } else {
            el.innerHTML = val;
        }
    });

    // Re-calculate age (bio innerHTML swap replaces the span)
    const ageEl = document.getElementById('dynamic-age');
    if (ageEl) {
        const birth = new Date('2009-01-01');
        ageEl.textContent = Math.floor((Date.now() - birth) / 31557600000);
    }

    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
}

/**
 * Restart Typed.js instance(s) with strings for the active language.
 */
function restartTyped(lang) {
    const strings = TRANSLATIONS[lang] && TRANSLATIONS[lang]['typed.strings'];
    if (!strings || typeof Typed === 'undefined') return;

    const selectors = ['#typed1', '#typed2', '#typed3', '.multiple-text', '.typed-text'];

    selectors.forEach(function(sel) {
        const el = document.querySelector(sel);
        if (!el) return;

        if (el._typedInstance) {
            el._typedInstance.destroy();
            el.innerHTML = '';
            el._typedInstance = null;
        }

        const isCursor = sel !== '.multiple-text';
        el._typedInstance = new Typed(sel, {
            strings:    strings,
            typeSpeed:  60,
            backSpeed:  40,
            loop:       true,
            showCursor: isCursor
        });
    });
}

/**
 * Sync active-class on all lang switcher buttons/links.
 */
function updateLangSwitcherUI(lang) {
    // Single toggle button with text EN / ID
    document.querySelectorAll('#lang-code, .lang-code').forEach(function(el) {
        el.textContent = lang.toUpperCase();
    });

    // data-lang="en|id" style (new pages & mobile drawer)
    document.querySelectorAll('[data-lang]').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Text-based EN/ID anchor style (index.html, id-index.html, index1-3)
    document.querySelectorAll('.lang a, .lang-mobile a, .lang-switcher a').forEach(function(a) {
        const txt = a.textContent.trim().toUpperCase();
        if (txt === 'EN' || txt === 'ID') {
            a.classList.toggle('active', txt === lang.toUpperCase());
        }
    });
}

/**
 * Public: switch language, persist, apply everything.
 */
function switchLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    applyTranslations(lang);
    restartTyped(lang);
    updateLangSwitcherUI(lang);
}

// ─────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    applyTranslations(currentLang);
    updateLangSwitcherUI(currentLang);

    // Circular toggle button (#lang-toggle)
    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            var next = currentLang === 'en' ? 'id' : 'en';
            switchLang(next);
        });
    }

    // data-lang buttons
    document.querySelectorAll('[data-lang]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLang(btn.getAttribute('data-lang'));
        });
    });

    // Intercept old-style EN/ID anchors (no page reload)
    document.querySelectorAll('.lang a, .lang-mobile a, .lang-switcher a').forEach(function(a) {
        const txt = a.textContent.trim().toUpperCase();
        if (txt !== 'EN' && txt !== 'ID') return;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            switchLang(txt.toLowerCase());
        });
    });

    // Typed.js init after Typed script loads
    setTimeout(function() { restartTyped(currentLang); }, 150);
});
