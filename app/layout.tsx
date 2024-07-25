import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../utils/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Hobby project to experiment with infinite scrolling",
};

export default function RootLayout({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReactQueryDevtools />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
