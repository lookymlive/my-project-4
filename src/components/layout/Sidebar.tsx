'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Library,
  Bell,
  Clock,
  History,
  Settings,
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '/home' },
  { name: 'My Library', icon: Library, href: '/library' },
  { name: 'Notifications', icon: Bell, href: '/notifications', badge: 6 },
  { name: 'Watch Later', icon: Clock, href: '/watch-later' },
  { name: 'History', icon: History, href: '/history' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-60 border-r border-gray-200 bg-white">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-10 px-4">
          <Link href="/home" className="text-xl font-bold hover:text-[#6C5CE7] transition-colors">
            Loom Clone
          </Link>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-lg px-4 py-2 text-sm ${
                  isActive
                    ? 'bg-[#6C5CE7] text-white'
                    : 'text-[#666666] hover:bg-gray-100'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <span className="ml-2 rounded-full bg-[#6C5CE7] px-2 py-0.5 text-xs text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
} 