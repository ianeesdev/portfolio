import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Anees Portfolio",
  description: "Portfolio of Muhammad Anees showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick={true}
          transition={Slide}
        />
      </body>
    </html>
  );
}
