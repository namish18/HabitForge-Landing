---
name: Kinetic Monolith
colors:
  surface: '#161213'
  surface-dim: '#161213'
  surface-bright: '#3d3839'
  surface-container-lowest: '#110d0e'
  surface-container-low: '#1f1a1b'
  surface-container: '#231e1f'
  surface-container-high: '#2d292a'
  surface-container-highest: '#383335'
  on-surface: '#eae0e1'
  on-surface-variant: '#e1bec2'
  inverse-surface: '#eae0e1'
  inverse-on-surface: '#342f30'
  outline: '#a8898c'
  outline-variant: '#594043'
  surface-tint: '#ffb2bc'
  primary: '#ffb2bc'
  on-primary: '#670023'
  primary-container: '#fa547a'
  on-primary-container: '#5a001e'
  inverse-primary: '#b51d4a'
  secondary: '#d1c5b3'
  on-secondary: '#363023'
  secondary-container: '#4d4638'
  on-secondary-container: '#bfb4a2'
  tertiary: '#ddbfc5'
  on-tertiary: '#3f2b30'
  tertiary-container: '#a58a90'
  on-tertiary-container: '#38242a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9dd'
  primary-fixed-dim: '#ffb2bc'
  on-primary-fixed: '#400013'
  on-primary-fixed-variant: '#910035'
  secondary-fixed: '#ede1ce'
  secondary-fixed-dim: '#d1c5b3'
  on-secondary-fixed: '#211b0f'
  on-secondary-fixed-variant: '#4d4638'
  tertiary-fixed: '#fbdbe1'
  tertiary-fixed-dim: '#ddbfc5'
  on-tertiary-fixed: '#28171b'
  on-tertiary-fixed-variant: '#574146'
  background: '#161213'
  on-background: '#eae0e1'
  surface-variant: '#383335'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system targets software engineers, systems thinkers, and technical power users who demand friction-free daily orchestration. The visual language eschews ubiquitous SaaS minimalism and childish gamification in favor of an exacting, high-density command surface reminiscent of modern technical instruments (Linear, Raycast).

The identity centers around disciplined technical minimalism fused with low-light editorial warmth. Monochromatic charcoal substrates are punctured by an electric hot rose accent (`#F75278`) used with strict functional restraint to denote execution state, live branches, active streaks, and commit synchronization. Precision layout geometry, crisp hairline dividers, monospaced metadata, and warm cream typographic hierarchy replace heavy drop shadows and decorative gradients. The emotional tone is quiet, razor-sharp, reliable, and deeply productive.

## Colors

The palette is engineered exclusively for a deep, low-eye-strain dark mode, leveraging nuanced chromatic depth through black-tinted burgundies rather than sterile neutral grays.

### Surface Tiers & Canvas
- **Deep Alternate Canvas (`#0F0C0D`):** Root shell, sidebar background, terminal viewports, and recessed backdrops.
- **Base Canvas (`#1A1617`):** Primary working area, view headers, and column backgrounds.
- **Elevated Surface (`#231D1F`):** Standard surface for popovers, command menus, modals, and hover states.
- **Tertiary Container (`#2D1B20`):** Semantic accent surface for focused workflow cards, active commit diffs, and selected habit nodes.

### Hairline Borders
- **Muted Border (`#2B2527`):** Subdued internal dividers, table rows, and secondary component contours.
- **Structural Border (`#3A3033`):** Primary card bounds, input strokes, focus containers, and panel separators.

### Typography & Content
- **Text Primary (`#FFF2DF`):** High-contrast warm cream for headlines, active inputs, and critical labels.
- **Text Secondary (`#B9A9AD`):** Soft desaturated mauve-gray for body copy, secondary metadata, and inactive icons.
- **Text Muted (`#817477`):** Low-prominence timestamps, file paths, and inactive shortcuts.

### Accent System
- **Electric Hot Rose (`#F75278`):** Strict, single-intent interactive accent. Reserved for primary action states, sync pulses, streak indicators, and active badges.
- **Soft Pink (`#F6B6C3`):** Sub-accent for hovered accent elements, code syntax highlights, and active streak progress tracks.

## Typography

The typographic hierarchy establishes clear contextual separation between editorial narrative, dense data scanning, and developer metadata.

- **Headings (Plus Jakarta Sans):** Geometric yet organic forms introduce modern punch and structural poise to high-level dashboard views, milestones, and page titles. Negative letter-spacing maintains tight mechanical density.
- **Body & Controls (Hanken Grotesk):** Neutral, crisp, and open grotesque sans optimized for long-form habit reflections, issue descriptions, and interface navigation.
- **Metadata & Technical Syntax (JetBrains Mono):** Reserved for Git commit hashes, repo synchronization state, hotkeys, status tags, numeric telemetry, and habit frequency schedules. Use uppercase with positive tracking for `label-xs` micro-badges.

## Layout & Spacing

The layout is built on a tight, compact 4px baseline grid designed to maximize visible context and support split-pane technical workflows.

### Grid & Breakpoints
- **Mobile (< 768px):** Single vertical stack with fluid columns, `1rem` margin, and `0.75rem` vertical gap between actionable tiles. Floating compact command strip anchored to the bottom.
- **Tablet (768px - 1023px):** Fluid multi-column with collapsible file/tree navigation, `1.5rem` margins, and `1rem` gutters.
- **Desktop (>= 1024px):** Three-tier layout comprising a fixed `240px` sidebar (navigation & Git state), a responsive fluid master workflow matrix (6 to 12 columns), and an optional `320px` contextual inspector for Markdown logs and commit histories. Outer margin locks at `2rem`, gutters at `1.5rem`.

### Spacing Rules
- Use `space-xs` (4px) and `space-sm` (8px) for internal micro-alignments, tag padding, input inner padding, and list item spacing.
- Use `space-md` (12px) for list groups, card interior spacing, and form field stacks.
- Use `space-lg` (20px) and `space-xl` (32px) for container module padding and major panel divisions.

## Elevation & Depth

Visual hierarchy is communicated through subtle tonal stacking and calibrated hairline borders rather than heavy drop shadows.

### Tonal Stratification
- **Level 0 (Canvas):** `#0F0C0D` acts as the recessed bedrock.
- **Level 1 (Panels & Master Lists):** `#1A1617` elevated over bedrock with a `1px solid #2B2527` border.
- **Level 2 (Active Cards & Floating Inspector):** `#231D1F` bounded by `1px solid #3A3033`.
- **Level 3 (Modal Sheets, Command Palette, Dropdowns):** `#231D1F` overlaid on `#000000`/70% backdrop blur, bounded by `1px solid #3A3033`, accompanied by an ambient shadow: `0 16px 36px -8px rgba(15, 12, 13, 0.8), 0 0 1px 1px rgba(247, 82, 120, 0.15)`.

### Focus & Active Elevation
Interactive elevation does not raise items along the Z-axis physically; it activates luminance. When a card is hovered or focused via keyboard navigation, its border transitions from `#3A3033` to `#F75278`, accompanied by an inner hairline highlight or subtle background shift to `#2D1B20`.

## Shapes

The design system employs a disciplined, soft shape radius (`roundedness: 1`) to preserve technical rigor and avoid overly rounded consumer aesthetics.

- **Base Radius (0.25rem / 4px):** Used on all standard controls, input fields, keycaps, small tags, tooltips, and Git commit tokens.
- **Large Radius (0.5rem / 8px):** Used on cards, contextual dialogs, data table containers, and command palette surfaces.
- **Full Pill (`9999px`):** Reserved exclusively for dynamic status pulses (e.g., active sync dot, live streak counter) and avatar rings. Interactive buttons remain structured at `4px` or `6px` radius.

## Components

### Buttons
- **Primary:** Solid `#F75278` background, `#0F0C0D` bold typography, `4px` border radius, `0 8px 16px -4px rgba(247, 82, 120, 0.3)` ambient glow. Active state drops opacity to 90% with a `scale(0.98)` transform.
- **Secondary:** Surface `#231D1F`, border `1px solid #3A3033`, text `#FFF2DF`. Hover transitions border to `#F6B6C3` and text to `#FFFFFF`.
- **Ghost / Tool:** Transparent background, text `#B9A9AD`. Hover gains `#231D1F` background and text `#FFF2DF`.
- **Keycap Addon:** Embedded `JetBrains Mono` shortcut indicators with `#1A1617` background and `#817477` border.

### Inputs & Search Bars
- Background `#0F0C0D`, border `1px solid #3A3033`, text `#FFF2DF`, placeholder `#817477`.
- Focus state switches border to `#F75278` and applies an outer glow ring `0 0 0 1px #F75278`.
- Monospace mode used for branch input, file paths, and cron/recurrence triggers.

### Habit Cards & Kanban Tiles
- Surface `#231D1F` with `1px solid #2B2527` border, rounded-lg (8px), padding `space-md`.
- Active/in-progress habits adopt a subtle `#2D1B20` surface with a `2px` left border in `#F75278`.
- Contains title (`Plus Jakarta Sans`), current streak count with a Git branch icon (`JetBrains Mono`), and commit synchronization timestamp.

### Checkboxes & Binary Triggers
- Size `16px x 16px`, radius `3px`. Unchecked: background `#0F0C0D`, border `1.5px solid #3A3033`.
- Checked: background `#F75278`, border `#F75278`, featuring a `#0F0C0D` hairline checkmark.
- Hover provides an instantaneous outline transition to `#F6B6C3`.

### Chips & Metadata Badges
- Background `#1A1617`, border `1px solid #2B2527`, height `22px`, font `label-sm` (`JetBrains Mono`).
- Status Chips: Include a `6px` solid status circle. Green for synchronized (`#4EBA87`), Amber for uncommitted changes (`#E5A93C`), and `#F75278` for branch conflicts or active sync runs.

### Git Sync & Habit Matrix
- Weekly / monthly activity grid using squircle cells (`12px x 12px`, radius `2px`).
- Inactive cells: `#231D1F`. Level 1 completion: `#4A202A`. Level 2: `#872B44`. Level 3: `#C43A5D`. Level 4 (Peak daily volume): `#F75278`.

### Command Palette (Cmd + K)
- Center-locked floating modal (`max-width: 640px`), surface `#231D1F`, border `1px solid #3A3033`, deep backdrop-blur.
- Integrated search input at top with instant filter results divided into semantic groups (`Habits`, `Git Commands`, `Repositories`).
- Selected item highlighted with `#2D1B20` background and an electric `#F75278` indicator line on the left edge.