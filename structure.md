# Project Structure: Hor Tola Full-Stack Portfolio

```
portfolio/
├── app/
│   ├── actions/
│   │   ├── contact.ts              # Server Action: validates input, saves to DB & sends Telegram alert
│   │   └── likes.ts                # Server Action: persistent project like/reaction counter
│   ├── admin/
│   │   ├── AdminMessageList.tsx    # Client Component: interactive inquiry status & delete controls
│   │   └── page.tsx                # Server Component: protected admin dashboard for client leads
│   ├── api/
│   │   └── github/route.ts         # Cached live GitHub repos & profile API
│   ├── globals.css                 # PostCSS compiled Tailwind + custom glassmorphism & neon styles
│   ├── layout.tsx                  # SEO metadata, OpenGraph tags, responsive viewports & Toast context
│   ├── page.tsx                    # Root server component orchestrating all sections
│   ├── robots.ts                   # Search engine crawler indexing configuration
│   └── sitemap.ts                  # Dynamic XML sitemap generator
├── components/
│   ├── Navbar.tsx                  # Interactive nav, sound toggle, mobile drawer & celebration
│   ├── HeroSection.tsx             # Core introduction, micro-stats, copy-to-clipboard utilities
│   ├── ProfilePhoto.tsx            # Cyberpunk glowing photo frame with fallback handling
│   ├── SkillsMatrix.tsx            # Interactive skills arsenal with category tabs & progress bars
│   ├── BentoGrid.tsx               # Modern tech stack & achievement bento highlights
│   ├── ProjectsSection.tsx         # Dynamic category filtering, persistent likes, & detail modals
│   ├── ProjectModal.tsx            # Popup modal with overlay dismiss
│   ├── TerminalSection.tsx         # Interactive dev console with command runner
│   ├── GitHubShowcase.tsx          # Live open source repository synchronization & stats
│   ├── MilestonesSection.tsx       # Educational & career growth timeline
│   ├── TestimonialsSection.tsx     # Verified recommendations from NUBB mentors & FLC leadership
│   ├── ResumeModal.tsx             # Complete CV preview modal with print & PDF download options
│   ├── ContactSection.tsx          # React useTransition form linked to DB & Telegram Webhook
│   ├── ToastProvider.tsx           # Context-driven non-blocking alert toasts
│   └── Footer.tsx                  # Minimalistic architectural footer with admin portal link
├── lib/
│   ├── prisma.ts                   # Global singleton Prisma Client instance
│   ├── telegram.ts                 # Instant Telegram Bot notification webhook
│   ├── sound.ts                    # Zero-dependency Web Audio synthesizer for UI sound effects
│   └── github.ts                   # GitHub public API client with 1-hour ISR cache
├── prisma/
│   ├── schema.prisma               # Database schema (ContactMessage, ProjectReaction, SiteVisitor)
│   └── dev.db                      # Local zero-config SQLite database
├── public/
│   └── images/
│       └── profile-placeholder.svg # High-tech avatar fallback until user drops profile.jpg
├── Dockerfile                      # Multi-stage production container build
├── README.md                       # Full setup & deployment documentation
├── tailwind.config.ts              # Compiled Tailwind configuration
├── next.config.mjs                 # Next.js optimization configuration
├── tsconfig.json                   # Strict TypeScript compiler options
└── .env                            # Local environment configuration
```
