# Website Localization Guide

## Overview
The website now supports three languages:
- **English (EN)** - Default language
- **Persian (فا/FA)** - Right-to-left (RTL) support included
- **German (DE)** - German translations

## Features
- ✅ Dropdown language selector with project's design style
- ✅ Dynamic language switching without page reload
- ✅ Language preference saved in browser's localStorage
- ✅ **Complete RTL support for Persian** - All elements flip direction
- ✅ Translates all content including navigation, hero section, products, team, and contact form
- ✅ Automatic layout adjustments for RTL languages

## How It Works

### Language Switcher
The language switcher is a dropdown menu located in the navigation menu at the top of the page. Click on the current language (e.g., "EN") to open the dropdown and select:
- **English** (EN)
- **فارسی** (فا) - Persian with full RTL support
- **Deutsch** (DE)

### Files Structure
```
assets/
├── js/
│   ├── translations.js      # Contains all translations
│   └── localization.js      # Handles language switching logic
└── css/
    └── localization.css     # Styling for dropdown and comprehensive RTL support
```

## Complete RTL Support

When Persian is selected, the **entire page layout switches to RTL**:
- ✅ Page direction changes to RTL (`dir="rtl"`)
- ✅ **Font changes to Vazirmatn** - Professional Persian font
- ✅ **Font Awesome icons display correctly** - Icons maintain proper rendering in RTL mode
- ✅ **Banner background switches to Persian version** - Uses `banner-bg-fa.png` positioned on the left
- ✅ Navigation menu flips to left side
- ✅ **Logo stays at the start** (right side in RTL) for proper brand positioning
- ✅ **Language switcher globe icon appears on the right** in RTL mode
- ✅ Dropdown menus open from right to left
- ✅ Text alignment changes to right
- ✅ Form inputs display RTL
- ✅ Carousel navigation buttons swap sides
- ✅ Social media icons display correctly
- ✅ All padding and margins mirror correctly
- ✅ Mobile menu fully supports RTL
- ✅ Responsive banner positioning for all screen sizes

## Adding New Translations

### 1. Update `translations.js`
Add your new translation keys:

```javascript
const translations = {
    en: { 'your.key': 'English Text' },
    fa: { 'your.key': 'متن فارسی' },
    de: { 'your.key': 'Deutscher Text' }
};
```

**Tip**: Use `{year}` placeholder in any translation to automatically insert the current year:
```javascript
'your.key': 'Copyright © {year} Your Company'
```

### 2. Update HTML
Add the `data-translate` attribute:

```html
<p data-translate="your.key">English Text</p>
```

For placeholders:
```html
<input placeholder="Text" data-translate="your.key">
```

## Technical Details

### Language Persistence
The selected language and language display name are saved in `localStorage`:
- `selectedLanguage` - Language code (en, fa, de)
- `selectedLanguageName` - Display name (EN, فا, DE)

### Dynamic Year in Copyright
The copyright year is automatically updated using the `{year}` placeholder:
- The system automatically replaces `{year}` with the current year from `new Date().getFullYear()`
- No manual updates needed - it will always show the current year
- Works across all languages

### Font Support
- **English & German**: Poppins font (original design)
- **Persian (فارسی)**: Vazirmatn font - A modern, readable Persian/Farsi typeface loaded from Google Fonts
- All fonts support multiple weights (100-900) for consistent design

### Browser Compatibility
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Graceful fallback to English

## Customization

### Customizing Persian Banner Image
The Persian localization uses a different banner image (`banner-bg-fa.png`) located in `assets/images/`. 

To customize it:
1. Create or modify `assets/images/banner-bg-fa.png` with your Persian-specific banner design
2. The banner will automatically display on the **left side** (instead of right) when Persian is selected
3. Make sure the image dimensions match the original `banner-bg.png` (or adjust as needed)

**Note:** A placeholder `banner-bg-fa.png` has been created (copy of the original). Replace it with your custom Persian banner.

### Adding a New Language
1. Add translations to `translations.js`
2. Add option to dropdown in `index.html`:
```html
<li><a href="#" class="lang-option" data-lang="es" data-lang-name="ES">Español</a></li>
```

3. If RTL language, update `localization.js`:
```javascript
if (lang === 'fa' || lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl');
}
```

## Testing
1. Open `index.html` in a web browser
2. Click the language dropdown and select different languages
3. Verify content changes and layout flips for Persian
4. Reload to confirm language preference is saved
5. Test responsive behavior on mobile devices

