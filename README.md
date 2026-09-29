# Woodwark Wellness

The digital foundation for Woodwark Wellness, a nature-based day retreat and
wellness venue in Woodwark, Queensland, near Airlie Beach in the Whitsundays.

## Milestone one

This repository currently contains the first implementation milestone only:

- a responsive, editorial homepage
- an accessible global header, mobile navigation, and footer
- reusable button, section-heading, and photography-frame components
- semantic brand tokens for colour, typography, spacing, radius, and shadow
- foundational metadata, `robots.txt`, and `sitemap.xml`
- clearly marked owner-confirmation points and photography placeholders

It intentionally does **not** include Supabase, authentication, payments,
production booking forms, or an admin area.

## Stack

- Next.js App Router
- React
- TypeScript (strict mode)
- Tailwind CSS v4
- ESLint

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Project structure

```text
src/
  app/                  # App Router pages, metadata, and global design tokens
  components/
    layout/             # Site-wide header, footer, and logo
    ui/                 # Small reusable interface primitives
  lib/                  # Site-wide configuration
tests/                  # Dependency-free foundation checks
public/images/          # Future approved property photography
```

Most of the homepage is rendered as a Server Component. The mobile menu uses
native `details`/`summary`, avoiding client-side JavaScript for basic navigation.

## Brand foundation

The initial design direction is **Elemental Warmth**: warm paper, forest green,
eucalypt, timber, ember, and water tones paired with editorial serif headings
and practical sans-serif interface copy. The system is intentionally tactile,
restrained, and grounded rather than spa-like or overtly luxurious.

Core CSS tokens live in `src/app/globals.css`. Their semantic names are intended
to map cleanly to future Figma variables.

## Content and imagery

The current copy is specific to the approved brief but remains provisional.
Items requiring business input are marked `[OWNER TO CONFIRM]`.

The graphical image frames are deliberate temporary placeholders, not claimed
property photography. Before launch, replace them with approved, optimised
photography showing the actual property and genuine guest experiences. The
direction for each required photograph is included in its frame.

## Environment variables

No environment variables are needed for milestone one. A future Supabase
milestone will introduce `.env.example` before any integration is added. Never
commit credentials or service-role keys.

## Deployment

The intended deployment target is Vercel, but no production project is configured
yet. The canonical domain in metadata is provisional and must be confirmed before
deployment.

## Next milestone

The recommended next milestone is the **service-page and enquiry UX layer**:

1. confirm brand spelling, photography, prices, capacities, policies, and domain
2. build the Day Sessions and Venue Hire detail pages
3. prototype accessible day-booking and venue-enquiry forms with typed validation
4. define form loading, error, empty, and success states using mock data
5. test those journeys before creating the Supabase schema
