'use client';

import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed left-60 right-0 top-0 z-30 h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="w-32" /> {/* Spacer */}

        <div className="flex w-full max-w-[600px] items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="rounded-lg bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white hover:bg-[#5A4BD1]">
            New Recording
          </button>
        </div>
      </div>
    </header>
  );
} 