// ==========================================================================
// Main JavaScript File
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileNav = document.querySelector('.header__nav-mobile');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('header__menu-toggle--open');
            mobileNav.classList.toggle('header__nav-mobile--open');
            
            // Update aria-expanded attribute for accessibility
            const isOpen = mobileNav.classList.contains('header__nav-mobile--open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('.header__nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('header__menu-toggle--open');
                mobileNav.classList.remove('header__nav-mobile--open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    // Button loading state example
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only apply loading state to buttons with specific classes
            if (this.classList.contains('btn--primary') && this.textContent.includes('Comenzar')) {
                e.preventDefault();
                
                const originalText = this.textContent;
                this.classList.add('btn--loading');
                this.textContent = '';
                
                // Remove loading state after 2 seconds (simulate API call)
                setTimeout(() => {
                    this.classList.remove('btn--loading');
                    this.textContent = originalText;
                    
                    // Show success message or redirect
                    alert('¡Acción completada con éxito!');
                }, 2000);
            }
        });
    });
    
    // Form validation example (if forms are added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Submit form or show success message
                console.log('Form is valid - ready to submit');
            }
        });
    });
    
    // Dark mode toggle (if implemented later)
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Load dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
    
    // Add enhanced accessibility
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
            const openMenu = document.querySelector('.header__nav-mobile--open');
            if (openMenu) {
                const menuToggle = document.querySelector('.header__menu-toggle');
                menuToggle.classList.remove('header__menu-toggle--open');
                openMenu.classList.remove('header__nav-mobile--open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        }
    });
    
    console.log('SASS 7-1 Project initialized successfully! 🎉');
});
