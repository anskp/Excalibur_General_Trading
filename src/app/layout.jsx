import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Excalibur General Trading | Trading & Supply Solutions",
  description: "Excalibur General Trading is a dynamic trading company specializing in the wholesale supply of commercial, industrial, automotive, and household products.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-[#F4F4F4] text-[#111827]`}>
        {children}
      </body>
    </html>
  );
}