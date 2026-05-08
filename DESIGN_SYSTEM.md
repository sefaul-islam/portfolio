# Design System - Portfolio Website

## Color Palette
**Base Colors:**
- Background: `#050505` (True Matte Black)
- Surface Dark: `#0a0a0a` (Deep Charcoal)
- Surface Light: `#1a1a1a` (Lighter Charcoal for hover states)
- Border: `#2a2a2a` (Subtle dividers)

**Accent Colors:**
- Primary Green: `#10b981` (Emerald - Supabase-inspired)
- Green Glow: `rgba(16, 185, 129, 0.5)` (Soft green for shadows/glows)
- Electric Blue: `#3b82f6` (Alternative accent)
- Blue Glow: `rgba(59, 130, 246, 0.5)` (Soft blue for shadows/glows)

**Text Colors:**
- Primary Text: `#ffffff` (Pure white, high contrast)
- Secondary Text: `#9ca3af` (Muted grey for descriptions)
- Tertiary Text: `#6b7280` (Darker grey for captions)

## Typography
**Font Stack:** `'Inter', 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Font Sizes:**
- Heading 1 (H1): `3.5rem` / `56px` | Font Weight: 700 | Line Height: 1.2
- Heading 2 (H2): `2.25rem` / `36px` | Font Weight: 600 | Line Height: 1.3
- Heading 3 (H3): `1.5rem` / `24px` | Font Weight: 600 | Line Height: 1.4
- Body Large: `1.125rem` / `18px` | Font Weight: 400 | Line Height: 1.6
- Body Regular: `1rem` / `16px` | Font Weight: 400 | Line Height: 1.6
- Body Small: `0.875rem` / `14px` | Font Weight: 400 | Line Height: 1.5
- Mono/Code: `0.875rem` | Font Family: `'Monaco', 'Courier New', monospace`

## Spacing Scale (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

## Border Radius
- sm: 8px
- md: 12px
- lg: 16px
- full: 50%

## Shadows & Glows
**Glassmorphism Backdrop:**
- Filter: `blur(10px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Background: `rgba(255, 255, 255, 0.05)`

**Elevation Shadows:**
- Shadow-sm: `0 1px 2px rgba(0, 0, 0, 0.3)`
- Shadow-md: `0 4px 12px rgba(0, 0, 0, 0.4)`
- Shadow-lg: `0 8px 24px rgba(0, 0, 0, 0.5)`

**Glow Effects:**
- Green Glow: `0 0 20px rgba(16, 185, 129, 0.3)`
- Blue Glow: `0 0 20px rgba(59, 130, 246, 0.3)`

## Transitions & Animations
**Default Transition Timing:**
- Fast: `150ms` cubic-bezier(0.4, 0, 0.2, 1)
- Normal: `300ms` cubic-bezier(0.4, 0, 0.2, 1)
- Slow: `500ms` cubic-bezier(0.4, 0, 0.2, 1)

**Key Animations:**
- Fade In: opacity 0 → 1
- Slide Up: transform translateY(20px) → (0)
- Scale In: transform scale(0.95) → 1

## Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## Z-Index Scale
- Background: 0
- Content: 10
- Cards: 20
- Navigation: 100
- Modals/Overlays: 1000
