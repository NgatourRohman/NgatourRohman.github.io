// Simple Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dark mode
    initDarkMode();

    // Create particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 15;

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

    // Dark mode initialization
    function initDarkMode() {
        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        if (!themeToggle) return;

        // Check for saved theme preference or default to dark
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme') ||
            (prefersDark.matches ? 'dark' : 'light');

        // Apply theme
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
        }

        // Toggle theme
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');

            if (isDark) {
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (moonIcon) moonIcon.classList.add('hidden');
                localStorage.setItem('theme', 'dark');
            } else {
                if (sunIcon) sunIcon.classList.add('hidden');
                if (moonIcon) moonIcon.classList.remove('hidden');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length > 0) {
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
    }

    // Set current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip if href is just "#"
        if (anchor.getAttribute('href') === '#') return;

        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typed.js initialization
    if (document.querySelector('.typedText')) {
        const typed = new Typed('.typedText', {
            strings: ['Android Development', 'Kotlin Programming', 'UI/UX Design',
                'Mobile Architecture', 'Problem Solving'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Create particles on load
    createParticles();

    // Add loading class when page is loaded
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Initialize certificate preview if on index page
    if (document.querySelector('.certificate-item[data-certificate]')) {
        initCertificatePreview();
    }

    // Initialize project card click handlers
    initProjectCards();
});

// Projects data with detail links
const projectsList = [
    {
        id: "fruit-app",
        title: "Fruit Classifier CNN Mobile",
        description: "Android application for classifying 10 tropical fruits using Convolutional Neural Network.",
        image: "../assets/images/projects/fruit-app.png",
        category: "AI/ML Research",
        tags: ["Kotlin", "TorchScript", "MobileNetV2", "CNN"],
        type: "Thesis Project",
        detailUrl: "pages/project-detail.html?id=fruit-app"
    },
    {
        id: "vigilanteyes",
        title: "VigilantEyes",
        description: "Android-based bullying prevention tool integrated with CCTV systems for safer school environments.",
        image: "../assets/images/projects/vigilanteyes.png",
        category: "PKM-KC",
        tags: ["Android", "Flutter", "UI/UX", "Prototype"],
        type: "PKM-KC 2024",
        detailUrl: "pages/project-detail.html?id=vigilanteyes"
    },
    {
        id: "paskibra-expert",
        title: "Sistem Pakar Tes Mental Paskibra",
        description: "Expert system for psychological testing of Paskibra candidates using training data and rule-based reasoning.",
        image: "../assets/images/projects/paskibra-expert.png",
        category: "AI/Expert System",
        tags: ["Python", "Expert System", "Training Data", "Rule-Based"],
        type: "AI Project",
        detailUrl: "pages/project-detail.html?id=paskibra-expert"
    },
    {
        id: "trashure",
        title: "Trashure - Waste Management",
        description: "Capstone project for Bangkit Academy 2023. Team-based waste management app with AI classification features.",
        image: "../assets/images/projects/trashure.png",
        category: "Bangkit Capstone",
        tags: ["Kotlin", "Jetpack Compose", "ML Kit", "Team Project"],
        type: "Bangkit Academy",
        detailUrl: "pages/project-detail.html?id=trashure"
    },
    {
        id: "ahp-optic",
        title: "SPK AHP Lensa - Optik Buana Surya",
        description: "Decision support system for eyeglass lens selection using Analytic Hierarchy Process methodology.",
        image: "../assets/images/projects/ahp-optic.png",
        category: "Web Application",
        tags: ["PHP", "MySQL", "JavaScript", "AHP Method"],
        type: "Web Application",
        detailUrl: "pages/project-detail.html?id=ahp-optic"
    },
    {
        id: "library",
        title: "Library Management System",
        description: "Simple web application for book and borrowing management with admin and user interfaces.",
        image: "../assets/images/projects/library.png",
        category: "Web Application",
        tags: ["PHP", "MySQL", "Bootstrap"],
        type: "Academic Project",
        detailUrl: "pages/project-detail.html?id=library"
    }
];

// Initialize project card click handlers
function initProjectCards() {
    // Get all project cards
    const projectCards = document.querySelectorAll('#projects .project-card');

    projectCards.forEach((card, index) => {
        if (index < projectsList.length) {
            const project = projectsList[index];

            // Add click event to entire card
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking on links inside the card
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }

                // Navigate to project detail page
                window.location.href = project.detailUrl;
            });

            // Update "View Details" link
            const viewDetailsLink = card.querySelector('.view-details-link');
            if (viewDetailsLink) {
                viewDetailsLink.href = project.detailUrl;

                // Prevent card click when clicking link
                viewDetailsLink.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.transition = 'transform 0.3s ease';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        }
    });
}

// Certificate Preview Modal
function initCertificatePreview() {
    console.log('Initializing certificate preview...');
    
    const certificateItems = document.querySelectorAll('.certificate-item[data-certificate]');
    
    // Debug log
    console.log('Certificate items found:', certificateItems.length);

    // Certificate preview data
    const previewCertificates = {
        15: { // PKM-KC Award (Latest)
            title: "PKM-KC Awardee 2024",
            description: "Program Kreativitas Mahasiswa - Karya Cipta. Received recognition for VigilantEyes anti-bullying system project from Ministry of Education, Culture, Research and Technology.",
            pdf: "assets/pdf/certificates/pkmkc.pdf",
            date: "22 April 2024",
            category: "Award",
            issuer: "Universitas Indraprasta PGRI",
            downloadLink: "assets/pdf/certificates/pkmkc.pdf"
        },
        20: { // Financial Literacy (Second latest)
            title: "Introduction to Financial Literacy",
            description: "Basic financial literacy training covering budgeting, saving, investment basics, and personal finance management. Issued by DBS Beasiswa Program.",
            pdf: "assets/pdf/certificates/financial-literacy.pdf",
            date: "1 February 2026",
            category: "Other",
            issuer: "Beasiswa DBS",
            downloadLink: "assets/pdf/certificates/financial-literacy.pdf"
        },
        12: { // Excel Features (Third latest)
            title: "Microsoft Excel Features",
            description: "Advanced Excel features and functionalities. Learned about pivot tables, advanced formulas, data analysis, and automation techniques.",
            pdf: "assets/pdf/certificates/excel-features.pdf",
            date: "1 February 2026",
            category: "Excel",
            issuer: "MySkill",
            downloadLink: "assets/pdf/certificates/excel-features.pdf"
        }
    };

    // Check if modal exists, if not create it
    let modal = document.getElementById('certificatePreviewModal');
    const closeBtn = document.getElementById('closePreviewModal');
    
    console.log('Modal found:', !!modal);
    console.log('Close button found:', !!closeBtn);

    // Show certificate modal function
    function showCertificateModal(certData) {
        console.log('Opening certificate modal for:', certData.title);
        
        // Update modal content
        document.getElementById('previewCertificateTitle').textContent = certData.title;
        document.getElementById('previewCertificateDescription').textContent = certData.description;
        document.getElementById('previewCertificateDate').textContent = certData.date;
        document.getElementById('previewCertificateCategory').textContent = certData.category;
        document.getElementById('previewDownloadLink').href = certData.downloadLink;

        // Load PDF using function from pdfPreview.js
        if (typeof window.loadPDFPreview === 'function') {
            console.log('Calling loadPDFPreview from pdfPreview.js');
            window.loadPDFPreview(certData.pdf, 'pdfPreviewCanvas', 'pdfPreviewContainer');
        } else {
            console.error('loadPDFPreview function not found!');
            // Fallback if pdfPreview.js not loaded
            loadPDFFallback(certData.pdf);
        }

        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Fallback PDF loading function
    function loadPDFFallback(pdfUrl) {
        console.log('Using fallback PDF loader');
        const container = document.getElementById('pdfPreviewContainer');
        const canvas = document.getElementById('pdfPreviewCanvas');
        const loading = container.querySelector('.pdf-loading');
        
        if (!loading || !canvas) return;
        
        loading.classList.remove('hidden');
        canvas.classList.add('hidden');
        
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(pdf => {
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 1.3 });
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                
                page.render(renderContext).promise.then(() => {
                    loading.classList.add('hidden');
                    canvas.classList.remove('hidden');
                });
            });
        }).catch(error => {
            console.error('Error loading PDF:', error);
            loading.innerHTML = `
                <div class="pdf-error text-center py-8">
                    <i class="uil uil-file-times text-5xl text-red-500 mb-4"></i>
                    <p class="text-slate-600 dark:text-slate-300 mb-2">Failed to load PDF preview</p>
                    <p class="text-sm text-slate-500">Click download to view full certificate</p>
                </div>
            `;
        });
    }

    // Open preview modal on click
    certificateItems.forEach(item => {
        item.addEventListener('click', function (e) {
            console.log('Certificate item clicked');
            const certId = this.getAttribute('data-certificate');
            const certData = previewCertificates[certId];

            if (certData) {
                showCertificateModal(certData);
            } else {
                console.error('Certificate data not found for ID:', certId);
            }
        });
    });

    // Setup close button if it exists
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            console.log('Close button clicked');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    console.log('Certificate preview initialization complete');
}

// Initialize when page loads
window.addEventListener('load', () => {
    // Initialize enhanced project cards
    if (document.querySelector('#projects')) {
        initProjectCards();
    }

    // Add loaded class for CSS transitions
    document.body.classList.add('loaded');
    
    console.log('Page fully loaded');
});