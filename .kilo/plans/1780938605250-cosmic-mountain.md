# Excalibur General Trading - Corporate Website Redesign

## Goal
Create a modern corporate business website with sophisticated charcoal and light-grey theme, featuring professional layouts without flashy animations or effects.

## Color Palette
- **Primary Dark (Header & Hero):** `#1D2636`, `#222C3F`
- **Secondary Dark:** `#2F394D`
- **Light Backgrounds:** `#F4F4F4`, `#EFEFEF`
- **Text:** `#111827`, `#374151`
- **Accent:** `#D4A017` (gold - used sparingly)

## Pages to Create/Modify

### 1. `src/app/layout.jsx`
- Update body to use `bg-[#F4F4F4]` and `text-[#111827]`
- Font variables already configured for Inter and Manrope

### 2. `src/components/excalibur/Navbar.jsx`
- Dark charcoal background (`#1D2636`)
- Logo on left (keep existing)
- Center nav: Home, About, Products, Vision & Mission, Why Us, Contact
- Right side: Gold outlined button "Get Started"
- Sticky navigation maintained

### 3. `src/app/page.jsx` - Homepage
**HERO SECTION**
- Full-width dark charcoal hero
- Left: H1 "Your Trusted Partner in Trading & Supply Solutions" + description + 2 buttons (Explore Products, Contact Us)
- Right: Professional industrial trading image (placeholder)

**COMPANY OVERVIEW SECTION**
- Light grey background
- Two-column: corporate image + company story text

**INDUSTRIES WE SERVE**
- 5 elegant cards with different layouts
- Each card: icon + title + description list

**FEATURED PRODUCTS SECTION**
- Dark container on light background
- 4 product categories grid

**BUSINESS STATS SECTION**
- Large numbers with labels
- 25+ Product Categories, 500+ Products Supplied, 100+ Business Clients, 24/7 Support

**WHY CHOOSE US PREVIEW**
- Horizontal cards layout

### 4. `src/app/about/page.jsx` - About Us
- Who We Are section
- Our Expertise (timeline style)
- Trading Excellence (image + content)
- Supply Chain Solutions (dark container)
- Our Markets (UAE/GCC map)

### 5. `src/app/products/page.jsx` - Products & Services
- 5 large category sections with alternating layouts
- Each category: hero image + description + product gallery + features

### 6. `src/app/vision/page.jsx` - Vision & Mission (NEW)
- Vision: Large centered card
- Mission: 4 premium cards
- Core Values: Icons and minimal design (Integrity, Reliability, Quality, Innovation, Customer Focus)

### 7. `src/app/why-us/page.jsx` - Why Choose Us (NEW)
- Large alternating sections
- Each reason: icon + image + description

### 8. `src/app/contact/page.jsx` - Contact
- Contact Information (address, phone, email, website)
- Contact Form (Name, Company, Email, Phone, Message)
- Business Hours
- Google Map embed

### 9. `src/components/excalibur/Footer.jsx`
- Dark charcoal background
- 4 columns: Company links + Products + Quick Links + Contact
- Copyright bar

## Components to Update/Create
- Update Navbar colors to charcoal theme
- Keep Footer minimal with grey theme
- Remove all glassmorphism/glow effects
- Use `bg-gray-800`/`bg-gray-900` for dark sections
- Use `bg-gray-100`/`bg-white` for light sections
- Add subtle fade-in transitions only

## Image Requirements
Note: Existing images available in `public/images/`:
- `hero-bg.png` - for hero section
- `global-map.png` - for Our Markets section
- `solutions/*.png` - for industry/service images (procurement, logistics, etc.)
- `logo.png` - company logo
- `logo.ico` - favicon

Use these images with appropriate paths for each section.

## Quality Checks
- Build must pass
- Lint must pass
- No references to old `bg-ivory`, `text-gold` (except for accent uses)
- Favicon path: `/images/logo.ico`
- Logo path: `/images/logo.png`

## Implementation Order
1. Update `src/app/layout.jsx` - body background and text colors
2. Update `src/components/excalibur/Navbar.jsx` - charcoal theme with gold accent button
3. Update `src/components/excalibur/Footer.jsx` - 4-column layout with charcoal background
4. Create `src/app/vision/page.jsx` - Vision & Mission page
5. Create `src/app/why-us/page.jsx` - Why Choose Us page
6. Rewrite `src/app/page.jsx` - Homepage with all sections
7. Rewrite `src/app/about/page.jsx` - About page with corporate layout
8. Rewrite `src/app/products/page.jsx` - Products page with alternating layouts
9. Update `src/app/contact/page.jsx` - Contact page with form and map