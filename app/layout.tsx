import type React from "react";
import type { Metadata, Viewport } from "next/types";
import { Inter } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./bootstrap-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emergency A/C | HVAC Doctors around Buda, Texas",
  description:
    "Professional HVAC services in South Austin, Buda, Kyle and surrounding areas. Emergency A/C repair, maintenance, and replacement services.",
  keywords:
    "HVAC, air conditioning, heating, AC repair, emergency AC, Buda, South Austin, Kyle",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Bootstrap CSS directly from CDN */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={inter.className}>
        <BootstrapClient />
        {children}

        {/* Add Bootstrap JS directly from CDN */}
        {/* <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
