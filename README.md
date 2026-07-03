# Calendar App

A modern, glassmorphism-styled calendar application built with Next.js and Tailwind CSS. Features an AI assistant popup, weekly view with event management, and a sleek mountain landscape background.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) components
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** pnpm

## Features

- **Weekly Calendar View** — Displays a full week with time slots from 8 AM to 4 PM
- **Event Management** — Click events to view details (time, location, attendees, description)
- **Mini Calendar** — Sidebar mini calendar with month navigation
- **Multiple Calendars** — Supports multiple calendar categories (My Calendar, Work, Personal, Family)
- **AI Assistant Popup** — Smart AI suggestions with typing animation
- **Glassmorphism UI** — Frosted glass aesthetic with backdrop blur and translucent surfaces
- **Responsive Navigation** — Header with search, settings, and user avatar
- **Day/Week/Month Views** — Toggle between different calendar perspectives
- **Smooth Animations** — Fade-in transitions and hover effects

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
calendar-app/
├── app/
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   ├── loading.tsx        # Loading state component
│   └── page.tsx           # Main calendar page
├── components/
│   └── theme-provider.tsx # Theme provider component
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Additional styles
├── tailwind.config.js     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Any push to the repository will trigger an automatic deployment.

## License

MIT