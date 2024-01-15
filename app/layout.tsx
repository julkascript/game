import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/navigation";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./ui/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game",
  description: "Game game game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navigation />
          <div className="p-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
