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
        'team.member1.title': 'Co Founder | CEO & Developer',
        'team.member2.name': 'Bahareh Keivani',
        'team.member2.title': 'Co-Founder | Head of Product & Developer',
        
        // Contact Section
        'contact.title': 'More About',
        'contact.title.highlight': 'Mavan',
        'contact.description': 'Mavan Innovative Studio is where imagination meets code. We are passionate about creating innovative digital products that make a difference. From mobile applications to web solutions, we bring ideas to life with precision, creativity, and a deep commitment to excellence.',
        'contact.description.note': 'Have a project in mind or want to collaborate?',
        'contact.description.link': 'Get in touch',
        'contact.description.note2': 'with us and let\'s build something amazing together.',
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
        'nav.team': 'تیم',
        'nav.applications': 'اپلیکیشن‌ها',
        'nav.jojo': 'جُجُ',
        'nav.trillion': 'تریلیون',
        'nav.contact': 'تماس با ما',
        
        // Hero Section
        'hero.title': 'جایی که ایده‌ها',
        'hero.title.highlight': 'به واقعیت تبدیل می‌شن',
        'hero.description': 'ماوان جاییه که خلاقیت به کد تبدیل می‌شه. هر ایده‌ای که می‌سازیم از یک سوال شروع می‌شه و با دقت، نوآوری و عشق به تکنولوژی از صفر ساخته می‌شه.',
        'hero.description.mission': 'هدفمون ساده‌ست: ساختن محصولاتی که دنیای دیجیتال رو هوشمندتر، سریع‌تر و انسانی‌تر می‌کنه.',
        'hero.button': 'بیشتر ببینید',
        
        // Products Section
        'products.title': 'محصولات ما',
        'product.jojo.title': 'جُجُ',
        'product.jojo.description': 'جُجُ یه اپلیکیشن چک‌لیستیه که بهتون کمک می‌کنه کارهاتون رو با قالب‌های آماده و سفارشی راحت مدیریت کنید.',
        'product.jojo.button': 'دانلود اپلیکیشن',
        'product.trillion.title': 'تریلیون',
        'product.trillion.description': 'تریلیون یه اپلیکیشن مدیریت بودجه‌ست که با نظارت روی امور مالیتون، در برنامه‌ریزی و مدیریت بهتر هزینه‌هاتون کمک می‌کنه.',
        'product.trillion.button': 'دانلود اپلیکیشن',
        
        // Team Section
        'team.title': 'آشنایی با',
        'team.title.highlight': 'تیم ما',
        'team.description': 'ما دو بنیان‌گذار پرانرژی هستیم که داریم با دست‌های خودمون آینده محصولاتمون رو می‌سازیم. اگرچه الان تیم کوچکی هستیم، ولی رویای بزرگی داریم و مشتاقیم به زودی تیممون رو از سازندگان بااستعداد گسترش بدیم.',
        'team.member1.name': 'علی یوسفی',
        'team.member1.title': 'بنیان‌گذار مشترک | مدیرعامل و توسعه‌دهنده',
        'team.member2.name': 'بهاره کیوانی',
        'team.member2.title': 'بنیان‌گذار مشترک | مدیر محصول و توسعه‌دهنده',
        
        // Contact Section
        'contact.title': 'بیشتر درباره',
        'contact.title.highlight': 'ماوان',
        'contact.description': 'ماوان یه استودیوی نوآوریه که توش خلاقیت به کد تبدیل می‌شه. ما عاشق ساخت محصولات دیجیتال نوآورانه‌ای هستیم که واقعاً تفاوت ایجاد می‌کنن. از اپلیکیشن‌های موبایل تا راه‌حل‌های وب، ما ایده‌ها رو با دقت، خلاقیت و تعهد به کیفیت به واقعیت تبدیل می‌کنیم.',
        'contact.description.note': 'پروژه‌ای توی ذهنتون دارید یا می‌خواید با ما همکاری کنید؟',
        'contact.description.link': 'با ما تماس بگیرید',
        'contact.description.note2': 'تا با هم یه چیز فوق‌العاده بسازیم.',
        'contact.form.name': 'نام و نام خانوادگی',
        'contact.form.email': 'ایمیل',
        'contact.form.message': 'پیام شما',
        'contact.form.button': 'ارسال پیام',
        
        // Footer
        'footer.copyright': 'تمامی حقوق محفوظ است © {year} استودیو نرم‌افزاری ماوان',
        
        // Page Title
        'page.title': 'استودیو نرم‌افزاری ماوان',
        
        // App Pages Navigation
        'app.nav.download': 'دانلود',
        'app.nav.terms': 'قوانین استفاده',
        'app.nav.privacy': 'حریم خصوصی',
        
        // JoJo App Page
        'app.jojo.title': 'چک‌لیست جُجُ',
        'app.jojo.description': 'جُجُ بهتون کمک می‌کنه کارهاتون رو با قالب‌های آماده و سفارشی راحت مدیریت کنید. چه بخواید روزتون رو برنامه‌ریزی کنید، پروژه‌ها رو مدیریت کنید یا اهدافتون رو دنبال کنید، جُجُ همه چیز رو ساده و قابل فهم می‌کنه. منظم بمونید و با جُجُ بهره‌ورتر بشید!',
        
        // Trillion App Page
        'app.trillion.title': 'تریلیون',
        'app.trillion.description': 'تریلیون یه اپلیکیشن مدیریت بودجه‌ست که با نظارت دقیق روی امور مالیتون، در برنامه‌ریزی و مدیریت بهتر هزینه‌هاتون کمک می‌کنه. هزینه‌هاتون رو ثبت کنید، بودجه تعیین کنید و از عادات خرج کردنتون آگاه بشید. با تریلیون کنترل آینده مالی‌تون رو در دست بگیرید!',
        
        // Trillion Terms and Privacy
        'app.trillion.terms.title': 'قوانین استفاده - تریلیون',
        'app.trillion.terms.intro': 'به تریلیون خوش اومدید. با استفاده از این اپلیکیشن، شما با قوانین و شرایط زیر موافقت می‌کنید.',
        'app.trillion.privacy.title': 'حریم خصوصی - تریلیون',
        'app.trillion.privacy.intro': 'توی ماوان، حریم خصوصی شما برای ما خیلی مهمه. این سیاست حریم خصوصی نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی شما هنگام استفاده از تریلیون رو توضیح می‌ده.',
        
        // Trillion-specific Terms (shared keys with generic content)
        'app.terms.acceptance.content': 'با دسترسی و استفاده از این اپلیکیشن، شما این قوانین و مقررات این توافق‌نامه رو می‌پذیرید و به اون‌ها متعهد می‌شید.',
        'app.terms.use.title': '۲. استفاده از سرویس',
        'app.terms.use.content': 'شما موافقت می‌کنید که این اپلیکیشن رو فقط برای اهداف قانونی و مطابق با این قوانین استفاده کنید. شما موافقت می‌کنید که از اپلیکیشن به این صورت استفاده نکنید:',
        'app.terms.use.item1': 'به هر شکلی که قوانین یا مقررات ملی یا بین‌المللی قابل اجرا رو نقض کنه',
        'app.terms.use.item2': 'برای ارسال یا درخواست ارسال هرگونه مطالب تبلیغاتی یا ترویجی بدون رضایت کتبی قبلی ما',
        'app.terms.use.item3': 'برای جعل هویت یا تلاش برای جعل هویت ماوان، کارمند ماوان، کاربر دیگه یا هر شخص یا نهاد دیگه‌ای',
        'app.terms.account.title': '۳. حساب کاربری',
        'app.terms.account.content': 'وقتی با ما حساب کاربری ایجاد می‌کنید، باید همیشه اطلاعات دقیق، کامل و به‌روز ارائه بدید. عدم انجام این کار نقض قوانین محسوب می‌شه.',
        'app.terms.content.title': '۴. محتوای کاربر',
        'app.terms.content.content': 'شما تمام حقوق مربوط به محتوایی که در این اپلیکیشن ایجاد می‌کنید رو حفظ می‌کنید. ما ادعای مالکیت داده‌های شما یا هر اطلاعاتی که در اپلیکیشن وارد می‌کنید رو نداریم.',
        'app.terms.termination.title': '۵. فسخ',
        'app.terms.termination.content': 'ما ممکنه حساب کاربری شما رو فوراً و بدون اطلاع قبلی یا مسئولیت، به صلاحدید خودمون و به هر دلیلی و بدون محدودیت، فسخ یا معلق کنیم و دسترسی به سرویس رو مسدود کنیم.',
        'app.terms.changes.content': 'ما حق تغییر یا جایگزینی این قوانین رو در هر زمان محفوظ می‌داریم. ما با انتشار قوانین جدید در این صفحه، از هرگونه تغییر اطلاع می‌دیم.',
        'app.terms.contact.title': '۷. تماس با ما',
        'app.terms.contact.content': 'اگه سوالی در مورد این قوانین دارید، لطفاً از طریق وب‌سایت ما با ما تماس بگیرید.',
        
        // Trillion-specific Privacy (shared keys with generic content)
        // Note: app.privacy.collection.content is shared but has different content in each app
        // JoJo version is already defined above (offline-specific), this is a generic version for Trillion
        // The localization system will use the appropriate one based on context
        'app.privacy.collection.content': 'ما اطلاعاتی که مستقیماً به ما ارائه می‌دید رو جمع‌آوری می‌کنیم، از جمله:',
        'app.privacy.collection.item1': 'اطلاعات حساب کاربری (ایمیل، نام کاربری، رمز عبور)',
        'app.privacy.collection.item2': 'داده‌های مالی و بودجه‌ای که شما ایجاد می‌کنید',
        'app.privacy.collection.item3': 'داده‌های استفاده و ترجیحات',
        'app.privacy.collection.item4': 'اطلاعات دستگاه و داده‌های تحلیلی',
        'app.privacy.use.title': '۲. نحوه استفاده از اطلاعات شما',
        'app.privacy.use.content': 'ما از اطلاعاتی که جمع‌آوری می‌کنیم برای موارد زیر استفاده می‌کنیم:',
        'app.privacy.use.item1': 'ارائه، حفظ و بهبود سرویس‌های ما',
        'app.privacy.use.item2': 'شخصی‌سازی تجربه شما',
        'app.privacy.use.item3': 'ارسال اطلاعیه‌های فنی و پیام‌های پشتیبانی',
        'app.privacy.use.item4': 'محافظت در برابر فعالیت‌های کلاهبرداری یا غیرقانونی',
        'app.privacy.sharing.title': '۳. اشتراک‌گذاری اطلاعات',
        'app.privacy.sharing.content': 'ما اطلاعات شخصی شما رو به اشخاص ثالث نمی‌فروشیم، معامله نمی‌کنیم یا اجاره نمی‌دیم. ما ممکنه اطلاعات شما رو فقط در شرایط زیر به اشتراک بذاریم:',
        'app.privacy.sharing.item1': 'با رضایت صریح شما',
        'app.privacy.sharing.item2': 'برای رعایت تعهدات قانونی',
        'app.privacy.sharing.item3': 'برای محافظت از حقوق و امنیت ما',
        'app.privacy.security.title': '۴. امنیت داده‌ها',
        'app.privacy.security.content': 'ما اقدامات فنی و سازمانی مناسب رو برای محافظت از اطلاعات شخصی شما در برابر دسترسی غیرمجاز، تغییر، افشا یا تخریب پیاده‌سازی می‌کنیم.',
        'app.privacy.retention.title': '۵. نگهداری داده‌ها',
        'app.privacy.retention.content': 'ما اطلاعات شخصی شما رو تا زمانی که برای ارائه سرویس‌های ما و مطابق با این سیاست حریم خصوصی لازم باشه، نگه می‌داریم.',
        'app.privacy.rights.title': '۶. حقوق شما',
        'app.privacy.rights.content': 'شما حق دارید:',
        'app.privacy.rights.item1': 'به اطلاعات شخصی خودتون دسترسی داشته باشید',
        'app.privacy.rights.item2': 'داده‌های نادرست رو اصلاح کنید',
        'app.privacy.rights.item3': 'درخواست حذف داده‌های خودتون رو بدید',
        'app.privacy.rights.item4': 'داده‌های خودتون رو صادر کنید',
        'app.privacy.children.title': '۷. حریم خصوصی کودکان',
        'app.privacy.children.content': 'این اپلیکیشن برای کودکان زیر ۱۳ سال طراحی نشده. ما عمداً اطلاعات شخصی از کودکان زیر ۱۳ سال جمع‌آوری نمی‌کنیم.',
        'app.privacy.changes.content': 'ما ممکنه این سیاست حریم خصوصی رو از زمان به زمان به‌روزرسانی کنیم. ما با انتشار سیاست حریم خصوصی جدید در این صفحه، از هرگونه تغییر اطلاع می‌دیم.',
        'app.privacy.contact.title': '۹. تماس با ما',
        'app.privacy.contact.content': 'اگه سوالی در مورد این سیاست حریم خصوصی دارید، لطفاً از طریق وب‌سایت ما با ما تماس بگیرید.',
        
        // Download Buttons
        'app.download.cafebazaar': 'دانلود از کافه‌بازار',
        'app.download.myket': 'دانلود از مایکت',
        'app.download.pwa': 'باز کردن نسخه PWA',
        
        // Terms of Use
        'app.terms.title': 'قوانین استفاده - جُجُ',
        'app.terms.intro': 'با دانلود و استفاده از اپلیکیشن "جُجُ"، شما با این قوانین استفاده موافقت می‌کنید. لطفاً اون‌ها رو با دقت بخونید.',
        'app.terms.acceptance.title': '۱. پذیرش قوانین',
        'app.terms.acceptance.content': 'استفاده شما از اپلیکیشن "جُجُ" به معنای پذیرش کامل این قوانینه. اگه با هر بخشی از این قوانین موافق نیستید، لطفاً از استفاده از اپلیکیشن خودداری کنید.',
        'app.terms.service.title': '۲. توضیحات سرویس',
        'app.terms.service.content': '"جُجُ" یه اپلیکیشن چک‌لیست ساده و آفلاینه که به کاربران امکان ایجاد و مدیریت لیست کارهای شخصی خودشون رو در گوشی‌های موبایل می‌ده. این اپلیکیشن به اینترنت نیاز نداره.',
        'app.terms.responsibility.title': '۳. مسئولیت‌های شما',
        'app.terms.responsibility.content1': 'شما مسئول تمام محتوایی (لیست‌ها، یادداشت‌ها و غیره) هستید که در اپلیکیشن ایجاد و ذخیره می‌کنید.',
        'app.terms.responsibility.content2': 'شما موافقت می‌کنید که این اپلیکیشن رو به صورت قانونی و اخلاقی استفاده کنید و اون رو برای هیچ فعالیت غیرقانونی یا مضر به کار نبرید.',
        'app.terms.responsibility.content3': 'شما موافقت می‌کنید که اپلیکیشن رو کپی، توزیع مجدد یا مهندسی معکوس نکنید.',
        'app.terms.intellectual.title': '۴. مالکیت معنوی',
        'app.terms.intellectual.content': 'تمام حقوق مالکیت معنوی مربوط به اپلیکیشن "جُجُ" (شامل کد، طراحی، رابط کاربری، نام و لوگو) متعلق به توسعه‌دهنده اونه و تحت قوانین کپی‌رایت محافظت می‌شه.',
        'app.terms.liability.title': '۵. محدودیت مسئولیت',
        'app.terms.liability.content1': 'اپلیکیشن "جُجُ" "همونطور که هست" ارائه می‌شه. توسعه‌دهنده هیچ تضمین صریح یا ضمنی در مورد عملکرد بدون وقفه یا بدون خطای اپلیکیشن ارائه نمی‌ده.',
        'app.terms.liability.content2': 'توسعه‌دهنده مسئول هیچ داده از دست رفته‌ای به دلیل مشکلات دستگاه شما، حذف اپلیکیشن یا هر دلیل فنی دیگه‌ای نخواهد بود.',
        'app.terms.liability.content3': 'توسعه‌دهنده مسئول هیچ خسارت مستقیم، غیرمستقیم، اتفاقی یا پیامدی ناشی از استفاده یا عدم توانایی استفاده از این اپلیکیشن نخواهد بود.',
        'app.terms.changes.title': '۶. تغییرات در قوانین',
        'app.terms.changes.content': 'ما حق تغییر این قوانین رو در هر زمان محفوظ می‌داریم. تغییرات در این صفحه اعمال می‌شه و تاریخ به‌روزرسانی اصلاح می‌شه. ادامه استفاده شما از اپلیکیشن به معنای پذیرش این تغییراته.',
        'app.terms.governing.title': '۷. قانون حاکم',
        'app.terms.governing.content': 'این قوانین تحت قوانین جمهوری اسلامی ایران است.',
        
        // Privacy Policy
        'app.privacy.title': 'حریم خصوصی - جُجُ',
        'app.privacy.intro': 'از اعتمادتون و استفاده از اپلیکیشن "جُجُ" ممنونیم. این اپلیکیشن به عنوان یه چک‌لیست ساده و کاملاً آفلاین طراحی شده. حریم خصوصی شما برای ما خیلی مهمه. این سند توضیح می‌ده که چطور اطلاعات شما رو جمع‌آوری، استفاده و محافظت می‌کنیم.',
        'app.privacy.collection.title': '۱. جمع‌آوری اطلاعات',
        'app.privacy.collection.content': 'اپلیکیشن "جُجُ" به صورت کاملاً آفلاین کار می‌کنه. این یعنی:',
        'app.privacy.collection.item1': 'هیچ اطلاعاتی از شما جمع‌آوری نمی‌شه. این شامل لیست کارها، یادداشت‌ها، تاریخ‌ها یا هر داده دیگه‌ای که در اپلیکیشن وارد می‌کنید می‌شه.',
        'app.privacy.collection.item2': 'داده‌های شما به هیچ سرور خارجی ارسال نمی‌شه. تمام اطلاعات شما فقط روی دستگاه شخصی خودتون (گوشی، تبلت و غیره) ذخیره می‌شه.',
        'app.privacy.collection.item3': 'نیازی به ساخت حساب کاربری یا وارد کردن اطلاعات شخصی مثل ایمیل یا نام نیست.',
        'app.privacy.storage.title': '۲. ذخیره‌سازی اطلاعات',
        'app.privacy.storage.content': 'تمام چک‌لیست‌ها و داده‌هایی که در اپلیکیشن ایجاد می‌کنید، فقط در حافظه داخلی دستگاه خودتون ذخیره می‌شه. ما به این داده‌ها دسترسی نداریم و اون‌ها رو در هیچ سرور یا فضای ابری دیگه‌ای ذخیره نمی‌کنیم.',
        'app.privacy.permissions.title': '۳. دسترسی‌های مورد نیاز',
        'app.privacy.permissions.content': 'اپلیکیشن "جُجُ" برای عملکرد اصلی خودش به هیچ دسترسی خاصی از دستگاه شما (مثل دوربین، میکروفون، موقعیت مکانی، مخاطبین و غیره) نیاز نداره. اگه در آینده قابلیتی اضافه بشه که نیازمند دسترسی باشه، از شما به صورت شفاف اجازه گرفته می‌شه و دلیلش توضیح داده می‌شه.',
        'app.privacy.changes.title': '۴. تغییرات در سیاست حریم خصوصی',
        'app.privacy.changes.content': 'ما ممکنه این سیاست حریم خصوصی رو در آینده به‌روزرسانی کنیم. در صورت ایجاد هرگونه تغییر، نسخه جدید در این صفحه منتشر می‌شه و تاریخ "آخرین به‌روزرسانی" اصلاح می‌شه. توصیه می‌کنیم به طور دوره‌ای این صفحه رو بررسی کنید.',
        
        // JoJo Micro Animations
        'jojo.animation.organize': 'سازماندهی کارها',
        'jojo.animation.productive': 'بهره‌ورتر بشید',
        'jojo.animation.download': 'دانلود اپلیکیشن',
        'jojo.animation.templates': 'قالب‌های سفارشی',
        'jojo.animation.goals': 'دنبال کردن اهداف',
        'jojo.animation.plan': 'برنامه‌ریزی روزانه',
        'jojo.animation.start': 'شروع کنید',
        'jojo.animation.projects': 'مدیریت پروژه‌ها',
        'jojo.animation.simple': 'ساده و کاربردی',
        
        // Trillion Micro Animations
        'trillion.animation.expenses': 'هزینه‌های ماهانه',
        'trillion.animation.budget': 'تخصیص بودجه',
        'trillion.animation.food': 'غذا ۳۵٪',
        'trillion.animation.bills': 'قبض‌ها ۲۵٪',
        'trillion.animation.other': 'سایر ۲۵٪',
        'trillion.animation.trend': 'روند هزینه‌ها',
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
        'team.member1.title': 'Mitbegründer | CEO & Entwickler',
        'team.member2.name': 'Bahareh Keivani',
        'team.member2.title': 'Mitbegründerin | Leiterin Produkt & Entwickler',
        
        // Contact Section
        'contact.title': 'Mehr über',
        'contact.title.highlight': 'Mavan',
        'contact.description': 'Mavan Innovative Studio ist der Ort, an dem Vorstellungskraft auf Code trifft. Wir sind leidenschaftlich daran interessiert, innovative digitale Produkte zu schaffen, die einen Unterschied machen. Von mobilen Anwendungen bis hin zu Web-Lösungen bringen wir Ideen mit Präzision, Kreativität und einem tiefen Engagement für Exzellenz zum Leben.',
        'contact.description.note': 'Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten?',
        'contact.description.link': 'Kontaktieren Sie uns',
        'contact.description.note2': 'und lassen Sie uns gemeinsam etwas Großartiges aufbauen.',
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


