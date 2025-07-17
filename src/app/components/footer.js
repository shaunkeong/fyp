export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} TuneFund. All rights reserved.</p>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

