import type { Metadata } from "next";
import { Geist, Geist_Mono, Mulish, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "variable",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased overflow-none bg-background",
          roboto.variable,
          mulish.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}
