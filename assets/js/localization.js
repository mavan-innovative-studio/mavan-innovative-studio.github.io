// Localization handler
class Localization {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'en';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners to language options
        document.addEventListener('DOMContentLoaded', () => {
            const langOptions = document.querySelectorAll('.lang-option');
            langOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = option.getAttribute('data-lang');
                    const langName = option.getAttribute('data-lang-name');
                    this.setLanguage(lang, langName);
                });
            });
        });
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
        
        // Reinitialize Owl Carousel with RTL support
        this.reinitializeOwlCarousel(isRTL);
        
        // Update current language display
        this.updateCurrentLanguageDisplay(langName || this.getStoredLanguageName() || 'EN');
    }

    reinitializeOwlCarousel(isRTL) {
        // Check if jQuery and Owl Carousel are available
        if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
            const $owlCarousel = jQuery('.owl-carousel');
            
            if ($owlCarousel.length) {
                // Destroy existing carousel
                $owlCarousel.trigger('destroy.owl.carousel');
                $owlCarousel.removeClass('owl-loaded owl-drag');
                
                // Reinitialize with RTL setting
                setTimeout(() => {
                    $owlCarousel.owlCarousel({
                        rtl: isRTL,
                        loop: true,
                        margin: 30,
                        nav: true,
                        pagination: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 2
                            }
                        }
                    });
                }, 100);
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
}

// Initialize localization when DOM is ready
const localization = new Localization();

