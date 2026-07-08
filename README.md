# The Fifa Files

A premium dark-themed classified-dossier website for a Solana memecoin, built with Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion.

---

## Stack

| Layer | Choice |
|-------|--------|
| Bundler | **Vite 6** |
| Framework | **React 19 + TypeScript** |
| Routing | **React Router v7** (client-side SPA) |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/vite`) |
| Animations | **Framer Motion 12** |
| Icons | **Lucide React** |
| Fonts | IBM Plex Mono (headings) + Inter (body) via Google Fonts |
| Deployment | **Vercel** (with `vercel.json` rewrites for SPA) |

---

## Project Structure

```
the-fifa-files/
├── index.html                    # Entry HTML, fonts, meta
├── vite.config.ts                # Vite + React + Tailwind plugins, chunk splitting
├── vercel.json                   # Rewrites all routes to index.html (SPA)
├── tsconfig.json                 # Strict TS, path aliases
├── package.json
├── public/
│   ├── favicon.svg               # Classified folder icon
│   ├── video.mp4                 # Hero background video
│   ├── ticker.png                # Token profile/coin image
│   ├── evidence1.jpg             # Eerie evidence photos
│   ├── evidence2.jpg
│   └── evidence3.jpg
├── src/
│   ├── main.tsx                  # Root: React.StrictMode + BrowserRouter
│   ├── App.tsx                   # Routes + AnimatePresence + noise/scanline overlays
│   ├── index.css                 # Tailwind import, custom theme tokens, noise, scanlines, stamps, glow
│   ├── utils/
│   │   ├── cn.ts                 # Conditional classnames helper
│   │   └── usePageTitle.ts       # Lightweight document.title hook (replaces react-helmet-async)
│   ├── data/
│   │   ├── evidence.ts           # 5 evidence items with titles, dates, descriptions, tweet links
│   │   └── tweets.ts             # 15 tweet URLs + IDs (fed to RealTweetEmbed)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx        # Outlet wrapper with page transition animations
│   │   │   ├── Header.tsx        # Fixed top nav with folder-tab indicators
│   │   │   └── Footer.tsx        # Token + X links
│   │   ├── ui/
│   │   │   ├── Stamp.tsx         # CLASSIFIED / TOP SECRET / CONFIDENTIAL rotating stamp
│   │   │   ├── RedactedText.tsx  # Black-bar redaction with hover-to-reveal
│   │   │   ├── EvidenceCard.tsx  # Dossier-style timeline card with tweet references
│   │   │   ├── EvidencePhotoShowcase.tsx  # 3-photo eerie evidence board with red strings
│   │   │   ├── RealTweetEmbed.tsx  # Fetches Twitter oEmbed API, renders real tweet widget
│   │   │   └── TokenBadge.tsx    # Solana chain badge with pulsing dot
│   │   └── animations/
│   │       ├── RevealOnScroll.tsx  # Framer Motion fade-up on scroll
│   │       └── TypewriterText.tsx  # Character-by-character typewriter effect
│   └── pages/
│       ├── HomePage.tsx          # Hero: video bg + typewriter + stamp + preview cards
│       ├── EvidencePage.tsx      # Photo showcase + 5 evidence timeline cards
│       ├── TokenPage.tsx         # $FIFAFILES token info, CA copy, buy guide, pump.fun link
│       ├── TwitterPage.tsx       # 15 real tweet embeds in 2-column grid
│       └── DossierPage.tsx       # Full classified report with redacted text + key quotes
```

---

## Design System: "Classified Dossier"

### Color Palette

```
--color-bg:              #0a0a0a    (near-black background)
--color-surface:         #141414    (card surfaces)
--color-surface-elevated:#1c1c1c    (hovered cards)
--color-border:          #2a2a2a    (subtle borders)
--color-gold:            #d4a853    (primary accent — Argentina/FIFA gold)
--color-gold-dim:        #a8883a    (muted gold)
--color-red:             #cc3333    (classified/redacted accent)
--color-red-bright:      #e04444    (TOP SECRET stamp)
--color-text:            #e8e6e3    (off-white body text)
--color-text-muted:      #888888    (secondary text)
--color-solana-purple:   #9945FF    (Solana chain)
--color-solana-green:    #14F195    (Solana chain)
```

### Typography

- **Headings**: `IBM Plex Mono` (typewriter/dossier feel)
- **Body**: `Inter` (clean readability)

### Signature UI Elements

| Element | Description |
|---------|-------------|
| **Stamp** | Rotated red/gold stamp overlay (CLASSIFIED, TOP SECRET, CONFIDENTIAL) — animated slam-in on load |
| **Redacted Text** | Black bars covering random words; hover to reveal — creates the "classified document" feel |
| **Noise Overlay** | Fixed SVG fractal noise at 2.5% opacity across the entire viewport |
| **Scanlines** | Subtle CRT scanline overlay for vintage monitor texture |
| **Evidence Photos** | Slow-breathing zoom + pulsing vignette + red string connectors + "REDACTED" corner stamps |
| **Page Transitions** | Framer Motion fade + slide on route change via `AnimatePresence` |

---

## Hero Section

The hero uses a fullscreen `<video>` background with gradient overlays:

- **Video**: `public/video.mp4` — autoplay, loop, muted (browser policy), playsinline
- **Audio**: On first user click/touch, unmutes to volume `0.12` (low atmospheric) — implemented via a one-time event listener in `useEffect`
- **Content overlay**: "TOP SECRET" stamp → typewriter "THE FIFA FILES" title → subtitle → CTA buttons
- **Scroll indicator**: Animated bouncing chevron at bottom

```tsx
// Hero audio approach
useEffect(() => {
  const video = videoRef.current
  if (!video) return
  const handler = () => {
    video.muted = false
    video.volume = 0.12
    document.removeEventListener('click', handler)
    document.removeEventListener('touchstart', handler)
  }
  document.addEventListener('click', handler)
  document.addEventListener('touchstart', handler)
}, [])
```

---

## Real Tweet Embeds (Twitter/X)

**Problem**: We initially used fake tweet cards with hardcoded content. The user wanted real embeds.

**Solution**: Twitter's official oEmbed API at `https://publish.twitter.com/oembed`.

### Implementation

`RealTweetEmbed.tsx`:

1. **Fetch phase**: On mount, the component calls `publish.twitter.com/oembed?url={tweetUrl}&omit_script=true&theme=dark` to get the official embed HTML
2. **Render phase**: The returned `<blockquote>` HTML is injected via `dangerouslySetInnerHTML`
3. **Widget activation**: Twitter's `widgets.js` script converts `<blockquote>` elements into live iframes. We load it once globally and call `twttr.widgets.load(container)` after rendering each embed

```tsx
useEffect(() => {
  fetch(`https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true&theme=dark`)
    .then(r => r.json())
    .then(data => setHtml(data.html))
}, [url])

useEffect(() => {
  if (!html) return
  const render = () => {
    if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load(containerRef.current)
    }
  }
  render()
  const timer = setTimeout(render, 600)
  if (!document.querySelector('script[src*="widgets.js"]')) {
    const s = document.createElement('script')
    s.src = 'https://platform.twitter.com/widgets.js'
    s.async = true
    s.onload = render
    document.body.appendChild(s)
  }
  return () => clearTimeout(timer)
}, [html])
```

### Key Benefits

- **100% real content** — displays actual tweet text, likes, retweets, timestamps
- **Live updates** — stats update in real-time via Twitter's widget
- **Dark theme supported** — `theme=dark` parameter in oEmbed API
- **No API key required** — oEmbed is public/unauthenticated

### Data Format

Tweets are stored in `src/data/tweets.ts` with just an `id` and `url`:

```ts
export interface TweetItem {
  id: string
  url: string
}
```

---

## Evidence Photo Showcase

Three JPG images displayed on the Evidence page with an unsettling, psychopathic aesthetic.

### Effects (all subtle, no flashy animations)

| Effect | Implementation |
|--------|---------------|
| **Breathing zoom** | `scale: [1, 1.03, 1]` over 8-12s with `easeInOut` — each image at a different rate |
| **Pulsing vignette** | Radial gradient overlay with `opacity: [0.5, 0.7, 0.5]` over 6-9s |
| **Red string connectors** | SVG `<line>` elements with `stroke-dasharray` animating via `pathLength` |
| **REDACTED stamp** | Top-right corner, rotates slightly, fades in after delay |
| **Hover reveal** | On hover, a dark overlay covers the image and "[ Classified ]" text appears |
| **Evidence markers** | Pulsing red dot + exhibit label + date/case number footer |
| **Scattered rotation** | Each image has `rotate: -1.5deg / 2deg / -1deg` for dossier feel |

```tsx
// Breathing zoom
<motion.img
  animate={{ scale: [1, 1.03, 1] }}
  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
/>
```

---

## Token Page

Displays `$FIFAFILES` token information for the Solana blockchain, launched on pump.fun.

### Features

- **Ticker image**: `ticker.png` displayed as a rounded coin with gold border
- **Chain badge**: Solana badge with pulsing green dot
- **Contract address**: Copy-to-clipboard button (copies the raw CA string)
- **How to buy**: 3-step guide (wallet → pump.fun → swap)
- **Direct link**: CTA opens `pump.fun/coin/{CA}` in a new tab
- **CA variable**: Defined as `const CA = '...'` at the top of the component — single source of truth, referenced by the copy function and the pump.fun link

---

## Dependency Notes

- **No `react-helmet-async`** — Use `usePageTitle` hook instead (avoids React 19 peer dep issues)
- **Tailwind v4** — Uses `@tailwindcss/vite` plugin (no `tailwind.config.js` needed, `@theme` directive in CSS)
- **Framer Motion** — Keep `ease` arrays as `const` tuples to avoid TS inference issues

---

## Recurring Tasks

### Update Contract Address

1. Edit `src/pages/TokenPage.tsx`
2. Change `const CA = '...'` to the new address
3. Update the pump.fun link in the CTA button to `/coin/{newCA}`
4. Update the helper text between "Coming Soon..." and "Live" states
5. Build, commit, push — Vercel auto-deploys

### Add / Remove Tweets

1. Edit `src/data/tweets.ts`
2. Add/remove entries in the `tweets` array (requires `id` and `url`)
3. The Twitter page dynamically counts `{tweets.length}`

### Add / Remove Evidence

1. Edit `src/data/evidence.ts` — add/remove items from the `evidenceItems` array
2. Update tweet references in each item's `tweetLinks` array

---

## Deployment (Vercel)

- Requires `vercel.json` with SPA rewrites: `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- All routes handled client-side by React Router
- Static assets served from `public/`
- No server-side rendering needed
