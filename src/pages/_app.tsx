// import "focus-visible";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <ThemeProvider attribute="class" enableSystem>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </SessionContextProvider>
    </ThemeProvider>
  );
}
