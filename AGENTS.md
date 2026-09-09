# AGENTS.md

## Purpose

This repository is the personal portfolio of M. Dzul'Arsyil Aziz, focused on the intersection of UI/UX design, front-end development, and creative technology.

## Before Changing Code

1. Read `PRD.md` to understand the product intent.
2. Read `ARCHITECTURE.md` before changing structure or application flow.
3. Read `DESIGN-SYSTEM.md` before changing visual components.
4. Inspect existing components and reuse them when practical.
5. Keep changes scoped to the requested task.

## Design Rules

- Preserve the editorial and Japanese-inspired visual direction.
- Prefer intentional whitespace and clear hierarchy over visual clutter.
- Use animation to support interaction and storytelling.
- Maintain responsive behavior across mobile, tablet, and desktop.
- Respect `prefers-reduced-motion`.
- Do not introduce arbitrary colors, fonts, gradients, or UI patterns without a design reason.

## Engineering Rules

- Prefer existing React components and utilities before creating duplicates.
- Keep TypeScript types explicit and avoid unnecessary `any`.
- Keep UI, data, and reusable logic separated according to the existing architecture.
- Avoid unnecessary dependencies.
- Do not expose secrets or credentials.
- Avoid unrelated refactors while implementing a feature.

## Validation

Before considering a change complete:

```bash
npm run typecheck
npm run build
```

Also verify responsive behavior and interactive states when the change affects UI.

## Definition of Done

A task is complete when the implementation:

- satisfies the requested behavior;
- follows the existing architecture and design system;
- works responsively;
- passes type checking and production build;
- does not introduce avoidable accessibility regressions; and
- updates relevant documentation when the project behavior or structure changes.
