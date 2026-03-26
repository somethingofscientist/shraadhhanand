import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Shraadhhanand - React Native | Software Engineer",
  description: "Shraadhhanand : React Native | Software Engineer | Open Source Enthusiast | Tech Blogger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
