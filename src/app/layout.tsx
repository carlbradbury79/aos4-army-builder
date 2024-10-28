"use client";
import ArmyProvider from "@/context/armyContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/app/styles/globalStyles";
import theme from "@/app/styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <ArmyProvider>{children}</ArmyProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
