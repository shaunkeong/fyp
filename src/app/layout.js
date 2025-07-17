import "@/app/globals.css"
import {Providers} from "./providers"
import Navbar from "./components/navbar"
import Link from "next/link" // Import Link for the footer

export const metadata = {
  title: "TuneFund",
  description: "A Web3 music funding platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-cyber-gray min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 flex-1 pt-16">
            {children}
          </main>

          {/* Global Footer moved here */}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-cyber-blue/10 bg-dark-bg text-cyber-gray">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TuneFund. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4 text-cyber-gray hover:text-neon-green transition-colors"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4 text-cyber-gray hover:text-neon-green transition-colors"
                prefetch={false}
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
