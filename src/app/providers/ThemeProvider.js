"use client"; // This ensures it's a Client Component

import { ThemeProvider } from "@material-tailwind/react";

export function ThemeProviderWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ThemeProviderWrapper;
