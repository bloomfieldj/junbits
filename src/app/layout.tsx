import "server-only";
import SupabaseListener from "@/components/supabase-listener";
import "@/app/globals.css";
import createClient from "@/utils/supabase-server";

import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body
        className={`flex h-full flex-col bg-slate-1 text-slate-12 ${inter.variable} dark font-sans`}
      >
        <SupabaseListener accessToken={session?.access_token} />
        {children}
      </body>
    </html>
  );
}
