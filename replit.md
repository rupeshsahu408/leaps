# LEAP Startup School — Full Website Replica

A complete React replica of [leapstartup.com](https://www.leapstartup.com) built with React + Vite, featuring a custom crimson/green color theme and ultra-3D depth effects.

## Tech Stack
- **React 19** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Google Fonts**: Space Grotesk (headings) + Inter (body)

## Color Palette
| Color | Hex | Usage |
|---|---|---|
| Deep Dark | `#38000A` | Background |
| Crimson Red | `#CD1C18` | Primary CTA, accents |
| Dark Red | `#9B1313` | Hover states, gradients |
| Sage Green | `#A8DCAB` | Highlights, live dots |
| Forest Green | `#519755` | Secondary accents |
| Peach | `#FFA896` | Warm text accents |
| Rose | `#DBAAA7` | Body text muted |
| Lavender | `#BE91BE` | Creator track |

## All Sections (in order)
1. **Ticker** — Scrolling announcement bar (red gradient bg)
2. **Navbar** — Sticky glassmorphism nav with mobile hamburger
3. **Hero** — Full-viewport hero, cohort badge, scrolling pills
4. **VideoSection** — YouTube embed of LEAP cohort intro
5. **Tracks** — Three program tracks with Unsplash images (Founder/Builder/Creator)
6. **Curriculum** — 6-phase interactive accordion with "In Class" / "Out Class" tabs
7. **InstitutionsProblem** — "Strong Foundations" problem/solution split
8. **FounderQuote** — Shaurya Gaikwad quote with photo
9. **Locations** — Maharashtra SVG map + 6 regional hubs
10. **HowItWorks** — 5-step vertical timeline "Learn by Building"
11. **SpotlightLab** — Dual-row scrolling photo gallery
12. **Mentors** — 6 mentor cards with real photos from postimg.cc
13. **BuilderCTA** — "BECOME A BUILDER. NOT JUST A GRADUATE."
14. **InstitutionsContact** — Email/call + Google Forms inquiry
15. **Footer** — Brand, links, credits

## 3D/Design Effects
- CSS perspective tilt cards on hover
- Multi-layer radial glow box-shadows
- Glassmorphism panels (backdrop-filter: blur)
- Pulsing animated cohort badge
- Shimmer text animation
- Dual-direction scrolling gallery rows
- Animated SVG Maharashtra map with pulsing city dots
- Radial gradient mesh backgrounds

## Routing (Multi-Page)
React Router v7. Routes wrapped by a shared `Layout` (Ticker + Navbar + Footer + ScrollToTop):
- `/` → HomePage (full landing composition)
- `/platform` → PlatformPage (Tracks + Curriculum + How It Works + stats)
- `/locations` → LocationsPage (Locations + detailed regional cards)
- `/institutions` → InstitutionsPage (Problem split + benefits + 4-step partnership flow + inquiry)
- `/community` → CommunityPage (Six pillars + SpotlightLab + Mentors + upcoming events + founder quote)
- `/contact` → ContactPage (4 contact cards + working contact form + role-based info)
- `/join` → JoinPage (Track selector + cohort details + apply CTA)
- `*` → NotFoundPage

Shared building blocks live in `src/components/` (Hero, Tracks, Curriculum, Locations, etc.). Page-level layouts live in `src/pages/`. A reusable `PageHeader` powers the inner-page hero band.

## Dev Server
Port 5000. Start: `npm run dev`

## About LEAP
India's First Practical Startup School, founded by Shaurya Gaikwad (@shauryahelps). Cohort-based, 24-week program, 3 tracks: The Founder, The Builder, The Creator.
