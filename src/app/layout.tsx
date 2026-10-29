import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: "Jesseca Gimo — Customer Experience Specialist",
    template: "%s · Jesseca Gimo",
  },
  description:
    "Portfolio of Jesseca C. Gimo, a customer service team leader and customer experience specialist from Davao City, Philippines.",
}

export const viewport: Viewport = {
  themeColor: "#f7f0e8",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
