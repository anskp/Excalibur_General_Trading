# Convert React SPA back to Next.js

## Goal
Convert the current Vite+React SPA back to Next.js while preserving the exact same UI, content, and styling from the React SPA. No visual or content changes.

## Current State
- Project is currently a Vite + React SPA
- All UI is in `src/components/` (Header, Footer, HomeView, AboutView, ProductsView, VisionView, WhyView, ContactView, Logo)
- Data is in `src/data.ts`
- Types in `src/types.ts`
- Entry point: `src/main.tsx`, `src/App.tsx`
- Images in `public/images/`
- Uses Tailwind CSS, lucide-react, motion (framer-motion)

## Target State
- Next.js app with pages:
  - `/` (home)
  - `/about`
  - `/products`
  - `/vision`
  - `/why-us`
  - `/contact`
- Layout: `src/app/layout.jsx` with header/footer
- Components: keep exact same file contents but adapt to Next.js conventions

## Steps

### 1. Initialize Next.js structure
- Create `src/app/layout.jsx` with Inter/Manrope fonts, global styles
- Create `src/app/page.jsx` for home
- Create `src/app/about/page.jsx`
- Create `src/app/products/page.jsx`
- Create `src/app/vision/page.jsx`
- Create `src/app/why-us/page.jsx`
- Create `src/app/contact/page.jsx`

### 2. Convert components
- Move `src/components/Header.tsx` to `src/components/Header.jsx` (Next.js compatible)
- Move `src/components/Footer.tsx` to `src/components/Footer.jsx`
- Move `src/components/HomeView.tsx` to `src/components/HomeView.jsx`
- Move `src/components/AboutView.tsx` to `src/components/AboutView.jsx`
- Move `src/components/ProductsView.tsx` to `src/components/ProductsView.jsx`
- Move `src/components/VisionView.tsx` to `src/components/VisionView.jsx`
- Move `src/components/WhyView.tsx` to `src/components/WhyView.jsx`
- Move `src/components/ContactView.tsx` to `src/components/ContactView.jsx`
- Move `src/components/Logo.tsx` to `src/components/Logo.jsx` (or remove if not needed)

### 3. Convert data and types
- Move `src/data.ts` to `src/data.js`
- Move `src/types.ts` to `src/types.js`

### 4. Update package.json
- Replace Vite deps with Next.js deps
- Keep: lucide-react, motion (framer-motion), react, react-dom
- Add: next, @next/font (or next/font)

### 5. Update configs
- Update `vite.config.ts` to `next.config.js`
- Update `tsconfig.json` for Next.js paths
- Update `postcss.config.mjs` for Next.js
- Update `index.html` to `src/app/globals.css`

### 6. Remove Vite-specific files
- Remove `src/main.tsx`
- Remove `src/App.tsx`
- Remove `index.html` (Next.js handles this)
- Remove `vite.config.ts`

### 7. Preserve exact UI
- Keep all classNames identical
- Keep all content identical
- Keep all images and data identical
- Only change framework-specific syntax (e.g., no `import React` needed in Next.js with new JSX transform, but keeping it is fine)
- Page routing via Next.js file-system instead of state-based routing

### 8. Update routing logic
- Replace `activePage` state in `App.tsx` with Next.js page routes
- Each page imports its own view component
- Header/Footer shared via layout
- Remove `onChangePage` prop — use Next.js `<Link>` or `useRouter()`

## Quality Checks
- Build must pass (`npm run build`)
- Lint must pass
- No Vite-specific configs remain
- All pages render correctly
