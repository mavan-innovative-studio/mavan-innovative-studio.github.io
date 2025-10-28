/**
 * Motion Design Fixes
 * Fixes for visibility and interaction issues
 */

(function ($) {
    'use strict';

    $(document).ready(function() {
        // Force visibility of product section
        setTimeout(function() {
            $('#about').css({
                'display': 'block',
                'opacity': '1',
                'visibility': 'visible'
            });

            $('#about .features-item').css({
                'display': 'block',
                'opacity': '1',
                'visibility': 'visible'
            });

            $('#about .col-lg-6').css({
                'display': 'block',
                'opacity': '1',
                'visibility': 'visible'
            });

            // Force all elements in products section to be visible
            $('#about *').css({
                'opacity': '1',
                'visibility': 'visible'
            });

            console.log('Product section visibility fixed');
        }, 100);

        // Ensure content sections are visible
        $('.content-section').css({
            'opacity': '1',
            'visibility': 'visible'
        });

        $('.content-text').css({
            'opacity': '1',
            'visibility': 'visible'
        });

        // Fix submenu z-index on click
        $('.submenu > a').on('click', function(e) {
            var $submenu = $(this).next('ul');
            $submenu.css('z-index', '9999');
        });

        // Ensure language switcher works
        $('.language-switcher').on('mouseenter', function() {
            $(this).find('ul').css({
                'z-index': '9999',
                'visibility': 'visible',
                'opacity': '1'
            });
        });

        // Disable any animations that hide elements
        $('.reveal, .animate-on-scroll, .stagger-animation').css({
            'opacity': '1',
            'visibility': 'visible',
            'transform': 'none'
        });

        // Override any inline styles that hide content
        $('[style*="display: none"], [style*="opacity: 0"], [style*="visibility: hidden"]').each(function() {
            if (!$(this).hasClass('content-section')) { // Don't affect page navigation
                $(this).css({
                    'display': 'block',
                    'opacity': '1',
                    'visibility': 'visible'
                });
            }
        });

        console.log('Motion fixes applied');
    });

    // Additional check after page load
    $(window).on('load', function() {
        setTimeout(function() {
            // Final check for product section
            if ($('#about:visible').length === 0 || $('#about').css('opacity') == '0') {
                $('#about').css({
                    'display': 'block !important',
                    'opacity': '1 !important',
                    'visibility': 'visible !important'
                });
            }

            // Check all features items
            $('.features-item').each(function() {
                if ($(this).css('opacity') == '0' || !$(this).is(':visible')) {
                    $(this).css({
                        'display': 'block',
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
            });

            console.log('Final visibility check completed');
        }, 500);
    });

    // Force hide preloader immediately on DOM ready
    $('#preloader').fadeOut(500, function() {
        $(this).remove();
    });
    
    // Backup: Force hide preloader if it's still visible after 1 second
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            console.log('Force hiding preloader');
            preloader.style.display = 'none';
            preloader.style.visibility = 'hidden';
            preloader.style.opacity = '0';
            // Remove from DOM
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }
    }, 1000);

})(jQuery);

