import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Niklas-dev | Portfolio",
  description: "This is the portfolio of Niklas-dev, a fullstack developer.",
  keywords: [
    "niklas-dev",
    "fullstack",
    "developer",
    "backend",
    "frontend",
    "engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/og-image.png" />

        <meta property="twitter:image" content="0"/>

        <meta property="og:title" content="Niklas-dev | Portfolio" />

        <meta
          property="og:description"
          content="This is the portfolio of Niklas-dev, a fullstack developer."
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
