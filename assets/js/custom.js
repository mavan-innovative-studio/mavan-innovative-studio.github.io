(function ($) {

	"use strict";


    var $teamCarousel = $('#testimonials .owl-carousel');
    if ($teamCarousel.length) {
        var teamItemCount = $teamCarousel.find('.item').length || 0;
        var desktopItems = teamItemCount >= 2 ? 2 : Math.max(teamItemCount, 1);
        var enableControls = teamItemCount > desktopItems;
        
        // Function to initialize or destroy carousel based on screen size
        function initTeamCarousel() {
            var isMobile = $(window).width() <= 768;
            
            // Destroy any previous initialization to avoid duplicated structures
            if ($teamCarousel.hasClass('owl-loaded')) {
                $teamCarousel.trigger('destroy.owl.carousel');
                $teamCarousel.removeClass('owl-loaded');
                $teamCarousel.find('.owl-stage-outer').children().unwrap();
            }
            
            // On mobile, don't initialize carousel - let CSS handle column layout
            if (isMobile) {
                $teamCarousel.addClass('mobile-column-layout');
                return;
            }
            
            // On desktop, initialize carousel
            $teamCarousel.removeClass('mobile-column-layout');
            
            // Toggle centering class when there is nothing to scroll
            if (enableControls) {
                $teamCarousel.removeClass('center-stage');
            } else {
                $teamCarousel.addClass('center-stage');
            }

            $teamCarousel.owlCarousel({
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
                    0: {
                        items: Math.min(1, Math.max(teamItemCount, 1))
                    },
                    600: {
                        items: Math.min(1, Math.max(teamItemCount, 1))
                    },
                    1000: {
                        items: desktopItems
                    }
                }
            });
        }
        
        // Initialize on load
        initTeamCarousel();
        
        // Re-initialize on window resize
        $(window).on('resize', function() {
            initTeamCarousel();
        });
    }


	$(window).scroll(function () {
		var $header = $('header');
		// If page opts into a permanently simple header, force the style and skip toggling
		if ($header.is('[data-always-simple="true"]')) {
			$header.addClass('background-header');
			return;
		}

		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $header.height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init with mobile-friendly configuration
	window.sr = new scrollReveal({
		reset: false,
		mobile: true,
		distance: '30px',
		duration: 600,
		delay: 0,
		opacity: 0,
		easing: 'ease',
		scale: 1,
		viewFactor: 0.2,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
	});


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var targetHash = this.hash;
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top)
				}, 700, 'swing', function () {
					window.location.hash = targetHash;
				});
				return false;
			}
		}
	});

	$(document).ready(function () {
		// Apply simple header immediately if opted-in
		if ($('header').is('[data-always-simple="true"]')) {
			$('header').addClass('background-header');
		}
		$('a[href^="#welcome"]').addClass('active');

		//smoothscroll
		$('.menu-item').on('click', function (e) {
			var href = $(this).attr('href');
			
			// Only apply smooth scroll to hash links (internal page navigation)
			if (!href || href === '' || !href.startsWith('#')) {
				// This is an external link or has no hash, let it work normally
				return true;
			}
			
			e.preventDefault();
			var athis = this;
			var target = this.hash,
				menu = target;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
				$('.menu-item').removeClass('active');
				$(athis).addClass('active');
			});
		});

		$(window).scroll(function (event) {
			var scrollPos = $(document).scrollTop() + 80;

			if (scrollPos === 0) {
				$('a[href^="#welcome"]').addClass('active');
				return;
			}
			$('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));

				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.menu-item').removeClass("active");
					currLink.addClass("active");
				} else {
					currLink.removeClass("active");
				}
			});
		})
	});

	const Accordion = {
		settings: {
			// Expand the first item by default
			first_expanded: false,
			// Allow items to be toggled independently
			toggle: false
		},

		openAccordion: function (toggle, content) {
			if (content.children.length) {
				toggle.classList.add("is-open");
				let final_height = Math.floor(content.children[0].offsetHeight);
				content.style.height = final_height + "px";
			}
		},

		closeAccordion: function (toggle, content) {
			toggle.classList.remove("is-open");
			content.style.height = 0;
		},

		init: function (el) {
			const _this = this;

			// Override default settings with classes
			let is_first_expanded = _this.settings.first_expanded;
			if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
			let is_toggle = _this.settings.toggle;
			if (el.classList.contains("is-toggle")) is_toggle = true;

			// Loop through the accordion's sections and set up the click behavior
			const sections = el.getElementsByClassName("accordion");
			const all_toggles = el.getElementsByClassName("accordion-head");
			const all_contents = el.getElementsByClassName("accordion-body");
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				const toggle = all_toggles[i];
				const content = all_contents[i];

				// Click behavior
				toggle.addEventListener("click", function (e) {
					if (!is_toggle) {
						// Hide all content areas first
						for (let a = 0; a < all_contents.length; a++) {
							_this.closeAccordion(all_toggles[a], all_contents[a]);
						}

						// Expand the clicked item
						_this.openAccordion(toggle, content);
					} else {
						// Toggle the clicked item
						if (toggle.classList.contains("is-open")) {
							_this.closeAccordion(toggle, content);
						} else {
							_this.openAccordion(toggle, content);
						}
					}
				});

				// Expand the first item
				if (i === 0 && is_first_expanded) {
					_this.openAccordion(toggle, content);
				}
			}
		}
	};

	(function () {
		// Initiate all instances on the page
		const accordions = document.getElementsByClassName("accordions");
		for (let i = 0; i < accordions.length; i++) {
			Accordion.init(accordions[i]);
		}
	})();



	// Home seperator
	if ($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if ($('.count-item').length) {
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);