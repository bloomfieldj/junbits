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
        className={`flex h-full flex-col bg-sage-1 text-sage-12 ${inter.variable} dark font-sans`}
      >
        <SupabaseListener accessToken={session?.access_token} />
        <section className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
          {children}
        </section>
      </body>
    </html>
  );
}
