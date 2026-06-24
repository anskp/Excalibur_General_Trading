# Add 3 New Product Categories: Mechanical Tools, Safety, HVAC

## Files to Modify

### 1. `src/types.ts`
- **Line 9**: Extend `layoutStyle` union type
  - Old: `layoutStyle: 'full' | 'split' | 'grid' | 'featured' | 'minimal';`
  - New: `layoutStyle: 'full' | 'split' | 'grid' | 'featured' | 'minimal' | 'tools' | 'safety' | 'hvac';`

### 2. `src/data.ts`

#### a) Add 3 new entries to `IMAGES` object (after line 23):
```ts
mechanicalToolsSector: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
safetySector: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
hvacSector: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
```

#### b) Add 3 new entries to `INDUSTRY_CARDS` (after line 95, before the closing `];`):
```ts
{
  id: "mechanical-tools",
  title: "Mechanical Tools & Workshop Equipment Trading",
  items: [
    "Hand tools and professional tool sets",
    "Pneumatic tools and air compressors",
    "Torque wrenches and measuring instruments",
    "Workshop storage and organization systems"
  ],
  iconName: "Wrench",
  image: IMAGES.mechanicalToolsSector,
  layoutStyle: "tools"
},
{
  id: "safety-trading",
  title: "Safety Equipment & PPE Trading",
  items: [
    "Personal protective equipment (PPE)",
    "Fire extinguishers & suppression systems",
    "Gas detection monitors and safety signage",
    "Industrial safety workwear and gear"
  ],
  iconName: "ShieldCheck",
  image: IMAGES.safetySector,
  layoutStyle: "safety"
},
{
  id: "hvac-trading",
  title: "HVAC Systems & Climate Solutions Trading",
  items: [
    "Central air conditioning chillers",
    "Ducted split system AC units",
    "Ventilation fans and air handling units",
    "Smart thermostatic control systems"
  ],
  iconName: "Thermometer",
  image: IMAGES.hvacSector,
  layoutStyle: "hvac"
},
```

#### c) Add 3 new entries to `FEATURED_PRODUCTS` (after line 138, before the closing `];`):
```ts
{
  id: "feat-mechanical-tools",
  category: "Mechanical Tools",
  tagline: "Professional Grade Workshop Solutions",
  description: "Premium mechanical tools, pneumatic systems, and workshop equipment engineered for continuous heavy-duty service in Abu Dhabi's industrial and automotive sectors.",
  image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  specs: ["Chrome-Vanadium Steel Hand Tool Sets", "High-Torque Pneumatic Impact Wrenches", "Digital Torque & Calibration Instruments", "Industrial Modular Workshop Cabinets"]
},
{
  id: "feat-safety",
  category: "Safety Equipment",
  tagline: "Comprehensive Workplace Protection",
  description: "Full-spectrum safety solutions including PPE, fire suppression systems, and gas detection equipment, all certified to international and UAE civil defense standards.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
  specs: ["ANSI/EN Approved Safety Helmets", "Civil Defense Listed Fire Extinguishers", "Multi-Gas Confined Space Detectors", "High-Visibility Protective Workwear"]
},
{
  id: "feat-hvac",
  category: "HVAC Systems",
  tagline: "Cooling Engineered for the GCC",
  description: "High-efficiency HVAC systems, ventilation equipment, and climate control solutions designed to perform reliably under extreme Middle Eastern temperatures.",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
  specs: ["Inverter Ducted Split AC Units (5 Ton)", "Commercial Air Handling Units (AHU)", "Industrial Ventilation Exhaust Fans", "Smart Energy Management Thermostats"]
},
```

#### d) Update `BUSINESS_STATS` (line 142):
- Old: `{ value: "25+", label: "Product Categories" },`
- New: `{ value: "28+", label: "Product Categories" },`

### 3. `src/components/HomeView.tsx`

#### a) Add new icon imports (line 11-23 area):
- Add `Wrench, ShieldCheck, Thermometer` to the lucide-react imports (ShieldCheck is already imported)

#### b) Update `getIcon` function (line 30-39 — add 3 new cases before `default`):
```ts
case 'Wrench': return <Wrench className={className} />;
case 'Thermometer': return <Thermometer className={className} />;
```

ShieldCheck already has a case (line 36).

#### c) Update the "Core Industries" section text (line 302):
- Old: `"We operate across five elite operational segments..."`
- New: `"We operate across eight elite operational segments..."`

#### d) Add 3 new card JSX blocks after the 5th card (heavy tyres) at line 514.
Insert between the closing of the 5th card and the closing of the section container (before line 516 `</div>`):

```tsx
{/* 6th Card: Mechanical Tools */}
<div
  className="bg-white border border-gray-200 p-6 flex flex-col justify-between shadow-sm"
  id="ind-card-mechanical-tools"
>
  <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <span className="p-1.5 bg-[#1D2636] text-[#0EA5E9]">
          {getIcon(INDUSTRY_CARDS[5].iconName, "w-4 h-4")}
        </span>
        <span className="text-xs uppercase tracking-wider text-[#1D2636] font-bold">Tools & Workshop</span>
      </div>
      <span className="text-xs font-mono text-gray-500">M14 DEPOT</span>
    </div>
    <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-3">
      {INDUSTRY_CARDS[5].title}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
      {INDUSTRY_CARDS[5].items.map((item, idx) => (
        <div key={idx} className="bg-[#F4F4F4] px-3 py-2 border border-gray-200 text-xs font-medium text-gray-700 flex items-center justify-between">
          <span>{item}</span>
          <span className="text-[9px] text-gray-400 font-mono">IN STOCK</span>
        </div>
      ))}
    </div>
  </div>
  <button
    onClick={() => handleNavClick('products')}
    className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-[#1D2636] transition-colors cursor-pointer self-start"
  >
    <span>View tool catalogs</span>
    <ArrowRight className="w-3.5 h-3.5" />
  </button>
</div>

{/* 7th Card: Safety Equipment */}
<div
  className="bg-white border-2 border-[#0EA5E9]/30 p-6 relative overflow-hidden flex flex-col justify-between"
  id="ind-card-safety"
>
  <div className="absolute top-0 right-0 w-24 h-24 bg-[#0EA5E9]/10 rounded-bl-full flex items-center justify-center pointer-events-none">
    <ShieldCheck className="w-8 h-8 text-[#0EA5E9]/40" />
  </div>
  <div>
    <span className="text-[10px] tracking-widest text-[#0EA5E9] uppercase font-bold">Department 06</span>
    <h3 className="font-heading text-lg font-bold text-[#1D2636] mt-1 mb-2">
      {INDUSTRY_CARDS[6].title}
    </h3>
    <p className="text-gray-500 text-xs mb-4">
      Fully certified PPE, fire safety, and gas detection equipment compliant with UAE civil defense and international safety standards.
    </p>
    <div className="space-y-2">
      {INDUSTRY_CARDS[6].items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-3 text-xs text-gray-700">
          <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
  <button
    onClick={() => handleNavClick('products')}
    className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
  >
    <span>Safety compliance specs</span>
    <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
  </button>
</div>

{/* 8th Card: HVAC Systems */}
<div
  className="bg-[#EFEFEF] border border-gray-300 p-6 flex flex-col justify-between"
  id="ind-card-hvac"
>
  <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <span className="p-1.5 bg-[#2F394D] text-[#0EA5E9]">
          {getIcon(INDUSTRY_CARDS[7].iconName, "w-4 h-4")}
        </span>
        <span className="text-xs uppercase tracking-wider text-[#2F394D] font-bold">Climate Control</span>
      </div>
      <span className="text-xs font-mono text-gray-500">GCC SPEC</span>
    </div>
    <h3 className="font-heading text-lg font-bold text-[#1D2636] mb-3">
      {INDUSTRY_CARDS[7].title}
    </h3>
    <p className="text-gray-600 text-xs mb-4 leading-relaxed">
      High-SEER rated cooling systems and industrial ventilation engineered for extreme ambient temperatures across the UAE.
    </p>
    <div className="space-y-2 mt-2">
      {INDUSTRY_CARDS[7].items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700 bg-white p-2 border border-gray-200">
          <span className="w-1.5 h-1.5 bg-[#0EA5E9]"></span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
  <button
    onClick={() => handleNavClick('products')}
    className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D2636] hover:text-[#0EA5E9] transition-colors cursor-pointer self-start"
  >
    <span>Cooling load calculator</span>
    <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
  </button>
</div>
```

Note: These 3 cards should be placed inside a new grid. Wrap them in:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8" id="industries-cards-row-2">
  ...3 cards above...
</div>
```

### 4. `src/components/ProductsView.tsx`

Add 3 new entries to `PRODUCT_CATALOGUE_DATA` (before the closing `];` at the end of the array):

#### a) Mechanical Tools Trading (insert after index 5 or at end):
```ts
{
  category: "Mechanical Tools & Workshop Equipment Trading",
  description: "We supply premium-grade mechanical tools, pneumatic systems, and workshop equipment designed for heavy-duty industrial applications across Abu Dhabi's manufacturing and automotive service sectors.",
  image: IMAGES.mechanicalToolsSector,
  features: [
    "Chrome-vanadium steel hand tools with ergonomic anti-slip grips",
    "High-torque pneumatic impact wrenches and air compressor systems",
    "Precision digital torque wrenches and measurement instruments",
    "Industrial-grade tool storage cabinets and workshop organization systems"
  ],
  gallery: [
    { name: "Heavy Duty Mechanic Tool Set (180 Pcs)", model: "EX-MT-180", price: "Industrial Grade" },
    { name: "Professional Pneumatic Impact Wrench", model: "EX-MT-PW1", price: "High Torque Spec" },
    { name: "Digital Torque Wrench Set (10-150 Nm)", model: "EX-MT-DT50", price: "Calibrated Certified" }
  ]
},
```

#### b) Safety Equipment Trading:
```ts
{
  category: "Safety Equipment & PPE Trading",
  description: "Excalibur provides comprehensive safety solutions including personal protective equipment, industrial safety gear, and fire protection systems certified to international and UAE civil defense standards.",
  image: IMAGES.safetySector,
  features: [
    "Industrial safety helmets and face shields meeting ANSI/EN standards",
    "Fire extinguishers and suppression systems with civil defense approvals",
    "High-visibility safety vests and protective industrial workwear",
    "Multi-gas detection monitors and workplace safety signage systems"
  ],
  gallery: [
    { name: "Industrial Safety Helmet (ANSI Approved)", model: "EX-S-HLM1", price: "Impact Rated" },
    { name: "ABC Dry Chemical Fire Extinguisher (6kg)", model: "EX-S-FX6", price: "Civil Defense Listed" },
    { name: "Multi-Gas Detector Monitor (4-in-1)", model: "EX-S-GD4", price: "Confined Space Rated" }
  ]
},
```

#### c) HVAC Systems Trading:
```ts
{
  category: "HVAC Systems & Climate Solutions Trading",
  description: "We supply high-efficiency HVAC systems, ventilation equipment, and climate control solutions for commercial, industrial, and residential applications across the GCC region, engineered for extreme ambient temperatures.",
  image: IMAGES.hvacSector,
  features: [
    "Central air conditioning chillers with inverter compressor technology",
    "Ducted split systems designed for +50°C ambient temperatures",
    "Industrial ventilation fans and custom air handling units (AHUs)",
    "Smart thermostatic controls with integrated energy management systems"
  ],
  gallery: [
    { name: "Inverter Ducted Split AC Unit (5 Ton)", model: "EX-HV-DS5", price: "High SEER Rated" },
    { name: "Commercial Air Handling Unit", model: "EX-HV-AHU40", price: "Custom Configurable" },
    { name: "Industrial Exhaust Fan System (24 inch)", model: "EX-HV-EF24", price: "Heavy Duty Ventilation" }
  ]
},
```

### 5. Build & Verify
Run `npm run build` to confirm no TypeScript or build errors.
