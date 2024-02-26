import "./globals.css"
import type { Metadata } from "next"
import { inter } from "./fonts"

export const metadata: Metadata = {
  title: "Clarity",
  description: "A simple blog created as an educational project where AI models might write from time to time.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
