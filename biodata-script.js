// Biodata Portfolio JavaScript

// Multi-language translations object
const translations = {
    id: {
        // Header & Navigation
        header_subtitle: "$ Fullstack Web Developer",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "Nama:",
        education_label: "Pendidikan:",
        education_value: "D3 Manajemen Informatika",
        location_label: "Lokasi:",
        location_value: "Indonesia",
        status_label: "Status:",
        status_value: "Siap Bekerja",
        about_description: "Lulusan D3 Manajemen Informatika yang memiliki keahlian teruji dalam pengembangan web dan pemrograman. Saya fokus pada backend menggunakan PHP dan mahir dalam merancang tampilan antarmuka yang modern, responsif, dan terawat menggunakan kerangka kerja Tailwind CSS.",
        experience_title: "Pengalaman",
        experience_desc: "Fresh Graduate dengan portofolio solid",
        focus_title: "Fokus",
        focus_desc: "Backend Development & Modern UI/UX",
        passion_title: "Passion",
        passion_desc: "Problem Solving & Efficient Solutions",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "Backend Development",
        frontend_title: "Frontend Development",
        tools_title: "Tools & Others",
        api_development: "API Development",
        problem_solving: "Problem Solving",
        teamwork: "Teamwork",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "Website E-Commerce",
        project1_purpose: "Tujuan:",
        project1_desc: "Platform e-commerce full-stack dengan sistem pembayaran terintegrasi",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "Sistem Manajemen Tugas",
        project2_purpose: "Tujuan:",
        project2_desc: "Aplikasi manajemen tugas dengan fitur real-time collaboration",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "Website Portofolio",
        project3_purpose: "Tujuan:",
        project3_desc: "Website portofolio responsif dengan animasi modern",
        tech_stack: "Tech Stack:",
        view_project: "Lihat Proyek",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "Kirim Pesan",
        name_label: "Nama:",
        email_label: "Email:",
        message_label: "Pesan:",
        send_btn: "Execute: Send()",
        phone_label: "Telepon/WA",
        download_cv_btn: "📄 Download CV",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - Dibuat dengan",
        footer_tech: "menggunakan HTML, CSS & JavaScript"
    },

    en: {
        // Header & Navigation
        header_subtitle: "$ Fullstack Web Developer",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "Name:",
        education_label: "Education:",
        education_value: "D3 Information Management",
        location_label: "Location:",
        location_value: "Indonesia",
        status_label: "Status:",
        status_value: "Ready to Work",
        about_description: "Graduate of D3 Information Management with proven expertise in web development and programming. I focus on backend using PHP and skilled in designing modern, responsive, and maintainable interface layouts using Tailwind CSS framework.",
        experience_title: "Experience",
        experience_desc: "Fresh Graduate with solid portfolio",
        focus_title: "Focus",
        focus_desc: "Backend Development & Modern UI/UX",
        passion_title: "Passion",
        passion_desc: "Problem Solving & Efficient Solutions",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "Backend Development",
        frontend_title: "Frontend Development",
        tools_title: "Tools & Others",
        api_development: "API Development",
        problem_solving: "Problem Solving",
        teamwork: "Teamwork",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "E-Commerce Website",
        project1_purpose: "Purpose:",
        project1_desc: "Full-stack e-commerce platform with integrated payment system",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "Task Management System",
        project2_purpose: "Purpose:",
        project2_desc: "Task management application with real-time collaboration features",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "Portfolio Website",
        project3_purpose: "Purpose:",
        project3_desc: "Responsive portfolio website with modern animations",
        tech_stack: "Tech Stack:",
        view_project: "View Project",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "Send Message",
        name_label: "Name:",
        email_label: "Email:",
        message_label: "Message:",
        send_btn: "Execute: Send()",
        phone_label: "Phone/WA",
        download_cv_btn: "📄 Download CV",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - Crafted with",
        footer_tech: "using HTML, CSS & JavaScript"
    },

    de: {
        // Header & Navigation
        header_subtitle: "$ Fullstack Web-Entwickler",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "Name:",
        education_label: "Bildung:",
        education_value: "D3 Informationsmanagement",
        location_label: "Standort:",
        location_value: "Indonesien",
        status_label: "Status:",
        status_value: "Arbeitsbereit",
        about_description: "Absolvent des D3 Informationsmanagements mit bewährter Expertise in Webentwicklung und Programmierung. Ich fokussiere mich auf Backend mit PHP und bin geschickt im Entwerfen moderner, responsiver und wartbarer Interface-Layouts mit dem Tailwind CSS Framework.",
        experience_title: "Erfahrung",
        experience_desc: "Berufseinsteiger mit solidem Portfolio",
        focus_title: "Fokus",
        focus_desc: "Backend-Entwicklung & Moderne UI/UX",
        passion_title: "Leidenschaft",
        passion_desc: "Problemlösung & Effiziente Lösungen",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "Backend-Entwicklung",
        frontend_title: "Frontend-Entwicklung",
        tools_title: "Tools & Anderes",
        api_development: "API-Entwicklung",
        problem_solving: "Problemlösung",
        teamwork: "Teamarbeit",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "E-Commerce Website",
        project1_purpose: "Zweck:",
        project1_desc: "Full-Stack E-Commerce-Plattform mit integriertem Zahlungssystem",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "Task-Management-System",
        project2_purpose: "Zweck:",
        project2_desc: "Task-Management-Anwendung mit Echtzeit-Kollaborations-Features",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "Portfolio-Website",
        project3_purpose: "Zweck:",
        project3_desc: "Responsive Portfolio-Website mit modernen Animationen",
        tech_stack: "Tech Stack:",
        view_project: "Projekt ansehen",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "Nachricht senden",
        name_label: "Name:",
        email_label: "E-Mail:",
        message_label: "Nachricht:",
        send_btn: "Execute: Send()",
        phone_label: "Telefon/WA",
        download_cv_btn: "📄 CV herunterladen",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - Erstellt mit",
        footer_tech: "mit HTML, CSS & JavaScript"
    },

    ja: {
        // Header & Navigation
        header_subtitle: "$ フルスタックウェブ開発者",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "名前:",
        education_label: "学歴:",
        education_value: "D3情報管理学",
        location_label: "場所:",
        location_value: "インドネシア",
        status_label: "ステータス:",
        status_value: "就業準備完了",
        about_description: "ウェブ開発とプログラミングにおいて実証された専門知識を持つD3情報管理学の卒業生です。PHPを使用したバックエンドに焦点を当て、Tailwind CSSフレームワークを使用してモダンで応答性があり保守可能なインターフェースレイアウトの設計に熟練しています。",
        experience_title: "経験",
        experience_desc: "堅実なポートフォリオを持つ新卒",
        focus_title: "フォーカス",
        focus_desc: "バックエンド開発とモダンUI/UX",
        passion_title: "情熱",
        passion_desc: "問題解決と効率的なソリューション",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "バックエンド開発",
        frontend_title: "フロントエンド開発",
        tools_title: "ツール・その他",
        api_development: "API開発",
        problem_solving: "問題解決",
        teamwork: "チームワーク",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "Eコマースウェブサイト",
        project1_purpose: "目的:",
        project1_desc: "統合決済システムを備えたフルスタックEコマースプラットフォーム",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "タスク管理システム",
        project2_purpose: "目的:",
        project2_desc: "リアルタイムコラボレーション機能を備えたタスク管理アプリケーション",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "ポートフォリオウェブサイト",
        project3_purpose: "目的:",
        project3_desc: "モダンアニメーションを備えたレスポンシブポートフォリオウェブサイト",
        tech_stack: "技術スタック:",
        view_project: "プロジェクトを見る",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "メッセージを送る",
        name_label: "名前:",
        email_label: "メール:",
        message_label: "メッセージ:",
        send_btn: "Execute: Send()",
        phone_label: "電話/WA",
        download_cv_btn: "📄 CV ダウンロード",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - 作成:",
        footer_tech: "HTML、CSS & JavaScript使用"
    },

    zh: {
        // Header & Navigation
        header_subtitle: "$ 全栈网页开发者",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "姓名:",
        education_label: "教育:",
        education_value: "D3信息管理",
        location_label: "地点:",
        location_value: "印度尼西亚",
        status_label: "状态:",
        status_value: "准备就业",
        about_description: "拥有网页开发和编程方面经过验证的专业知识的D3信息管理毕业生。我专注于使用PHP的后端开发，并熟练使用Tailwind CSS框架设计现代、响应式和可维护的界面布局。",
        experience_title: "经验",
        experience_desc: "拥有扎实作品集的应届毕业生",
        focus_title: "专注",
        focus_desc: "后端开发与现代UI/UX",
        passion_title: "热情",
        passion_desc: "问题解决与高效解决方案",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "后端开发",
        frontend_title: "前端开发",
        tools_title: "工具与其他",
        api_development: "API开发",
        problem_solving: "问题解决",
        teamwork: "团队合作",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "电子商务网站",
        project1_purpose: "目的:",
        project1_desc: "带有集成支付系统的全栈电子商务平台",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "任务管理系统",
        project2_purpose: "目的:",
        project2_desc: "具有实时协作功能的任务管理应用程序",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "作品集网站",
        project3_purpose: "目的:",
        project3_desc: "具有现代动画效果的响应式作品集网站",
        tech_stack: "技术栈:",
        view_project: "查看项目",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "发送消息",
        name_label: "姓名:",
        email_label: "邮箱:",
        message_label: "消息:",
        send_btn: "Execute: Send()",
        phone_label: "电话/WA",
        download_cv_btn: "📄 下载简历",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - 制作使用",
        footer_tech: "HTML、CSS 和 JavaScript"
    },

    ru: {
        // Header & Navigation
        header_subtitle: "$ Fullstack веб-разработчик",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "Имя:",
        education_label: "Образование:",
        education_value: "D3 Управление информацией",
        location_label: "Местоположение:",
        location_value: "Индонезия",
        status_label: "Статус:",
        status_value: "Готов к работе",
        about_description: "Выпускник D3 по управлению информацией с проверенным опытом в веб-разработке и программировании. Я сосредоточен на backend с использованием PHP и умею проектировать современные, отзывчивые и поддерживаемые интерфейсы с использованием фреймворка Tailwind CSS.",
        experience_title: "Опыт",
        experience_desc: "Выпускник с солидным портфолио",
        focus_title: "Фокус",
        focus_desc: "Backend разработка и современный UI/UX",
        passion_title: "Страсть",
        passion_desc: "Решение проблем и эффективные решения",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "Backend разработка",
        frontend_title: "Frontend разработка",
        tools_title: "Инструменты и прочее",
        api_development: "API разработка",
        problem_solving: "Решение проблем",
        teamwork: "Командная работа",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "Веб-сайт электронной коммерции",
        project1_purpose: "Цель:",
        project1_desc: "Полнофункциональная платформа электронной коммерции с интегрированной системой платежей",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "Система управления задачами",
        project2_purpose: "Цель:",
        project2_desc: "Приложение для управления задачами с функциями совместной работы в реальном времени",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "Веб-сайт портфолио",
        project3_purpose: "Цель:",
        project3_desc: "Адаптивный веб-сайт портфолио с современной анимацией",
        tech_stack: "Технологический стек:",
        view_project: "Посмотреть проект",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "Отправить сообщение",
        name_label: "Имя:",
        email_label: "Эл. почта:",
        message_label: "Сообщение:",
        send_btn: "Execute: Send()",
        phone_label: "Телефон/WA",
        download_cv_btn: "📄 Скачать CV",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - Создано с",
        footer_tech: "использованием HTML, CSS и JavaScript"
    },

    ko: {
        // Header & Navigation
        header_subtitle: "$ 풀스택 웹 개발자",
        execute_hire: "> EXECUTE: Hire()",

        // About Section
        about_title: "whoami",
        name_label: "이름:",
        education_label: "학력:",
        education_value: "D3 정보관리학",
        location_label: "위치:",
        location_value: "인도네시아",
        status_label: "상태:",
        status_value: "취업 준비 완료",
        about_description: "웹 개발과 프로그래밍 분야에서 검증된 전문 지식을 가진 D3 정보관리학 졸업생입니다. PHP를 사용한 백엔드에 집중하고 Tailwind CSS 프레임워크를 사용하여 현대적이고 반응형이며 유지보수 가능한 인터페이스 레이아웃 설계에 숙련되어 있습니다.",
        experience_title: "경험",
        experience_desc: "탄탄한 포트폴리오를 가진 신입",
        focus_title: "집중 분야",
        focus_desc: "백엔드 개발 & 현대적 UI/UX",
        passion_title: "열정",
        passion_desc: "문제 해결 & 효율적인 솔루션",

        // Skills Section
        skills_title: "ls -la skills/",
        backend_title: "백엔드 개발",
        frontend_title: "프론트엔드 개발",
        tools_title: "도구 & 기타",
        api_development: "API 개발",
        problem_solving: "문제 해결",
        teamwork: "팀워크",

        // Projects Section
        projects_title: "cat projects.log",
        project1_type: "[LOG_ENTRY_001]",
        project1_title: "전자상거래 웹사이트",
        project1_purpose: "목적:",
        project1_desc: "통합 결제 시스템을 갖춘 풀스택 전자상거래 플랫폼",
        project2_type: "[LOG_ENTRY_002]",
        project2_title: "작업 관리 시스템",
        project2_purpose: "목적:",
        project2_desc: "실시간 협업 기능을 갖춘 작업 관리 애플리케이션",
        project3_type: "[LOG_ENTRY_003]",
        project3_title: "포트폴리오 웹사이트",
        project3_purpose: "목적:",
        project3_desc: "현대적인 애니메이션을 갖춘 반응형 포트폴리오 웹사이트",
        tech_stack: "기술 스택:",
        view_project: "프로젝트 보기",

        // Contact Section
        contact_header: "SSH: root@contact-me",
        send_message: "메시지 보내기",
        name_label: "이름:",
        email_label: "이메일:",
        message_label: "메시지:",
        send_btn: "Execute: Send()",
        phone_label: "전화/WA",
        download_cv_btn: "📄 이력서 다운로드",

        // Footer
        footer_text: "© 2024 Ahmad Fauzi A.Md.Kom - 제작:",
        footer_tech: "HTML, CSS & JavaScript 사용"
    }
};

// Language switching functionality
let currentLanguage = 'id';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language selector
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.value = lang;
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
function initLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'id';
    switchLanguage(savedLanguage);
}

// Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };

        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                connections: []
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                particle.x -= dx * 0.01;
                particle.y -= dy * 0.01;
            }

            // Draw particle
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = '#10b981';
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });

        // Draw connections
        this.drawConnections();

        requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.save();
                    this.ctx.strokeStyle = '#10b981';
                    this.ctx.globalAlpha = (120 - distance) / 120 * 0.2;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }
}

// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.container = document.getElementById('matrix-bg');
        this.chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.columns = [];
        this.createColumns();
        this.animate();
    }

    createColumns() {
        const columnCount = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columnCount; i++) {
            if (!this.columns[i]) {
                this.columns[i] = {
                    x: i * 20,
                    y: Math.random() * window.innerHeight,
                    speed: Math.random() * 3 + 1,
                    element: null
                };
            }
        }
    }

    animate() {
        // Clean up old elements occasionally
        if (Math.random() < 0.1) {
            const oldElements = this.container.querySelectorAll('.matrix-char');
            oldElements.forEach((el, index) => {
                if (index < oldElements.length - 50) {
                    el.remove();
                }
            });
        }

        // Add new characters
        this.columns.forEach(column => {
            if (Math.random() < 0.1) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = this.chars[Math.floor(Math.random() * this.chars.length)];
                char.style.left = column.x + 'px';
                char.style.top = '-20px';
                char.style.animationDuration = (Math.random() * 3 + 2) + 's';
                this.container.appendChild(char);
            }
        });

        setTimeout(() => this.animate(), 200);
    }
}

// Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.skill-category, .project-card');

    function handleScroll() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((element, index) => {
            const rate = scrolled * (-0.1 - index * 0.02);
            element.style.transform = `translateY(${rate}px) rotateX(${rate * 0.01}deg)`;
        });
    }

    window.addEventListener('scroll', handleScroll);
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 3D Tilt Effect on Mouse Move
function init3DTilt() {
    const tiltElements = document.querySelectorAll('.skill-category, .project-card');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                const rotateX = (mouseY / rect.height) * 10;
                const rotateY = (mouseX / rect.width) * 10;

                element.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            }
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Intersection Observer for Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');

                // Animate skill bars
                if (entry.target.classList.contains('skill-category')) {
                    const skillBars = entry.target.querySelectorAll('.bg-gradient-to-r');
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.animation = 'skill-load 2s ease-out forwards';
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToObserve = document.querySelectorAll('section, .skill-category, .project-card');
    elementsToObserve.forEach(element => {
        element.classList.add('loading');
        observer.observe(element);
    });
}

// Form Submission Handler
function initContactForm() {
    const form = document.querySelector('#contact form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name') || form.querySelector('input[type="text"]').value;
            const email = formData.get('email') || form.querySelector('input[type="email"]').value;
            const message = formData.get('message') || form.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !message) {
                alert(translations[currentLanguage].form_validation || 'Please fill in all fields');
                return;
            }

            // Show success message (in real app, this would send to server)
            alert(translations[currentLanguage].form_success || 'Message sent successfully!');
            form.reset();
        });
    }
}

// Performance Optimization
function initPerformanceOptimizations() {
    // Throttle scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;

    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
            scrollTimeout = null;
        }, 16); // ~60fps
    });

    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-animations');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initLanguage();

    // Language selector event
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
        });
    }

    // Visual effects
    const particleCanvas = document.getElementById('particles');
    if (particleCanvas) {
        new ParticleSystem(particleCanvas);
    }

    new MatrixRain();

    // Interaction effects
    initParallax();
    initSmoothScrolling();
    init3DTilt();
    initIntersectionObserver();
    initContactForm();
    initPerformanceOptimizations();

    // Add loading class removal delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Export functions for global access
window.switchLanguage = switchLanguage;