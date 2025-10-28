/**
 * ================================================
 * Micro-Interactions & Motion Design JavaScript
 * Mavan Innovative Studio
 * ================================================
 */

(function ($) {
    'use strict';

    // ================================================
    // Scroll Progress Indicator
    // ================================================
    function initScrollProgress() {
        // Create progress bar if it doesn't exist
        if (!$('.scroll-progress').length) {
            $('body').prepend('<div class="scroll-progress"></div>');
        }

        $(window).on('scroll', function () {
            const scroll = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            const progress = (scroll / height) * 100;
            $('.scroll-progress').css('width', progress + '%');
        });
    }

    // ================================================
    // Custom Cursor
    // ================================================
    function initCustomCursor() {
        // Disabled for now to prevent issues
        return;
        
        // Only on desktop
        if ($(window).width() > 992) {
            // Create cursor elements
            if (!$('.cursor-dot').length) {
                $('body').append('<div class="cursor-dot"></div>');
                $('body').append('<div class="cursor-outline"></div>');
            }

            const cursorDot = $('.cursor-dot');
            const cursorOutline = $('.cursor-outline');

            $(document).on('mousemove', function (e) {
                const x = e.clientX;
                const y = e.clientY;

                cursorDot.css({
                    left: x + 'px',
                    top: y + 'px'
                });

                setTimeout(function () {
                    cursorOutline.css({
                        left: x + 'px',
                        top: y + 'px'
                    });
                }, 50);
            });

            // Enlarge cursor on hover over clickable elements
            $('a, button, .main-button, .main-button-slider').on('mouseenter', function () {
                cursorDot.css('transform', 'scale(2)');
                cursorOutline.css({
                    'transform': 'scale(1.5)',
                    'opacity': '1'
                });
            }).on('mouseleave', function () {
                cursorDot.css('transform', 'scale(1)');
                cursorOutline.css({
                    'transform': 'scale(1)',
                    'opacity': '0.5'
                });
            });
        }
    }

    // ================================================
    // Ripple Effect on Buttons
    // ================================================
    function initRippleEffect() {
        $('.main-button, .main-button-slider, button.main-button').on('click', function (e) {
            const $button = $(this);
            const x = e.pageX - $button.offset().left;
            const y = e.pageY - $button.offset().top;

            const $ripple = $('<span class="ripple-effect"></span>');
            $ripple.css({
                left: x + 'px',
                top: y + 'px'
            });

            $button.append($ripple);

            setTimeout(function () {
                $ripple.remove();
            }, 600);
        });
    }

    // ================================================
    // Animated Background Shapes
    // ================================================
    function initAnimatedShapes() {
        // Disabled for now
        return;
        
        if (!$('.animated-bg-shapes').length) {
            const shapesHTML = `
                <div class="animated-bg-shapes">
                    <div class="floating-shape shape-1"></div>
                    <div class="floating-shape shape-2"></div>
                    <div class="floating-shape shape-3"></div>
                    <div class="floating-shape shape-4"></div>
                </div>
            `;
            $('body').prepend(shapesHTML);
        }
    }

    // ================================================
    // Parallax Effect on Mouse Move
    // ================================================
    function initParallax() {
        if ($(window).width() > 992) {
            $(document).on('mousemove', function (e) {
                const moveX = (e.pageX * -1 / 50);
                const moveY = (e.pageY * -1 / 50);

                $('.floating-shape').each(function (index) {
                    const speed = (index + 1) * 0.5;
                    $(this).css({
                        'transform': `translate(${moveX * speed}px, ${moveY * speed}px)`
                    });
                });

                // Parallax for decorative elements
                $('.left-image-decor, .right-image-decor').css({
                    'transform': `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`
                });
            });
        }
    }

    // ================================================
    // Scroll Reveal Animations
    // ================================================
    function initScrollReveal() {
        const reveals = $('.reveal, .animate-on-scroll');

        function checkReveal() {
            reveals.each(function () {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('active animated');
                } else {
                    // Optional: remove class to re-animate on scroll up
                    // $(this).removeClass('active animated');
                }
            });
        }

        $(window).on('scroll', checkReveal);
        $(window).on('resize', checkReveal);
        checkReveal(); // Initial check
    }

    // ================================================
    // Magnetic Button Effect
    // ================================================
    function initMagneticButtons() {
        if ($(window).width() > 992) {
            $('.main-button, .main-button-slider').each(function () {
                const $button = $(this);

                $button.on('mousemove', function (e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    $button.css('transform', `translate(${x * 0.3}px, ${y * 0.3}px)`);
                });

                $button.on('mouseleave', function () {
                    $button.css('transform', 'translate(0, 0)');
                });
            });
        }
    }

    // ================================================
    // Tilt Effect for Cards
    // ================================================
    function initTiltEffect() {
        if ($(window).width() > 992) {
            $('.features-item, #testimonials .item').each(function () {
                const $card = $(this);

                $card.on('mousemove', function (e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;

                    $card.css({
                        'transform': `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
                    });
                });

                $card.on('mouseleave', function () {
                    $card.css({
                        'transform': 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
                    });
                });
            });
        }
    }

    // ================================================
    // Smooth Number Counter
    // ================================================
    function initNumberCounter() {
        $('.count-number').each(function () {
            const $this = $(this);
            const countTo = parseInt($this.text());

            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                        $this.addClass('counting');
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        $this.removeClass('counting');
                    }
                }
            );
        });
    }

    // ================================================
    // Input Focus Animations
    // ================================================
    function initInputAnimations() {
        $('.contact-form input, .contact-form textarea').each(function () {
            const $input = $(this);

            $input.on('focus', function () {
                $(this).parent().addClass('focused');
            });

            $input.on('blur', function () {
                if (!$(this).val()) {
                    $(this).parent().removeClass('focused');
                }
            });

            // Add shake animation on invalid input
            $input.on('invalid', function () {
                $(this).addClass('shake');
                setTimeout(() => {
                    $(this).removeClass('shake');
                }, 500);
            });
        });
    }

    // ================================================
    // Particle System
    // ================================================
    function initParticles() {
        // Disabled for now
        return;
        
        if ($(window).width() > 992 && !$('.particles-container').length) {
            const $container = $('<div class="particles-container"></div>');
            $('body').prepend($container);

            // Create particles
            for (let i = 0; i < 30; i++) {
                const $particle = $('<div class="particle"></div>');
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = 4 + Math.random() * 4;

                $particle.css({
                    'left': x + '%',
                    'top': y + '%',
                    'animation-delay': delay + 's',
                    'animation-duration': duration + 's'
                });

                $container.append($particle);
            }
        }
    }

    // ================================================
    // Scroll Indicator
    // ================================================
    function initScrollIndicator() {
        const indicatorHTML = `
            <div class="scroll-indicator">
                <div class="mouse"></div>
            </div>
        `;

        if (!$('.scroll-indicator').length && $('.welcome-area').length) {
            $('.welcome-area').append(indicatorHTML);

            $('.scroll-indicator').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('.welcome-area').outerHeight()
                }, 1000);
            });

            // Hide on scroll
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 100) {
                    $('.scroll-indicator').fadeOut();
                } else {
                    $('.scroll-indicator').fadeIn();
                }
            });
        }
    }

    // ================================================
    // Text Animation - Typewriter Effect
    // ================================================
    function initTypewriter() {
        $('.typewriter').each(function () {
            const $element = $(this);
            const text = $element.text();
            $element.text('');
            $element.css('display', 'inline-block');

            let i = 0;
            const interval = setInterval(function () {
                if (i < text.length) {
                    $element.text($element.text() + text.charAt(i));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 100);
        });
    }

    // ================================================
    // Image Lazy Load with Animation
    // ================================================
    function initLazyLoad() {
        $('img[data-src]').each(function () {
            const $img = $(this);
            const src = $img.attr('data-src');

            $img.on('load', function () {
                $img.addClass('fade-in');
            });

            $img.attr('src', src);
        });
    }

    // ================================================
    // Stagger Animation for Elements
    // ================================================
    function initStaggerAnimation() {
        $('.stagger-animation').each(function () {
            const $container = $(this);
            const $items = $container.children();

            $items.each(function (index) {
                $(this).css('animation-delay', (index * 0.1) + 's');
            });
        });
    }

    // ================================================
    // Header Background Change on Scroll
    // ================================================
    function initHeaderAnimation() {
        $(window).on('scroll', function () {
            const scroll = $(window).scrollTop();

            if (scroll > 100) {
                $('header').addClass('background-header');
            } else {
                $('header').removeClass('background-header');
            }
        });
    }

    // ================================================
    // Form Success Animation
    // ================================================
    function initFormAnimation() {
        $('#contact').on('submit', function (e) {
            e.preventDefault();

            const $form = $(this);
            const $button = $form.find('button[type="submit"]');

            // Add loading state
            $button.html('<div class="loading-dots"><span></span><span></span><span></span></div>');
            $button.prop('disabled', true);

            // Simulate form submission (replace with actual AJAX call)
            setTimeout(function () {
                $form.find('input, textarea').addClass('success-state');
                $button.html('Message Sent! ✓');

                setTimeout(function () {
                    $form[0].reset();
                    $form.find('input, textarea').removeClass('success-state');
                    $button.html('Send Message Now');
                    $button.prop('disabled', false);
                }, 2000);
            }, 1500);
        });
    }

    // ================================================
    // Logo Float Animation
    // ================================================
    function initLogoAnimation() {
        setInterval(function () {
            $('.logo img').addClass('pulse');
            setTimeout(function () {
                $('.logo img').removeClass('pulse');
            }, 1000);
        }, 5000);
    }

    // ================================================
    // Section Entrance Animations
    // ================================================
    function initSectionAnimations() {
        $('section').each(function (index) {
            $(this).attr('data-section-index', index);
        });

        $(window).on('scroll', function () {
            $('section').each(function () {
                const sectionTop = $(this).offset().top;
                const sectionBottom = sectionTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();

                if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
                    if (!$(this).hasClass('section-visible')) {
                        $(this).addClass('section-visible fade-in-up');
                    }
                }
            });
        });
    }

    // ================================================
    // Smooth Scroll Enhancement
    // ================================================
    function enhanceSmoothScroll() {
        $('a[href^="#"]').not('[href="#"]').on('click', function (e) {
            const target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'swing');
            }
        });
    }

    // ================================================
    // Interactive Hover Elements
    // ================================================
    function initInteractiveHovers() {
        // Add glow effect to important buttons
        $('.main-button, .main-button-slider').addClass('glow-on-hover');

        // Add hover lift to cards
        $('.features-item').addClass('hover-lift reveal');

        // Add tilt effect class
        $('.features-item, #testimonials .item').addClass('tilt-effect');
    }

    // ================================================
    // Easter Egg - Konami Code
    // ================================================
    function initEasterEgg() {
        const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let konamiIndex = 0;

        $(document).on('keydown', function (e) {
            if (e.keyCode === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    // Trigger special animation
                    $('body').addClass('morphing-bg');
                    $('.floating-shape').css('opacity', '0.5');

                    setTimeout(function () {
                        $('body').removeClass('morphing-bg');
                        $('.floating-shape').css('opacity', '0.1');
                    }, 5000);

                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    // ================================================
    // Performance Optimization - Debounce
    // ================================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ================================================
    // Initialize All Micro-Interactions
    // ================================================
    function init() {
        // Wait for DOM to be ready
        $(document).ready(function () {
            console.log('🚀 Initializing Micro-Interactions...');

            // Initialize all features
            initScrollProgress();
            // initCustomCursor(); // Disabled
            initRippleEffect();
            // initAnimatedShapes(); // Disabled
            // initParallax(); // Disabled
            initScrollReveal();
            // initMagneticButtons(); // Disabled
            // initTiltEffect(); // Disabled
            initInputAnimations();
            // initParticles(); // Disabled
            // initScrollIndicator(); // Disabled
            // initStaggerAnimation(); // Disabled
            initHeaderAnimation();
            initFormAnimation();
            // initLogoAnimation(); // Disabled
            // initSectionAnimations(); // Disabled
            enhanceSmoothScroll();
            // initInteractiveHovers(); // Disabled
            // initEasterEgg(); // Disabled

            console.log('✅ Micro-Interactions Initialized!');
        });

        // Initialize on page load
        $(window).on('load', function () {
            // Remove preloader with animation
            setTimeout(function() {
                $('#preloader').fadeOut(300, function() {
                    $(this).remove();
                });
            }, 300);

            // Add initial animations
            $('.welcome-area').addClass('fade-in');

            // Start number counters if visible
            if ($('.count-number').length) {
                initNumberCounter();
            }
        });

        // Debounced resize handler
        const handleResize = debounce(function () {
            // Reinitialize responsive features
            if ($(window).width() > 992) {
                initCustomCursor();
                initMagneticButtons();
                initTiltEffect();
            }
        }, 250);

        $(window).on('resize', handleResize);
    }

    // ================================================
    // Auto-Initialize
    // ================================================
    init();

})(jQuery);

// ================================================
// Additional Utility Functions
// ================================================

// Add animation class to element
function animateElement(selector, animationClass, delay = 0) {
    setTimeout(function () {
        $(selector).addClass(animationClass);
    }, delay);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Random position generator for particles
function randomPosition(max) {
    return Math.floor(Math.random() * max);
}

// Easing functions
const Easing = {
    easeInOutQuad: function (t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInOutCubic: function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
};

console.log('🎨 Motion Design System Loaded!');

