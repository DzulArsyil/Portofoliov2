# WORKFLOW.md

## Development Workflow

```text
Request
  ↓
Understand
  ↓
Inspect existing code
  ↓
Check PRD / Architecture / Design System
  ↓
Plan the smallest maintainable change
  ↓
Implement
  ↓
Type-check
  ↓
Build
  ↓
Visual + responsive review
  ↓
Update documentation if needed
  ↓
Ship
```

## 1. Understand

Define the requested outcome, affected user experience, and acceptance criteria before editing code.

## 2. Inspect

Check the relevant component, hook, styling, asset, and data files. Prefer extending existing patterns over introducing a parallel implementation.

## 3. Plan

For UI work, consider hierarchy, interaction states, responsive behavior, accessibility, and reduced motion.

For engineering work, consider component boundaries, state flow, type safety, and performance.

## 4. Implement

Make focused changes. Keep visual behavior consistent with the portfolio's design language.

## 5. Validate

Run:

```bash
npm run typecheck
npm run build
```

For visual changes, manually inspect the affected experience at mobile and desktop widths.

## 6. Review

Check:

- No broken navigation or interactions
- No console errors introduced
- Responsive layout remains stable
- Keyboard interaction remains usable
- Reduced-motion behavior remains respected
- Existing sections were not unintentionally changed

## 7. Document

Update the relevant Markdown documentation when a change affects product requirements, architecture, design rules, roadmap, or project history.

## 8. Ship

Use a concise commit message that describes the actual change.
