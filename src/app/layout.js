import "@/app/globals.css"
import {Providers} from "./providers"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

export const metadata = {
  title: "MalaysianFund",
  description: "A blockchain-powered crowdfunding platform for Malaysian musicians",
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
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
