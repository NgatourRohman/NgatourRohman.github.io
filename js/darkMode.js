// Dark Mode Toggle - Universal for all pages
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    if (!themeToggle || !sunIcon || !moonIcon) return;
    
    // Check for saved theme or system preference
    const currentTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function () {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const isDark = e.matches;
            document.documentElement.classList.toggle('dark', isDark);
            // Update icons
            if (isDark) {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDarkMode);