import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Hor Tola | Full-Stack Software Engineer & Tech Mentor",
  description:
    "Portfolio of Hor Tola - 4th-Year IT Scholar at NUBB & Computer Trainer at FLC Battambang. Specializing in Laravel, Flutter, Next.js, and clean software architecture.",
  keywords: [
    "Hor Tola",
    "Full-Stack Software Engineer",
    "Cambodia Developer",
    "Laravel",
    "Flutter",
    "Next.js",
    "NUBB",
    "AgriTech",
  ],
  authors: [{ name: "Hor Tola", url: "https://github.com/hortola" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='24' fill='%2308090C'/><text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='42' fill='%2300F0FF'>HT.</text></svg>",
  },
  openGraph: {
    title: "Hor Tola | Full-Stack Software Engineer & Tech Mentor",
    description: "Building Clean Systems. Empowering People. Based in Krong Battambang, Cambodia.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-slate-100 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden min-h-screen">
        {/* Subtle Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px]"></div>
          <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 grid-bg opacity-70"></div>
        </div>

        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
