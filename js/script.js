// Simple Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    
    // Dark mode sudah dihandle oleh darkMode.js
    // Create particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
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

    // Reveal on scroll
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
});

// Certificate Preview Modal (for index.html)
function initCertificatePreview() {
    const certificateItems = document.querySelectorAll('.certificate-item[data-certificate]');
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('certificatePreviewModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'certificatePreviewModal';
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="modal-content relative max-w-4xl">
                <button id="closePreviewModal" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                    <i class="uil uil-times text-xl"></i>
                </button>
                <div class="p-1" style="min-height: 500px;">
                    <div id="pdfPreviewContainer" class="w-full h-full flex items-center justify-center">
                        <div class="pdf-loading flex flex-col items-center justify-center py-12">
                            <div class="w-16 h-16 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p class="text-slate-600 dark:text-slate-300">Loading PDF preview...</p>
                        </div>
                        <canvas id="pdfPreviewCanvas" class="hidden w-full h-auto rounded-lg"></canvas>
                    </div>
                </div>
                <div class="p-6 border-t border-slate-200 dark:border-slate-700">
                    <h3 id="previewCertificateTitle" class="font-bold text-2xl mb-2"></h3>
                    <p id="previewCertificateDescription" class="text-slate-600 dark:text-slate-300 mb-4"></p>
                    <div class="flex flex-wrap gap-3 items-center justify-between">
                        <div class="flex items-center gap-4">
                            <span id="previewCertificateDate" class="px-3 py-1 rounded-full glass text-sm"></span>
                            <span id="previewCertificateCategory" class="px-3 py-1 rounded-full bg-brand-500/20 text-brand-600 text-sm font-medium"></span>
                        </div>
                        <a id="previewDownloadLink" href="#" download class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium hover:shadow-neon transition-all">
                            <i class="uil uil-download-alt"></i>
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Certificate preview data (Latest 3 certificates)
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
    
    // Open preview modal
    certificateItems.forEach(item => {
        item.addEventListener('click', function () {
            const certId = this.getAttribute('data-certificate');
            const certData = previewCertificates[certId];
            
            if (certData) {
                document.getElementById('previewCertificateTitle').textContent = certData.title;
                document.getElementById('previewCertificateDescription').textContent = certData.description;
                document.getElementById('previewCertificateDate').textContent = certData.date;
                document.getElementById('previewCertificateCategory').textContent = certData.category;
                document.getElementById('previewDownloadLink').href = certData.downloadLink;
                
                // Load and display PDF
                loadPDFPreview(certData.pdf, 'pdfPreviewCanvas', 'pdfPreviewContainer');
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Load PDF and display first page
    function loadPDFPreview(pdfUrl, canvasId, containerId) {
        const container = document.getElementById(containerId);
        const canvas = document.getElementById(canvasId);
        const loading = container.querySelector('.pdf-loading');
        
        // Show loading, hide canvas
        loading.classList.remove('hidden');
        canvas.classList.add('hidden');
        
        // Load PDF using pdf.js
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(pdf => {
            // Get first page
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 1.3 });
                
                // Prepare canvas using PDF page dimensions
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                // Render PDF page on canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                
                page.render(renderContext).promise.then(() => {
                    // Hide loading, show canvas
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
    
    // Close preview modal
    const closePreviewBtn = document.getElementById('closePreviewModal');
    if (closePreviewBtn) {
        closePreviewBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}