import type { Metadata } from "next";
import { poppins } from "@/styles/fonts";
import "@/styles/globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section className="relative overflow-auto">
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
