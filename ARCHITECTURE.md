# Architecture — Portofoliov2

## Overview

Portofoliov2 is a front-end portfolio built around a component-based React architecture.

The project separates presentation, page experiences, styling, routing, and supporting application logic so the portfolio can evolve without turning every change into a monolithic component.

## Technology Layers

```text
Browser
  ↓
React UI
  ↓
Reusable Components
  ↓
Pages / Sections
  ↓
Interaction & Application Logic
  ↓
Static Project / Portfolio Content
```

## Main Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

## Architectural Principles

### Component Reuse

Repeated interface patterns should be implemented as reusable components rather than copied between sections.

### Separation of Concerns

Content, UI presentation, navigation, and interaction logic should remain understandable and independently maintainable.

### Progressive Enhancement

Core portfolio content should remain understandable even when advanced motion or pointer interactions are unavailable.

### Responsive Architecture

Responsive behavior should be considered at component level, not treated as a desktop layout that is patched later for mobile.

## Navigation Model

The portfolio presents a linear storytelling experience while supporting direct navigation to important sections and project content.

```text
Landing
  ├── About
  ├── Featured Work
  ├── Toolkit
  ├── Experience
  ├── Interaction & Accessibility
  └── Connect
```

## Interaction Layer

Framer Motion is used for transitions and interface motion. Interactive effects should follow the existing visual language and respect reduced-motion preferences.

## Change Strategy

When implementing a new feature:

1. Inspect existing components.
2. Identify the smallest reusable abstraction.
3. Preserve current visual hierarchy.
4. Implement responsive behavior together with the feature.
5. Test the production build.
6. Check for accessibility regressions.
