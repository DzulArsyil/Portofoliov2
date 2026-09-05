# Design System — Portofoliov2

## Design Direction

**Minimal Editorial × Japanese-inspired Visual Language × Interactive Front-end**

The system is intentionally restrained: typography, spacing, negative space, composition, and motion carry most of the visual identity.

## Visual Principles

### 01 — Less Noise, More Intention

Every decorative element should have a reason to exist.

### 02 — Typography as Structure

Typography is responsible for hierarchy, rhythm, personality, and readability.

### 03 — Space Creates Focus

Negative space should separate ideas and give important content room to breathe.

### 04 — Motion Supports Meaning

Use animation to communicate state, hierarchy, continuity, and interaction.

### 05 — Responsive Composition

Layouts should adapt rather than simply shrink.

## Component Rules

### Buttons

- Clear action labels
- Visible hover/focus states
- Comfortable touch targets
- Avoid excessive visual decoration

### Cards

Cards should support grouping and scanning. Avoid turning every section into a card grid when editorial composition communicates the information better.

### Navigation

Navigation should remain predictable and accessible. Motion should never prevent users from reaching content.

### Images

Use meaningful alt text for informative images. Decorative images should not compete with the primary content.

## Motion Rules

Preferred motion:

- Fade and reveal
- Small positional transitions
- Scroll-triggered section entrances
- Cursor-driven depth where appropriate
- Micro-interactions on controls

Avoid:

- Continuous distracting animation
- Excessive parallax
- Motion that makes text difficult to read
- Interaction that depends entirely on a mouse pointer

## Accessibility

- Respect `prefers-reduced-motion`.
- Maintain keyboard access to interactive controls.
- Preserve readable contrast.
- Use semantic HTML where possible.
- Do not communicate important information through animation alone.

## Responsive Breakpoints

Treat breakpoints as layout decisions rather than device labels. Components should be tested across narrow mobile, tablet, laptop, and wide desktop widths.

## Quality Checklist

Before shipping a visual change:

- [ ] Hierarchy remains clear
- [ ] Mobile layout works
- [ ] Keyboard interaction works
- [ ] Reduced-motion behavior is considered
- [ ] Animation has a purpose
- [ ] No unnecessary visual noise was introduced
