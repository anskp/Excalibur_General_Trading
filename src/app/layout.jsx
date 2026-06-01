import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata = {
    title: "Excalibur General Trading | Global Trade Beyond Borders",
    description: "Excalibur General Trading is a premier international trading company specializing in commodity trading, oil & gas, industrial supply, procurement, and logistics solutions across global markets.",
    keywords: [
        "Excalibur",
        "General Trading",
        "International Trade",
        "Commodity Trading",
        "Oil & Gas",
        "Industrial Supply",
        "Procurement",
        "Logistics",
        "Global Trade",
        "Import Export",
    ],
    authors: [{ name: "Excalibur General Trading" }],
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        title: "Excalibur General Trading | Global Trade Beyond Borders",
        description: "A premier international trading company specializing in commodity trading, oil & gas, and industrial supply across global markets.",
        type: "website",
    },
};
export default function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ivory text-charcoal`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>);
}
