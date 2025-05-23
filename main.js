    // Language Configuration
        const translations = {
            en: {
                home: "Home",
                about: "About",
                skills: "Skills",
                services: "Services",
                contact: "Contact",
                name: "Igirimbabazi Eric",
                dev: "Full Stack Developer",
                about_text: "A passionate developer with expertise in web technologies...",
                name_ph: "Name",
                email_ph: "Email",
                message_ph: "Message",
                send: "Send Message",
                skills_labels: ['Web Development', 'UI/UX', 'Database', 'Mobile', 'Cloud', 'AI']
            },
            fr: {
                home: "Accueil",
                about: "À propos",
                skills: "Compétences",
                services: "Services",
                contact: "Contact",
                name: "Igirimbabazi Eric",
                dev: "Développeur Full Stack",
                about_text: "Développeur passionné avec expertise en technologies web...",
                name_ph: "Nom",
                email_ph: "E-mail",
                message_ph: "Message",
                send: "Envoyer",
                skills_labels: ['Développement Web', 'UI/UX', 'Base de données', 'Mobile', 'Cloud', 'IA']
            },
            rw: {
                home: "Ahabanza",
                about: "Ibirebana nanjye",
                skills: "Ubuhanga",
                services: "Serivisi",
                contact: "Twandikire",
                name: "Igirimbabazi Eric",
                dev: "Umukungu wa Full Stack",
                about_text: "Umukungu w'umutima ufite ubumenyi mu bukungu...",
                name_ph: "Izina",
                email_ph: "Imeri",
                message_ph: "Ubutumwa",
                send: "Ohereza",
                skills_labels: ['Gukora urubuga', 'UI/UX', 'Ububiko', 'Mobil', 'Ikirere', 'AI']
            }
        };

        let currentLang = 'en';

        function changeLanguage(lang) {
            currentLang = lang;
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                el.textContent = translations[lang][key];
                el.placeholder = translations[lang][key];
            });
            updateChartLabels();
        }

        // Dark Mode
        function toggleDarkMode() {
            document.documentElement.setAttribute('data-theme',
                document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
        }

        // Skills Chart
        let skillsChart;

        function createChart() {
            const ctx = document.getElementById('skillsChart').getContext('2d');
            skillsChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: translations[currentLang].skills_labels,
                    datasets: [{
                        label: translations[currentLang].skills,
                        data: [90, 85, 80, 75, 70, 65],
                        backgroundColor: 'rgba(46, 204, 113, 0.2)'
                    }]
                }
            });
        }

        function updateChartLabels() {
            skillsChart.destroy();
            createChart();
        }

        // Google Maps
        function initMap() {
            const kigabiro = { lat: -1.8957, lng: 30.1328 };
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: kigabiro
            });
            new google.maps.Marker({
                position: kigabiro,
                map: map,
                title: 'Igirimbabazi Eric Location'
            });
        }

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert(translations[currentLang].send + ' ✅');
        });

        // Initialize
        window.onload = () => {
            createChart();
            changeLanguage('en');
        }
         function createRain() {
        const rainContainer = document.getElementById('rain');
        const drops = 50;

        for (let i = 0; i < drops; i++) {
            const drop = document.createElement('div');
            drop.className = 'drop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDelay = Math.random() * 5 + 's';
            drop.style.animationDuration = 0.5 + Math.random() * 1 + 's';
            rainContainer.appendChild(drop);
        }
    }

    // Add to translations
    translations.en.hire_me = "Hire Me";
    translations.en.projects = "View Projects";
    translations.fr.hire_me = "Engagez Moi";
    translations.fr.projects = "Voir Projets";
    translations.rw.hire_me = "Mpaye";
    translations.rw.projects = "Reba Ibikorwa";

    // Initialize rain on load
    window.addEventListener('load', () => {
        createRain();
        // Add font awesome
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(fa);
    });
      // Typewriter Effect
    const typeStrings = {
        en: [
            "Tech Visionary",
            "Full Stack Developer",
            "AI Enthusiast",
            "Cloud Architect"
        ],
        fr: [
            "Visionnaire Technologique",
            "Développeur Full Stack",
            "Passionné d'IA",
            "Architecte Cloud"
        ],
        rw: [
            "Umuhanzi wa Tekinoloji",
            "Umukungu wa Full Stack",
            "Uwashimishije wa AI",
            "Ubwubatsi bwa Cloud"
        ]
    };

    let currentTypeIndex = 0;
    
    function updateTypewriter() {
        const typeElement = document.querySelector('.typewriter-text');
        const strings = typeStrings[currentLang];
        typeElement.style.animation = 'none';
        typeElement.offsetHeight; // Trigger reflow
        typeElement.style.animation = null;
        typeElement.textContent = strings[currentTypeIndex];
        currentTypeIndex = (currentTypeIndex + 1) % strings.length;
    }

    // Update translations
    translations.en.about_title = "About Me";
    translations.en.type_text = "Tech Visionary";
    translations.en.bio = "Award-winning..."; // Keep your full bio
    translations.en.projects_completed = "Projects Completed";
    translations.en.client_satisfaction = "Client Satisfaction";

    // Add French and Kinyarwanda translations similarly

    // Initialize typewriter
    setInterval(updateTypewriter, 3000);
    updateTypewriter();



    //services


        translations.en.services = "My Services";
    translations.en.webdev_title = "Full-Stack Web Development";
    translations.en.webdev_desc = "Build enterprise-grade...";
    translations.en.mobile_title = "Cross-Platform Mobile Apps";
    translations.en.cloud_title = "Cloud Solutions & DevOps";