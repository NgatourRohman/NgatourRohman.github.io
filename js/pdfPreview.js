// PDF Preview System for Certificate Cards
document.addEventListener('DOMContentLoaded', function () {
    // Initialize PDF preview for all certificate cards
    initPDFPreviews();
    
    // Initialize on certificates page
    if (document.querySelector('.certificate-grid')) {
        initCertificatePage();
    }
});

// Initialize PDF previews for all certificate cards
function initPDFPreviews() {
    const pdfContainers = document.querySelectorAll('.pdf-preview-container');
    
    pdfContainers.forEach(container => {
        const pdfUrl = container.getAttribute('data-pdf');
        if (pdfUrl) {
            loadPDFThumbnail(container, pdfUrl);
        }
    });
}

// Load PDF thumbnail for preview
function loadPDFThumbnail(container, pdfUrl) {
    const loading = container.querySelector('.pdf-loading');
    const canvas = container.querySelector('.pdf-canvas');
    
    // Set loading state
    if (loading) loading.classList.remove('hidden');
    if (canvas) canvas.classList.add('hidden');
    
    // Load PDF using pdf.js
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    
    loadingTask.promise.then(pdf => {
        // Get first page for thumbnail
        pdf.getPage(1).then(page => {
            // Calculate scale to fit container (192px height)
            const viewport = page.getViewport({ scale: 0.5 });
            
            // Prepare canvas
            const context = canvas.getContext('2d');
            canvas.height = 192;
            canvas.width = (viewport.width / viewport.height) * 192;
            
            // Create custom viewport for thumbnail
            const customViewport = page.getViewport({ 
                scale: 192 / viewport.height 
            });
            
            // Render PDF page on canvas
            const renderContext = {
                canvasContext: context,
                viewport: customViewport
            };
            
            page.render(renderContext).promise.then(() => {
                // Hide loading, show canvas
                if (loading) loading.classList.add('hidden');
                if (canvas) canvas.classList.remove('hidden');
            });
        });
    }).catch(error => {
        console.error('Error loading PDF thumbnail:', error);
        showPDFError(container);
    });
}

// Show PDF error state
function showPDFError(container) {
    const loading = container.querySelector('.pdf-loading');
    if (loading) {
        loading.innerHTML = `
            <div class="text-center p-4">
                <div class="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="uil uil-file text-slate-500 dark:text-slate-400"></i>
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-sm">PDF Preview</p>
                <p class="text-slate-500 dark:text-slate-400 text-xs">Click to view</p>
            </div>
        `;
    }
}

// Initialize certificate page functionality
function initCertificatePage() {
    // Add intersection observer for lazy loading PDFs
    const pdfContainers = document.querySelectorAll('.pdf-preview-container');
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const pdfUrl = container.getAttribute('data-pdf');
                
                if (pdfUrl && !container.dataset.loaded) {
                    loadPDFThumbnail(container, pdfUrl);
                    container.dataset.loaded = true;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    pdfContainers.forEach(container => {
        io.observe(container);
    });
}

// Global function to load PDF preview in modal
function loadPDFPreview(pdfUrl, canvasId, containerId) {
    const container = document.getElementById(containerId);
    const canvas = document.getElementById(canvasId);
    const loading = container.querySelector('.pdf-loading');
    
    if (!container || !canvas) return;
    
    // Show loading, hide canvas
    if (loading) loading.classList.remove('hidden');
    canvas.classList.add('hidden');
    
    // Clear previous content
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Load PDF using pdf.js
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    
    loadingTask.promise.then(pdf => {
        // Get first page
        pdf.getPage(1).then(page => {
            const viewport = page.getViewport({ scale: 1.3 });
            
            // Prepare canvas using PDF page dimensions
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            // Render PDF page on canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            
            page.render(renderContext).promise.then(() => {
                // Hide loading, show canvas
                if (loading) loading.classList.add('hidden');
                canvas.classList.remove('hidden');
            });
        });
    }).catch(error => {
        console.error('Error loading PDF preview:', error);
        if (loading) {
            loading.innerHTML = `
                <div class="pdf-error text-center py-8">
                    <i class="uil uil-file-times text-5xl text-red-500 mb-4"></i>
                    <p class="text-slate-600 dark:text-slate-300 mb-2">Failed to load PDF preview</p>
                    <p class="text-sm text-slate-500">Click download to view full certificate</p>
                </div>
            `;
        }
    });
}