import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IntelliDraft",
  description:
    "Conveys intelligent text editing and drafting, perfect for a collaborative platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} antialiased`}>
          <Header />

          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
