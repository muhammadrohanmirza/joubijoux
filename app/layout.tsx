import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/main_component/header";
import Footer from "./components/main_component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joubijoux",
  description: "Created by Muhammad Rohan Mirza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
