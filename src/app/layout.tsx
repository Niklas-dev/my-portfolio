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
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
