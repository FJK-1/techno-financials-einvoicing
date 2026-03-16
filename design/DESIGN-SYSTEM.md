# Techno Financials -- UAE E-Invoicing Design System

**Product**: UAE E-Invoicing System
**Brand**: Techno Financials (a product of 3techno)
**Version**: 1.0
**Last Updated**: 2026-03-16

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Grid](#4-spacing--grid)
5. [Iconography](#5-iconography)
6. [Components](#6-components)
7. [Layout Patterns](#7-layout-patterns)
8. [Accessibility](#8-accessibility)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Motion & Animation](#10-motion--animation)

---

## 1. Design Principles

| Principle | Description |
|---|---|
| **Clarity First** | Financial data must be instantly readable. Every element earns its place on screen. |
| **Professional Trust** | The interface conveys authority and reliability -- critical for tax compliance software. |
| **Data Density, Not Clutter** | Show rich information without overwhelming. Use progressive disclosure and smart hierarchy. |
| **Consistent Patterns** | Reusable layouts and components so users build muscle memory across modules. |
| **Accessible by Default** | WCAG 2.1 AA compliance. Legible type, sufficient contrast, keyboard navigable. |

**Target Users**: Finance professionals, tax accountants, SME owners, and compliance officers operating under UAE Ministry of Finance regulations.

**Design Tone**: Bloomberg Terminal meets modern SaaS -- dense yet approachable, professional yet not sterile.

---

## 2. Color Palette

### 2.1 Primary Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-primary-900` | `#0E1F3A` | Darkest navy -- sidebar background, heavy emphasis |
| `--color-primary-800` | `#142D55` | Dark navy -- hover states on dark backgrounds |
| `--color-primary-700` | `#1B3A6B` | **Primary Navy Blue** -- brand color, primary buttons, active nav items |
| `--color-primary-600` | `#264D8A` | Medium navy -- link hover states |
| `--color-primary-500` | `#3562A6` | Medium -- secondary emphasis, selected row highlights |
| `--color-primary-400` | `#5A83BF` | Light navy -- icon accents, progress indicators |
| `--color-primary-300` | `#89A8D4` | Lighter -- tags, subtle highlights |
| `--color-primary-200` | `#B8CDE6` | Very light -- background tints, selected table rows |
| `--color-primary-100` | `#DCE6F2` | Wash -- hover backgrounds, subtle borders |
| `--color-primary-50` | `#EEF3F9` | Near-white -- page background tint, card hover |

### 2.2 Secondary / Accent Colors (Teal)

A professional teal that complements the navy and signals financial growth and accuracy.

| Token | Hex | Usage |
|---|---|---|
| `--color-accent-900` | `#0A3D3D` | Darkest teal |
| `--color-accent-800` | `#0F5454` | Dark teal |
| `--color-accent-700` | `#14706E` | Deep teal -- accent buttons, CTAs |
| `--color-accent-600` | `#198A87` | **Accent Base** -- secondary actions, highlights, chart accents |
| `--color-accent-500` | `#20A49F` | Medium teal -- links, interactive elements |
| `--color-accent-400` | `#4DBFBB` | Light teal -- badges, tags |
| `--color-accent-300` | `#80D4D1` | Lighter teal -- chart fills |
| `--color-accent-200` | `#B3E6E4` | Very light -- background accents |
| `--color-accent-100` | `#D9F2F1` | Wash -- subtle backgrounds |
| `--color-accent-50` | `#ECF9F8` | Near-white -- hover states |

### 2.3 Neutral / Gray Scale

| Token | Hex | Usage |
|---|---|---|
| `--color-neutral-950` | `#0A0A0B` | Near-black -- primary text on light backgrounds |
| `--color-neutral-900` | `#1A1A1E` | Headings, high-emphasis text |
| `--color-neutral-800` | `#2E2E33` | Body text |
| `--color-neutral-700` | `#44444B` | Secondary text, labels |
| `--color-neutral-600` | `#5C5C65` | Placeholder text, muted icons |
| `--color-neutral-500` | `#76767F` | Disabled text, captions |
| `--color-neutral-400` | `#9C9CA5` | Subtle icons, dividers |
| `--color-neutral-300` | `#C2C2C9` | Borders, horizontal rules |
| `--color-neutral-200` | `#DDDDE1` | Input borders, table borders |
| `--color-neutral-100` | `#EDEDF0` | Card borders, separator lines |
| `--color-neutral-50` | `#F6F6F8` | Page background, table row alternation |
| `--color-neutral-0` | `#FFFFFF` | White -- card surfaces, input backgrounds |

### 2.4 Semantic Colors

#### Success (Green)
| Token | Hex | Usage |
|---|---|---|
| `--color-success-700` | `#15803D` | Success text on light background |
| `--color-success-600` | `#16A34A` | **Success base** -- checkmarks, approved status |
| `--color-success-500` | `#22C55E` | Success icons, badges |
| `--color-success-100` | `#DCFCE7` | Success background tint |
| `--color-success-50` | `#F0FDF4` | Success banner background |

#### Warning (Amber)
| Token | Hex | Usage |
|---|---|---|
| `--color-warning-700` | `#B45309` | Warning text on light background |
| `--color-warning-600` | `#D97706` | **Warning base** -- attention icons, pending status |
| `--color-warning-500` | `#F59E0B` | Warning badges |
| `--color-warning-100` | `#FEF3C7` | Warning background tint |
| `--color-warning-50` | `#FFFBEB` | Warning banner background |

#### Error (Red)
| Token | Hex | Usage |
|---|---|---|
| `--color-error-700` | `#B91C1C` | Error text on light background |
| `--color-error-600` | `#DC2626` | **Error base** -- validation errors, rejected status |
| `--color-error-500` | `#EF4444` | Error icons, destructive action hover |
| `--color-error-100` | `#FEE2E2` | Error background tint |
| `--color-error-50` | `#FEF2F2` | Error banner background |

#### Info (Blue)
| Token | Hex | Usage |
|---|---|---|
| `--color-info-700` | `#1D4ED8` | Info text on light background |
| `--color-info-600` | `#2563EB` | **Info base** -- informational icons, help tooltips |
| `--color-info-500` | `#3B82F6` | Info badges |
| `--color-info-100` | `#DBEAFE` | Info background tint |
| `--color-info-50` | `#EFF6FF` | Info banner background |

### 2.5 Surface Colors

| Token | Value | Usage |
|---|---|---|
| `--surface-page` | `#F6F6F8` (neutral-50) | Main page background |
| `--surface-card` | `#FFFFFF` (neutral-0) | Cards, panels, modal bodies |
| `--surface-card-hover` | `#EEF3F9` (primary-50) | Card hover state |
| `--surface-sidebar` | `#0E1F3A` (primary-900) | Sidebar background |
| `--surface-sidebar-hover` | `#142D55` (primary-800) | Sidebar item hover |
| `--surface-sidebar-active` | `#1B3A6B` (primary-700) | Active sidebar item |
| `--surface-header` | `#FFFFFF` (neutral-0) | Top header bar |
| `--surface-modal-overlay` | `rgba(10, 10, 11, 0.5)` | Modal backdrop |
| `--surface-input` | `#FFFFFF` (neutral-0) | Input field background |
| `--surface-input-disabled` | `#F6F6F8` (neutral-50) | Disabled input background |
| `--surface-table-row-alt` | `#F6F6F8` (neutral-50) | Alternating table row |
| `--surface-table-row-hover` | `#EEF3F9` (primary-50) | Table row hover |
| `--surface-table-row-selected` | `#DCE6F2` (primary-100) | Selected table row |

---

## 3. Typography

### 3.1 Font Family

```
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', Consolas, monospace;
```

- **Inter** is the primary typeface -- chosen for its exceptional legibility at small sizes, numeric clarity (critical for financial data), and wide language support including Arabic.
- **Monospace** is used for invoice numbers, reference codes, amounts in tables, and XML/API displays.

### 3.2 Type Scale

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `--text-display` | 32px / 2rem | 40px / 1.25 | 700 Bold | -0.02em | Dashboard hero numbers, large KPIs |
| `--text-h1` | 24px / 1.5rem | 32px / 1.33 | 700 Bold | -0.01em | Page titles |
| `--text-h2` | 20px / 1.25rem | 28px / 1.4 | 600 Semibold | -0.01em | Section headings, card titles |
| `--text-h3` | 16px / 1rem | 24px / 1.5 | 600 Semibold | 0 | Sub-section headings, widget titles |
| `--text-h4` | 14px / 0.875rem | 20px / 1.43 | 600 Semibold | 0 | Group labels, column headers |
| `--text-body` | 14px / 0.875rem | 20px / 1.43 | 400 Regular | 0 | Default body text, table cells, form inputs |
| `--text-body-medium` | 14px / 0.875rem | 20px / 1.43 | 500 Medium | 0 | Emphasized body text, active nav items |
| `--text-small` | 12px / 0.75rem | 16px / 1.33 | 400 Regular | 0.01em | Helper text, timestamps, secondary info |
| `--text-caption` | 11px / 0.6875rem | 16px / 1.45 | 500 Medium | 0.02em | Badges, status chips, metadata |
| `--text-overline` | 11px / 0.6875rem | 16px / 1.45 | 600 Semibold | 0.08em | Section overlines, uppercase labels |

### 3.3 Text Colors

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `--color-neutral-900` | Headings, primary content |
| `--text-secondary` | `--color-neutral-700` | Labels, secondary descriptions |
| `--text-muted` | `--color-neutral-500` | Placeholders, disabled, timestamps |
| `--text-inverse` | `--color-neutral-0` | Text on dark backgrounds (sidebar, primary buttons) |
| `--text-link` | `--color-primary-700` | Links default state |
| `--text-link-hover` | `--color-primary-600` | Links hover state |

### 3.4 Numeric Display

For financial amounts and invoice data, use tabular (monospaced) figures:

```css
.numeric {
  font-feature-settings: 'tnum' 1, 'lnum' 1;
  font-variant-numeric: tabular-nums lining-nums;
}
```

Currency amounts should be right-aligned in tables. Use `--font-mono` for invoice numbers and reference codes.

---

## 4. Spacing & Grid

### 4.1 Base Unit

All spacing derives from a **4px sub-grid** within an **8px base grid**.

### 4.2 Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight: icon-to-text gap, badge internal padding |
| `--space-2` | 8px | Small: input internal padding (vertical), compact list items |
| `--space-3` | 12px | Medium-small: input internal padding (horizontal), small card padding |
| `--space-4` | 16px | Medium: card padding, section gaps, button padding (horizontal) |
| `--space-5` | 20px | Medium-large: form field vertical gaps |
| `--space-6` | 24px | Large: card padding (comfortable), gutter width |
| `--space-8` | 32px | XL: section vertical spacing, modal padding |
| `--space-10` | 40px | XXL: page section separators |
| `--space-12` | 48px | Page top/bottom padding |
| `--space-16` | 64px | Major layout separators |

### 4.3 Layout Grid

| Property | Value |
|---|---|
| Max content width | 1440px |
| Columns | 12 |
| Gutter | 24px |
| Margin (desktop) | 32px |
| Margin (tablet) | 24px |
| Margin (mobile) | 16px |
| Sidebar width (expanded) | 256px |
| Sidebar width (collapsed) | 64px |
| Top header height | 56px |

### 4.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, chips, small elements |
| `--radius-md` | 6px | Buttons, inputs, dropdowns |
| `--radius-lg` | 8px | Cards, panels, modals |
| `--radius-xl` | 12px | Large cards, floating panels |
| `--radius-full` | 9999px | Avatars, circular indicators |

### 4.5 Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards at rest, input focus |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Dropdowns, popovers, card hover |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, floating panels |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.16)` | Overlays, command palette |

---

## 5. Iconography

| Property | Specification |
|---|---|
| Library | Lucide Icons (or Phosphor Icons) |
| Default size | 20px (matches 14px body text) |
| Small size | 16px (badges, compact UI) |
| Large size | 24px (sidebar nav, empty states) |
| Stroke width | 1.5px |
| Color | Inherits from parent text color |

Icons should always be accompanied by text labels in navigation. Icon-only buttons must have `aria-label` and tooltip on hover.

---

## 6. Components

### 6.1 Buttons

#### Variants

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| **Primary** | `--color-primary-700` | `#FFFFFF` | none | Main actions: Save, Submit, Create Invoice |
| **Secondary** | `transparent` | `--color-primary-700` | 1px `--color-primary-700` | Secondary actions: Cancel, Export, Filter |
| **Ghost** | `transparent` | `--color-neutral-700` | none | Tertiary actions: View details, icon buttons |
| **Danger** | `--color-error-600` | `#FFFFFF` | none | Destructive actions: Delete, Reject |
| **Accent** | `--color-accent-600` | `#FFFFFF` | none | Promotional or highlighted CTAs |

#### Sizes

| Size | Height | Padding (H) | Font Size | Icon Size |
|---|---|---|---|---|
| Small (sm) | 32px | 12px | 12px | 16px |
| Medium (md) | 36px | 16px | 14px | 18px |
| Large (lg) | 40px | 20px | 14px | 20px |

#### States

| State | Modification |
|---|---|
| Default | As specified above |
| Hover | Background lightens 8% (or darkens for ghost) |
| Active/Pressed | Background darkens 4% from default |
| Focus | 2px ring offset 2px, ring color `--color-primary-400` |
| Disabled | 40% opacity, `cursor: not-allowed` |
| Loading | Spinner replaces icon or text, maintains button width |

#### Rules
- Minimum button width: 80px
- Always use sentence case ("Create invoice", not "CREATE INVOICE")
- One primary button per visible section
- Icon + label buttons: icon on the left, 8px gap
- Full-width buttons only on mobile forms

---

### 6.2 Input Fields

#### Text Input

| Property | Value |
|---|---|
| Height | 36px |
| Padding | 8px vertical, 12px horizontal |
| Border | 1px solid `--color-neutral-200` |
| Border radius | `--radius-md` (6px) |
| Background | `--surface-input` |
| Font | `--text-body` (14px) |
| Placeholder color | `--color-neutral-500` |
| Label | `--text-h4` (14px, semibold), 4px gap below label |

#### States

| State | Specification |
|---|---|
| Default | Border `--color-neutral-200` |
| Hover | Border `--color-neutral-300` |
| Focus | Border `--color-primary-700`, ring 2px `--color-primary-100` |
| Error | Border `--color-error-600`, ring 2px `--color-error-100` |
| Disabled | Background `--surface-input-disabled`, text `--color-neutral-500` |
| Read-only | No border, background `--surface-input-disabled` |

#### Helper & Error Text
- Positioned 4px below the input
- Helper: `--text-small`, `--color-neutral-600`
- Error: `--text-small`, `--color-error-700`, preceded by a warning icon (16px)

#### Field Variants

| Variant | Notes |
|---|---|
| **Text** | Standard single-line text input |
| **Number** | Right-aligned text, numeric keyboard on mobile, optional stepper buttons |
| **Currency** | Number input with currency code prefix (AED, USD), 2 decimal places enforced |
| **Select / Dropdown** | Chevron-down icon on right, 36px height, searchable for >7 options |
| **Multi-select** | Chips inside input for selected values |
| **Date Picker** | Calendar dropdown, format DD/MM/YYYY (UAE standard), text input fallback |
| **Date Range** | Two date fields with dash separator |
| **Textarea** | Min-height 80px, resize vertical only, character counter if maxlength |
| **Search** | Leading search icon, trailing clear (x) button, debounced 300ms |
| **File Upload** | Drag-and-drop zone, file type and size constraints displayed |

---

### 6.3 Cards

| Property | Value |
|---|---|
| Background | `--surface-card` |
| Border | 1px solid `--color-neutral-100` |
| Border radius | `--radius-lg` (8px) |
| Padding | 24px |
| Shadow | `--shadow-sm` at rest |
| Shadow (hover) | `--shadow-md` (only for clickable cards) |

#### Card Anatomy
```
+-----------------------------------+
| [Overline / Category]             |   <- --text-overline, --color-neutral-600
| Card Title                        |   <- --text-h2 or --text-h3
| Description / Subtitle            |   <- --text-body, --color-neutral-700
|                                   |
| [Content Area]                    |   <- Flexible content
|                                   |
| [Footer / Actions]               |   <- Right-aligned buttons or links
+-----------------------------------+
```

#### Card Types
- **Stat Card (KPI)**: Icon + label on top, large numeric value (display text), trend indicator with arrow + percentage
- **Content Card**: Standard card with header and body
- **Action Card**: Clickable card with hover state, entire surface is interactive
- **List Card**: Card containing a compact list of items

---

### 6.4 Tables

Tables are a core component for invoice lists, master data, reports, and validation results.

| Property | Value |
|---|---|
| Border | 1px solid `--color-neutral-100` on rows |
| Header background | `--color-neutral-50` |
| Header text | `--text-h4` (14px, semibold), `--color-neutral-700` |
| Row height | 44px (compact), 52px (default), 64px (comfortable) |
| Cell padding | 12px horizontal, centered vertical |
| Alternating rows | Optional: even rows `--surface-table-row-alt` |
| Hover | `--surface-table-row-hover` |
| Selected | `--surface-table-row-selected` with left 3px border `--color-primary-700` |
| Border radius | `--radius-lg` on outer container |

#### Table Features

| Feature | Specification |
|---|---|
| **Sorting** | Click column header to sort. Arrow indicator up/down. Active sort header in `--text-body-medium`. |
| **Filtering** | Filter icon in header opens dropdown with options. Active filters shown as chips above table. |
| **Pagination** | Below table: "Showing 1-25 of 342" + page size selector (10, 25, 50, 100) + prev/next + page numbers. |
| **Selection** | Checkbox column on left. Header checkbox for select-all. Selected count + bulk actions bar appears above table. |
| **Inline Actions** | Hover reveals action icons (edit, view, delete) on right side of row, or persistent "..." overflow menu. |
| **Empty State** | Centered illustration + message + action button when no data matches. |
| **Loading** | Skeleton rows (8 rows of animated gray bars) while loading. |
| **Column Resize** | Draggable column borders. Min column width 80px. |
| **Sticky Header** | Table header sticks to top on vertical scroll. |
| **Sticky Actions** | Action column (rightmost) sticks on horizontal scroll. |

#### Numeric Columns
- Right-aligned
- Use tabular figures (`font-variant-numeric: tabular-nums`)
- Currency amounts formatted: AED 1,234.56
- Negative amounts in `--color-error-600` with parentheses: (AED 1,234.56)

---

### 6.5 Sidebar Navigation

| Property | Value |
|---|---|
| Width (expanded) | 256px |
| Width (collapsed) | 64px |
| Background | `--surface-sidebar` (#0E1F3A) |
| Transition | width 200ms ease-in-out |

#### Sidebar Anatomy
```
+-----------------------------+
| [Logo]  Techno Financials   |  <- 56px height, matches header
|-----------------------------|
| [Search / Quick action]     |  <- Optional command palette trigger
|-----------------------------|
| MAIN                        |  <- Overline section label, #5A83BF
|   Dashboard                 |
|   Invoices          [12]    |  <- Badge for counts
|   Credit Notes              |
|                             |
| MASTER DATA                 |
|   Sellers                   |
|   Buyers                    |
|   Items                     |
|                             |
| REPORTS                     |
|   Analytics                 |
|   Compliance                |
|   Archive                   |
|-----------------------------|
| SETTINGS                    |  <- Bottom-pinned section
|   Organization              |
|   Users & Roles             |
|   Integrations              |
|-----------------------------|
| [Avatar] Firstname L.      |  <- User profile, 48px height
|          Role Name          |
+-----------------------------+
```

#### Nav Item States

| State | Specification |
|---|---|
| Default | Text `#B8CDE6` (primary-200), icon `#89A8D4` (primary-300) |
| Hover | Background `--surface-sidebar-hover`, text `#FFFFFF` |
| Active | Background `--surface-sidebar-active`, text `#FFFFFF`, left 3px border `--color-accent-500` |
| Section label | `--text-overline`, color `#5A83BF` (primary-400), uppercase |
| Badge | Background `--color-accent-600`, text `#FFFFFF`, min-width 20px, `--radius-full` |

#### Collapsed State
- Icons only, centered in 64px width
- Tooltip on hover showing label
- Section labels hidden
- Active indicator: left 3px border only

---

### 6.6 Top Header Bar

| Property | Value |
|---|---|
| Height | 56px |
| Background | `--surface-header` |
| Border bottom | 1px solid `--color-neutral-100` |
| Shadow | none (border provides separation) |
| Position | Fixed top, z-index 100 |

#### Header Anatomy (left to right)
```
[Sidebar Toggle] [Breadcrumb / Page Title]     [Search] [Notifications] [Help] [Avatar Dropdown]
```

| Element | Specification |
|---|---|
| Sidebar toggle | 36px ghost button, hamburger icon |
| Page title | `--text-h2`, `--color-neutral-900` |
| Search | 36px input, 240px width, Cmd+K shortcut hint, expands to command palette |
| Notifications | 36px ghost button with bell icon, red dot indicator for unread |
| Help | 36px ghost button, question mark icon |
| Avatar | 32px circle, initials fallback, dropdown with profile/logout |

---

### 6.7 Badges & Status Chips

Used for invoice statuses, validation results, and categorical labels.

#### Status Badges (Invoice Lifecycle)

| Status | Background | Text | Dot Color |
|---|---|---|---|
| Draft | `--color-neutral-100` | `--color-neutral-700` | `--color-neutral-500` |
| Pending Validation | `--color-warning-100` | `--color-warning-700` | `--color-warning-600` |
| Validated | `--color-info-100` | `--color-info-700` | `--color-info-600` |
| Submitted | `--color-primary-100` | `--color-primary-700` | `--color-primary-700` |
| Delivered (C4) | `--color-accent-100` | `--color-accent-700` | `--color-accent-600` |
| Accepted (C5) | `--color-success-100` | `--color-success-700` | `--color-success-600` |
| Rejected | `--color-error-100` | `--color-error-700` | `--color-error-600` |
| Cancelled | `--color-neutral-100` | `--color-neutral-600` | `--color-neutral-400` |

#### Badge Specs

| Property | Value |
|---|---|
| Height | 22px |
| Padding | 4px 8px |
| Font | `--text-caption` (11px, 500 weight) |
| Border radius | `--radius-sm` (4px) |
| Dot | 6px circle, 6px gap before text |

---

### 6.8 Modals & Dialogs

| Property | Value |
|---|---|
| Overlay | `--surface-modal-overlay` |
| Background | `--surface-card` |
| Border radius | `--radius-xl` (12px) |
| Shadow | `--shadow-xl` |
| Max width | Small: 400px, Medium: 560px, Large: 720px, Full: 90vw |
| Max height | 85vh, scrollable body |
| Padding | Header: 24px, Body: 24px, Footer: 16px 24px |
| Animation | Fade in overlay 150ms, scale up content from 95% 200ms ease-out |

#### Modal Anatomy
```
+-------------------------------------------+
| Modal Title                          [X]  |   <- --text-h2, close button 36px
|-------------------------------------------|
|                                           |
| Modal body content with scrollable area   |   <- --text-body, auto scroll
|                                           |
|-------------------------------------------|
| [Secondary Action]         [Primary CTA]  |   <- Right-aligned, 12px gap
+-------------------------------------------+
```

#### Dialog Types

| Type | Specs |
|---|---|
| **Confirmation** | Small (400px), icon + message + two buttons |
| **Form** | Medium (560px), form fields + save/cancel |
| **Detail View** | Large (720px), read-only data display |
| **Destructive** | Small (400px), red icon, danger button, requires typed confirmation for critical deletes |

#### Rules
- Clicking overlay or pressing Escape closes non-critical modals
- Destructive modals require explicit button click to close
- Focus trapped inside modal
- Return focus to trigger element on close

---

### 6.9 Tabs

| Property | Value |
|---|---|
| Tab height | 40px |
| Font | `--text-body-medium` (14px, 500 weight) |
| Default color | `--color-neutral-600` |
| Active color | `--color-primary-700` |
| Active indicator | 2px bottom border, `--color-primary-700` |
| Hover background | `--color-neutral-50` |
| Gap between tabs | 0 (tabs are adjacent) |
| Padding per tab | 16px horizontal |

#### Variants
- **Line tabs**: Bottom border indicator (default, use in page-level navigation)
- **Pill tabs**: Background fill for active, `--radius-md` (use in cards, compact contexts)
- **Scrollable tabs**: Horizontal scroll with fade edges when tabs overflow

---

### 6.10 Charts & Data Visualization

Charts are used in the Dashboard module and Reports module.

#### Chart Color Palette (Sequential)

Use in this order for multi-series charts:

| Index | Hex | Name |
|---|---|---|
| 1 | `#1B3A6B` | Primary Navy |
| 2 | `#198A87` | Accent Teal |
| 3 | `#5A83BF` | Light Navy |
| 4 | `#4DBFBB` | Light Teal |
| 5 | `#B45309` | Amber |
| 6 | `#7C3AED` | Purple |
| 7 | `#89A8D4` | Pale Navy |
| 8 | `#80D4D1` | Pale Teal |

#### Chart Specs

| Property | Value |
|---|---|
| Library recommendation | Recharts (React) or Chart.js |
| Background | Transparent (inherits card background) |
| Grid lines | `--color-neutral-100`, 1px, dashed |
| Axis labels | `--text-small`, `--color-neutral-600` |
| Axis lines | `--color-neutral-200`, 1px |
| Tooltip | `--shadow-md`, white background, `--radius-md`, `--text-small` |
| Legend | Below chart, `--text-small`, colored dot + label |
| Min chart height | 240px |
| Aspect ratio | 16:9 (bar/line), 1:1 (donut/pie) |

#### Chart Types Used

| Chart | Usage |
|---|---|
| **KPI Stat** | Large number + trend arrow + sparkline (mini line chart) |
| **Bar Chart** | Invoice counts by status, monthly comparisons |
| **Stacked Bar** | Tax breakdown by category |
| **Line Chart** | Invoice volume trends over time |
| **Donut Chart** | Invoice status distribution, tax type breakdown |
| **Area Chart** | Revenue/tax collected over time |
| **Heatmap** | Validation error frequency by rule type |

---

### 6.11 Toast Notifications

| Property | Value |
|---|---|
| Position | Top-right, 24px from edges |
| Width | 360px |
| Border radius | `--radius-lg` (8px) |
| Shadow | `--shadow-md` |
| Animation | Slide in from right 250ms ease-out, fade out 200ms |
| Auto-dismiss | 5 seconds (info/success), persistent (error/warning) |
| Stack | Up to 3 visible, older ones collapse |

#### Variants

| Type | Left Border | Icon | Icon Color |
|---|---|---|---|
| Success | 3px `--color-success-600` | check-circle | `--color-success-600` |
| Error | 3px `--color-error-600` | alert-circle | `--color-error-600` |
| Warning | 3px `--color-warning-600` | alert-triangle | `--color-warning-600` |
| Info | 3px `--color-info-600` | info | `--color-info-600` |

#### Toast Anatomy
```
+---------------------------------------+
| [Icon]  Title text              [X]   |   <- 14px semibold, close button
|         Description text              |   <- 12px regular, --color-neutral-700
|         [Action Link]                 |   <- Optional, 12px semibold, link color
+---------------------------------------+
```

---

### 6.12 Breadcrumbs

| Property | Value |
|---|---|
| Font | `--text-small` (12px) |
| Separator | Chevron-right icon, 12px, `--color-neutral-400` |
| Link color | `--color-neutral-600` |
| Link hover | `--color-primary-700`, underline |
| Current page | `--color-neutral-900`, not a link |
| Gap | 8px between items and separators |

Example: `Dashboard > Invoices > INV-2026-001234`

---

### 6.13 Empty States

Used when a section, table, or module has no data yet.

| Property | Value |
|---|---|
| Illustration | 120px x 120px, line-art style, primary-300 + neutral-300 colors |
| Title | `--text-h3`, `--color-neutral-900` |
| Description | `--text-body`, `--color-neutral-600`, max-width 360px, centered |
| Action | Primary button or link below description, 16px gap |
| Alignment | Centered horizontally and vertically in the content area |

#### Examples
- Invoices: "No invoices yet" / "Create your first invoice to get started" / [Create Invoice]
- Search results: "No results found" / "Try adjusting your search terms or filters" / [Clear Filters]
- Reports: "No data for this period" / "Select a different date range or wait for invoices to be processed"

---

## 7. Layout Patterns

### 7.1 Sidebar + Content (App Shell)

The primary application layout.

```
+--------+----------------------------------------------+
| Sidebar|  Top Header Bar (56px)                       |
| (256px)|----------------------------------------------|
|        |                                              |
|        |  Page Content                                |
|        |  (padding: 24px desktop, 16px mobile)        |
|        |                                              |
|        |                                              |
|        |                                              |
|        |                                              |
+--------+----------------------------------------------+
```

- Sidebar is fixed on desktop, drawer overlay on mobile
- Content area scrolls independently
- Top header is sticky

### 7.2 Dashboard Grid

```
+--------+-------------------------------------------+
|        | [KPI] [KPI] [KPI] [KPI]                   |  <- 4 equal columns, stat cards
|        |-------------------------------------------|
|        | [Line Chart - 8 cols]    [Donut - 4 cols] |  <- 12-col grid
|        |-------------------------------------------|
|        | [Bar Chart - 6 cols]     [Table - 6 cols] |
|        |-------------------------------------------|
|        | [Recent Activity - 12 cols]               |
+--------+-------------------------------------------+
```

- KPI cards: equal width, 24px gap
- Charts: contained in cards, follow card specs
- Responsive: stack to single column on tablet/mobile

### 7.3 Form Layouts

#### Single Column (Invoice Creation, Registration)
```
+--------+-------------------------------------------+
|        | Page Title                                 |
|        | Section Title                              |
|        | +---------------------------------------+ |
|        | | Label                                 | |
|        | | [Input - full width]                  | |
|        | |                                       | |
|        | | Label              Label              | |
|        | | [Input - half]     [Input - half]     | |  <- Two-column fields where logical
|        | |                                       | |
|        | | Label                                 | |
|        | | [Textarea - full width]               | |
|        | +---------------------------------------+ |
|        |                                           |
|        | Section Title                              |
|        | +---------------------------------------+ |
|        | | ...                                   | |
|        | +---------------------------------------+ |
|        |                                           |
|        |            [Cancel]  [Save Draft] [Submit]|
+--------+-------------------------------------------+
```

- Max form width: 720px (centered or left-aligned)
- Fields: full-width by default, two-column for related pairs (city + postal code, date + time)
- Section cards: grouped fields with card wrapper and section heading
- Sticky action bar at bottom for long forms

#### Two-Column Form (Master Data)
```
+--------+---------------------+---------------------+
|        | Left Column         | Right Column        |
|        | [Primary fields]    | [Secondary fields]  |
|        | [Name, TRN, etc.]  | [Address, Contact]  |
+--------+---------------------+---------------------+
```

### 7.4 Table Page Layout (Invoice List, Buyer List, etc.)

```
+--------+-------------------------------------------+
|        | Page Title                    [Create New] |  <- Title + primary action
|        |-------------------------------------------|
|        | [Search] [Filter] [Date Range]   [Export] |  <- Action bar
|        | [Active Filter Chips]                     |  <- Shown when filters applied
|        |-------------------------------------------|
|        | | # | Invoice | Date | Buyer | Amount |S||  <- Table with sticky header
|        | |---|---------|------|-------|--------|--||
|        | | 1 | INV-001 | ...  | ...   | 1,234 |==||
|        | | 2 | INV-002 | ...  | ...   | 5,678 |==||
|        | |...|         |      |       |        |  ||
|        |-------------------------------------------|
|        | Showing 1-25 of 342    [< 1 2 3 ... 14 >]|  <- Pagination
+--------+-------------------------------------------+
```

---

## 8. Accessibility

### 8.1 WCAG 2.1 AA Compliance Targets

| Criterion | Target | Notes |
|---|---|---|
| 1.1.1 Non-text Content | AA | Alt text for all images, icons have labels |
| 1.3.1 Info and Relationships | AA | Semantic HTML, ARIA landmarks |
| 1.4.1 Use of Color | AA | Never use color alone to convey meaning (always pair with icon/text) |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for normal text, 3:1 for large text |
| 1.4.11 Non-text Contrast | AA | 3:1 for UI components and graphical objects |
| 2.1.1 Keyboard | AA | All interactive elements reachable and operable via keyboard |
| 2.4.3 Focus Order | AA | Logical tab order follows visual layout |
| 2.4.7 Focus Visible | AA | Clear focus indicators on all interactive elements |
| 4.1.2 Name, Role, Value | AA | ARIA attributes for custom components |

### 8.2 Color Contrast Verification

| Combination | Ratio | Pass |
|---|---|---|
| `--color-neutral-900` on `#FFFFFF` | 16.8:1 | AA (pass) |
| `--color-neutral-700` on `#FFFFFF` | 8.5:1 | AA (pass) |
| `--color-neutral-600` on `#FFFFFF` | 5.7:1 | AA (pass) |
| `--color-neutral-500` on `#FFFFFF` | 4.0:1 | AA large only |
| `--color-primary-700` on `#FFFFFF` | 8.2:1 | AA (pass) |
| `#FFFFFF` on `--color-primary-700` | 8.2:1 | AA (pass) |
| `#FFFFFF` on `--color-primary-900` | 14.5:1 | AA (pass) |
| `--color-error-700` on `--color-error-50` | 7.1:1 | AA (pass) |
| `--color-success-700` on `--color-success-50` | 5.8:1 | AA (pass) |
| `--color-warning-700` on `--color-warning-50` | 5.4:1 | AA (pass) |

### 8.3 Focus States

All interactive elements must display a visible focus ring:

```css
:focus-visible {
  outline: 2px solid var(--color-primary-400);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

On dark backgrounds (sidebar):
```css
:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}
```

### 8.4 Touch Targets

| Element | Minimum Size | Notes |
|---|---|---|
| Buttons | 36px height | 32px minimum for compact/small variant |
| Icon buttons | 36px x 36px | Even if icon is 20px, tap area is 36px |
| Table rows | 44px height | Entire row is clickable target |
| Sidebar nav items | 40px height | Full sidebar width |
| Checkboxes / Radios | 20px visual, 36px tap area | Invisible padding extends tap area |
| Mobile touch targets | 44px x 44px minimum | Per WCAG 2.5.8 recommendation |

### 8.5 Screen Reader Considerations

- Announce toast notifications via `role="status"` (polite) or `role="alert"` (errors)
- Table sorting changes announced via `aria-sort`
- Loading states communicated via `aria-busy="true"`
- Modal focus management: focus first focusable element on open, trap focus, restore on close
- Form validation errors linked to inputs via `aria-describedby`
- Invoice status changes announced via `aria-live="polite"` regions

---

## 9. Responsive Breakpoints

| Breakpoint | Range | Label | Columns | Sidebar |
|---|---|---|---|---|
| Desktop XL | 1440px+ | `--bp-xl` | 12 | Expanded (256px) |
| Desktop | 1024px -- 1439px | `--bp-lg` | 12 | Expanded or collapsed |
| Tablet | 768px -- 1023px | `--bp-md` | 8 | Collapsed (64px) or overlay drawer |
| Mobile | 320px -- 767px | `--bp-sm` | 4 | Hidden, hamburger toggle opens drawer overlay |

### Responsive Behavior Summary

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Sidebar | Expanded 256px | Collapsed 64px | Hidden, drawer overlay |
| Top Header | Full | Full | Compact, search hidden (icon only) |
| Dashboard KPIs | 4 columns | 2 columns | 1 column (horizontal scroll optional) |
| Charts | Side by side | Stacked | Stacked, full width |
| Tables | Full columns | Priority columns, horizontal scroll | Card view or key columns only |
| Forms | Two-column where specified | Two-column | Single column |
| Modals | Centered, max-width | Centered, wider margins | Full-screen sheet (slides up) |
| Buttons | Inline | Inline | Full-width stacked for primary actions |
| Tabs | Inline | Scrollable | Scrollable |

### Table Responsive Strategy

On mobile (< 768px), tables with more than 4 columns should switch to a **card list view**:

```
+-------------------------------------------+
| INV-2026-001234                    [Chip]  |
| Buyer Name LLC                             |
| 15/03/2026              AED 12,345.00     |
+-------------------------------------------+
```

---

## 10. Motion & Animation

### 10.1 Duration Scale

| Token | Duration | Usage |
|---|---|---|
| `--duration-fast` | 100ms | Hover color changes, opacity toggles |
| `--duration-normal` | 200ms | Component transitions, dropdowns, tooltips |
| `--duration-slow` | 300ms | Page transitions, modal entry, sidebar expand |
| `--duration-slower` | 500ms | Complex animations, chart drawing |

### 10.2 Easing Functions

| Token | Value | Usage |
|---|---|---|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Subtle bounce for toasts, attention |

### 10.3 Reduced Motion

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 10.4 Skeleton Loading

While data loads, show animated skeleton placeholders:

| Property | Value |
|---|---|
| Background | Linear gradient sweep: `--color-neutral-100` to `--color-neutral-50` to `--color-neutral-100` |
| Animation | Shimmer left-to-right, 1.5s infinite |
| Border radius | Match the element being replaced |
| Height | Match the element being replaced |

---

## Appendix A: Token Quick Reference (CSS Custom Properties)

```css
:root {
  /* Primary */
  --color-primary-900: #0E1F3A;
  --color-primary-800: #142D55;
  --color-primary-700: #1B3A6B;
  --color-primary-600: #264D8A;
  --color-primary-500: #3562A6;
  --color-primary-400: #5A83BF;
  --color-primary-300: #89A8D4;
  --color-primary-200: #B8CDE6;
  --color-primary-100: #DCE6F2;
  --color-primary-50:  #EEF3F9;

  /* Accent (Teal) */
  --color-accent-900: #0A3D3D;
  --color-accent-800: #0F5454;
  --color-accent-700: #14706E;
  --color-accent-600: #198A87;
  --color-accent-500: #20A49F;
  --color-accent-400: #4DBFBB;
  --color-accent-300: #80D4D1;
  --color-accent-200: #B3E6E4;
  --color-accent-100: #D9F2F1;
  --color-accent-50:  #ECF9F8;

  /* Neutrals */
  --color-neutral-950: #0A0A0B;
  --color-neutral-900: #1A1A1E;
  --color-neutral-800: #2E2E33;
  --color-neutral-700: #44444B;
  --color-neutral-600: #5C5C65;
  --color-neutral-500: #76767F;
  --color-neutral-400: #9C9CA5;
  --color-neutral-300: #C2C2C9;
  --color-neutral-200: #DDDDE1;
  --color-neutral-100: #EDEDF0;
  --color-neutral-50:  #F6F6F8;
  --color-neutral-0:   #FFFFFF;

  /* Semantic */
  --color-success-700: #15803D;
  --color-success-600: #16A34A;
  --color-success-500: #22C55E;
  --color-success-100: #DCFCE7;
  --color-success-50:  #F0FDF4;

  --color-warning-700: #B45309;
  --color-warning-600: #D97706;
  --color-warning-500: #F59E0B;
  --color-warning-100: #FEF3C7;
  --color-warning-50:  #FFFBEB;

  --color-error-700: #B91C1C;
  --color-error-600: #DC2626;
  --color-error-500: #EF4444;
  --color-error-100: #FEE2E2;
  --color-error-50:  #FEF2F2;

  --color-info-700: #1D4ED8;
  --color-info-600: #2563EB;
  --color-info-500: #3B82F6;
  --color-info-100: #DBEAFE;
  --color-info-50:  #EFF6FF;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-xl: 0 16px 48px rgba(0,0,0,0.16);

  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Appendix B: Invoice Status Color Mapping

For quick reference across all modules that display invoice status:

| Status | Token Prefix | Use Case |
|---|---|---|
| Draft | `neutral` | Invoice saved but not submitted |
| Pending Validation | `warning` | Awaiting validation engine processing |
| Validated | `info` | Passed validation, ready to submit to ASP |
| Submitted | `primary` | Sent to ASP, awaiting delivery confirmation |
| Delivered (C4) | `accent` | Corner 4 delivery confirmed by ASP |
| Accepted (C5) | `success` | Corner 5 acceptance by buyer confirmed |
| Rejected | `error` | Rejected by validation, ASP, or buyer |
| Cancelled | `neutral` (dimmed) | Invoice voided or superseded by credit note |

---

*This design system is the single source of truth for all UI decisions in the Techno Financials UAE E-Invoicing product. All Figma designs, component libraries, and front-end implementations should reference this document.*
