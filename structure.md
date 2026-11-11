portfolio/
├── app/
│   ├── actions/
│   │   ├── contact.ts       # Server Action: validates input, saves to DB & sends Telegram alert
│   │   └── likes.ts         # Server Action: persistent project like/reaction counter
│   ├── api/
│   │   └── github/route.ts  # Cached live GitHub repos & profile API
│   ├── globals.css          # PostCSS compiled Tailwind + custom glassmorphism & neon styles
│   ├── layout.tsx           # SEO metadata, OpenGraph tags, responsive viewports & Toast context
│   └── page.tsx             # Root server component orchestrating all sections
├── components/
│   ├── Navbar.tsx           # Interactive nav + confetti celebration
│   ├── HeroSection.tsx      # Core introduction, micro-stats, copy-to-clipboard utilities
│   ├── TerminalSection.tsx  # Interactive dev console with command runner
│   ├── BentoGrid.tsx        # Modern tech stack & achievement bento highlights
│   ├── ProjectsSection.tsx  # Dynamic category filtering, persistent likes, & detail modals
│   ├── ProjectModal.tsx     # Popup modal with overlay dismiss
│   ├── MilestonesSection.tsx# Educational & career growth timeline
│   ├── ContactSection.tsx   # React useTransition form linked to DB & Telegram Webhook
│   ├── ToastProvider.tsx    # Context-driven non-blocking alert toasts
│   └── Footer.tsx           # Minimalistic architectural footer
├── lib/
│   ├── prisma.ts            # Global singleton Prisma Client instance
│   ├── telegram.ts          # Instant Telegram Bot notification webhook
│   └── github.ts            # GitHub public API client with 1-hour ISR cache
├── prisma/
│   ├── schema.prisma        # Database schema (ContactMessage, ProjectReaction, SiteVisitor)
│   └── dev.db               # Local zero-config SQLite database
├── Dockerfile               # Multi-stage production container build
├── README.md                # Full setup & deployment documentation
├── tailwind.config.ts       # Compiled Tailwind configuration
└── .env                     # Local environment configuration