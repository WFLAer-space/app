import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Nav } from "@/components/layout/nav";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A modern Next.js application with dark mode support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 flex h-14 items-center">
                <div className="mr-4 flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">Next.js</span>
                  </Link>
                  <Nav />
                </div>
                <div className="flex flex-1 items-center justify-end">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="container mx-auto px-4 py-6">
              {children}
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built with Next.js 15.1.0 and Tailwind CSS.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
