'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">TuneFund</Link>
      </div>

      <div className="space-x-4 flex items-center">
        <Link href="/campaign" className="text-gray-700 hover:text-blue-600 font-medium">
          Campaigns
        </Link>
        <Link href="/posts" className="text-gray-700 hover:text-blue-600 font-medium">
          Posts
        </Link>
        <Link href="/store" className="text-gray-700 hover:text-blue-600 font-medium">
          Store
        </Link>
        <ConnectButton />
      </div>
    </nav>
  );
}