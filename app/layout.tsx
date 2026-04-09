import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "המסע שלנו לחופה 💕",
  description: "סופרים לאחור את הימים עד לרגע המיוחד שלנו",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-handwriting text-[#2b1b4b] bg-[#e6f7ff]">{children}</body>
    </html>
  );
}
