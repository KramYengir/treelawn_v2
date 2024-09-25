import type { Metadata } from "next";
import { Inter, Poppins, Saira } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
        className={`${saira.className}  antialiased min-h-full text-mucky-900 bg-mucky-50`}
      >
        {children}
      </body>
    </html>
  );
}
