import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/src/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nersans = localFont({
  src: "../../public/fonts/Nersans Three Regular/Nersans Three Regular.otf",
  variable: "--font-baloo-2",
  display: "swap",
});

const amsiProCond = localFont({
  src: "../../public/fonts/amsiprocond-regular.ttf",
  variable: "--font-amsiprocond",
  display: "swap",
});

const casualHuman = localFont({
  src: "../../public/fonts/Casual Human Font/CasualHuman.otf",
  variable: "--font-casual",
  display: "swap",
});

const domeaScrawl = localFont({
  src: "../../public/fonts/domeascrawl-regular.otf",
  variable: "--font-domea-scrawl",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CicloTrilhas Floripa",
  description:
    "Movimento pela conservação de trilhas e legitimação do ciclismo de montanha na grande Florianópolis",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nersans.variable} ${caveat.variable} ${amsiProCond.variable} ${casualHuman.variable} ${domeaScrawl.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
