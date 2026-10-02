<div align="center">

# 📅 Calendar App

### A Premium Glassmorphism Calendar Experience

**Built with Next.js 15, React 19, TypeScript 5, and Tailwind CSS 3.4**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/girishlade111/calendar-app/pulls)
[![Issues](https://img.shields.io/github/issues/girishlade111/calendar-app)](https://github.com/girishlade111/calendar-app/issues)

[Live Demo](https://v0-calendar-app.vercel.app) · [Report Bug](https://github.com/girishlade111/calendar-app/issues) · [Request Feature](https://github.com/girishlade111/calendar-app/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Key Highlights](#-key-highlights)
- [Live Preview](#-live-preview)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Styling System](#-styling-system)
- [Event Data Model](#-event-data-model)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [FAQ](#-faq)
- [Author](#-author)
- [License](#-license)

---

## 🎯 About

**Calendar App** is a modern, visually stunning calendar application designed for teams and individuals who want a premium scheduling experience. Built with a **glassmorphism aesthetic** featuring frosted glass panels, translucent surfaces, and smooth animations over a beautiful mountain landscape backdrop.

This project was generated using [v0.app](https://v0.app) by Vercel and has been extended with a rich feature set including multiple calendar views, an AI assistant popup, event management, settings panel, user profile, and responsive mobile navigation.

### What Makes It Special

- **Premium Visual Design** — Glassmorphism UI with frosted glass panels, translucent backgrounds, and depth effects
- **Full-Featured Calendar** — Week, Day, and Month views with time-based event positioning
- **AI Assistant** — Intelligent popup with typing animation offering contextual suggestions
- **Event Management** — Create, view, and manage events with rich metadata (attendees, location, reminders, repeat options)
- **Responsive Design** — Full mobile sidebar navigation with touch-friendly interactions
- **Zero Backend** — Client-side only, no database or API required — runs entirely in the browser

---

## 🔗 Live Preview

**🌐 [https://v0-calendar-app.vercel.app](https://v0-calendar-app.vercel.app)**

> The app is deployed on Vercel with zero configuration. Try it out — no sign-up required.

---

## 🖼️ Screenshots

> The app features a full-screen mountain landscape background with glassmorphism UI panels overlaid on top.

### Main Calendar View (Week View)
- **Header:** Search bar with real-time filtering, settings gear icon, user avatar with profile access
- **Sidebar:** "Create" button, mini calendar for date navigation, calendar category toggles (My Calendar, Work, Personal, Family)
- **Content:** Weekly grid from Sunday to Saturday with 8:00 AM – 4:00 PM time slots and color-coded events positioned by time
- **AI Popup:** Floating assistant that appears after 3 seconds with a typing animation effect

### Event Details Modal
- Full-screen overlay with `backdrop-blur` effect
- Event title, time range, location, and day/date
- Attendee list with avatar icons
- Organizer information
- Full event description
- Close button with smooth transition

### Settings Panel
- 4 tabs: General, Appearance, Calendar, Notifications
- Time format, start of week, timezone, working hours
- Theme selection (Light/Dark/System)
- Event density control
- Push notification toggles with quiet hours configuration

### Profile Panel
- 4 tabs: Account, Security, Preferences, Billing
- Editable personal information with save/cancel workflow
- Password management and two-factor authentication
- Notification preferences and calendar color customization
- Billing history with payment method display

---

## 🔧 Tech Stack

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 15.2.4 | React framework with App Router, server components, and API routes |
| `react` | ^19.0.0 | UI library with concurrent features and hooks |
| `react-dom` | ^19.0.0 | React DOM renderer for web |
| `typescript` | ^5.0 | Type-safe JavaScript with strict mode enabled |

### UI Component System (shadcn/ui)

| Package | Version | Purpose |
|---------|---------|---------|
| `@radix-ui/react-accordion` | 1.2.2 | Collapsible content sections |
| `@radix-ui/react-alert-dialog` | 1.1.4 | Modal confirmation dialogs |
| `@radix-ui/react-aspect-ratio` | 1.1.1 | Maintain aspect ratios |
| `@radix-ui/react-avatar` | 1.1.2 | User avatar component |
| `@radix-ui/react-checkbox` | 1.1.3 | Checkbox inputs |
| `@radix-ui/react-collapsible` | 1.1.2 | Collapsible sections |
| `@radix-ui/react-context-menu` | 2.2.4 | Right-click context menus |
| `@radix-ui/react-dialog` | 1.1.4 | Modal dialogs |
| `@radix-ui/react-dropdown-menu` | 2.1.4 | Dropdown menus |
| `@radix-ui/react-hover-card` | 1.1.4 | Hover preview cards |
| `@radix-ui/react-label` | 2.1.1 | Accessible form labels |
| `@radix-ui/react-menubar` | 1.1.4 | Application menubar |
| `@radix-ui/react-navigation-menu` | 1.2.3 | Navigation menus |
| `@radix-ui/react-popover` | 1.1.4 | Floating popovers |
| `@radix-ui/react-progress` | 1.1.1 | Progress indicators |
| `@radix-ui/react-radio-group` | 1.2.2 | Radio button groups |
| `@radix-ui/react-scroll-area` | 1.2.2 | Custom scroll areas |
| `@radix-ui/react-select` | 2.1.4 | Select dropdowns |
| `@radix-ui/react-separator` | 1.1.1 | Visual separators |
| `@radix-ui/react-slider` | 1.2.2 | Range sliders |
| `@radix-ui/react-slot` | 1.1.1 | Component composition utility |
| `@radix-ui/react-switch` | 1.1.2 | Toggle switches |
| `@radix-ui/react-tabs` | 1.1.2 | Tabbed interfaces |
| `@radix-ui/react-toast` | 1.2.4 | Toast notifications |
| `@radix-ui/react-toggle` | 1.1.1 | Toggle button |
| `@radix-ui/react-toggle-group` | 1.1.1 | Toggle button group |
| `@radix-ui/react-tooltip` | 1.1.6 | Tooltips |

### Styling & CSS

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 3.4.17 | Utility-first CSS framework |
| `tailwindcss-animate` | 1.0.7 | Animation utilities for Tailwind |
| `tailwind-merge` | 2.5.5 | Intelligent Tailwind class merging |
| `class-variance-authority` | 0.7.1 | Component variant management (CVA) |
| `clsx` | 2.1.1 | Conditional class name construction |
| `autoprefixer` | 10.4.20 | CSS vendor prefix automation |
| `postcss` | ^8.5 | CSS transformation pipeline |

### Icons & Media

| Package | Version | Purpose |
|---------|---------|---------|
| `lucide-react` | ^0.454.0 | Beautiful, consistent icon library (45+ icons used) |
| `geist` | ^1.3.1 | Geist font family (installed, available for use) |

### Forms & Validation

| Package | Version | Purpose |
|---------|---------|---------|
| `react-hook-form` | ^7.54.1 | Performant form management |
| `@hookform/resolvers` | ^3.9.1 | Validation resolver integration |
| `zod` | ^3.24.1 | TypeScript-first schema validation |

### Data Visualization & Components

| Package | Version | Purpose |
|---------|---------|---------|
| `recharts` | 2.15.0 | Composable charting library |
| `react-day-picker` | 9.8.0 | Accessible date picker component |
| `cmdk` | 1.0.4 | Command palette (⌘K) |
| `embla-carousel-react` | 8.5.1 | Carousel component |
| `react-resizable-panels` | ^2.1.7 | Resizable panel layouts |
| `sonner` | ^1.7.1 | Toast notification system |
| `vaul` | ^0.9.6 | Drawer component |

### Theme & Analytics

| Package | Version | Purpose |
|---------|---------|---------|
| `next-themes` | ^0.4.4 | Dark/light mode theme management |
| `@vercel/analytics` | 1.3.1 | Vercel web analytics |

### DevDependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@types/node` | ^22 | Node.js TypeScript type definitions |
| `@types/react` | ^19 | React TypeScript type definitions |
| `@types/react-dom` | ^19 | React DOM TypeScript type definitions |
| `postcss` | ^8.5 | CSS transformation (dev) |
| `tailwindcss` | ^3.4.17 | Tailwind CSS (dev) |
| `typescript` | ^5 | TypeScript compiler (dev) |

---

## ✨ Features

### 1. 📆 Multiple Calendar Views

#### Week View (Default)
- Full 7-column grid layout (Sunday → Saturday)
- Time slots from **8:00 AM to 4:00 PM** with hourly rows (80px height each)
- Events positioned absolutely based on start/end time using `calculateEventStyle()`
- Current date highlighted with a blue circle indicator
- Events are color-coded with hover effects and click-to-view-details

#### Day View
- Single-column time grid showing all events for the selected day
- Location displayed on each event card
- Same time-slot structure as Week View

#### Month View
- Traditional 7-column calendar grid
- Events shown as small colored pills (up to 3 per day cell)
- "+N more" indicator when events exceed 3 per day
- Clickable cells navigate to the specific day view

### 2. 🤖 AI Assistant Popup

- **Auto-appears** after 3 seconds on page load
- **Typing animation** effect (50ms per character delay)
- **Contextual message:** *"Looks like you don't have that many meetings today. Shall I play some Hans Zimmer essentials to help you get into your Flow State?"*
- **Action buttons:** Yes / No
- **Music control:** "Pause Hans Zimmer" button
- **Dismissable** with X button
- Uses `useRef` + `useEffect` + `setInterval` for the typing effect

### 3. 📅 Mini Calendar (Sidebar)

- Month navigation with left/right arrow buttons
- 7-column grid with S/M/T/W/T/F/S headers
- Current date highlighted with a blue circle
- Clickable dates to change the selected date
- Dynamically generates the month grid with proper day offsets

### 4. 🏷️ Calendar Categories

| Category | Color | Description |
|----------|-------|-------------|
| My Calendar | Blue | Personal events and reminders |
| Work | Green | Professional meetings and deadlines |
| Personal | Purple | Private appointments and errands |
| Family | Orange | Family events and gatherings |

> Displayed in the sidebar for visual organization. All events are shown across categories.

### 5. ➕ Event Creation (Full-Featured Modal)

The "Create" button opens a comprehensive event creation form with:

| Field | Type | Options |
|-------|------|---------|
| **Title** | Text input | Required field |
| **Date** | Date picker | Native HTML date input |
| **All Day** | Toggle switch | On/Off |
| **Start Time** | Select dropdown | 30-minute intervals (00:00 → 23:30) |
| **End Time** | Select dropdown | 30-minute intervals (00:00 → 23:30) |
| **Location** | Text input | Optional |
| **Description** | Textarea | Optional, multi-line |
| **Repeat** | Select dropdown | None, Daily, Weekly, Biweekly, Monthly, Yearly |
| **Reminder** | Select dropdown | None, 5/10/15/30/60 min before, 1 day before |
| **Color** | Color picker | 10 color options (Blue, Green, Purple, Yellow, Indigo, Pink, Teal, Cyan, Red, Orange) |
| **Organizer** | Text input | Optional |
| **Attendees** | Text input | Comma-separated names |

### 6. 🔍 Real-Time Search

- Search bar in the header filters events by:
  - Title
  - Description
  - Location
  - Organizer
  - Attendees
- **Keyboard navigation:** Arrow keys to move, Enter to select, Escape to close
- Results appear in a dropdown below the search input
- Clicking a result opens the event details modal

### 7. ⚙️ Settings Panel (4 Tabs)

#### General Tab
- **Time Format:** 12-hour / 24-hour toggle
- **Start of Week:** Sunday / Monday
- **Default View:** Day / Week / Month
- **Timezone:** 12 timezone options (UTC, EST, CST, MST, PST, etc.)
- **Working Hours:** Start time and End time configuration

#### Appearance Tab
- **Theme:** Light / Dark / System
- **Event Density:** Compact / Comfortable / Spacious
- **Show End Times:** Toggle on/off
- **Show Weekends:** Toggle on/off
- **Show Declined Events:** Toggle on/off

#### Calendar Tab
- **AI Assistant:** Toggle on/off
- **Sound Effects:** Toggle on/off
- **Quick Actions:** Export, Import, Customize, Reminders buttons

#### Notifications Tab
- **Push Notifications:** Master toggle
- **Event Reminders:** Sub-toggle
- **Daily Agenda:** Sub-toggle
- **Event Changes:** Sub-toggle
- **Invitations:** Sub-toggle
- **Quiet Hours:** Start time and End time configuration

### 8. 👤 Profile Panel (4 Tabs)

#### Account Tab
- Editable fields: First Name, Last Name, Email, Phone, Bio, Location, Company, Job Title, Website
- Edit/Save/Cancel workflow
- User avatar display

#### Security Tab
- Password management
- Two-factor authentication toggle
- Active sessions display (3 devices shown)
- Recent login history

#### Preferences Tab
- Email notifications toggle
- Push notifications toggle
- SMS notifications toggle
- Calendar color customization
- Default reminder time
- Import/Export calendar options

#### Billing Tab
- Current plan display (Pro Plan - $9.99/month)
- Payment method (Visa ending in 4242)
- Billing history with monthly invoices

### 9. 📱 Mobile Responsive Sidebar

- Slides in from the left with a semi-transparent overlay backdrop
- Navigation links:
  - Day View
  - Week View
  - Month View
  - Today
  - New Event
  - Settings
  - Profile
- User info displayed at the bottom
- Toggle via hamburger menu in the header

### 10. 🎨 Glassmorphism Design System

| Property | Implementation |
|----------|---------------|
| **Background** | Full-screen Unsplash mountain landscape image |
| **Panel Background** | `bg-white/10` (10% opacity white) |
| **Blur Effect** | `backdrop-blur-lg` / `backdrop-blur-xl` |
| **Borders** | `border-white/20` (20% opacity white) |
| **Shadows** | `shadow-xl` / `shadow-2xl` for depth |
| **Animations** | `fade-in` with staggered delays (0.2s, 0.4s, 0.6s) |
| **Hover Effects** | `hover:translate-y-[-2px] hover:shadow-lg` |

---

## 🏗️ Architecture

### Component Structure

The application follows a **single-page architecture** with all logic contained in the main page component. Here's the render hierarchy:

```
┌─────────────────────────────────────────────────────────────────┐
│  Root Layout (app/layout.tsx)                                   │
│  ├── <html> with Inter font                                     │
│  ├── <body> with font class                                     │
│  └── <ThemeProvider> (optional, not currently wired)            │
│                                                                 │
│  Main Page (app/page.tsx) — "use client"                       │
│  │                                                              │
│  ├── Background Layer                                           │
│  │   └── Full-screen Unsplash mountain image                    │
│  │                                                              │
│  ├── Header Bar                                                 │
│  │   ├── Hamburger menu (mobile)                                │
│  │   ├── App title "Calendar"                                   │
│  │   ├── Search input with dropdown results                     │
│  │   ├── Today / Prev / Next navigation                         │
│  │   ├── Current date display                                   │
│  │   ├── View switcher (Day / Week / Month)                     │
│  │   ├── Settings gear icon                                     │
│  │   └── User avatar                                            │
│  │                                                              │
│  ├── Sidebar                                                    │
│  │   ├── "Create" button → opens Add Event modal                │
│  │   ├── Mini Calendar (month grid)                             │
│  │   └── Calendar Categories (My Calendar, Work, Personal,     │
│  │       Family)                                                │
│  │                                                              │
│  ├── Main Content                                               │
│  │   ├── Week View (default)                                    │
│  │   │   ├── Day headers (SUN, MON, TUE, WED, THU, FRI, SAT)  │
│  │   │   ├── Date numbers under each day                        │
│  │   │   ├── Time slot labels (8 AM – 4 PM)                    │
│  │   │   └── Event cards (absolutely positioned by time)       │
│  │   │                                                         │
│  │   ├── Day View                                               │
│  │   │   ├── Single-column time grid                            │
│  │   │   └── Event cards with location                          │
│  │   │                                                         │
│  │   └── Month View                                             │
│  │       └── 7-column grid with event pills                     │
│  │                                                              │
│  ├── AI Assistant Popup (floating, auto-appears)                │
│  │   ├── Typing animation text                                  │
│  │   ├── Yes / No buttons                                       │
│  │   ├── Music control                                          │
│  │   └── Dismiss (X) button                                     │
│  │                                                              │
│  ├── Event Details Modal (on event click)                       │
│  │   ├── Backdrop blur overlay                                  │
│  │   ├── Event title, time, location                            │
│  │   ├── Attendee list                                          │
│  │   ├── Organizer info                                         │
│  │   ├── Description                                            │
│  │   └── Close button                                           │
│  │                                                              │
│  ├── Add Event Modal (on "Create" click)                        │
│  │   ├── Form fields (title, date, time, location, etc.)        │
│  │   ├── Color picker                                           │
│  │   ├── Repeat / Reminder selects                              │
│  │   └── Save / Cancel buttons                                  │
│  │                                                              │
│  ├── Settings Panel (on settings icon click)                    │
│  │   ├── 4 tabs: General, Appearance, Calendar, Notifications   │
│  │   └── Reset / Done buttons                                   │
│  │                                                              │
│  ├── Profile Panel (on avatar click)                            │
│  │   ├── 4 tabs: Account, Security, Preferences, Billing        │
│  │   └── Sign Out button                                        │
│  │                                                              │
│  └── Mobile Sidebar Overlay                                     │
│      ├── Semi-transparent backdrop                              │
│      ├── Navigation links                                       │
│      └── User info                                              │
└─────────────────────────────────────────────────────────────────┘
```

### State Management

All state is managed with React `useState` and `useRef` hooks. No external state management library is used.

```
State Groups:
├── Core Calendar
│   ├── currentView: "day" | "week" | "month"
│   ├── selectedDate: Date (current navigation date)
│   └── selectedEvent: Event | null (detail modal)
│
├── UI State
│   ├── isLoaded: boolean (fade-in animation control)
│   ├── showSidebar: boolean (mobile sidebar toggle)
│   ├── showSearchResults: boolean (search dropdown)
│   ├── searchQuery: string (search input value)
│   └── selectedSearchIndex: number (keyboard nav)
│
├── AI Popup
│   ├── showAIPopup: boolean (popup visibility)
│   ├── typedText: string (typing animation text)
│   └── isPlaying: boolean (music play/pause)
│
├── Add Event
│   ├── showAddEvent: boolean (modal visibility)
│   └── newEvent: { title, description, location,
│       startTime, endTime, date, color, attendees,
│       organizer, isAllDay, repeat, reminder }
│
├── Settings
│   ├── showSettings: boolean (panel visibility)
│   ├── settings: { timeFormat, startOfWeek,
│   │   showWeekends, showEndTimes, eventDensity,
│   │   aiAssistant, soundEnabled, notifications,
│   │   workingHoursStart, workingHoursEnd,
│   │   timezone, theme, showDeclinedEvents,
│   │   defaultView }
│   └── settingsTab: "general" | "appearance" | "calendar" | "notifications"
│
└── Profile
    ├── showProfile: boolean (panel visibility)
    ├── profile: { firstName, lastName, email,
    │   phone, avatar, bio, location, company,
    │   jobTitle, website, notifications, security }
    ├── profileTab: "account" | "security" | "preferences" | "billing"
    ├── isEditingProfile: boolean (edit mode)
    └── editedProfile: Profile (draft data)
```

### Event Positioning Algorithm

Events are positioned absolutely within the weekly grid using time-based calculations:

```typescript
const calculateEventStyle = (startTime: string, endTime: string) => {
  const start =
    parseInt(startTime.split(":")[0]) +
    parseInt(startTime.split(":")[1]) / 60;
  const end =
    parseInt(endTime.split(":")[0]) +
    parseInt(endTime.split(":")[1]) / 60;

  const top = (start - 8) * 80;   // 80px per hour, offset from 8 AM
  const height = (end - start) * 80;

  return {
    top: `${top}px`,
    height: `${height}px`,
  };
};
```

**How it works:**
1. Parse the `HH:MM` time string into decimal hours (e.g., `"09:30"` → `9.5`)
2. Subtract 8 (the first displayed hour) and multiply by 80px to get the `top` offset
3. Calculate duration and multiply by 80px to get the `height`
4. Apply as inline styles with `position: absolute`

---

## 📁 Project Structure

```
calendar-app/
├── app/                              # Next.js App Router directory
│   ├── globals.css                   # Global CSS + CSS custom properties (61 lines)
│   │                                 #   • Light/dark theme variables (HSL values)
│   │                                 #   • Grid utility classes (.bg-grid-slate-200/50)
│   │                                 #   • Backdrop blur styles for react-draggable
│   │
│   ├── layout.tsx                    # Root layout component (24 lines)
│   │                                 #   • Imports Inter font from Google Fonts
│   │                                 #   • Sets page metadata (title, description)
│   │                                 #   • Renders <html> + <body> wrapper
│   │
│   ├── loading.tsx                   # Loading state component (3 lines)
│   │                                 #   • Returns null (minimal loading UI)
│   │
│   └── page.tsx                      # Main calendar page (2,425 lines) ⭐
│                                     #   • "use client" — client-side rendering
│                                     #   • All state management (useState/useRef)
│                                     #   • All event handlers and logic
│                                     #   • Complete UI rendering (header, sidebar,
│                                     #     calendar views, modals, popups, panels)
│                                     #   • 15 hardcoded sample events
│                                     #   • AI assistant with typing animation
│                                     #   • Settings and profile management
│
├── components/                       # Reusable React components
│   └── theme-provider.tsx            # Theme provider wrapper (11 lines)
│                                     #   • Wraps next-themes ThemeProvider
│                                     #   • 'use client' directive
│                                     #   • Enables dark/light mode support
│
├── lib/                              # Utility functions
│   └── utils.ts                      # cn() helper function (6 lines)
│                                     #   • Combines clsx + tailwind-merge
│                                     #   • Used for conditional class merging
│
├── styles/                           # Additional style definitions
│   └── globals.css                   # Extended CSS variables (92 lines)
│                                     #   • Geist font CSS variables
│                                     #   • Chart color variables (--chart-1 to --chart-5)
│                                     #   • Sidebar-specific variables
│                                     #   • Base layer resets (@layer base)
│                                     #   • NOTE: Not currently imported in the app
│
├── public/                           # Static assets (served at /)
│   ├── placeholder-logo.png          # Logo placeholder image
│   ├── placeholder-logo.svg          # SVG logo placeholder
│   ├── placeholder-user.jpg          # User avatar placeholder
│   ├── placeholder.jpg               # General placeholder image
│   └── placeholder.svg               # SVG placeholder
│
├── tailwind.config.js                # Tailwind CSS configuration (82 lines)
│                                     #   • Dark mode: ["class"] strategy
│                                     #   • Custom color palette via CSS variables
│                                     #   • Custom border radius (--radius)
│                                     #   • Custom keyframes (accordion-down/up, fade-in)
│                                     #   • Custom animations
│                                     #   • Plugin: tailwindcss-animate
│
├── next.config.mjs                   # Next.js configuration (14 lines)
│                                     #   • eslint.ignoreDuringBuilds: true
│                                     #   • typescript.ignoreBuildErrors: true
│                                     #   • images.unoptimized: true
│
├── postcss.config.mjs                # PostCSS configuration (8 lines)
│                                     #   • Plugin: tailwindcss
│
├── tsconfig.json                     # TypeScript configuration (27 lines)
│                                     #   • target: ES6
│                                     #   • strict: true
│                                     #   • module: esnext, moduleResolution: bundler
│                                     #   • jsx: preserve
│                                     #   • incremental: true
│                                     #   • paths: @/* → ./*
│
├── components.json                   # shadcn/ui configuration (21 lines)
│                                     #   • style: "default"
│                                     #   • rsc: true
│                                     #   • tsx: true
│                                     #   • baseColor: "neutral"
│                                     #   • cssVariables: true
│                                     #   • Aliases: @/components, @/lib/utils, etc.
│
├── package.json                      # Project manifest and dependencies
│                                     #   • name: "my-v0-project"
│                                     #   • version: "0.1.0"
│                                     #   • Scripts: dev, build, start, lint
│                                     #   • 38 dependencies + 6 devDependencies
│
├── pnpm-lock.yaml                    # pnpm lockfile (deterministic installs)
├── pnpm-workspace.yaml               # pnpm workspace config (sharp build approval)
├── next-env.d.ts                     # Next.js TypeScript declarations
├── tsconfig.tsbuildinfo              # TypeScript incremental build cache
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Minimum Version | Check Command |
|-------------|-----------------|---------------|
| **Node.js** | 18.0+ | `node --version` |
| **pnpm** | 8.0+ | `pnpm --version` |
| **Git** | 2.0+ | `git --version` |

#### Installing pnpm (if not installed)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using Winget (Windows)
winget install pnpm.pnpm
```

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/girishlade111/calendar-app.git
cd calendar-app
```

#### Step 2: Install Dependencies

```bash
pnpm install
```

> If prompted to approve builds for native packages (like `sharp`), run:
> ```bash
> pnpm approve-builds sharp
> ```

#### Step 3: Start Development Server

```bash
pnpm dev
```

#### Step 4: Open in Browser

Navigate to:

```
http://localhost:3000
```

The app should now be running with hot-reload enabled. Any changes to the source files will automatically refresh the browser.

### Quick Start (One Command)

```bash
git clone https://github.com/girishlade111/calendar-app.git && cd calendar-app && pnpm install && pnpm dev
```

### Using npm (Alternative)

If you prefer npm over pnpm:

```bash
git clone https://github.com/girishlade111/calendar-app.git
cd calendar-app
npm install
npm run dev
```

---

## ⚙️ Configuration

### Next.js Config (`next.config.mjs`)

```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,    // Skip ESLint during production builds
  },
  typescript: {
    ignoreBuildErrors: true,     // Skip TypeScript errors during builds
  },
  images: {
    unoptimized: true,           // Disable image optimization (static export)
  },
};

export default nextConfig;
```

> **Note:** These settings are configured for rapid prototyping. For production, consider enabling ESLint and TypeScript checks.

### TypeScript Config (`tsconfig.json`)

| Option | Value | Description |
|--------|-------|-------------|
| `target` | `ES6` | Compile to ES6 JavaScript |
| `lib` | `["dom", "dom.iterable", "esnext"]` | Include DOM and ESNext libraries |
| `allowJs` | `true` | Allow JavaScript files to be compiled |
| `skipLibCheck` | `true` | Skip type checking of declaration files |
| `strict` | `true` | Enable all strict type-checking options |
| `noEmit` | `true` | Don't emit compiled output (Next.js handles this) |
| `esModuleInterop` | `true` | Enable interoperability between CommonJS and ES modules |
| `module` | `esnext` | Use ESNext module system |
| `moduleResolution` | `bundler` | Use bundler module resolution strategy |
| `resolveJsonModule` | `true` | Allow importing .json files |
| `isolatedModules` | `true` | Ensure each file can be safely transpiled |
| `jsx` | `preserve` | Keep JSX syntax for Next.js processing |
| `incremental` | `true` | Enable incremental compilation for faster builds |
| `plugins` | `[{ "name": "next" }]` | Next.js TypeScript plugin |
| `paths.@/*` | `./*` | Path alias: `@/` maps to project root |

### Tailwind CSS Config (`tailwind.config.js`)

**Dark Mode Strategy:**
```javascript
darkMode: ["class"],  // Toggle via CSS class (used by next-themes)
```

**Custom Color Palette (CSS Variables):**
All colors are defined as HSL CSS variables in `app/globals.css` and referenced via `hsl(var(--variable-name))`:

| Color Token | Light Value | Dark Value | Purpose |
|-------------|-------------|------------|---------|
| `background` | `0 0% 100%` (white) | `222.2 84% 4.9%` (dark blue) | Page background |
| `foreground` | `222.2 84% 4.9%` | `210 40% 98%` (near-white) | Text color |
| `card` | `0 0% 100%` | `222.2 84% 4.9%` | Card background |
| `primary` | `221.2 83.2% 53.3%` (blue) | `217.2 91.2% 59.8%` | Primary actions |
| `secondary` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Secondary elements |
| `muted` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Muted backgrounds |
| `accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Accent highlights |
| `destructive` | `0 84.2% 60.2%` (red) | `0 62.8% 30.6%` | Error/danger states |
| `border` | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | Border colors |
| `input` | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | Input field borders |
| `ring` | `221.2 83.2% 53.3%` | `224.3 76.3% 48%` | Focus ring color |

**Custom Animations:**
```javascript
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-in": "fade-in 0.5s ease-out",
},
```

### shadcn/ui Config (`components.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## 🎨 Styling System

### CSS Custom Properties

The app uses HSL-based CSS custom properties for theming. All colors are defined in `app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode overrides ... */
  }
}
```

### Utility Function

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

This function merges Tailwind CSS classes intelligently, handling conflicts between utility classes (e.g., `bg-red-500 bg-blue-500` → `bg-blue-500`).

### Animation System

**Staggered Fade-In on Page Load:**
```tsx
<div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
  {/* Header */}
</div>
<div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
  {/* Sidebar */}
</div>
<div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
  {/* Calendar */}
</div>
```

**Hover Micro-Interactions:**
```css
hover:translate-y-[-2px] hover:shadow-lg  /* Lift effect */
hover:bg-white/20                         /* Background brighten */
transition-all duration-200               /* Smooth transitions */
```

### Event Color System

| Color | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| Blue | `bg-blue-500` | `#3b82f6` | My Calendar, Team Meeting |
| Green | `bg-green-500` | `#22c55e` | Work, Lunch, Training |
| Purple | `bg-purple-500` | `#a855f7` | Personal, Project Review |
| Yellow | `bg-yellow-500` | `#eab308` | Client Call, Budget Review |
| Indigo | `bg-indigo-500` | `#6366f1` | Team Brainstorm |
| Pink | `bg-pink-500` | `#ec4899` | Product Demo, Product Planning |
| Teal | `bg-teal-500` | `#14b8a6` | Marketing Meeting |
| Cyan | `bg-cyan-500` | `#06b6d4` | Code Review |
| Red | `bg-red-400` | `#f87171` | Investor Meeting |
| Orange | `bg-orange-400` | `#fb923c` | Client Presentation, Family |

---

## 📊 Event Data Model

### Sample Events

The app includes 15 hardcoded sample events:

| ID | Title | Time | Day | Color | Location | Organizer |
|----|-------|------|-----|-------|----------|-----------|
| 1 | Team Meeting | 09:00–10:00 | Monday | Blue | Conference Room A | Girish Lade |
| 2 | Lunch with Sarah | 12:30–13:30 | Monday | Green | Cafe Milano | Girish Lade |
| 3 | Project Review | 14:00–15:30 | Wednesday | Purple | Board Room | Girish Lade |
| 4 | Client Call | 10:00–11:00 | Tuesday | Yellow | Zoom | Girish Lade |
| 5 | Team Brainstorm | 13:00–14:30 | Thursday | Indigo | Creative Hub | Girish Lade |
| 6 | Product Demo | 11:00–12:00 | Friday | Pink | Demo Room | Girish Lade |
| 7 | Marketing Meeting | 13:00–14:00 | Saturday | Teal | Marketing Office | Girish Lade |
| 8 | Code Review | 15:00–16:00 | Sunday | Cyan | Dev Lab | Girish Lade |
| 9 | Morning Standup | 08:30–09:30 | Tuesday | Blue | Slack Huddle | Girish Lade |
| 10 | Design Review | 14:30–15:45 | Friday | Purple | Design Studio | Girish Lade |
| 11 | Investor Meeting | 10:30–12:00 | Sunday | Red | Board Room | Girish Lade |
| 12 | Team Training | 09:30–11:30 | Thursday | Green | Training Room | Girish Lade |
| 13 | Budget Review | 13:30–15:00 | Wednesday | Yellow | Finance Office | Girish Lade |
| 14 | Client Presentation | 11:00–12:30 | Saturday | Orange | Client HQ | Girish Lade |
| 15 | Product Planning | 14:00–15:30 | Monday | Pink | Strategy Room | Girish Lade |

### Event Interface

```typescript
interface CalendarEvent {
  id: number;
  title: string;
  startTime: string;        // "HH:MM" format (24-hour)
  endTime: string;          // "HH:MM" format (24-hour)
  color: string;            // Tailwind class (e.g., "bg-blue-500")
  day: number;              // 1=Sunday, 2=Monday, ..., 7=Saturday
  description: string;
  location: string;
  attendees: string[];
  organizer: string;
}
```

### New Event Form Interface

```typescript
interface NewEvent {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  date: string;             // "YYYY-MM-DD" format
  color: string;
  attendees: string;
  organizer: string;
  isAllDay: boolean;
  repeat: "none" | "daily" | "weekly" | "biweekly" | "monthly" | "yearly";
  reminder: "none" | "5min" | "10min" | "15min" | "30min" | "1hr" | "1day";
}
```

---

## 📜 Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `pnpm dev` | Start Next.js development server with hot-reload | Development |
| `pnpm build` | Create optimized production build | Production |
| `pnpm start` | Start the production server (after build) | Production |
| `pnpm lint` | Run ESLint for code quality checks | Quality Assurance |

### Development Workflow

```bash
# Start development (default: port 3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

---

## 🚢 Deployment

### Vercel (Recommended)

This app is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures the build
4. Deploy — your app is live!

**Live Demo:** [https://v0-calendar-app.vercel.app](https://v0-calendar-app.vercel.app)

### Manual Deployment

```bash
# Build the production version
pnpm build

# Start the production server
pnpm start
```

The app will be available at `http://localhost:3000`.

### Environment Variables

No environment variables are required. The app runs entirely client-side with hardcoded sample data.

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Use TypeScript for all new code
- Test your changes locally before submitting
- Write clear commit messages
- Keep PRs focused on a single change

### Reporting Issues

- Use the [GitHub Issues](https://github.com/girishlade111/calendar-app/issues) tracker
- Include steps to reproduce the issue
- Provide screenshots if applicable
- Mention your browser and OS

---

## 🗺️ Roadmap

- [ ] Backend integration with database (PostgreSQL / MongoDB)
- [ ] User authentication (NextAuth.js / Clerk)
- [ ] Real-time event sync with WebSocket
- [ ] Google Calendar / Outlook integration
- [ ] Drag-and-drop event rescheduling
- [ ] Recurring events with RRULE support
- [ ] Email/push notification delivery
- [ ] Multi-user collaboration
- [ ] Mobile app (React Native / Expo)
- [ ] Dark mode persistence across sessions
- [ ] Export to .ics / .csv formats
- [ ] Keyboard shortcuts for power users
- [ ] Event attachments and file uploads
- [ ] Calendar sharing and permissions

---

## ❓ FAQ

### Q: Does this app require a backend?
**A:** No. The app runs entirely client-side with hardcoded sample events. No database, API, or authentication is required.

### Q: Can I use npm instead of pnpm?
**A:** Yes. Run `npm install` and `npm run dev` instead. The app works with any package manager.

### Q: How do I add my own events?
**A:** Click the "Create" button in the sidebar to open the event creation form. Fill in the details and save. Note: events are stored in-memory and will reset on page reload.

### Q: Why are ESLint and TypeScript errors ignored during builds?
**A:** This configuration is set for rapid prototyping. For production, update `next.config.mjs` to enable these checks.

### Q: How do I change the background image?
**A:** Edit the `<img>` tag in `app/page.tsx` and replace the Unsplash URL with your preferred image URL.

### Q: Can I deploy this to platforms other than Vercel?
**A:** Yes. The app can be deployed to any platform that supports Node.js (Netlify, AWS, DigitalOcean, etc.) or static hosting (GitHub Pages with `next export`).

---

## 👤 Author

**Girish Lade**

- 📧 Email: [girishlade111@gmail.com](mailto:girishlade111@gmail.com)
- 🌐 Website: [girishlade.com](https://girishlade.com)
- 💼 Company: Lovy-tech
- 📍 Location: Mumbai, India
- 🐙 GitHub: [@girishlade111](https://github.com/girishlade111)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

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
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Made with ❤️ by [Girish Lade](https://github.com/girishlade111)**

If you found this project helpful, please give it a ⭐ on GitHub!

</div>

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
