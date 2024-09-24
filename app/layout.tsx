import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TreeLawn",
  description: "All You Outdoor Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className}  antialiased min-h-full text-mucky-900 bg-mucky-50`}
      >
        {children}
      </body>
    </html>
  );
}
