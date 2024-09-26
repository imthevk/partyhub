import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "600",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff",
  variable: "--font-satoshi",
  display: "swap",
  weight: "400 700",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PartyHub",
  description: "Explore our partyhub community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${satoshi.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
