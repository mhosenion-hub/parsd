import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractionFX from "@/components/InteractionFX";
import FloatingRequest from "@/components/FloatingRequest";

export const metadata: Metadata = {
  title: "پارس دژ | سامانه‌های امنیتی و زیرساخت شبکه",
  description: "طراحی، اجرا و پشتیبانی سیستم‌های اعلام سرقت، اعلام حریق، دوربین مداربسته، VoIP و شبکه.",
  icons: {
    icon: [
      {
        url: "/pars-dej-logo-tile.png",
        type: "image/png",
      },
    ],
    shortcut: ["/pars-dej-logo-tile.png"],
    apple: ["/pars-dej-logo-tile.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        />
      </head>
      <body>
        <InteractionFX />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingRequest />
      </body>
    </html>
  );
}
