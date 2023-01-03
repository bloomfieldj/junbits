import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full scroll-smooth antialiased">
      <Head />
      <body className="flex h-full flex-col bg-slate-1 text-slate-12">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
