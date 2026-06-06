import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});
const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});
export const metadata = {
    title: "Excalibur General Trading | Trading & Supply Solutions",
    description: "Excalibur General Trading is a dynamic trading company specializing in the wholesale supply of commercial, industrial, automotive, and household products.",
    keywords: [
        "Excalibur",
        "General Trading",
        "Restaurant & Kitchen Equipment Trading",
        "Mechanical Equipment Trading",
        "Home Appliances Trading",
        "Cars Tyres & Accessories Trading",
        "Heavy Vehicles & Equipment Tyres Trading",
        "Abu Dhabi",
        "Musaffah",
    ],
    authors: [{ name: "Excalibur General Trading" }],
    icons: {
        icon: "/images/excalibur-logo-bgremoved-crop-0.png",
    },
    openGraph: {
        title: "Excalibur General Trading | Trading & Supply Solutions",
        description: "Wholesale supply solutions for commercial, industrial, automotive, and household product sectors.",
        type: "website",
    },
};
export default function RootLayout({ children, }) {
    return (<html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-ivory text-charcoal`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>);
}
