// Translations for the website
// Note: Use {year} placeholder in translations to automatically insert the current year
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.team': 'Team',
        'nav.applications': 'Applications',
        'nav.jojo': 'JoJo',
        'nav.trillion': 'Trillion',
        'nav.contact': 'Contact Us',
        
        // Hero Section
        'hero.title': 'Where Vision Meets',
        'hero.title.highlight': 'FUTURE',
        'hero.description': 'is where imagination meets code. Every idea we bring to life starts with curiosity, built from the ground up with precision, creativity, and a deep love for technology.',
        'hero.description.mission': 'Our mission is simple: to shape products that make the digital world a little smarter, faster, and more human.',
        'hero.button': 'KNOW US BETTER',
        
        // Products Section
        'products.title': 'Our Products',
        'product.jojo.title': 'JoJo',
        'product.jojo.description': 'Jojo Checklist helps you organize your tasks effortlessly with custom and ready-made templates.',
        'product.jojo.button': 'Get App',
        'product.trillion.title': 'Trillion',
        'product.trillion.description': 'Trillion is a budget management app that focuses on monitoring your finances to help you plan and spend better.',
        'product.trillion.button': 'Get App',
        
        // Team Section
        'team.title': 'Meet Our',
        'team.title.highlight': 'Team',
        'team.description': "We're a duo of passionate founders, hands-on building the future of our products. While we're small today, our vision is big, and we're excited to grow our family of talented creators soon.",
        'team.member1.name': 'Ali Yousefi',
        'team.member1.title': 'Co-Founder | Head of Technology',
        'team.member2.name': 'Bahareh Keivani',
        'team.member2.title': 'Co-Founder | Head of Product & Developer',
        
        // Contact Section
        'contact.title': 'More About',
        'contact.title.highlight': 'Lava',
        'contact.description': 'Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.',
        'contact.description.note': 'If you need this contact form to send email to your inbox, you may follow our',
        'contact.description.link': 'contact',
        'contact.description.note2': 'page for more detail.',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'E-Mail Address',
        'contact.form.message': 'Your Message',
        'contact.form.button': 'Send Message Now',
        
        // Footer
        'footer.copyright': 'Copyright © {year} Mavan Innovative Studio',
        
        // Page Title
        'page.title': 'Mavan Innovative Studio',
        
        // App Pages Navigation
        'app.nav.download': 'Download',
        'app.nav.terms': 'Terms of Use',
        'app.nav.privacy': 'Privacy Policy',
        
        // JoJo App Page
        'app.jojo.title': 'JoJo Checklist',
        'app.jojo.description': 'Jojo Checklist helps you organize your tasks effortlessly with custom and ready-made templates. Whether you\'re planning your day, managing projects, or keeping track of goals, JoJo makes it simple and intuitive. Stay organized, stay productive with JoJo!',
        
        // Trillion App Page
        'app.trillion.title': 'Trillion',
        'app.trillion.description': 'Trillion is a budget management app that focuses on monitoring your finances to help you plan and spend better. Track your expenses, set budgets, and gain insights into your spending habits. Take control of your financial future with Trillion!',
        
        // Download Buttons
        'app.download.cafebazaar': 'Download on Cafe Bazaar',
        'app.download.myket': 'Download on Myket',
        'app.download.pwa': 'Open PWA Version',
        
        // Terms of Use
        'app.terms.title': 'JoJo - Terms of Use',
        'app.terms.intro': 'Welcome to JoJo Checklist. By using our application, you agree to comply with and be bound by the following terms and conditions.',
        'app.terms.acceptance.title': '1. Acceptance of Terms',
        'app.terms.acceptance.content': 'By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.',
        'app.terms.use.title': '2. Use of Service',
        'app.terms.use.content': 'You agree to use this application only for lawful purposes and in accordance with these Terms. You agree not to use the app:',
        'app.terms.use.item1': 'In any way that violates any applicable national or international law or regulation',
        'app.terms.use.item2': 'To transmit, or procure the sending of, any advertising or promotional material without our prior written consent',
        'app.terms.use.item3': 'To impersonate or attempt to impersonate Mavan, a Mavan employee, another user, or any other person or entity',
        'app.terms.account.title': '3. User Account',
        'app.terms.account.content': 'When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms.',
        'app.terms.content.title': '4. User Content',
        'app.terms.content.content': 'You retain all rights to the content you create in our application. We do not claim ownership of your data or any information you input into the application.',
        'app.terms.termination.title': '5. Termination',
        'app.terms.termination.content': 'We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.',
        'app.terms.changes.title': '6. Changes to Terms',
        'app.terms.changes.content': 'We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.',
        'app.terms.contact.title': '7. Contact Us',
        'app.terms.contact.content': 'If you have any questions about these Terms, please contact us through our website.',
        
        // Privacy Policy
        'app.privacy.title': 'JoJo - Privacy Policy',
        'app.privacy.intro': 'At Mavan, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use JoJo Checklist.',
        'app.privacy.collection.title': '1. Information We Collect',
        'app.privacy.collection.content': 'We collect information that you provide directly to us, including:',
        'app.privacy.collection.item1': 'Account information (email, username, password)',
        'app.privacy.collection.item2': 'Task and checklist data you create',
        'app.privacy.collection.item3': 'Usage data and preferences',
        'app.privacy.collection.item4': 'Device information and analytics data',
        'app.privacy.use.title': '2. How We Use Your Information',
        'app.privacy.use.content': 'We use the information we collect to:',
        'app.privacy.use.item1': 'Provide, maintain, and improve our services',
        'app.privacy.use.item2': 'Personalize your experience',
        'app.privacy.use.item3': 'Send you technical notices and support messages',
        'app.privacy.use.item4': 'Protect against fraudulent or illegal activity',
        'app.privacy.sharing.title': '3. Information Sharing',
        'app.privacy.sharing.content': 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        'app.privacy.sharing.item1': 'With your explicit consent',
        'app.privacy.sharing.item2': 'To comply with legal obligations',
        'app.privacy.sharing.item3': 'To protect our rights and safety',
        'app.privacy.security.title': '4. Data Security',
        'app.privacy.security.content': 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'app.privacy.retention.title': '5. Data Retention',
        'app.privacy.retention.content': 'We retain your personal information for as long as necessary to provide you with our services and as described in this Privacy Policy.',
        'app.privacy.rights.title': '6. Your Rights',
        'app.privacy.rights.content': 'You have the right to:',
        'app.privacy.rights.item1': 'Access your personal information',
        'app.privacy.rights.item2': 'Correct inaccurate data',
        'app.privacy.rights.item3': 'Request deletion of your data',
        'app.privacy.rights.item4': 'Export your data',
        'app.privacy.children.title': '7. Children\'s Privacy',
        'app.privacy.children.content': 'Our application is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.',
        'app.privacy.changes.title': '8. Changes to Privacy Policy',
        'app.privacy.changes.content': 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
        'app.privacy.contact.title': '9. Contact Us',
        'app.privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us through our website.'
    },
    fa: {
        // Navigation
        'nav.home': 'خانه',
        'nav.products': 'محصولات',
        'nav.team': 'تیم',
        'nav.applications': 'اپلیکیشن‌ها',
        'nav.jojo': 'جج',
        'nav.trillion': 'تریلیون',
        'nav.contact': 'تماس با ما',
        
        // Hero Section
        'hero.title': 'جایی که چشم‌انداز با',
        'hero.title.highlight': 'آینده',
        'hero.description': 'جایی است که تخیل با کد ملاقات می‌کند. هر ایده‌ای که به زندگی می‌آوریم با کنجکاوی شروع می‌شود و از پایه با دقت، خلاقیت و عشق عمیق به تکنولوژی ساخته می‌شود.',
        'hero.description.mission': 'مأموریت ما ساده است: شکل دادن به محصولاتی که دنیای دیجیتال را کمی هوشمندتر، سریع‌تر و انسانی‌تر می‌کنند.',
        'hero.button': 'بیشتر بشناسید',
        
        // Products Section
        'products.title': 'محصولات ما',
        'product.jojo.title': 'جج',
        'product.jojo.description': 'جج چک‌لیست به شما کمک می‌کند تا وظایف خود را با الگوهای سفارشی و آماده به راحتی سازماندهی کنید.',
        'product.jojo.button': 'دریافت اپلیکیشن',
        'product.trillion.title': 'تریلیون',
        'product.trillion.description': 'تریلیون یک اپلیکیشن مدیریت بودجه است که روی نظارت بر امور مالی شما تمرکز دارد تا به شما در برنامه‌ریزی و هزینه کردن بهتر کمک کند.',
        'product.trillion.button': 'دریافت اپلیکیشن',
        
        // Team Section
        'team.title': 'با',
        'team.title.highlight': 'تیم ما',
        'team.description': 'ما یک دونفره از بنیان‌گذاران پرشور هستیم که دست به کار ساختن آینده محصولاتمان هستیم. در حالی که امروز کوچک هستیم، چشم‌انداز ما بزرگ است و مشتاق رشد خانواده خالقان مستعد خود هستیم.',
        'team.member1.name': 'علی یوسفی',
        'team.member1.title': 'بنیان‌گذار مشترک | رئیس فناوری',
        'team.member2.name': 'بهاره کیوانی',
        'team.member2.title': 'بنیان‌گذار مشترک | رئیس محصول و توسعه‌دهنده',
        
        // Contact Section
        'contact.title': 'بیشتر درباره',
        'contact.title.highlight': 'لاوا',
        'contact.description': 'Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.',
        'contact.description.note': 'اگر نیاز دارید این فرم تماس ایمیل را به صندوق ورودی شما ارسال کند، می‌توانید از',
        'contact.description.link': 'تماس',
        'contact.description.note2': 'ما برای جزئیات بیشتر دیدن کنید.',
        'contact.form.name': 'نام کامل',
        'contact.form.email': 'آدرس ایمیل',
        'contact.form.message': 'پیام شما',
        'contact.form.button': 'ارسال پیام',
        
        // Footer
        'footer.copyright': 'تمامی حقوق محفوظ است © {year} استودیو نرم افزاری ماوان',
        
        // Page Title
        'page.title': 'استودیو نرم افزاری ماوان',
        
        // App Pages Navigation
        'app.nav.download': 'دانلود',
        'app.nav.terms': 'شرایط استفاده',
        'app.nav.privacy': 'حریم خصوصی',
        
        // JoJo App Page
        'app.jojo.title': 'چک‌لیست جج',
        'app.jojo.description': 'چک‌لیست جج به شما کمک می‌کند تا وظایف خود را با الگوهای سفارشی و آماده به راحتی سازماندهی کنید. چه برنامه‌ریزی روز خود، مدیریت پروژه‌ها یا پیگیری اهداف، جج آن را ساده و بصری می‌کند. سازمان‌یافته بمانید، با جج بهره‌ور بمانید!',
        
        // Trillion App Page
        'app.trillion.title': 'تریلیون',
        'app.trillion.description': 'تریلیون یک برنامه مدیریت بودجه است که بر نظارت بر امور مالی شما تمرکز دارد تا به شما در برنامه‌ریزی و هزینه کردن بهتر کمک کند. هزینه‌های خود را پیگیری کنید، بودجه تعیین کنید و بینش‌هایی در مورد عادات هزینه کردن خود به دست آورید. با تریلیون کنترل آینده مالی خود را به دست بگیرید!',
        
        // Trillion Terms and Privacy
        'app.trillion.terms.title': 'شرایط استفاده - تریلیون',
        'app.trillion.terms.intro': 'به تریلیون خوش آمدید. با استفاده از برنامه ما، شما موافقت می‌کنید که با شرایط و ضوابط زیر رعایت و محدود شوید.',
        'app.trillion.privacy.title': 'حریم خصوصی - تریلیون',
        'app.trillion.privacy.intro': 'در ماوان، ما حریم خصوصی شما را جدی می‌گیریم. این سیاست حریم خصوصی نحوه جمع‌آوری، استفاده و حفاظت از اطلاعات شخصی شما هنگام استفاده از تریلیون را توضیح می‌دهد.',
        
        // Download Buttons
        'app.download.cafebazaar': 'دانلود از کافه بازار',
        'app.download.myket': 'دانلود از مایکت',
        'app.download.pwa': 'باز کردن نسخه PWA',
        
        // Terms of Use
        'app.terms.title': 'شرایط استفاده - جج',
        'app.terms.intro': 'به چک‌لیست جج خوش آمدید. با استفاده از برنامه ما، شما موافقت می‌کنید که با شرایط و ضوابط زیر رعایت و محدود شوید.',
        'app.terms.acceptance.title': '۱. پذیرش شرایط',
        'app.terms.acceptance.content': 'با دسترسی و استفاده از این برنامه، شما شرایط و مقررات این توافقنامه را می‌پذیرید و موافقت می‌کنید که محدود شوید.',
        'app.terms.use.title': '۲. استفاده از سرویس',
        'app.terms.use.content': 'شما موافقت می‌کنید که از این برنامه فقط برای اهداف قانونی و مطابق با این شرایط استفاده کنید. شما موافقت می‌کنید که از برنامه استفاده نکنید:',
        'app.terms.use.item1': 'به هر شکلی که قانون ملی یا بین‌المللی قابل اجرا را نقض کند',
        'app.terms.use.item2': 'برای ارسال یا تامین ارسال هر گونه مطالب تبلیغاتی یا تبلیغاتی بدون رضایت کتبی قبلی ما',
        'app.terms.use.item3': 'برای جعل هویت یا تلاش برای جعل هویت ماوان، کارمند ماوان، کاربر دیگر یا هر شخص یا نهاد دیگر',
        'app.terms.account.title': '۳. حساب کاربری',
        'app.terms.account.content': 'هنگامی که حساب کاربری با ما ایجاد می‌کنید، باید همیشه اطلاعات دقیق، کامل و به‌روز ارائه دهید. عدم انجام این کار نقض شرایط را تشکیل می‌دهد.',
        'app.terms.content.title': '۴. محتوای کاربر',
        'app.terms.content.content': 'شما تمام حقوق محتوایی که در برنامه ما ایجاد می‌کنید را حفظ می‌کنید. ما مالکیت داده‌ها یا اطلاعاتی که در برنامه وارد می‌کنید را ادعا نمی‌کنیم.',
        'app.terms.termination.title': '۵. خاتمه',
        'app.terms.termination.content': 'ممکن است حساب شما را فورا و بدون اطلاع قبلی یا مسئولیت، تحت صلاحدید انحصاری خود، به هر دلیلی و بدون محدودیت خاتمه دهیم یا تعلیق کنیم.',
        'app.terms.changes.title': '۶. تغییرات در شرایط',
        'app.terms.changes.content': 'ما حق تغییر یا جایگزینی این شرایط را در هر زمان محفوظ می‌داریم. ما با ارسال شرایط جدید در این صفحه از هر گونه تغییرات اطلاع خواهیم داد.',
        'app.terms.contact.title': '۷. تماس با ما',
        'app.terms.contact.content': 'اگر سوالی در مورد این شرایط دارید، لطفا از طریق وب‌سایت ما با ما تماس بگیرید.',
        
        // Privacy Policy
        'app.privacy.title': 'حریم خصوصی - جج',
        'app.privacy.intro': 'در ماوان، ما حریم خصوصی شما را جدی می‌گیریم. این سیاست حریم خصوصی نحوه جمع‌آوری، استفاده و حفاظت از اطلاعات شخصی شما هنگام استفاده از چک‌لیست جج را توضیح می‌دهد.',
        'app.privacy.collection.title': '۱. اطلاعاتی که جمع‌آوری می‌کنیم',
        'app.privacy.collection.content': 'ما اطلاعاتی را که مستقیماً به ما ارائه می‌دهید، جمع‌آوری می‌کنیم، از جمله:',
        'app.privacy.collection.item1': 'اطلاعات حساب کاربری (ایمیل، نام کاربری، رمز عبور)',
        'app.privacy.collection.item2': 'وظایف و داده‌های چک‌لیستی که ایجاد می‌کنید',
        'app.privacy.collection.item3': 'داده‌های استفاده و ترجیحات',
        'app.privacy.collection.item4': 'اطلاعات دستگاه و داده‌های تحلیلی',
        'app.privacy.use.title': '۲. نحوه استفاده از اطلاعات شما',
        'app.privacy.use.content': 'ما از اطلاعاتی که جمع‌آوری می‌کنیم برای موارد زیر استفاده می‌کنیم:',
        'app.privacy.use.item1': 'ارائه، نگهداری و بهبود خدمات ما',
        'app.privacy.use.item2': 'شخصی‌سازی تجربه شما',
        'app.privacy.use.item3': 'ارسال اطلاعیه‌های فنی و پیام‌های پشتیبانی',
        'app.privacy.use.item4': 'حفاظت در برابر فعالیت‌های تقلبی یا غیرقانونی',
        'app.privacy.sharing.title': '۳. اشتراک‌گذاری اطلاعات',
        'app.privacy.sharing.content': 'ما اطلاعات شخصی شما را به اشخاص ثالث نمی‌فروشیم، معامله یا اجاره نمی‌دهیم. ممکن است اطلاعات شما را فقط در شرایط زیر به اشتراک بگذاریم:',
        'app.privacy.sharing.item1': 'با رضایت صریح شما',
        'app.privacy.sharing.item2': 'برای رعایت تعهدات قانونی',
        'app.privacy.sharing.item3': 'برای حفاظت از حقوق و امنیت ما',
        'app.privacy.security.title': '۴. امنیت داده',
        'app.privacy.security.content': 'ما اقدامات فنی و سازمانی مناسب را برای حفاظت از اطلاعات شخصی شما در برابر دسترسی غیرمجاز، تغییر، افشا یا تخریب اجرا می‌کنیم.',
        'app.privacy.retention.title': '۵. نگهداری داده',
        'app.privacy.retention.content': 'ما اطلاعات شخصی شما را تا زمانی که برای ارائه خدمات به شما لازم است و همانطور که در این سیاست حریم خصوصی شرح داده شده است، نگهداری می‌کنیم.',
        'app.privacy.rights.title': '۶. حقوق شما',
        'app.privacy.rights.content': 'شما این حق را دارید که:',
        'app.privacy.rights.item1': 'به اطلاعات شخصی خود دسترسی داشته باشید',
        'app.privacy.rights.item2': 'داده‌های نادرست را تصحیح کنید',
        'app.privacy.rights.item3': 'درخواست حذف داده‌های خود کنید',
        'app.privacy.rights.item4': 'داده‌های خود را صادر کنید',
        'app.privacy.children.title': '۷. حریم خصوصی کودکان',
        'app.privacy.children.content': 'برنامه ما برای کودکان زیر ۱۳ سال در نظر گرفته نشده است. ما آگاهانه اطلاعات شخصی کودکان زیر ۱۳ سال را جمع‌آوری نمی‌کنیم.',
        'app.privacy.changes.title': '۸. تغییرات در سیاست حریم خصوصی',
        'app.privacy.changes.content': 'ممکن است هر از گاهی این سیاست حریم خصوصی را به‌روزرسانی کنیم. ما با ارسال سیاست حریم خصوصی جدید در این صفحه از هر گونه تغییرات به شما اطلاع خواهیم داد.',
        'app.privacy.contact.title': '۹. تماس با ما',
        'app.privacy.contact.content': 'اگر سوالی در مورد این سیاست حریم خصوصی دارید، لطفا از طریق وب‌سایت ما با ما تماس بگیرید.'
    },
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.products': 'Produkte',
        'nav.team': 'Team',
        'nav.applications': 'Anwendungen',
        'nav.jojo': 'JoJo',
        'nav.trillion': 'Trillion',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.title': 'Wo Vision auf die',
        'hero.title.highlight': 'ZUKUNFT',
        'hero.description': 'ist der Ort, an dem Vorstellungskraft auf Code trifft. Jede Idee, die wir zum Leben erwecken, beginnt mit Neugier, von Grund auf mit Präzision, Kreativität und einer tiefen Liebe zur Technologie gebaut.',
        'hero.description.mission': 'Unsere Mission ist einfach: Produkte zu gestalten, die die digitale Welt ein wenig intelligenter, schneller und menschlicher machen.',
        'hero.button': 'LERNEN SIE UNS BESSER KENNEN',
        
        // Products Section
        'products.title': 'Unsere Produkte',
        'product.jojo.title': 'JoJo',
        'product.jojo.description': 'Jojo Checkliste hilft Ihnen, Ihre Aufgaben mühelos mit benutzerdefinierten und vorgefertigten Vorlagen zu organisieren.',
        'product.jojo.button': 'App Herunterladen',
        'product.trillion.title': 'Trillion',
        'product.trillion.description': 'Trillion ist eine Budgetverwaltungs-App, die sich auf die Überwachung Ihrer Finanzen konzentriert, um Ihnen bei der besseren Planung und Ausgaben zu helfen.',
        'product.trillion.button': 'App Herunterladen',
        
        // Team Section
        'team.title': 'Lernen Sie unser',
        'team.title.highlight': 'Team',
        'team.description': 'Wir sind ein leidenschaftliches Gründerduo, das praktisch an der Zukunft unserer Produkte arbeitet. Während wir heute klein sind, ist unsere Vision groß, und wir freuen uns darauf, unsere Familie talentierter Kreativer bald zu vergrößern.',
        'team.member1.name': 'Ali Yousefi',
        'team.member1.title': 'Mitbegründer | Leiter der Technologie',
        'team.member2.name': 'Bahareh Keivani',
        'team.member2.title': 'Mitbegründerin | Leiterin Produkt & Entwickler',
        
        // Contact Section
        'contact.title': 'Mehr über',
        'contact.title.highlight': 'Lava',
        'contact.description': 'Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.',
        'contact.description.note': 'Wenn Sie möchten, dass dieses Kontaktformular E-Mails an Ihr Postfach sendet, können Sie unsere',
        'contact.description.link': 'Kontakt',
        'contact.description.note2': 'Seite für weitere Details besuchen.',
        'contact.form.name': 'Vollständiger Name',
        'contact.form.email': 'E-Mail-Adresse',
        'contact.form.message': 'Ihre Nachricht',
        'contact.form.button': 'Nachricht Jetzt Senden',
        
        // Footer
        'footer.copyright': 'Copyright © {year} Mavan Innovative Studio',
        
        // Page Title
        'page.title': 'Mavan Innovative Studio',
        
        // App Pages Navigation
        'app.nav.download': 'Herunterladen',
        'app.nav.terms': 'Nutzungsbedingungen',
        'app.nav.privacy': 'Datenschutz',
        
        // JoJo App Page
        'app.jojo.title': 'JoJo Checkliste',
        'app.jojo.description': 'Jojo Checkliste hilft Ihnen, Ihre Aufgaben mühelos mit benutzerdefinierten und vorgefertigten Vorlagen zu organisieren. Ob Sie Ihren Tag planen, Projekte verwalten oder Ziele verfolgen, JoJo macht es einfach und intuitiv. Bleiben Sie organisiert, bleiben Sie produktiv mit JoJo!',
        
        // Trillion App Page
        'app.trillion.title': 'Trillion',
        'app.trillion.description': 'Trillion ist eine Budgetverwaltungs-App, die sich auf die Überwachung Ihrer Finanzen konzentriert, um Ihnen bei der besseren Planung und Ausgaben zu helfen. Verfolgen Sie Ihre Ausgaben, legen Sie Budgets fest und gewinnen Sie Einblicke in Ihre Ausgabegewohnheiten. Übernehmen Sie mit Trillion die Kontrolle über Ihre finanzielle Zukunft!',
        
        // Trillion Terms and Privacy
        'app.trillion.terms.title': 'Trillion - Nutzungsbedingungen',
        'app.trillion.terms.intro': 'Willkommen zu Trillion. Durch die Nutzung unserer Anwendung erklären Sie sich damit einverstanden, die folgenden Bedingungen einzuhalten und sich daran zu halten.',
        'app.trillion.privacy.title': 'Trillion - Datenschutzerklärung',
        'app.trillion.privacy.intro': 'Bei Mavan nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Informationen sammeln, verwenden und schützen, wenn Sie Trillion nutzen.',
        
        // Download Buttons
        'app.download.cafebazaar': 'Bei Cafe Bazaar Herunterladen',
        'app.download.myket': 'Bei Myket Herunterladen',
        'app.download.pwa': 'PWA-Version Öffnen',
        
        // Terms of Use
        'app.terms.title': 'JoJo - Nutzungsbedingungen',
        'app.terms.intro': 'Willkommen zu JoJo Checkliste. Durch die Nutzung unserer Anwendung erklären Sie sich damit einverstanden, die folgenden Bedingungen einzuhalten und sich daran zu halten.',
        'app.terms.acceptance.title': '1. Annahme der Bedingungen',
        'app.terms.acceptance.content': 'Durch den Zugriff auf und die Nutzung dieser Anwendung akzeptieren Sie die Bedingungen und Bestimmungen dieser Vereinbarung und erklären sich damit einverstanden.',
        'app.terms.use.title': '2. Nutzung des Dienstes',
        'app.terms.use.content': 'Sie stimmen zu, diese Anwendung nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen Bedingungen zu nutzen. Sie stimmen zu, die App nicht zu verwenden:',
        'app.terms.use.item1': 'Auf eine Weise, die gegen geltende nationale oder internationale Gesetze oder Vorschriften verstößt',
        'app.terms.use.item2': 'Um Werbematerial ohne unsere vorherige schriftliche Zustimmung zu übermitteln oder zu veranlassen',
        'app.terms.use.item3': 'Um sich als Mavan, einen Mavan-Mitarbeiter, einen anderen Benutzer oder eine andere Person oder Entität auszugeben oder zu versuchen',
        'app.terms.account.title': '3. Benutzerkonto',
        'app.terms.account.content': 'Wenn Sie ein Konto bei uns erstellen, müssen Sie jederzeit genaue, vollständige und aktuelle Informationen bereitstellen. Die Nichtbeachtung stellt einen Verstoß gegen die Bedingungen dar.',
        'app.terms.content.title': '4. Benutzerinhalte',
        'app.terms.content.content': 'Sie behalten alle Rechte an den Inhalten, die Sie in unserer Anwendung erstellen. Wir beanspruchen kein Eigentum an Ihren Daten oder Informationen, die Sie in die Anwendung eingeben.',
        'app.terms.termination.title': '5. Beendigung',
        'app.terms.termination.content': 'Wir können Ihr Konto sofort und ohne vorherige Ankündigung oder Haftung nach unserem alleinigen Ermessen aus jedem Grund und ohne Einschränkung kündigen oder aussetzen.',
        'app.terms.changes.title': '6. Änderungen der Bedingungen',
        'app.terms.changes.content': 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Wir werden Sie über alle Änderungen informieren, indem wir die neuen Bedingungen auf dieser Seite veröffentlichen.',
        'app.terms.contact.title': '7. Kontaktieren Sie uns',
        'app.terms.contact.content': 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte über unsere Website.',
        
        // Privacy Policy
        'app.privacy.title': 'JoJo - Datenschutzerklärung',
        'app.privacy.intro': 'Bei Mavan nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Informationen sammeln, verwenden und schützen, wenn Sie JoJo Checkliste nutzen.',
        'app.privacy.collection.title': '1. Informationen, die wir sammeln',
        'app.privacy.collection.content': 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, einschließlich:',
        'app.privacy.collection.item1': 'Kontoinformationen (E-Mail, Benutzername, Passwort)',
        'app.privacy.collection.item2': 'Aufgaben- und Checklistendaten, die Sie erstellen',
        'app.privacy.collection.item3': 'Nutzungsdaten und Präferenzen',
        'app.privacy.collection.item4': 'Geräteinformationen und Analysedaten',
        'app.privacy.use.title': '2. Wie wir Ihre Informationen verwenden',
        'app.privacy.use.content': 'Wir verwenden die von uns gesammelten Informationen, um:',
        'app.privacy.use.item1': 'Unsere Dienste bereitzustellen, zu pflegen und zu verbessern',
        'app.privacy.use.item2': 'Ihr Erlebnis zu personalisieren',
        'app.privacy.use.item3': 'Ihnen technische Hinweise und Support-Nachrichten zu senden',
        'app.privacy.use.item4': 'Vor betrügerischen oder illegalen Aktivitäten zu schützen',
        'app.privacy.sharing.title': '3. Weitergabe von Informationen',
        'app.privacy.sharing.content': 'Wir verkaufen, handeln oder vermieten Ihre persönlichen Informationen nicht an Dritte. Wir dürfen Ihre Informationen nur unter folgenden Umständen weitergeben:',
        'app.privacy.sharing.item1': 'Mit Ihrer ausdrücklichen Zustimmung',
        'app.privacy.sharing.item2': 'Um gesetzliche Verpflichtungen zu erfüllen',
        'app.privacy.sharing.item3': 'Um unsere Rechte und Sicherheit zu schützen',
        'app.privacy.security.title': '4. Datensicherheit',
        'app.privacy.security.content': 'Wir implementieren geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer persönlichen Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung.',
        'app.privacy.retention.title': '5. Datenspeicherung',
        'app.privacy.retention.content': 'Wir speichern Ihre persönlichen Informationen so lange, wie es notwendig ist, um Ihnen unsere Dienste bereitzustellen und wie in dieser Datenschutzerklärung beschrieben.',
        'app.privacy.rights.title': '6. Ihre Rechte',
        'app.privacy.rights.content': 'Sie haben das Recht:',
        'app.privacy.rights.item1': 'Auf Ihre persönlichen Informationen zuzugreifen',
        'app.privacy.rights.item2': 'Ungenaue Daten zu korrigieren',
        'app.privacy.rights.item3': 'Die Löschung Ihrer Daten zu beantragen',
        'app.privacy.rights.item4': 'Ihre Daten zu exportieren',
        'app.privacy.children.title': '7. Datenschutz für Kinder',
        'app.privacy.children.content': 'Unsere Anwendung ist nicht für Kinder unter 13 Jahren bestimmt. Wir sammeln wissentlich keine persönlichen Informationen von Kindern unter 13 Jahren.',
        'app.privacy.changes.title': '8. Änderungen der Datenschutzerklärung',
        'app.privacy.changes.content': 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.',
        'app.privacy.contact.title': '9. Kontaktieren Sie uns',
        'app.privacy.contact.content': 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über unsere Website.'
    }
};


