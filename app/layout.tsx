import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import { epilogue } from "./fonts"
import Attribution from "./components/attribution"

export const metadata: Metadata = {
  title: "Suite Landing Page",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${epilogue.className} relative flex min-h-screen flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
        <Attribution />
      </body>
    </html>
  )
}
