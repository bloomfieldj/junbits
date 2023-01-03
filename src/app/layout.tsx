import "@/app/globals.css";

import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body
        className={`flex h-full flex-col bg-slate-1 text-slate-12 ${inter.variable} dark font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
