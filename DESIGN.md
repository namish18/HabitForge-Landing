---
name: Solaris Dusk Refined
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1b1b1e'
  surface-container: '#1f1f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e4e1e6'
  on-surface-variant: '#e1bec0'
  inverse-surface: '#e4e1e6'
  inverse-on-surface: '#303033'
  outline: '#a8898b'
  outline-variant: '#594042'
  surface-tint: '#ffb2b9'
  primary: '#ffb2b9'
  on-primary: '#67001f'
  primary-container: '#fb5573'
  on-primary-container: '#5b001a'
  inverse-primary: '#b51f44'
  secondary: '#d1c5b3'
  on-secondary: '#363023'
  secondary-container: '#4d4638'
  on-secondary-container: '#bfb4a2'
  tertiary: '#5ddf88'
  on-tertiary: '#003919'
  tertiary-container: '#0ca657'
  on-tertiary-container: '#003115'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#400010'
  on-primary-fixed-variant: '#91002f'
  secondary-fixed: '#ede1ce'
  secondary-fixed-dim: '#d1c5b3'
  on-secondary-fixed: '#211b0f'
  on-secondary-fixed-variant: '#4d4638'
  tertiary-fixed: '#7bfca2'
  tertiary-fixed-dim: '#5ddf88'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#131316'
  on-background: '#e4e1e6'
  surface-variant: '#353438'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.03em
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-sm:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 32px
---

## Brand & Style
The design system evolves into a sophisticated, high-end digital environment that balances warmth with technical precision. Targeting a premium audience that values clarity and aesthetic depth, the UI evokes a sense of calm reliability and "quiet luxury." 

The style is a hybrid of **Modern Minimalism** and **Refined Glassmorphism**. It utilizes expansive whitespace, thin-stroke iconography, and translucent layering to create a sense of architectural airiness. The emotional response is one of effortless elegance, where the interface feels like a high-end physical object—tactile yet ethereal.

## Colors
This design system utilizes a restrained "Dusk" palette. The core experience is anchored in a deep, near-black neutral (`#0f0f12`) to provide a canvas for the more expressive tones.

- **Phoenix Pink (#f75270):** Used exclusively for high-priority calls to action, active states, and critical notification badges. It is never used for large background surfaces.
- **Butter Light (#fff2df):** Employed for primary typography and subtle iconography to provide a softer, more organic contrast than pure white.
- **Surface Strategy:** Backgrounds utilize deep charcoals, while interactive layers use 60-80% opacity glass effects to reveal underlying depth without sacrificing legibility.

## Typography
The typographic hierarchy emphasizes breathability and structural clarity. **Manrope** provides a balanced, modern geometric feel for headings, while **Inter** ensures maximum readability for body text. **JetBrains Mono** is introduced for utility labels to reinforce the technical precision of the "Solaris" heritage.

Headings feature increased letter spacing to create an editorial, premium feel. For mobile, display sizes are aggressively scaled down to maintain a single-column focus without excessive wrapping.

## Layout & Spacing
The design system employs a **12-column Fluid Grid** for desktop and a **4-column grid** for mobile. The layout philosophy is "Centric Flow," where content is grouped into logical islands rather than edge-to-edge blocks.

Spacing follows an 8px base unit. Wide internal padding (minimum 24px) within cards and containers is mandatory to support the minimalist aesthetic and allow the glassmorphism effects to feel intentional and uncrowded.

## Elevation & Depth
Depth is communicated through **Translucent Layering** and **Multi-Layered Shadows**. 

1. **The Glass Layer:** Primary cards use a background of `rgba(26, 26, 30, 0.6)` with a 20px backdrop blur and a 1px solid stroke at 10% opacity of Butter Light.
2. **The Shadow:** Shadows are not single-drop; they are composed of three layers:
   - A tight, dark ambient occlusion (4px blur).
   - A mid-range tinted shadow (12px blur, Phoenix Pink at 5% opacity).
   - A broad, soft diffusion (40px blur, black at 20% opacity).
This creates a "floating" effect where elements feel suspended in a dark, atmospheric space.

## Shapes
In alignment with the modern refinement, all containers and interactive elements utilize high corner radii. Primary cards and modals should use `rounded-xl` (1.5rem / 24px), while buttons and input fields utilize `rounded-lg` (1rem / 16px). This softness contrasts with the technical mono labels to create a sophisticated, custom-designed feel.

## Components
- **Buttons:** Primary buttons use a solid Phoenix Pink background with Butter Light text. Secondary buttons are "ghost" style with a 1px Butter Light border and high-transparency fill.
- **Glass Cards:** Feature a subtle top-down gradient and a "sheen" stroke on the top and left edges to simulate light hitting glass.
- **Input Fields:** Minimalist backgrounds (darker than the page surface) with a focus state that glows slightly using a Phoenix Pink outer shadow.
- **Chips:** Small, pill-shaped JetBrains Mono labels with a 10% Phoenix Pink tint for high-visibility metadata.
- **Progress Bars:** Ultra-thin (2px) tracks with a glowing Phoenix Pink indicator to maintain the "Solaris" technical aesthetic.