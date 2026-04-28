# LEAP Startup School — Website

A pixel-faithful React replica of [leapstartup.com](https://www.leapstartup.com) built with React + Vite, featuring a custom crimson/green color theme with ultra-3D depth effects.

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

## 3D/Design Effects
- CSS `perspective` + `rotateX/Y` tilt cards on hover
- Multi-layer `box-shadow` radial glows
- `backdrop-filter: blur` glassmorphism panels
- Animated radial gradient mesh background
- Floating cohort badge with pulse glow animation
- Shimmer text animation on hero subtitle
- Scrolling ticker + pill tracks

## Project Structure
```
src/
  components/
    Ticker.jsx       — Scrolling announcement bar
    Navbar.jsx       — Sticky nav with mobile hamburger
    Hero.jsx         — Full-viewport hero with cohort badge
    Tracks.jsx       — Three program tracks (Founder/Builder/Creator)
    Curriculum.jsx   — 6-phase interactive curriculum accordion
    Stats.jsx        — Stats grid + testimonials
    JoinCTA.jsx      — Call-to-action section
    Footer.jsx       — Footer with link columns
  App.jsx
  index.css          — Global styles, Tailwind, animations
index.html
vite.config.js       — Port 5000, host 0.0.0.0, Tailwind plugin
```

## Dev Server
Runs on port 5000. Start with: `npm run dev`

## About LEAP
LEAP is India's First Practical Startup School, founded by Shaurya Gaikwad (14-year-old entrepreneur, Young Entrepreneur of the Year 2024, Microsoft Learn Student Ambassador). Cohort-based, 3 tracks: The Founder, The Builder, The Creator.
