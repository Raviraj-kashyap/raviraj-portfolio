import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raviraj Narayan | React Native Developer & Mobile App Engineer",
  description:
    "Portfolio of Raviraj Narayan - React Native Developer with 3+ years experience. Building scalable mobile apps in government, healthcare, sales, and travel domains. Based in Noida, India.",
  keywords: [
    "Raviraj Narayan",
    "React Native Developer",
    "Mobile App Engineer",
    "Noida",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Mobile Development",
  ],
  authors: [{ name: "Raviraj Narayan", url: "https://www.linkedin.com/in/raviraj-narayan-746004217" }],
  openGraph: {
    title: "Raviraj Narayan | React Native Developer",
    description: "3+ years building scalable mobile applications. React Native, TypeScript, Firebase.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
