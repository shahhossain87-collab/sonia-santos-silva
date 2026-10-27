"use client";

import { ConsentProvider } from "@/components/consent";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      forcedTheme="light"
    >
      <ConsentProvider>{children}</ConsentProvider>
    </ThemeProvider>
  );
}
