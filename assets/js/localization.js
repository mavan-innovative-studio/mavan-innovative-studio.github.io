/**
 * Standard i18n Localization Handler
 * Follows best practices for internationalization
 */
class Localization {
    constructor() {
        // Configuration
        this.defaultLang = 'en';
        this.supportedLangs = ['en', 'fa', 'de'];
        this.rtlLangs = ['fa', 'ar', 'he', 'ur']; // RTL languages
        
        // State
        this.currentLang = this.defaultLang;
        this.translations = null;
        
        // Initialize
        this.init();
    }

    /**
     * Initialize the localization system
     */
    async init() {
        // Wait for translations to be available
        if (typeof translations === 'undefined') {
            console.warn('Translations not loaded yet, retrying...');
            setTimeout(() => this.init(), 100);
            return;
        }

        this.translations = translations;
        
        // Detect and set initial language
        this.currentLang = await this.detectLanguage();
        
        // Get stored language name if available
        const storedLangName = this.getStoredLanguageName();
        const langName = storedLangName || this.currentLang.toUpperCase();
        
        this.setLanguage(this.currentLang, langName);

        // Setup event listeners
        this.setupEventListeners();
        
        // Make globally accessible
        window.localization = this;
    }

    /**
     * Detect the appropriate language based on priority:
     * 1. User's stored preference (localStorage)
     * 2. Browser language preference
     * 3. Default language
     */
    async detectLanguage() {
        // Priority 1: Check stored user preference
        const storedLang = this.getStoredLanguage();
        if (storedLang && this.isLanguageSupported(storedLang)) {
            return storedLang;
        }

        // Priority 2: Detect from browser language
        const browserLang = this.getBrowserLanguage();
        if (browserLang && this.isLanguageSupported(browserLang)) {
            return browserLang;
        }

        // Priority 3: Fallback to default
        return this.defaultLang;
    }

    /**
     * Get language from browser preferences
     */
    getBrowserLanguage() {
        // Check navigator.languages (array of preferred languages)
        if (navigator.languages && navigator.languages.length > 0) {
            for (const lang of navigator.languages) {
                const langCode = lang.toLowerCase().split('-')[0];
                if (this.isLanguageSupported(langCode)) {
                    return langCode;
                }
            }
        }

        // Fallback to navigator.language
        if (navigator.language) {
            const langCode = navigator.language.toLowerCase().split('-')[0];
            if (this.isLanguageSupported(langCode)) {
                return langCode;
            }
        }

        // Fallback for older browsers
        if (navigator.userLanguage) {
            const langCode = navigator.userLanguage.toLowerCase().split('-')[0];
            if (this.isLanguageSupported(langCode)) {
                return langCode;
            }
        }

        return null;
    }

    /**
     * Check if a language is supported
     */
    isLanguageSupported(lang) {
        return this.supportedLangs.includes(lang) && 
               this.translations && 
               this.translations[lang];
    }

    /**
     * Get stored language preference from localStorage
     */
    getStoredLanguage() {
        try {
            return localStorage.getItem('selectedLanguage');
        } catch (e) {
            console.warn('localStorage not available:', e);
            return null;
        }
    }

    /**
     * Store language preference in localStorage
     */
    setStoredLanguage(lang) {
        try {
            localStorage.setItem('selectedLanguage', lang);
        } catch (e) {
            console.warn('Failed to save language preference:', e);
        }
    }

    /**
     * Get stored language display name
     */
    getStoredLanguageName() {
        try {
            return localStorage.getItem('selectedLanguageName') || this.currentLang.toUpperCase();
        } catch (e) {
            return null;
        }
    }

    /**
     * Store language display name
     */
    setStoredLanguageName(langName) {
        try {
            localStorage.setItem('selectedLanguageName', langName);
        } catch (e) {
            console.warn('Failed to save language name:', e);
        }
    }

    /**
     * Set the current language and update the UI
     */
    setLanguage(lang, langName = null) {
        if (!this.isLanguageSupported(lang)) {
            console.error(`Language ${lang} is not supported`);
            return;
        }

        this.currentLang = lang;
        this.setStoredLanguage(lang);

        // Get language name if not provided
        if (!langName) {
            const langOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
            if (langOption) {
                langName = langOption.getAttribute('data-lang-name');
            }
        }

        if (langName) {
            this.setStoredLanguageName(langName);
        }

        // Update HTML attributes
        this.updateDocumentAttributes(lang);

        // Update all translatable content
        this.updateContent();

        // Update special components
        this.updateSpecialComponents(lang);

        // Update language display
        this.updateLanguageDisplay(langName || this.getStoredLanguageName() || lang.toUpperCase());
    }

    /**
     * Update document-level attributes (lang, dir)
     */
    updateDocumentAttributes(lang) {
        // Set language attribute
        document.documentElement.setAttribute('lang', lang);

        // Set text direction for RTL languages
        const isRTL = this.rtlLangs.includes(lang);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        
        if (isRTL) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
    }

    /**
     * Update all translatable content on the page
     */
    updateContent() {
        if (!this.translations || !this.translations[this.currentLang]) {
            console.error('Translations not available for language:', this.currentLang);
            return;
        }

        const langTranslations = this.translations[this.currentLang];
        const currentYear = new Date().getFullYear();

        // Update page title
        if (langTranslations['page.title']) {
            document.title = langTranslations['page.title'];
        }

        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (!key) return;

            // Skip elements in special sections (handled separately)
            if (this.isSpecialSection(element)) {
                return;
            }

            const translation = langTranslations[key];
            if (!translation) {
                console.warn(`Translation missing for key: ${key} in language: ${this.currentLang}`);
                return;
            }

            // Replace placeholders
            const processedTranslation = translation.replace(/{year}/g, currentYear);

            // Update element content
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', processedTranslation);
            } else {
                element.textContent = processedTranslation;
            }
        });

        // Update special sections that require HTML structure
        this.updateSpecialSections();
    }

    /**
     * Check if element is in a special section that needs custom handling
     */
    isSpecialSection(element) {
        return element.closest('.hero-title-wrapper, .hero-description, .team-title-wrapper, .contact-title-wrapper, .contact-note') !== null;
    }

    /**
     * Update special sections that require custom HTML structure
     */
    updateSpecialSections() {
        const langTranslations = this.translations[this.currentLang];

        // Hero section
        const heroTitle = document.querySelector('.hero-title-wrapper');
        if (heroTitle && langTranslations['hero.title'] && langTranslations['hero.title.highlight']) {
            heroTitle.innerHTML = `<span data-translate="hero.title">${langTranslations['hero.title']}</span> <em data-translate="hero.title.highlight">${langTranslations['hero.title.highlight']}</em>`;
        }

        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc && langTranslations['hero.description'] && langTranslations['hero.description.mission']) {
            heroDesc.innerHTML = `<span style="font-weight: bold">Mavan</span> <span data-translate="hero.description">${langTranslations['hero.description']}</span> <br><span data-translate="hero.description.mission">${langTranslations['hero.description.mission']}</span>`;
        }

        // Team section
        const teamTitle = document.querySelector('.team-title-wrapper');
        if (teamTitle && langTranslations['team.title'] && langTranslations['team.title.highlight']) {
            teamTitle.innerHTML = `<span data-translate="team.title">${langTranslations['team.title']}</span> <em data-translate="team.title.highlight">${langTranslations['team.title.highlight']}</em>`;
        }

        // Contact section
        const contactTitle = document.querySelector('.contact-title-wrapper');
        if (contactTitle && langTranslations['contact.title'] && langTranslations['contact.title.highlight']) {
            contactTitle.innerHTML = `<span data-translate="contact.title">${langTranslations['contact.title']}</span> <em data-translate="contact.title.highlight">${langTranslations['contact.title.highlight']}</em>`;
        }

        const contactNote = document.querySelector('.contact-note');
        if (contactNote && langTranslations['contact.description.note'] && langTranslations['contact.description.link'] && langTranslations['contact.description.note2']) {
            contactNote.innerHTML = `<span data-translate="contact.description.note">${langTranslations['contact.description.note']}</span> <a rel="nofollow" href="https://templatemo.com/contact" target="_parent" data-translate="contact.description.link">${langTranslations['contact.description.link']}</a> <span data-translate="contact.description.note2">${langTranslations['contact.description.note2']}</span>`;
        }
    }

    /**
     * Update special components (images, carousels, etc.)
     */
    updateSpecialComponents(lang) {
        // Update JoJo header image
        this.updateJojoHeaderImage(lang);

        // Reinitialize carousel with RTL support if needed
        const isRTL = this.rtlLangs.includes(lang);
        this.reinitializeOwlCarousel(isRTL);
    }

    /**
     * Update JoJo header image based on language
     */
    updateJojoHeaderImage(lang) {
        const jojoHeaderImage = document.getElementById('jojo-header-image');
        if (jojoHeaderImage) {
            jojoHeaderImage.src = lang === 'fa' 
                ? 'assets/images/jojo-header-fa.png' 
                : 'assets/images/jojo-header-en.png';
        }
    }

    /**
     * Reinitialize Owl Carousel with RTL support
     */
    reinitializeOwlCarousel(isRTL) {
        if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
            return;
        }

        const $owlCarousel = jQuery('#testimonials .owl-carousel');
        if (!$owlCarousel.length) {
            return;
        }

        // Destroy existing carousel
        if ($owlCarousel.hasClass('owl-loaded')) {
            $owlCarousel.trigger('destroy.owl.carousel');
            $owlCarousel.removeClass('owl-loaded owl-drag');
            $owlCarousel.find('.owl-stage-outer').children().unwrap();
        }

        // Determine configuration
        const teamItemCount = $owlCarousel.find('.item').length || 0;
        const desktopItems = teamItemCount >= 2 ? 2 : Math.max(teamItemCount, 1);
        const mobileItems = Math.min(1, Math.max(teamItemCount, 1));
        const enableControls = teamItemCount > desktopItems;

        // Toggle centering class
        if (enableControls) {
            $owlCarousel.removeClass('center-stage');
        } else {
            $owlCarousel.addClass('center-stage');
        }

        // Reinitialize with RTL support
        setTimeout(() => {
            $owlCarousel.owlCarousel({
                rtl: isRTL,
                loop: false,
                rewind: false,
                center: false,
                stagePadding: 0,
                margin: 30,
                nav: enableControls,
                dots: enableControls,
                mouseDrag: enableControls,
                touchDrag: enableControls,
                pullDrag: enableControls,
                responsive: {
                    0: { items: mobileItems },
                    600: { items: mobileItems },
                    1000: { items: desktopItems }
                }
            });
        }, 50);
    }

    /**
     * Update the current language display in the UI
     */
    updateLanguageDisplay(langName) {
        const currentLangElement = document.getElementById('current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = langName;
        }
    }

    /**
     * Setup event listeners for language switching
     */
    setupEventListeners() {
        // Handle language option clicks using event delegation
        document.addEventListener('click', (e) => {
            const langOption = e.target.closest('.lang-option');
            if (!langOption) return;

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            const lang = langOption.getAttribute('data-lang');
            const langName = langOption.getAttribute('data-lang-name');

            if (lang && this.isLanguageSupported(lang)) {
                this.setLanguage(lang, langName);
                
                // Close dropdown
                const submenu = langOption.closest('.submenu');
                if (submenu) {
                    const submenuUl = submenu.querySelector('ul');
                    if (submenuUl) {
                        submenuUl.classList.remove('active');
                    }
                }
            } else {
                console.error('Invalid or unsupported language:', lang);
            }
        }, true); // Use capture phase

        // Update navigation links when language changes
        // Use MutationObserver to watch for language changes
        this.observeLanguageChanges();
    }

    /**
     * Observe for language changes and update navigation links
     */
    observeLanguageChanges() {
        // Update navigation links when language is set
        const originalSetLanguage = this.setLanguage.bind(this);
        this.setLanguage = (lang, langName) => {
            originalSetLanguage(lang, langName);
            this.updateNavigationLinks();
        };

        // Also update on page visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.updateNavigationLinks();
            }
        });

        // Update on initial load
        this.updateNavigationLinks();
    }

    /**
     * Update navigation links to maintain language context
     */
    updateNavigationLinks() {
        // Update all links that point to HTML files
        const allLinks = document.querySelectorAll('a[href$=".html"]');
        
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            // Extract filename and create proper URL
            const filename = href.split('/').pop();
            const url = new URL(filename, window.location.origin);
            
            // Remove any existing lang parameter (we use localStorage instead)
            url.searchParams.delete('lang');
            
            // Only update if different to avoid unnecessary DOM manipulation
            if (link.href !== url.toString()) {
                link.href = url.toString();
            }
        });
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Get translation for a key
     */
    t(key, params = {}) {
        if (!this.translations || !this.translations[this.currentLang]) {
            console.warn(`Translations not available for language: ${this.currentLang}`);
            return key;
        }

        let translation = this.translations[this.currentLang][key];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }

        // Replace placeholders
        if (params.year) {
            translation = translation.replace(/{year}/g, params.year);
        } else {
            translation = translation.replace(/{year}/g, new Date().getFullYear());
        }

        // Replace other parameters
        Object.keys(params).forEach(param => {
            if (param !== 'year') {
                translation = translation.replace(new RegExp(`{${param}}`, 'g'), params[param]);
            }
        });

        return translation;
    }
}

// Early initialization: Set HTML attributes immediately based on stored preference
// This ensures the page direction and language are set before content renders
(function() {
    try {
        const storedLang = localStorage.getItem('selectedLanguage');
        const storedLangName = localStorage.getItem('selectedLanguageName');
        const supportedLangs = ['en', 'fa', 'de'];
        const rtlLangs = ['fa', 'ar', 'he', 'ur'];
        
        if (storedLang && supportedLangs.includes(storedLang)) {
            const isRTL = rtlLangs.includes(storedLang);
            document.documentElement.setAttribute('lang', storedLang);
            document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            if (isRTL) {
                document.body.classList.add('rtl');
            } else {
                document.body.classList.remove('rtl');
            }
            
            // Update language display if element exists
            const currentLangElement = document.getElementById('current-lang');
            if (currentLangElement && storedLangName) {
                currentLangElement.textContent = storedLangName;
            }
        }
    } catch (e) {
        console.warn('Failed to set early language attributes:', e);
    }
})();

// Initialize localization when DOM is ready
let localization;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        localization = new Localization();
    });
} else {
    localization = new Localization();
}

// Global API for backward compatibility
window.getCurrentLanguage = function() {
    return localization ? localization.getCurrentLanguage() : 'en';
};

window.setLanguage = function(lang, langName) {
    if (localization) {
        localization.setLanguage(lang, langName);
    }
};

window.t = function(key, params) {
    return localization ? localization.t(key, params) : key;
};

// Backward compatibility: ensureLanguageConsistency
// Note: With the new standard approach, language consistency is maintained automatically
// This function is kept for backward compatibility with test files
window.ensureLanguageConsistency = function() {
    if (localization) {
        // Simply ensure the current language matches stored preference
        const storedLang = localization.getStoredLanguage();
        if (storedLang && localization.isLanguageSupported(storedLang)) {
            if (localization.getCurrentLanguage() !== storedLang) {
                localization.setLanguage(storedLang);
            }
        }
        localization.updateNavigationLinks();
    }
};
