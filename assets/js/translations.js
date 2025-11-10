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
        'app.terms.intro': 'By downloading and using the "Joj" application, you agree to comply with these terms of use. Please read them carefully.',
        'app.terms.acceptance.title': '1. Acceptance of Terms',
        'app.terms.acceptance.content': 'Your use of the "Joj" application constitutes full acceptance of these terms. If you do not agree with any part of these terms, please refrain from using the application.',
        'app.terms.service.title': '2. Service Description',
        'app.terms.service.content': '"Joj" is a simple, offline checklist application that allows users to create and manage their personal to-do lists on their mobile devices. This application does not require an internet connection.',
        'app.terms.responsibility.title': '3. Your Responsibility',
        'app.terms.responsibility.content1': 'You are responsible for all content (lists, notes, etc.) that you create and store in the application.',
        'app.terms.responsibility.content2': 'You agree to use this application in a legal and ethical manner and will not use it for any illegal or harmful activities.',
        'app.terms.responsibility.content3': 'You agree not to copy, redistribute, or reverse engineer the application.',
        'app.terms.intellectual.title': '4. Intellectual Property',
        'app.terms.intellectual.content': 'All intellectual property rights related to the "Joj" application (including code, design, user interface, name, and logo) belong to its developer and are protected by copyright laws.',
        'app.terms.liability.title': '5. Limitation of Liability',
        'app.terms.liability.content1': 'The "Joj" application is provided "as is." The developer offers no explicit or implicit guarantees regarding the uninterrupted or error-free operation of the application.',
        'app.terms.liability.content2': 'The developer will not be responsible for any lost data due to issues with your device, deletion of the application, or any other technical reason.',
        'app.terms.liability.content3': 'The developer will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this application.',
        'app.terms.changes.title': '6. Changes to Terms of Use',
        'app.terms.changes.content': 'We reserve the right to change these terms of use at any time. Changes will be applied to this page, and the update date will be revised. Your continued use of the application constitutes acceptance of these changes.',
        'app.terms.governing.title': '7. Governing Law',
        'app.terms.governing.content': 'These terms shall be governed by the laws of the Islamic Republic of Iran.',
        
        // Privacy Policy
        'app.privacy.title': 'JoJo - Privacy Policy',
        'app.privacy.intro': 'Thank you for your trust and for using the "Jojo" app. This app is designed as a simple and completely offline checklist. Your privacy is very important to us. This document explains how we collect, use, and protect your information.',
        'app.privacy.collection.title': '1. Information Collection',
        'app.privacy.collection.content': 'The "Jojo" app operates completely offline. This means that:',
        'app.privacy.collection.item1': 'No information is collected from you. This includes task lists, notes, dates, or any other data you enter into the app.',
        'app.privacy.collection.item2': 'Your data is not sent to external servers. All your information is stored only on your personal device (mobile, tablet, etc.).',
        'app.privacy.collection.item3': 'There is no need to create a user account or enter personal information such as email or name.',
        'app.privacy.storage.title': '2. Information Storage',
        'app.privacy.storage.content': 'All checklists and data that you create in the app are stored exclusively in your device\'s internal memory. We do not have access to this data and do not store it on any server or other cloud space.',
        'app.privacy.permissions.title': '3. Required Permissions',
        'app.privacy.permissions.content': 'The "Jojo" app does not require any specific device permissions for its core functionality (such as camera, microphone, location, contacts, etc.). If a feature is added in the future that requires permissions, you will be transparently asked for permission, and the reason will be explained.',
        'app.privacy.changes.title': '4. Changes to the Privacy Policy',
        'app.privacy.changes.content': 'We may update this privacy policy in the future. In case of any changes, a new version will be published on this page, and the "last updated" date will be revised. We recommend checking this page periodically.',
        
        // JoJo Micro Animations
        'jojo.animation.organize': 'Organize tasks',
        'jojo.animation.productive': 'Stay productive',
        'jojo.animation.download': 'Download app',
        'jojo.animation.templates': 'Custom templates',
        'jojo.animation.goals': 'Track goals',
        'jojo.animation.plan': 'Plan your day',
        'jojo.animation.start': 'Get started',
        'jojo.animation.projects': 'Manage projects',
        'jojo.animation.simple': 'Simple & intuitive',
        
        // Trillion Micro Animations
        'trillion.animation.expenses': 'Monthly Expenses',
        'trillion.animation.budget': 'Budget Allocation',
        'trillion.animation.food': 'Food 35%',
        'trillion.animation.bills': 'Bills 25%',
        'trillion.animation.other': 'Other 25%',
        'trillion.animation.trend': 'Spending Trend',
        'trillion.animation.weekly': 'Weekly Overview',
        'trillion.animation.income': 'Income',
        'trillion.animation.income.value': '$4,250',
        'trillion.animation.savings': 'Savings',
        'trillion.animation.savings.value': '$1,200'
    },
    fa: {
        // Navigation
        'nav.home': 'خانه',
        'nav.products': 'محصولات',
        'nav.team': 'اعضای تیم',
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
        'team.member1.title': 'بنیان‌گذار مشترک | مدیر فناوری',
        'team.member2.name': 'بهاره کیوانی',
        'team.member2.title': 'بنیان‌گذار مشترک | مدیر محصول و توسعه‌دهنده',
        
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
        'app.terms.intro': 'با دانلود و استفاده از برنامه "جج"، شما موافقت می‌کنید که با این شرایط استفاده رعایت کنید. لطفاً آن‌ها را با دقت بخوانید.',
        'app.terms.acceptance.title': '۱. پذیرش شرایط',
        'app.terms.acceptance.content': 'استفاده شما از برنامه "جج" به معنای پذیرش کامل این شرایط است. اگر با هر بخشی از این شرایط موافق نیستید، لطفاً از استفاده از برنامه خودداری کنید.',
        'app.terms.service.title': '۲. توضیحات خدمات',
        'app.terms.service.content': '"جج" یک برنامه چک‌لیست ساده و آفلاین است که به کاربران امکان ایجاد و مدیریت لیست کارهای شخصی خود را در دستگاه‌های موبایل می‌دهد. این برنامه به اتصال اینترنت نیاز ندارد.',
        'app.terms.responsibility.title': '۳. مسئولیت شما',
        'app.terms.responsibility.content1': 'شما مسئول تمام محتوا (لیست‌ها، یادداشت‌ها و غیره) هستید که در برنامه ایجاد و ذخیره می‌کنید.',
        'app.terms.responsibility.content2': 'شما موافقت می‌کنید که این برنامه را به صورت قانونی و اخلاقی استفاده کنید و آن را برای هیچ فعالیت غیرقانونی یا مضر استفاده نخواهید کرد.',
        'app.terms.responsibility.content3': 'شما موافقت می‌کنید که برنامه را کپی، توزیع مجدد یا مهندسی معکوس نکنید.',
        'app.terms.intellectual.title': '۴. مالکیت فکری',
        'app.terms.intellectual.content': 'تمام حقوق مالکیت فکری مربوط به برنامه "جج" (شامل کد، طراحی، رابط کاربری، نام و لوگو) متعلق به توسعه‌دهنده آن است و تحت قوانین حق تکثیر محافظت می‌شود.',
        'app.terms.liability.title': '۵. محدودیت مسئولیت',
        'app.terms.liability.content1': 'برنامه "جج" "همانطور که هست" ارائه می‌شود. توسعه‌دهنده هیچ تضمین صریح یا ضمنی در مورد عملکرد بدون وقفه یا بدون خطای برنامه ارائه نمی‌دهد.',
        'app.terms.liability.content2': 'توسعه‌دهنده مسئول هیچ داده از دست رفته‌ای به دلیل مشکلات دستگاه شما، حذف برنامه یا هر دلیل فنی دیگر نخواهد بود.',
        'app.terms.liability.content3': 'توسعه‌دهنده مسئول هیچ خسارت مستقیم، غیرمستقیم، اتفاقی یا پیامدی ناشی از استفاده یا عدم توانایی استفاده از این برنامه نخواهد بود.',
        'app.terms.changes.title': '۶. تغییرات در شرایط استفاده',
        'app.terms.changes.content': 'ما حق تغییر این شرایط استفاده را در هر زمان محفوظ می‌داریم. تغییرات در این صفحه اعمال می‌شود و تاریخ به‌روزرسانی اصلاح خواهد شد. ادامه استفاده شما از برنامه به معنای پذیرش این تغییرات است.',
        'app.terms.governing.title': '۷. قانون حاکم',
        'app.terms.governing.content': 'این شرایط تحت قوانین جمهوری اسلامی ایران است.',
        
        // Privacy Policy
        'app.privacy.title': 'حریم خصوصی - جج',
        'app.privacy.intro': 'با تشکر از اعتماد شما و استفاده از برنامه "جج". این برنامه به عنوان یک چک لیست ساده و کاملاً آفلاین طراحی شده است. حفظ حریم خصوصی شما برای ما بسیار مهم است. این سند توضیح میدهد که چگونه اطلاعات شما را جمع آوری، استفاده و محافظت میکنیم.',
        'app.privacy.collection.title': '۱. جمع آوری اطلاعات',
        'app.privacy.collection.content': 'برنامه "جج" به صورت کاملاً آفلاین عمل میکند. این به معنای آن است که:',
        'app.privacy.collection.item1': 'هیچ اطلاعاتی از شما جمع آوری نمی شود. این شامل لیست کارها، یادداشتها، تاریخ ها یا هر داده دیگری که در برنامه وارد میکنید می شود.',
        'app.privacy.collection.item2': 'دادههای شما به سرورهای خارجی ارسال نمی شوند. تمام اطلاعات شما فقط بر روی دستگاه شخصی شما (موبایل، تبلت و غیره) ذخیره می شود.',
        'app.privacy.collection.item3': 'نیازی به ایجاد حساب کاربری یا وارد کردن اطلاعات شخصی مانند ایمیل یا نام نیست.',
        'app.privacy.storage.title': '۲. ذخیره سازی اطلاعات',
        'app.privacy.storage.content': 'تمام چک لیست ها و دادههایی که شما در برنامه ایجاد میکنید، منحصراً در حافظه داخلی دستگاه خود شما ذخیره می شوند. ما به این داده ها دسترسی نداریم و آنها را در هیچ سرور یا فضای ابری دیگری ذخیره نمی کنیم.',
        'app.privacy.permissions.title': '۳. دسترسی های مورد نیاز',
        'app.privacy.permissions.content': 'برنامه "جج" برای عملکرد اصلی خود به هیچ دسترسی خاصی از دستگاه شما (مانند دوربین، میکروفون، موقعیت مکانی، مخاطبین و غیره) نیاز ندارد. اگر در آینده قابلیتی اضافه شود که نیازمند دسترسی باشد، از شما به صورت شفاف درخواست اجازه شده و دلیل آن توضیح داده خواهد شد.',
        'app.privacy.changes.title': '۴. تغییرات در سیاست حفظ حریم خصوصی',
        'app.privacy.changes.content': 'ما ممکن است این سیاست حفظ حریم خصوصی را در آینده به روز رسانی کنیم. در صورت ایجاد هرگونه تغییر، نسخه جدید در این صفحه منتشر شده و تاریخ "آخرین به روز رسانی" اصلاح خواهد شد. توصیه می کنیم به طور دوره‌ای این صفحه را بررسی کنید.',
        
        // JoJo Micro Animations
        'jojo.animation.organize': 'سازماندهی وظایف',
        'jojo.animation.productive': 'بهره‌ور بمانید',
        'jojo.animation.download': 'دانلود اپلیکیشن',
        'jojo.animation.templates': 'الگوهای سفارشی',
        'jojo.animation.goals': 'پیگیری اهداف',
        'jojo.animation.plan': 'برنامه‌ریزی روز',
        'jojo.animation.start': 'شروع کنید',
        'jojo.animation.projects': 'مدیریت پروژه‌ها',
        'jojo.animation.simple': 'ساده و بصری',
        
        // Trillion Micro Animations
        'trillion.animation.expenses': 'هزینه‌های ماهانه',
        'trillion.animation.budget': 'تخصیص بودجه',
        'trillion.animation.food': 'غذا ۳۵٪',
        'trillion.animation.bills': 'قبض‌ها ۲۵٪',
        'trillion.animation.other': 'سایر ۲۵٪',
        'trillion.animation.trend': 'روند هزینه',
        'trillion.animation.weekly': 'نمای هفتگی',
        'trillion.animation.income': 'درآمد',
        'trillion.animation.income.value': '۴,۲۵۰ دلار',
        'trillion.animation.savings': 'پس‌انداز',
        'trillion.animation.savings.value': '۱,۲۰۰ دلار'
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
        'app.terms.intro': 'Durch das Herunterladen und Verwenden der "Joj"-Anwendung erklären Sie sich damit einverstanden, diese Nutzungsbedingungen einzuhalten. Bitte lesen Sie sie sorgfältig durch.',
        'app.terms.acceptance.title': '1. Annahme der Bedingungen',
        'app.terms.acceptance.content': 'Ihre Nutzung der "Joj"-Anwendung stellt die vollständige Annahme dieser Bedingungen dar. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, verzichten Sie bitte auf die Nutzung der Anwendung.',
        'app.terms.service.title': '2. Dienstbeschreibung',
        'app.terms.service.content': '"Joj" ist eine einfache, offline Checklisten-Anwendung, die es Benutzern ermöglicht, ihre persönlichen Aufgabenlisten auf ihren Mobilgeräten zu erstellen und zu verwalten. Diese Anwendung erfordert keine Internetverbindung.',
        'app.terms.responsibility.title': '3. Ihre Verantwortung',
        'app.terms.responsibility.content1': 'Sie sind für alle Inhalte (Listen, Notizen usw.) verantwortlich, die Sie in der Anwendung erstellen und speichern.',
        'app.terms.responsibility.content2': 'Sie stimmen zu, diese Anwendung auf legale und ethische Weise zu verwenden und sie nicht für illegale oder schädliche Aktivitäten zu nutzen.',
        'app.terms.responsibility.content3': 'Sie stimmen zu, die Anwendung nicht zu kopieren, weiterzuverteilen oder zu reverse engineeren.',
        'app.terms.intellectual.title': '4. Geistiges Eigentum',
        'app.terms.intellectual.content': 'Alle Rechte des geistigen Eigentums im Zusammenhang mit der "Joj"-Anwendung (einschließlich Code, Design, Benutzeroberfläche, Name und Logo) gehören dem Entwickler und sind durch Urheberrechtsgesetze geschützt.',
        'app.terms.liability.title': '5. Haftungsbeschränkung',
        'app.terms.liability.content1': 'Die "Joj"-Anwendung wird "wie besehen" bereitgestellt. Der Entwickler bietet keine ausdrücklichen oder stillschweigenden Garantien bezüglich des unterbrechungsfreien oder fehlerfreien Betriebs der Anwendung.',
        'app.terms.liability.content2': 'Der Entwickler ist nicht verantwortlich für verlorene Daten aufgrund von Problemen mit Ihrem Gerät, Löschung der Anwendung oder aus anderen technischen Gründen.',
        'app.terms.liability.content3': 'Der Entwickler haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die aus der Nutzung oder Unfähigkeit zur Nutzung dieser Anwendung entstehen.',
        'app.terms.changes.title': '6. Änderungen der Nutzungsbedingungen',
        'app.terms.changes.content': 'Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite angewendet und das Aktualisierungsdatum wird überarbeitet. Ihre fortgesetzte Nutzung der Anwendung stellt die Annahme dieser Änderungen dar.',
        'app.terms.governing.title': '7. Geltendes Recht',
        'app.terms.governing.content': 'Diese Bedingungen unterliegen den Gesetzen der Islamischen Republik Iran.',
        
        // Privacy Policy
        'app.privacy.title': 'JoJo - Datenschutzerklärung',
        'app.privacy.intro': 'Vielen Dank für Ihr Vertrauen und die Nutzung der "Jojo"-App. Diese App ist als einfache und vollständig offline funktionierende Checkliste konzipiert. Ihr Datenschutz ist uns sehr wichtig. Dieses Dokument erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.',
        'app.privacy.collection.title': '1. Informationssammlung',
        'app.privacy.collection.content': 'Die "Jojo"-App funktioniert vollständig offline. Das bedeutet:',
        'app.privacy.collection.item1': 'Es werden keine Informationen von Ihnen gesammelt. Dies umfasst Aufgabenlisten, Notizen, Daten oder alle anderen Daten, die Sie in die App eingeben.',
        'app.privacy.collection.item2': 'Ihre Daten werden nicht an externe Server gesendet. Alle Ihre Informationen werden nur auf Ihrem persönlichen Gerät (Handy, Tablet usw.) gespeichert.',
        'app.privacy.collection.item3': 'Es ist nicht erforderlich, ein Benutzerkonto zu erstellen oder persönliche Informationen wie E-Mail oder Name einzugeben.',
        'app.privacy.storage.title': '2. Informationsspeicherung',
        'app.privacy.storage.content': 'Alle Checklisten und Daten, die Sie in der App erstellen, werden ausschließlich im internen Speicher Ihres Geräts gespeichert. Wir haben keinen Zugriff auf diese Daten und speichern sie nicht auf einem Server oder in einem anderen Cloud-Speicher.',
        'app.privacy.permissions.title': '3. Erforderliche Berechtigungen',
        'app.privacy.permissions.content': 'Die "Jojo"-App benötigt für ihre Kernfunktionalität keine spezifischen Geräteberechtigungen (wie Kamera, Mikrofon, Standort, Kontakte usw.). Wenn in Zukunft eine Funktion hinzugefügt wird, die Berechtigungen erfordert, werden Sie transparent um Erlaubnis gebeten und der Grund wird erklärt.',
        'app.privacy.changes.title': '4. Änderungen der Datenschutzerklärung',
        'app.privacy.changes.content': 'Wir können diese Datenschutzerklärung in Zukunft aktualisieren. Bei Änderungen wird eine neue Version auf dieser Seite veröffentlicht und das Datum "Zuletzt aktualisiert" wird überarbeitet. Wir empfehlen, diese Seite regelmäßig zu überprüfen.',
        
        // JoJo Micro Animations
        'jojo.animation.organize': 'Aufgaben organisieren',
        'jojo.animation.productive': 'Produktiv bleiben',
        'jojo.animation.download': 'App herunterladen',
        'jojo.animation.templates': 'Benutzerdefinierte Vorlagen',
        'jojo.animation.goals': 'Ziele verfolgen',
        'jojo.animation.plan': 'Ihren Tag planen',
        'jojo.animation.start': 'Loslegen',
        'jojo.animation.projects': 'Projekte verwalten',
        'jojo.animation.simple': 'Einfach & intuitiv',
        
        // Trillion Micro Animations
        'trillion.animation.expenses': 'Monatliche Ausgaben',
        'trillion.animation.budget': 'Budgetzuweisung',
        'trillion.animation.food': 'Essen 35%',
        'trillion.animation.bills': 'Rechnungen 25%',
        'trillion.animation.other': 'Sonstiges 25%',
        'trillion.animation.trend': 'Ausgabentrend',
        'trillion.animation.weekly': 'Wöchentliche Übersicht',
        'trillion.animation.income': 'Einkommen',
        'trillion.animation.income.value': '4.250 €',
        'trillion.animation.savings': 'Ersparnisse',
        'trillion.animation.savings.value': '1.200 €'
    }
};


