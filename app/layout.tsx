import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/provider";
import Footer from "./components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MGM",
  description:
    "MGM Multipurpose Ltd - Resilient Infrastructure for East Africa",
  icons: {
    icon: "/Images/Logo/Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/Images/Logo/circLogo1.png"
          type="image/webp"
          sizes="48x48"
          className="rounded-full"
        />
        <title>MGM</title>
        <meta
          name="description"
          content="MGM Multipurpose Ltd - Resilient Infrastructure for East Africa"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
      >
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
