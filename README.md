# Hor Tola - Full-Stack Portfolio

Professional, production-grade developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**.

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router, Server Actions, Streaming SSR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Compiled PostCSS, zero CDN)
- **Database & ORM:** PostgreSQL / SQLite with Prisma ORM
- **Notifications:** Telegram Bot Webhook API for instant client inquiry alerts
- **Deployment:** Vercel / Railway / Docker containerized

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default `.env` settings use SQLite (`DATABASE_URL="file:./dev.db"`) for zero-configuration local development.

### 3. Initialize the Database
```bash
npx prisma db push
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📱 Telegram Real-Time Inquiry Alerts (Optional)

To receive real-time notifications on your phone whenever a visitor fills out the contact form:
1. Message **@BotFather** on Telegram to create a bot and copy the **Bot Token**.
2. Message **@userinfobot** or **@myidbot** to get your **Telegram Chat ID**.
3. Add them to `.env`:
   ```env
   TELEGRAM_BOT_TOKEN="your_token_here"
   TELEGRAM_CHAT_ID="your_chat_id_here"
   ```

---

## 🗄️ Database Models (`prisma/schema.prisma`)

- `ContactMessage`: Saves client inquiries with status tracking (`UNREAD`, `READ`, `REPLIED`).
- `ProjectReaction`: Persists real-time likes and applauds per project.
- `SiteVisitor`: Lightweight visitor analytics.

To inspect or edit your database visually:
```bash
npx prisma studio
```

---

## 🚢 Production Deployment

### Option A: Vercel (Recommended)
1. Push this repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Connect a free PostgreSQL database (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or Vercel Postgres) and set `DATABASE_URL`.
4. Deploy!

### Option B: Docker Container
```bash
docker build -t hor-tola-portfolio .
docker run -p 3000:3000 hor-tola-portfolio
```

