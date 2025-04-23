'use client';

import Header from './Header';
import Sidebar from './Sidebar';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="pl-60">
        <Header />
        <main className="mt-16 min-h-[calc(100vh-4rem)] p-6">
          {children}
        </main>
        <footer className="border-t border-gray-200 p-6 text-center text-sm text-[#666666]">
          <p>© 2024 Loom. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
} 