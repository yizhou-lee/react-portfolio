import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yeezo Portfolio",
  description: "Created by Yeezo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-800">
        <Navbar />
        <div className="px-10 md:px-20 lg:px-40">{children}</div>
      </body>
    </html>
  );
}
