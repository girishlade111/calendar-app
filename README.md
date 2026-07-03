<div align="center">

# 📅 Calendar App

### A Premium Glassmorphism Calendar Experience

**Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](https://v0-calendar-app.vercel.app) · [Report Bug](https://github.com/girishlade111/calendar-app/issues) · [Request Feature](https://github.com/girishlade111/calendar-app/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Component Reference](#component-reference)
- [Styling System](#styling-system)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)

---

## 🎯 About

**Calendar App** is a modern, visually stunning calendar application designed for teams and individuals who want a premium scheduling experience. Built with a glassmorphism aesthetic featuring frosted glass panels, translucent surfaces, and smooth animations over a beautiful mountain landscape backdrop.

### Key Highlights

- **Glassmorphism Design** — Frosted glass UI with `backdrop-blur`, translucent backgrounds, and soft borders
- **AI Assistant** — Intelligent popup with typing animation that offers contextual suggestions
- **Week View** — Full weekly calendar with 8 AM – 4 PM time slots and color-coded events
- **Event Details** — Click any event to see full details including attendees, location, and description
- **Mini Calendar** — Sidebar mini calendar for quick date navigation
- **Multiple Calendars** — Organize events across My Calendar, Work, Personal, and Family categories
- **Smooth Animations** — Fade-in transitions, hover effects, and micro-interactions

### Built With

| Layer               | Technology                            |
| ------------------- | ------------------------------------- |
| **Framework**       | Next.js 15.2 (App Router)             |
| **Language**        | TypeScript 5.0 (Strict mode)          |
| **UI Library**      | React 19                              |
| **Styling**         | Tailwind CSS 3.4 + shadcn/ui          |
| **Icons**           | Lucide React                          |
| **Theme**           | next-themes (dark/light mode support) |
| **Package Manager** | pnpm 11.8                             |

---

## 🖼️ Screenshots

> The app features a full-screen mountain landscape background with glassmorphism UI panels overlaid on top.

**Main Calendar View:**

- Header: Search bar, settings icon, user avatar
- Sidebar: Create button, mini calendar, calendar categories
- Content: Weekly view with color-coded events
- AI Popup: Appears after 3 seconds with typing animation

---

## 🔧 Tech Stack

### Core

| Package      | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| `next`       | 15.2.4  | React framework with App Router |
| `react`      | 19.0.0  | UI library                      |
| `react-dom`  | 19.0.0  | React DOM renderer              |
| `typescript` | 5.0.2   | Type-safe JavaScript            |

### UI Components (shadcn/ui)

| Package                         | Version | Purpose                      |
| ------------------------------- | ------- | ---------------------------- |
| `@radix-ui/react-accordion`     | 1.2.2   | Collapsible content sections |
| `@radix-ui/react-alert-dialog`  | 1.1.4   | Modal confirmation dialogs   |
| `@radix-ui/react-avatar`        | 1.1.2   | User avatar component        |
| `@radix-ui/react-checkbox`      | 1.1.3   | Checkbox inputs              |
| `@radix-ui/react-dialog`        | 1.1.4   | Modal dialogs                |
| `@radix-ui/react-dropdown-menu` | 2.1.4   | Dropdown menus               |
| `@radix-ui/react-label`         | 2.1.1   | Form labels                  |
| `@radix-ui/react-popover`       | 1.1.4   | Popover tooltips             |
| `@radix-ui/react-select`        | 2.1.4   | Select dropdowns             |
| `@radix-ui/react-tabs`          | 1.1.2   | Tabbed interfaces            |
| `@radix-ui/react-toast`         | 1.2.4   | Toast notifications          |
| `@radix-ui/react-tooltip`       | 1.1.6   | Tooltips                     |

### Styling

| Package                    | Version | Purpose                      |
| -------------------------- | ------- | ---------------------------- |
| `tailwindcss`              | 3.4.17  | Utility-first CSS framework  |
| `tailwindcss-animate`      | 1.0.7   | Animation utilities          |
| `tailwind-merge`           | 2.5.5   | Merge Tailwind classes       |
| `class-variance-authority` | 0.7.1   | Component variant management |
| `clsx`                     | 2.1.1   | Conditional class names      |
| `autoprefixer`             | 10.4.20 | CSS vendor prefixes          |
| `postcss`                  | 8.5.0   | CSS transformation           |

### Utilities

| Package               | Version | Purpose                   |
| --------------------- | ------- | ------------------------- |
| `lucide-react`        | 0.454.0 | Icon library              |
| `date-fns`            | 4.1.0   | Date manipulation         |
| `next-themes`         | 0.4.4   | Theme management          |
| `zod`                 | 3.24.1  | Schema validation         |
| `react-hook-form`     | 7.54.1  | Form management           |
| `@hookform/resolvers` | 3.9.1   | Form validation resolvers |

### Additional Components

| Package                  | Version | Purpose             |
| ------------------------ | ------- | ------------------- |
| `cmdk`                   | 1.0.4   | Command palette     |
| `embla-carousel-react`   | 8.5.1   | Carousel component  |
| `input-otp`              | 1.4.1   | OTP input fields    |
| `react-day-picker`       | 9.8.0   | Date picker         |
| `react-resizable-panels` | 2.1.7   | Resizable panels    |
| `recharts`               | 2.15.0  | Chart library       |
| `sonner`                 | 1.7.1   | Toast notifications |
| `vaul`                   | 0.9.6   | Drawer component    |

---

## ✨ Features

### 1. Weekly Calendar View

- Full week display from Sunday to Saturday
- Time slots from 8:00 AM to 4:00 PM
- Color-coded events positioned by time
- Current date highlighted with blue circle
- Event click to view full details

### 2. AI Assistant Popup

- Appears automatically after 3 seconds
- Typing animation effect (50ms per character)
- Contextual suggestion: "Shall I play some Hans Zimmer essentials?"
- Yes/No action buttons
- Pause/Play music control
- Dismissible with X button

### 3. Mini Calendar

- Sidebar month view
- Navigation arrows for month switching
- Current date highlighted
- 7-column grid layout

### 4. Multiple Calendar Categories

- **My Calendar** (Blue) — Personal events
- **Work** (Green) — Professional meetings
- **Personal** (Purple) — Private appointments
- **Family** (Orange) — Family events

### 5. Event Details Modal

- Full-screen overlay with backdrop blur
- Event title, time range, location
- Attendee list with icons
- Organizer information
- Event description
- Close button

### 6. View Switching

- **Day** — Single day view
- **Week** — Full week view (default)
- **Month** — Monthly overview

### 7. Navigation

- Today button for quick navigation
- Previous/Next arrows for date switching
- Current date display
- Search functionality

### 8. Glassmorphism Design

- `backdrop-blur-lg` on all panels
- `bg-white/10` translucent backgrounds
- `border-white/20` soft borders
- `shadow-xl` depth effects
- Smooth `fade-in` animations

---

## 🏗️ Architecture

### Page Component (`app/page.tsx`)

The main page is a single-file React component (588 lines) that manages:

```
┌─────────────────────────────────────────────────────────┐
│  State Management                                        │
│  ├── isLoaded          → Controls fade-in animations    │
│  ├── showAIPopup       → Toggles AI assistant           │
│  ├── typedText         → Typing animation text          │
│  ├── isPlaying         → Music play/pause state         │
│  ├── currentView       → day | week | month             │
│  ├── currentMonth      → "March 2025"                   │
│  ├── currentDate       → "March 5"                      │
│  └── selectedEvent     → Event details modal            │
├─────────────────────────────────────────────────────────┤
│  Data                                                   │
│  ├── events[]          → 15 sample calendar events      │
│  ├── weekDays[]        → ["SUN", "MON", ...]            │
│  ├── weekDates[]       → [3, 4, 5, 6, 7, 8, 9]         │
│  ├── timeSlots[]       → [8, 9, 10, ..., 16]            │
│  ├── miniCalendarDays  → Month grid with offsets         │
│  └── myCalendars[]     → Calendar categories            │
├─────────────────────────────────────────────────────────┤
│  Render Layers                                          │
│  ├── Background Image    → Unsplash mountain photo      │
│  ├── Header              → Navigation bar               │
│  ├── Sidebar             → Mini calendar + categories    │
│  ├── Calendar View       → Weekly grid with events      │
│  ├── AI Popup            → Floating assistant           │
│  └── Event Modal         → Detail overlay               │
└─────────────────────────────────────────────────────────┘
```

### Event Positioning Algorithm

Events are positioned absolutely using time-based calculations:

```typescript
const calculateEventStyle = (startTime, endTime) => {
  const start =
    parseInt(startTime.split(":")[0]) + parseInt(startTime.split(":")[1]) / 60;
  const end =
    parseInt(endTime.split(":")[0]) + parseInt(endTime.split(":")[1]) / 60;
  const top = (start - 8) * 80; // 80px per hour
  const height = (end - start) * 80;
  return { top: `${top}px`, height: `${height}px` };
};
```

### Sample Events Data

| ID  | Title               | Time        | Day | Color  |
| --- | ------------------- | ----------- | --- | ------ |
| 1   | Team Meeting        | 09:00-10:00 | Mon | Blue   |
| 2   | Lunch with Sarah    | 12:30-13:30 | Mon | Green  |
| 3   | Project Review      | 14:00-15:30 | Wed | Purple |
| 4   | Client Call         | 10:00-11:00 | Tue | Yellow |
| 5   | Team Brainstorm     | 13:00-14:30 | Thu | Indigo |
| 6   | Product Demo        | 11:00-12:00 | Fri | Pink   |
| 7   | Marketing Meeting   | 13:00-14:00 | Sat | Teal   |
| 8   | Code Review         | 15:00-16:00 | Sun | Cyan   |
| 9   | Morning Standup     | 08:30-09:30 | Tue | Blue   |
| 10  | Design Review       | 14:30-15:45 | Fri | Purple |
| 11  | Investor Meeting    | 10:30-12:00 | Sun | Red    |
| 12  | Team Training       | 09:30-11:30 | Thu | Green  |
| 13  | Budget Review       | 13:30-15:00 | Wed | Yellow |
| 14  | Client Presentation | 11:00-12:30 | Sat | Orange |
| 15  | Product Planning    | 14:00-15:30 | Mon | Pink   |

---

## 📁 Project Structure

```
calendar-app/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global CSS + CSS variables (61 lines)
│   │                             #   - Light/dark theme variables
│   │                             #   - Grid utility classes
│   │                             #   - Backdrop blur styles
│   ├── layout.tsx                # Root layout (24 lines)
│   │                             #   - Inter font from Google Fonts
│   │                             #   - Page metadata (title, description)
│   │                             #   - HTML structure
│   ├── loading.tsx               # Loading component (3 lines)
│   │                             #   - Returns null (minimal loading)
│   └── page.tsx                  # Main calendar page (588 lines)
│                                 #   - Full calendar application
│                                 #   - State management
│                                 #   - Event handling
│                                 #   - All UI rendering
│
├── components/                   # Reusable components
│   └── theme-provider.tsx        # Theme provider wrapper (11 lines)
│                                 #   - next-themes integration
│                                 #   - Dark/light mode support
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() helper (6 lines)
│                                 #   - clsx + tailwind-merge
│                                 #   - Conditional class merging
│
├── styles/                       # Additional styles
│   └── globals.css               # Extended CSS variables (92 lines)
│                                 #   - Sidebar variables
│                                 #   - Chart color variables
│                                 #   - Base layer resets
│
├── public/                       # Static assets
│   ├── placeholder-logo.png      # Logo placeholder
│   ├── placeholder-logo.svg      # SVG logo placeholder
│   ├── placeholder-user.jpg      # User avatar placeholder
│   ├── placeholder.jpg           # General placeholder
│   └── placeholder.svg           # SVG placeholder
│
├── tailwind.config.js            # Tailwind configuration (82 lines)
│                                 #   - Custom color palette
│                                 #   - Border radius variables
│                                 #   - Keyframe animations
│                                 #   - shadcn/ui integration
│
├── next.config.mjs               # Next.js configuration (14 lines)
│                                 #   - ESLint disabled during builds
│                                 #   - TypeScript errors ignored
│                                 #   - Unoptimized images
│
├── postcss.config.mjs            # PostCSS configuration (8 lines)
│                                 #   - Tailwind CSS plugin
│
├── tsconfig.json                 # TypeScript configuration (27 lines)
│                                 #   - ES6 target
│                                 #   - Strict mode enabled
│                                 #   - Path alias: @/* → ./*
│
├── components.json               # shadcn/ui configuration (21 lines)
│                                 #   - Default style
│                                 #   - Neutral base color
│                                 #   - CSS variables enabled
│
├── package.json                  # Project dependencies
├── pnpm-lock.yaml                # pnpm lockfile
├── pnpm-workspace.yaml           # pnpm workspace config
└── .gitignore                    # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** — Version 18.0 or higher
- **pnpm** — Version 8.0 or higher (recommended)
  ```bash
  npm install -g pnpm
  ```
- **Git** — For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/girishlade111/calendar-app.git
   cd calendar-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Approve builds** (if prompted)

   ```bash
   pnpm approve-builds sharp
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Quick Start (One Command)

```bash
git clone https://github.com/girishlade111/calendar-app.git && cd calendar-app && pnpm install && pnpm dev
```

---

## ⚙️ Configuration

### Next.js Config (`next.config.mjs`)

```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during builds
  },
  images: {
    unoptimized: true, // Disable image optimization (for static export)
  },
};
```

### TypeScript Config (`tsconfig.json`)

| Option             | Value    | Purpose                         |
| ------------------ | -------- | ------------------------------- |
| `target`           | ES6      | JavaScript output target        |
| `strict`           | true     | Enable all strict type checks   |
| `module`           | esnext   | Module system                   |
| `moduleResolution` | bundler  | Module resolution strategy      |
| `jsx`              | preserve | Keep JSX for Next.js processing |
| `incremental`      | true     | Enable incremental compilation  |
| `paths.@/*`        | `./*`    | Path alias for root imports     |

### Tailwind Config (`tailwind.config.js`)

**Custom Colors:**

- `border`, `input`, `ring` — Form element colors
- `background`, `foreground` — Page colors
- `primary`, `secondary` — Brand colors
- `destructive` — Error/danger colors
- `muted`, `accent` — Subtle UI colors
- `popover`, `card` — Overlay colors

**Custom Animations:**

- `accordion-down` — Expand accordion content
- `accordion-up` — Collapse accordion content
- `fade-in` — 0.5s opacity fade-in

**Plugins:**

- `tailwindcss-animate` — Animation utilities

### shadcn/ui Config (`components.json`)

xa
fffffff
f
"stylghjke": "default",
"rsc": true,
"tsx": true,
"tailwind": {
"config": "tailwind.config.ts",
"css": "app/globals.css",
"baseColor": "neutral",
"cssVariabfvgbhnjmles": tgevfcsdxztrue
},
"aliases": {
"components": "@/components",
"utils": "@/lib/utils",
"ui": "@/components/ui",
"lib": "@/lib",
"hooks": "@/hooks"
}
}

````

---

## 🧩 Component Reference

### Utility Function (`lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

**Usage:** Merge Tailwind CSS classes with conditional logic.

### Theme Provider (`components/theme-provider.tsx`)

```typescript
'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

**Usage:** Wrap app in layout.tsx for dark/light mode support.

### CSS Variables

rtyui
**Light Mode:**
| Variable | Value |
|----------|-------|
| `--background` | `0 0% 100%` (white) |
| `--foreground` | `222.2 84% 4.9%` (dark blue) |
| `--primary` | `221.2 83.2% 53.3%` (blue) |
| `--border` | `214.3 31.8% 91.4%` (light gray) |
| `--radius` | `0.5rem` |

**Dark Mode:**
| Variable | Value |
|----------|-------|
| `--background` | `222.2 84% 4.9%` (dark navy) |
| `--foreground` | `210 40% 98%` (white) |
| `--primary` | `217.2 91.2% 59.8%` (bright blue) |
| `--border` | `217.2 32.6% 17.5%` (dark border) |

---

## 🎨 Styling System

### Glassmorphism Classescvbnm,.

```css
/*fghjk/ Frosted glass panel */
bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl

/* Semi-transparent header */
bg-white/10 backdrop-blur-sm border border-white/20

/* AI Popup */
bg-gradient-to-br from-blue-400/30 via-blue-500/30 to-blue-600/30
backdrop-blur-lg border border-blue-300/30
```

### Animation Classes

```css
/* Fade-in on page load */
opacity-0 animate-fade-in

/* Staggered animations */
style={{ animationDelay: "0.2s" }}  /* Header */
style={{ animationDelay: "0.4s" }}  /* Sidebar */
style={{ animationDelay: "0.6s" }}  /* Calendar */

/* Hover effects */
hover:translate-y-[-2px] hover:shadow-lg
```

### Event Color System

| Color  | Tailwind Class        | Hex Approximation |
| ------ | --------------------- | ----------------- |
| Blue   | `bg-blue-500`         | `#3b82f6`         |
| Green  | `bg-green-500`        | `#22c55e`         |
| Purple | `bg-purple-500`       | `#a855f7`         |
| Yellow | `bg-yellow-500`       | `#eab308`         |
| Indigo | `bg-indigo-500`       | `#6366f1`         |
| Pink   | `bg-pink-500`         | `#ec4899`         |
| Teal   | `refdwsazbg-teal-500` | `#14b8a6`         |
| Cyan   | `bg-cyan-500`         | `#06b6d4`         |
| Red    | `bg-red-400`          | `#f87171`         |
| Orange | `bg-orange-400`       | `#fb923c`         |

---

## 📜 Scripts

| Command               | Description                               | Usage       |
| --------------------- | ----------------------------------------- | ----------- |
| `pnpm dev`            | Start Next.jtrefdwsqas development server | Development |
| `pnpm build`          | CreatuhygtrfexswaZ production build       | Production  |
| `pnpm staTGRFVXSAZrt` | Start production server                   | Production  |
| `pnpm lint`           | Run ESLint checks                         | Quality     |

### Development Workflow

```bash
# Start development with turbopack (faster)
pnpm dev

# Build and test production locally
pnpm build && pnpm start

# Check code quality
pnpm lint
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

**Environment Variables:**

- No environment variables required for basic functionality

**Build Settings:**

- Framework: Next.js
- Build Command: `pnpm build`
- Output Directory: `.next`

### Other Platforms

**Netlify:**

```bash
# Build command
pnpm build

# Publish directory
.next
```

**Docker:**

```dockerfile
FROM node:18-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Code Style

- Use TypeScript for all new files
- Follow existing component patterns
- Use `cn()` utility for class merging
- Keep components in `components/` directory
- Use Lucide icons consistently

---

## ❓ FAQ

### Q: Why is the dev server slow to start?

**A:** First run requires downloading 275 packages. Subsequent starts are faster.

### Q: How do I add new events?

**A:** Edit the `events` array in `app/page.tsx`. Each event requires:

```typescript
{
  id: number,
  title: string,
  startTime: "HH:MM",
  endTime: "HH:MM",
  color: "bg-{color}-500",
  day: 1-7,           // 1=Sunday, 7=Saturday
  description: string,
  location: string,
  attendees: string[],
  organizer: string
}
```

### Q: How do I change the background image?

**A:** Update the `src` prop of the `<Image>` component in `app/page.tsx`:

```tsx
<Image src="YOUR_IMAGE_URL" ... />
```

### Q: How do I enable dark mode?

**A:** Wrap your layout with `ThemeProvider`:

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
```

### Q: How do I add new shadcn/ui components?

**A:** Run the shadcn CLI:

```bash
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
```

### Q: Why are TypeScript/ESLint errors ignored in build?

**A:** The `next.config.mjs` has `ignoreDuringBuilds: true` for both. Remove these for stricter builds.

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Girish Lade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHODERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="centerRS OR COPYRIGHT HOL">

**Made with ❤️ by [Girish Lade](https://github.com/girishlade111)**

[⬆ Back to Top](#-calendar-app)

</div>
