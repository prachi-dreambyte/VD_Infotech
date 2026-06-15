import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "VD Infotech | Your Vision, Our Technology",
  description:
    "VD Infotech - Digital marketing, web development, and IT solutions in Noida.",
  keywords: ["VD Infotech", "Digital Marketing", "Web Development", "IT Solutions", "Noida"],
  authors: [{ name: "VD Infotech" }],
  icons: {
    icon: [
      { url: '/assets/image/logo1.png', type: 'image/png' },
    ],
    shortcut: '/assets/image/logo1.png',
    apple: '/assets/image/logo1.png',
  },
  openGraph: {
    title: "VD Infotech | Your Vision, Our Technology",
    description: "VD Infotech - Digital marketing, web development, and IT solutions in Noida.",
    type: "website",
    images: ['/assets/image/logo1.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "VD Infotech | Your Vision, Our Technology",
    description: "VD Infotech - Digital marketing, web development, and IT solutions in Noida.",
    images: ['/assets/image/logo1.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <div className="site-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
