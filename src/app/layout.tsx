import type { Metadata } from "next";
import { Inter,JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MainContainer } from "@/components/MainContainer.style";
const inter = Inter({ subsets: ["latin"] });
const jet_brains = JetBrains_Mono({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Amalitech Frontend project by YEVOO JUSTICE SELASI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{userSelect:"none"}} lang="en">
      <body className={jet_brains.className} style={{backgroundColor:"var(---primary-color-deep-black)"}}>
          {children}
      </body>
    </html>
  );
}
