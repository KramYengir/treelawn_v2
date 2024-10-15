import type { Metadata } from "next";
import { Saira, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";

const saira = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "TreeLawn - Expert Tree Care & Landscaping Services in Offaly and Beyond",
  description:
    "With over 20 years of experience, TreeLawn offers professional tree maintenance, garden renovations, and landscaping services across Offaly and surrounding counties. Trust Martin, a dedicated solo operator, for expert care and exceptional results in every project. Contact us for a personalized consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* social media */}
      <meta
        name="keywords"
        content="Tree care, Landscaping, Garden renovation, Tree maintenance, Pruning, Landscaping Offaly, Arborist Offaly, Pathway clearing, TreeLawn, Outdoor services"
      />
      <meta
        property="og:title"
        content="TreeLawn - Expert Tree Care & Landscaping Services in Offaly and Beyond"
      />
      <meta
        property="og:description"
        content="With over 20 years of experience, TreeLawn offers professional tree maintenance, garden renovations, and landscaping services across Offaly and surrounding counties."
      />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://treelawn.ie" />
      <meta property="og:type" content="website" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="TreeLawn - Expert Tree Care & Landscaping Services in Offaly and Beyond"
      />
      <meta
        name="twitter:description"
        content="With over 20 years of experience, TreeLawn offers professional tree maintenance, garden renovations, and landscaping services."
      />
      <meta name="twitter:image" content="/images/og-image.jpg" />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${saira.className}  antialiased min-h-full text-mucky-900 bg-mucky-50`}
      >
        {children}
      </body>
    </html>
  );
}
