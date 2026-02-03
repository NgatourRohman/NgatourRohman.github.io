// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('certificateModal');
    const closeModalBtn = document.getElementById('closeModal');
    const certificateItems = document.querySelectorAll('.certificate-item[data-id]');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noCertificatesMessage = document.getElementById('noCertificatesMessage');
    
    // Certificate Data - Sorted by Date (Earliest to Latest)
    const certificatesData = {
        // ANDROID Certificates
        1: {
            title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
            description: "Fundamental programming basics for software development career. Covered basic concepts, algorithms, and problem-solving approaches.",
            pdf: "assets/pdf/certificates/android-dasar-pemrograman.pdf",
            date: "13 August 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/android-dasar-pemrograman.pdf"
        },
        2: {
            title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
            description: "Introduction to programming logic and computational thinking. Learned about variables, conditions, loops, and basic algorithms.",
            pdf: "assets/pdf/certificates/programming-logic-101.pdf",
            date: "13 August 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/programming-logic-101.pdf"
        },
        3: {
            title: "Belajar Dasar Git dengan GitHub",
            description: "Fundamentals of Git version control system and GitHub collaboration. Covered basic commands, branching, merging, and pull requests.",
            pdf: "assets/pdf/certificates/git-github.pdf",
            date: "16 August 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/git-github.pdf"
        },
        4: {
            title: "Memulai Pemrograman dengan Kotlin",
            description: "Introduction to Kotlin programming language for Android development. Covered basic syntax, data types, functions, and object-oriented programming.",
            pdf: "assets/pdf/certificates/kotlin-pemula.pdf",
            date: "18 August 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/kotlin-pemula.pdf"
        },
        5: {
            title: "Belajar Membuat Aplikasi Android untuk Pemula",
            description: "Beginner Android app development course. Learned about Android Studio, basic UI components, and simple app creation.",
            pdf: "assets/pdf/certificates/android-pemula.pdf",
            date: "28 August 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/android-pemula.pdf"
        },
        6: {
            title: "Belajar Fundamental Aplikasi Android",
            description: "Android app development fundamentals. Covered activities, fragments, intents, and basic Android architecture.",
            pdf: "assets/pdf/certificates/android-fundamental.pdf",
            date: "3 October 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/android-fundamental.pdf"
        },
        7: {
            title: "Belajar Prinsip Pemrograman SOLID",
            description: "SOLID principles in object-oriented programming. Learned about single responsibility, open-closed, Liskov substitution, interface segregation, and dependency inversion.",
            pdf: "assets/pdf/certificates/solid-principles.pdf",
            date: "6 October 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/solid-principles.pdf"
        },
        8: {
            title: "Belajar Pengembangan Aplikasi Android Intermediate",
            description: "Intermediate Android development. Covered databases, networking, background processing, and advanced UI components.",
            pdf: "assets/pdf/certificates/android-intermediate.pdf",
            date: "12 November 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/android-intermediate.pdf"
        },
        9: {
            title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
            description: "Modern Android UI development with Jetpack Compose. Learned declarative UI, state management, and Material Design 3.",
            pdf: "assets/pdf/certificates/jetpack-compose.pdf",
            date: "30 November 2023",
            category: "android",
            issuer: "Bangkit Academy",
            downloadLink: "assets/pdf/certificates/jetpack-compose.pdf"
        },
        
        // UI/UX Certificates
        10: {
            title: "Mastering Component (Figma) – Ysra Academy",
            description: "Advanced Figma component mastery. Learned about design systems, auto-layout, components, variants, and prototyping.",
            pdf: "assets/pdf/certificates/figma-component.pdf",
            date: "26 June 2024",
            category: "uiux",
            issuer: "Ysra Academy",
            downloadLink: "assets/pdf/certificates/figma-component.pdf"
        },
        
        // EXCEL Certificates
        11: {
            title: "Exploring Microsoft Excel – Home Tab",
            description: "Comprehensive guide to Excel Home tab features. Covered formatting, styling, basic formulas, and data manipulation.",
            pdf: "assets/pdf/certificates/excel-home-tab.pdf",
            date: "1 February 2026",
            category: "excel",
            issuer: "MySkill",
            downloadLink: "assets/pdf/certificates/excel-home-tab.pdf"
        },
        12: {
            title: "Microsoft Excel Features",
            description: "Advanced Excel features and functionalities. Learned about pivot tables, advanced formulas, data analysis, and automation.",
            pdf: "assets/pdf/certificates/excel-features.pdf",
            date: "1 February 2026",
            category: "excel",
            issuer: "MySkill",
            downloadLink: "assets/pdf/certificates/excel-features.pdf"
        },
        13: {
            title: "Worksheet and Workbook in Microsoft Excel",
            description: "Mastering Excel worksheets and workbooks. Covered sheet management, linking, consolidation, and advanced workbook techniques.",
            pdf: "assets/pdf/certificates/excel-worksheet.pdf",
            date: "2 February 2026",
            category: "excel",
            issuer: "MySkill",
            downloadLink: "assets/pdf/certificates/excel-worksheet.pdf"
        },
        
        // AWARDS
        14: {
            title: "Bangkit Academy 2023 Batch 2",
            description: "Graduated from Bangkit Academy 2023 Batch 2, Android Learning Path. Organized by Google, Gojek, Tokopedia & Traveloka under Kampus Merdeka.",
            pdf: "assets/pdf/certificates/bangkit-academy.pdf",
            date: "19 January 2024",
            category: "award",
            issuer: "Kemendikbudristek",
            downloadLink: "assets/pdf/certificates/bangkit-academy.pdf"
        },
        15: {
            title: "Program Kreativitas Mahasiswa (PKM-KC)",
            description: "PKM-KC award recipient for VigilantEyes anti-bullying system project. Funded by Ministry of Education, Culture, Research and Technology.",
            pdf: "assets/pdf/certificates/pkmkc.pdf",
            date: "22 April 2024",
            category: "award",
            issuer: "Universitas Indraprasta PGRI",
            downloadLink: "assets/pdf/certificates/pkmkc.pdf"
        },
        16: {
            title: "Mentor IT – Wowlab Japan IT Course",
            description: "IT Mentor & Team Leader at Wowlab Japan IT Course. Guided participants, managed learning materials, and evaluated student progress.",
            pdf: "assets/pdf/certificates/wowlab-mentor.pdf",
            date: "1 September 2025",
            category: "award",
            issuer: "Wowlab Japan",
            downloadLink: "assets/pdf/certificates/wowlab-mentor.pdf"
        },
        
        // OTHER Certificates
        17: {
            title: "Digital Skill Fair 12.0",
            description: "Participated in Digital Skill Fair 12.0. Learned about latest digital skills, technology trends, and career opportunities in tech industry.",
            pdf: "assets/pdf/certificates/digital-skill-fair.pdf",
            date: "24 February 2023",
            category: "other",
            issuer: "Dibimbing",
            downloadLink: "assets/pdf/certificates/digital-skill-fair.pdf"
        },
        18: {
            title: "Kickstart Your Front End Developer Career with React JS",
            description: "Front-end development with React JS. Covered components, state management, hooks, and building interactive web applications.",
            pdf: "assets/pdf/certificates/react-js.pdf",
            date: "24 July 2023",
            category: "other",
            issuer: "Edspert.id",
            downloadLink: "assets/pdf/certificates/react-js.pdf"
        },
        19: {
            title: "Seminar ABCD (Entrepreneurship)",
            description: "Entrepreneurship seminar by Anak Bangsa Creative Digital. Learned about startup fundamentals, business models, and digital entrepreneurship.",
            pdf: "assets/pdf/certificates/entrepreneurship-seminar.pdf",
            date: "12 December 2023",
            category: "other",
            issuer: "Anak Bangsa Creative Digital",
            downloadLink: "assets/pdf/certificates/entrepreneurship-seminar.pdf"
        },
        20: {
            title: "Introduction to Financial Literacy",
            description: "Basic financial literacy training. Covered budgeting, saving, investment basics, and personal finance management.",
            pdf: "assets/pdf/certificates/financial-literacy.pdf",
            date: "1 February 2026",
            category: "other",
            issuer: "Beasiswa DBS",
            downloadLink: "assets/pdf/certificates/financial-literacy.pdf"
        }
    };
    
    // Open modal when certificate is clicked
    certificateItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (!e.target.classList.contains('view-certificate-btn')) {
                const certId = this.getAttribute('data-id');
                openCertificateModal(certId);
            }
        });
        
        // View button click
        const viewBtn = item.querySelector('.view-certificate-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                const certId = item.getAttribute('data-id');
                openCertificateModal(certId);
            });
        }
    });
    
    // Open modal function
    function openCertificateModal(certId) {
        const certData = certificatesData[certId];
        
        if (certData) {
            // Set certificate info
            document.getElementById('modalCertificateTitle').textContent = certData.title;
            document.getElementById('modalCertificateDescription').textContent = certData.description;
            document.getElementById('modalCertificateDate').textContent = certData.date;
            document.getElementById('modalCertificateCategory').textContent = getCategoryName(certData.category);
            document.getElementById('modalDownloadLink').href = certData.downloadLink;
            
            // Load PDF preview
            loadPDFPreview(certData.pdf, 'pdfModalCanvas', 'pdfModalContainer');
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Get category display name
    function getCategoryName(category) {
        const categories = {
            'android': 'Android Development',
            'uiux': 'UI/UX Design',
            'excel': 'Microsoft Excel',
            'award': 'Award & Recognition',
            'other': 'Other'
        };
        return categories[category] || category;
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close modal events
    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Filter certificates by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter certificates
            let visibleCount = 0;
            certificateItems.forEach(item => {
                const certId = item.getAttribute('data-id');
                const certData = certificatesData[certId];
                
                if (filter === 'all' || certData.category === filter) {
                    item.style.display = 'block';
                    visibleCount++;
                    
                    // Add reveal animation
                    item.classList.remove('reveal');
                    void item.offsetWidth; // Trigger reflow
                    item.classList.add('reveal');
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide no certificates message
            if (visibleCount === 0) {
                noCertificatesMessage.classList.remove('hidden');
                noCertificatesMessage.classList.add('reveal');
            } else {
                noCertificatesMessage.classList.add('hidden');
            }
        });
    });
    
    // Initialize Intersection Observer for reveal animations
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealEls.forEach(el => io.observe(el));
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 15;
        
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 60 + 20;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Create particles on load
    createParticles();
    
});