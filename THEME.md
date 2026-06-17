# Website Theme Guide

## Overview

This document outlines the unified design theme for the homepage. All components follow a consistent color palette, spacing system, and visual style to create a cohesive user experience.

## Brand Colors

### Primary Colors
- **Brand Red**: `#dd0a01` - Primary brand color used for CTAs, accents, and highlights
- **Brand Navy**: `#0b0d17` - Deep navy blue for dark sections and contrast
- **Brand White**: `#ffffff` - Clean white for backgrounds and text

### Color Usage
- **Primary Red** - Use for:
  - Call-to-action buttons
  - Icons and badges
  - Accent elements
  - Hover states
  - Important highlights

- **Primary Navy** - Use for:
  - Dark section backgrounds
  - Secondary hover states
  - Text on light backgrounds
  - Professional/corporate sections

## Typography

### Font Family
- Primary: `"Inter", system-ui, sans-serif`

### Text Colors
- **Primary Text**: `#1a1a1a` - Main body text on light backgrounds
- **Secondary Text**: `#5c6370` - Supporting text, descriptions
- **Muted Text**: `#64748b` - Labels, captions, less important text
- **Light Text**: `rgba(255, 255, 255, 0.9)` - Text on dark backgrounds

## Layout System

### Container Widths
- **Max Container**: `1200px` - Standard content container width
- **Section Padding**: `5rem 1.5rem` - Vertical and horizontal spacing

### Spacing
- Consistent use of CSS variables for spacing
- `var(--section-padding)` for standard section spacing
- `var(--container-max)` for content width restrictions

## Backgrounds

### Background Colors
- **White**: `#ffffff` - Primary light background
- **Light Gray**: `#f8f9fa` - Alternating section background
- **Dark**: `#0b0d17` - Dark sections (Stats, Industries)
- **Overlay**: `rgba(11, 13, 23, 0.85)` - Dark overlays for hero sections

### Gradients
- **Hero Gradient**: `linear-gradient(135deg, #dd0a01 0%, #0b0d17 50%, #1d6fe8 100%)`
- **Accent Gradient**: `linear-gradient(135deg, rgba(227, 30, 36, 0.9) 0%, rgba(11, 13, 23, 0.95) 100%)`
- **Light Gradient**: `linear-gradient(135deg, #fff5f5 0%, #ffe8e9 100%)`

## Borders & Dividers

- **Light Border**: `#e8eaed` - Subtle borders on light backgrounds
- **Medium Border**: `rgba(0, 0, 0, 0.1)` - Medium contrast borders

## Shadows

- **Small Shadow**: `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Medium Shadow**: `0 4px 16px rgba(0, 0, 0, 0.12)`
- **Large Shadow**: `0 8px 32px rgba(0, 0, 0, 0.16)`
- **Glow Effect**: `0 0 24px rgba(227, 30, 36, 0.3)` - Red glow for hover states

## Component Patterns

### Buttons

#### Primary CTA Button
- Background: `var(--primary-red)`
- Text: `var(--primary-white)`
- Hover: Background changes to `var(--primary-navy)`, adds shadow
- Border radius: `50px` (pill shape)
- Transition: `all 0.3s ease`

#### Secondary Button
- Background: White with red border
- Text: `var(--primary-red)`
- Hover: Inverts to red background with white text

### Cards

#### Standard Card
- Background: `var(--bg-white)`
- Border: `1px solid var(--border-light)`
- Border radius: `12px-16px`
- Shadow: `var(--shadow-sm)`
- Hover: Transform `translateY(-4px)` + increased shadow

#### Colored Accent Cards
- Top/left border in brand red
- Hover changes border color and adds glow

### Sections

#### Light Sections
- Background: `var(--bg-white)` or `var(--bg-light-gray)`
- Text: Dark colors from palette
- Used for: Services, Tools & Platforms, Why Choose Us

#### Dark Sections
- Background: `var(--primary-navy)` or `#000`
- Text: White/light colors
- Used for: Stats, Industries, Process

#### Gradient Sections
- Background: `var(--gradient-accent)`
- Text: White
- Used for: CTA sections

### Icons & Badges

#### Icon Wrapper
- Background: `var(--primary-red)` or themed color
- Border radius: `8px` (rounded square) or `50%` (circle)
- Size: `44px-48px`
- Contains white or light-colored icons

#### Number Badges
- Background: `var(--primary-red)`
- Color: White
- Border radius: `50%`
- Used in: Why Choose Us, Process steps

## Interactive States

### Hover Effects
- Buttons: Transform up 2-4px, add/increase shadow
- Cards: Transform up 4px, increase shadow, change border color
- Links: Color changes to `var(--primary-red)`

### Focus States
- Border color: `var(--primary-red)`
- Box shadow: `0 0 0 3px rgba(227, 30, 36, 0.1)`

### Active States
- Slight reduction in transform (pressed effect)
- Maintained color changes

## Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Mobile Adjustments
- Reduced padding: `3rem 1rem`
- Smaller font sizes (using clamp)
- Stack layouts instead of grid
- Hide decorative elements when needed

## Animation Guidelines

### Transitions
- Default duration: `0.3s`
- Easing: `ease` or `cubic-bezier(0.175, 0.885, 0.32, 1.275)` for bouncy effects

### Keyframe Animations
- Subtle movements (floating, pulsing)
- Fade-in effects on page load
- Respect `prefers-reduced-motion` for accessibility

## Accessibility

- Maintain WCAG AA contrast ratios
- Text on red backgrounds uses white for contrast
- Focus indicators visible on all interactive elements
- Reduced motion support included

## Usage Examples

### Creating a New Section
```css
.newSection {
  padding: var(--section-padding);
  background: var(--bg-white);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.title {
  color: var(--text-primary);
  font-weight: 700;
}

.description {
  color: var(--text-secondary);
  line-height: 1.7;
}
```

### Creating a CTA Button
```css
.ctaButton {
  background: var(--primary-red);
  color: var(--primary-white);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.ctaButton:hover {
  background: var(--primary-navy);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
```

## Implementation Checklist

When adding new components:
- [ ] Use CSS variables from `globals.css`
- [ ] Follow spacing system (padding, margins)
- [ ] Apply consistent border radius values
- [ ] Use shadow variables for depth
- [ ] Implement proper hover/focus states
- [ ] Include responsive breakpoints
- [ ] Test contrast ratios
- [ ] Add smooth transitions
- [ ] Respect reduced motion preferences

## Notes

- This theme emphasizes clean, modern design with strong brand presence
- Red and navy create professional yet energetic feel
- Consistent spacing and shadows create visual rhythm
- Hover effects provide clear interactive feedback
- Responsive design ensures great experience on all devices
