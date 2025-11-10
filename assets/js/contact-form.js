// Contact Form Handler using Web3Forms (works immediately without verification)
(function($) {
    "use strict";

    $(document).ready(function() {
        const contactForm = $('#contact');
        
        if (!contactForm.length) return;

        // Get current language
        function getCurrentLanguage() {
            try {
                if (window.getCurrentLanguage) {
                    return window.getCurrentLanguage();
                }
                const stored = localStorage.getItem('selectedLanguage');
                return stored || 'en';
            } catch(e) {
                return 'en';
            }
        }

        // Messages based on language
        const messages = {
            fa: {
                fillAll: 'لطفاً تمام فیلدها را پر کنید',
                invalidEmail: 'لطفاً یک ایمیل معتبر وارد کنید',
                sending: 'در حال ارسال...',
                success: 'پیام شما با موفقیت ارسال شد!',
                error: 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.'
            },
            en: {
                fillAll: 'Please fill in all fields',
                invalidEmail: 'Please enter a valid email address',
                sending: 'Sending...',
                success: 'Your message has been sent successfully!',
                error: 'Error sending message. Please try again.'
            },
            de: {
                fillAll: 'Bitte füllen Sie alle Felder aus',
                invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                sending: 'Wird gesendet...',
                success: 'Ihre Nachricht wurde erfolgreich gesendet!',
                error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.'
            }
        };

        // Change form action to Web3Forms (works immediately)
        contactForm.attr('action', 'https://api.web3forms.com/submit');
        contactForm.attr('method', 'POST');

        // Add Web3Forms required fields
        if (!$('input[name="access_key"]').length) {
            contactForm.append('<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY">');
        }
        if (!$('input[name="subject"]').length) {
            contactForm.append('<input type="hidden" name="subject" value="تماس از وب‌سایت Mavan">');
        }
        if (!$('input[name="from_name"]').length) {
            // Will be set dynamically
        }

        // Add message container if it doesn't exist
        if (!$('#form-message').length) {
            contactForm.append('<div id="form-message" style="margin-top: 20px; padding: 15px; border-radius: 3px; display: none;"></div>');
        }

        const messageDiv = $('#form-message');
        const submitButton = $('#form-submit');

        // Handle form submission
        contactForm.on('submit', function(e) {
            e.preventDefault();

            const currentLang = getCurrentLanguage();
            const langMessages = messages[currentLang] || messages.en;

            const name = $('#name').val().trim();
            const email = $('#email').val().trim();
            const messageText = $('#message').val().trim();

            // Validation
            if (!name || !email || !messageText) {
                showMessage(langMessages.fillAll, 'error', currentLang);
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage(langMessages.invalidEmail, 'error', currentLang);
                return;
            }

            // Disable submit button
            submitButton.prop('disabled', true);
            const originalText = submitButton.html();
            submitButton.html('<i class="fa fa-spinner fa-spin"></i> ' + langMessages.sending);

            // Hide any previous messages
            messageDiv.hide();

            // Update hidden fields
            $('input[name="from_name"]').remove();
            contactForm.append('<input type="hidden" name="from_name" value="' + name + '">');
            
            // Update subject based on language
            const subject = currentLang === 'fa' ? 'تماس از وب‌سایت Mavan' : 
                          currentLang === 'de' ? 'Kontakt von Mavan Website' : 
                          'Contact from Mavan Website';
            $('input[name="subject"]').val(subject);

            // Prepare form data
            const formData = new FormData(contactForm[0]);
            
            // Add custom fields for better email formatting
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', messageText);

            // Submit using fetch
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.success) {
                    showMessage(langMessages.success, 'success', currentLang);
                    contactForm[0].reset();
                    
                    // Scroll to message
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: messageDiv.offset().top - 100
                        }, 500);
                    }, 100);
                } else {
                    throw new Error(data.message || 'Submission failed');
                }
            })
            .catch(function(error) {
                console.error('Form submission error:', error);
                showMessage(langMessages.error, 'error', currentLang);
            })
            .finally(function() {
                submitButton.prop('disabled', false);
                submitButton.html(originalText);
            });
        });

        function showMessage(text, type, lang) {
            messageDiv.removeClass('success-message error-message');
            messageDiv.addClass(type === 'success' ? 'success-message' : 'error-message');
            
            const isRTL = lang === 'fa';
            messageDiv.css({
                'display': 'block',
                'background-color': type === 'success' ? '#d4edda' : '#f8d7da',
                'color': type === 'success' ? '#155724' : '#721c24',
                'border': `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                'border-radius': '42px',
                'text-align': isRTL ? 'right' : 'center',
                'font-weight': '400',
                'font-size': '0.85em',
                'direction': isRTL ? 'rtl' : 'ltr'
            });
            
            const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
            messageDiv.html('<i class="fa ' + icon + '"></i> ' + text);

            // Auto-hide after 5 seconds for both success and error messages
            setTimeout(function() {
                messageDiv.fadeOut();
            }, 5000);
        }
    });

})(window.jQuery);

