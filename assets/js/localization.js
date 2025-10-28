// Localization handler
class Localization {
    constructor() {
        this.currentLang = 'en'; // Default fallback
        this.init();
    }

    // Country to language mapping
    getCountryLanguageMap() {
        return {
            // Persian countries
            'IR': 'fa', // Iran
            'AF': 'fa', // Afghanistan
            'TJ': 'fa', // Tajikistan
            
            // German countries
            'DE': 'de', // Germany
            'AT': 'de', // Austria
            'CH': 'de', // Switzerland
            'LI': 'de', // Liechtenstein
            'LU': 'de', // Luxembourg
            'BE': 'de', // Belgium (partial)
            
            // Default to English for all other countries
        };
    }

    // Detect language based on URL parameter, stored preference, or country
    async detectLanguage() {
        // 1. Check URL parameter first (highest priority)
        const urlLang = this.getLanguageFromURL();
        if (urlLang && translations[urlLang]) {
            console.log('Language detected from URL:', urlLang);
            return urlLang;
        }

        // 2. Check stored preference
        const storedLang = this.getStoredLanguage();
        if (storedLang && translations[storedLang]) {
            console.log('Language detected from storage:', storedLang);
            return storedLang;
        }

        // 3. Detect from country (only if no URL parameter or stored preference)
        try {
            const country = await this.detectCountry();
            const countryLangMap = this.getCountryLanguageMap();
            const detectedLang = countryLangMap[country] || 'en';
            console.log('Language detected from country:', country, '->', detectedLang);
            return detectedLang;
        } catch (error) {
            console.log('Country detection failed, using English as default:', error);
            return 'en';
        }
    }

    // Get language from URL parameter
    getLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    }

    // Detect user's country using IP geolocation
    async detectCountry() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return data.country_code;
        } catch (error) {
            // Fallback to browser language detection
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('fa') || browserLang.startsWith('prs')) {
                return 'IR'; // Assume Iran for Persian language
            } else if (browserLang.startsWith('de')) {
                return 'DE'; // Assume Germany for German language
            }
            return 'US'; // Default to US (English)
        }
    }

    // Update URL with language parameter
    updateURL(lang) {
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        
        // Update URL without page reload
        window.history.replaceState({}, '', url);
    }

    async init() {
        // Wait for language detection to complete first
        this.currentLang = await this.detectLanguage();
        
        // Set initial language immediately
        this.setLanguage(this.currentLang);

        // Add event listeners using event delegation to work with existing menu system
        const attachLangHandlers = () => {
            // Use event delegation on the document to catch clicks on language options
            document.addEventListener('click', (e) => {
                if (e.target.closest('.lang-option')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const langOption = e.target.closest('.lang-option');
                    const lang = langOption.getAttribute('data-lang');
                    const langName = langOption.getAttribute('data-lang-name');
                    
                    this.setLanguage(lang, langName);
                    
                    // Close the dropdown after selection
                    const submenu = langOption.closest('.submenu');
                    if (submenu) {
                        submenu.querySelector('ul').classList.remove('active');
                    }
                }
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', attachLangHandlers, { once: true });
        } else {
            attachLangHandlers();
        }
    }

    getStoredLanguage() {
        return localStorage.getItem('selectedLanguage');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('selectedLanguage', lang);
    }

    getStoredLanguageName() {
        return localStorage.getItem('selectedLanguageName');
    }

    setStoredLanguageName(langName) {
        localStorage.setItem('selectedLanguageName', langName);
    }

    setLanguage(lang, langName = null) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        this.setStoredLanguage(lang);
        
        // Update URL with language parameter
        this.updateURL(lang);
        
        // Get language name from attribute if not provided
        if (!langName) {
            const langOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
            if (langOption) {
                langName = langOption.getAttribute('data-lang-name');
            }
        }
        
        if (langName) {
            this.setStoredLanguageName(langName);
        }
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Update direction for RTL languages (Persian)
        const isRTL = lang === 'fa';
        if (isRTL) {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }

        // Update all translatable elements
        this.updateContent();
        
        // Update JoJo header image
        this.updateJojoHeaderImage(lang);
        
        // Reinitialize Owl Carousel with RTL support
        this.reinitializeOwlCarousel(isRTL);
        
        // Update current language display
        this.updateCurrentLanguageDisplay(langName || this.getStoredLanguageName() || 'EN');
        
        // Update navigation links with language parameter
        this.updateNavigationLinks();
    }

    reinitializeOwlCarousel(isRTL) {
        // Check if jQuery and Owl Carousel are available
        if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
            const $owlCarousel = jQuery('#testimonials .owl-carousel');
            
            if ($owlCarousel.length) {
                // Destroy existing carousel safely
                if ($owlCarousel.hasClass('owl-loaded')) {
                    $owlCarousel.trigger('destroy.owl.carousel');
                    $owlCarousel.removeClass('owl-loaded owl-drag');
                    $owlCarousel.find('.owl-stage-outer').children().unwrap();
                }

                // Determine item count and controls
                const teamItemCount = $owlCarousel.find('.item').length || 0;
                const desktopItems = teamItemCount >= 2 ? 2 : Math.max(teamItemCount, 1);
                const enableControls = teamItemCount > desktopItems;

                // Toggle centering class when there is nothing to scroll
                if (enableControls) {
                    $owlCarousel.removeClass('center-stage');
                } else {
                    $owlCarousel.addClass('center-stage');
                }
                const mobileItems = Math.min(1, Math.max(teamItemCount, 1));
                
                // Reinitialize with RTL setting and without loop/clones
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
        }
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-translate]');
        const currentYear = new Date().getFullYear();
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[this.currentLang][key];
            
            if (translation) {
                // Replace {year} placeholder with current year
                translation = translation.replace('{year}', currentYear);
                
                // Check if it's an input/textarea placeholder
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                } else {
                    // For regular text content
                    element.textContent = translation;
                }
            }
        });

        // Update page title
        this.updatePageTitle();
        
        // Handle special cases with HTML structure
        this.updateHeroSection();
        this.updateTeamSection();
        this.updateContactSection();
    }

    updatePageTitle() {
        const pageTitle = translations[this.currentLang]['page.title'];
        if (pageTitle) {
            document.title = pageTitle;
        }
    }

    updateHeroSection() {
        const heroTitle = document.querySelector('.hero-title-wrapper');
        if (heroTitle) {
            heroTitle.innerHTML = `<span data-translate="hero.title">${translations[this.currentLang]['hero.title']}</span> <em data-translate="hero.title.highlight">${translations[this.currentLang]['hero.title.highlight']}</em>`;
        }

        const heroDesc = document.querySelector('.hero-description');
        if (heroDesc) {
            heroDesc.innerHTML = `<span style="font-weight: bold">Mavan</span> <span data-translate="hero.description">${translations[this.currentLang]['hero.description']}</span> <br><span data-translate="hero.description.mission">${translations[this.currentLang]['hero.description.mission']}</span>`;
        }
    }

    updateTeamSection() {
        const teamTitle = document.querySelector('.team-title-wrapper');
        if (teamTitle) {
            teamTitle.innerHTML = `<span data-translate="team.title">${translations[this.currentLang]['team.title']}</span> <em data-translate="team.title.highlight">${translations[this.currentLang]['team.title.highlight']}</em>`;
        }
    }

    updateContactSection() {
        const contactTitle = document.querySelector('.contact-title-wrapper');
        if (contactTitle) {
            contactTitle.innerHTML = `<span data-translate="contact.title">${translations[this.currentLang]['contact.title']}</span> <em data-translate="contact.title.highlight">${translations[this.currentLang]['contact.title.highlight']}</em>`;
        }

        const contactNote = document.querySelector('.contact-note');
        if (contactNote) {
            contactNote.innerHTML = `<span data-translate="contact.description.note">${translations[this.currentLang]['contact.description.note']}</span> <a rel="nofollow" href="https://templatemo.com/contact" target="_parent" data-translate="contact.description.link">${translations[this.currentLang]['contact.description.link']}</a> <span data-translate="contact.description.note2">${translations[this.currentLang]['contact.description.note2']}</span>`;
        }
    }

    updateCurrentLanguageDisplay(langName) {
        const currentLangElement = document.getElementById('current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = langName;
        }
    }

    updateJojoHeaderImage(lang) {
        const jojoHeaderImage = document.getElementById('jojo-header-image');
        if (jojoHeaderImage) {
            // Use Persian header for 'fa', English header for 'en' and 'de'
            if (lang === 'fa') {
                jojoHeaderImage.src = 'assets/images/jojo-header-fa.png';
            } else {
                jojoHeaderImage.src = 'assets/images/jojo-header-en.png';
            }
        }
    }

    // Generate language-aware URL
    getLanguageURL(baseURL, lang = null) {
        const targetLang = lang || this.currentLang;
        const url = new URL(baseURL, window.location.origin);
        url.searchParams.set('lang', targetLang);
        return url.toString();
    }

    // Update all navigation links to include language parameter
    updateNavigationLinks() {
        // Update all links that point to HTML files
        const allLinks = document.querySelectorAll('a[href$=".html"]');
        
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                // Extract the filename from the href
                const filename = href.split('/').pop();
                link.href = this.getLanguageURL(filename);
            }
        });
    }
}

// Initialize localization when DOM is ready
let localization;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        localization = new Localization();
    });
} else {
    localization = new Localization();
}

