'use client';

import Image from 'next/image';
import {
  Search,
  Filter,
  Download,
  Share2,
  Trash2,
  Grid,
  LayoutGrid,
  ChevronDown,
} from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: 'Dashboard Overview',
    thumbnail: 'https://picsum.photos/seed/ss1/400/300',
    date: 'Mar 15, 2024',
    size: '2.4 MB',
    dimensions: '1920 x 1080',
  },
  {
    id: 2,
    title: 'Analytics Report',
    thumbnail: 'https://picsum.photos/seed/ss2/400/500',
    date: 'Mar 14, 2024',
    size: '1.8 MB',
    dimensions: '1920 x 1080',
  },
  {
    id: 3,
    title: 'User Flow Diagram',
    thumbnail: 'https://picsum.photos/seed/ss3/400/250',
    date: 'Mar 13, 2024',
    size: '1.2 MB',
    dimensions: '1920 x 1080',
  },
  {
    id: 4,
    title: 'Design System Components',
    thumbnail: 'https://picsum.photos/seed/ss4/400/400',
    date: 'Mar 12, 2024',
    size: '3.1 MB',
    dimensions: '1920 x 1080',
  },
  {
    id: 5,
    title: 'Mobile App Mockup',
    thumbnail: 'https://picsum.photos/seed/ss5/400/600',
    date: 'Mar 11, 2024',
    size: '2.8 MB',
    dimensions: '1920 x 1080',
  },
  {
    id: 6,
    title: 'Website Homepage',
    thumbnail: 'https://picsum.photos/seed/ss6/400/300',
    date: 'Mar 10, 2024',
    size: '2.2 MB',
    dimensions: '1920 x 1080',
  },
];

export default function ScreenshotsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Screenshots</h1>
          <p className="text-sm text-[#666666]">
            Manage your captured screenshots
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#666666] hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
          <div className="flex items-center rounded-lg border border-gray-200">
            <button className="rounded-l-lg border-r border-gray-200 p-2 hover:bg-gray-50">
              <Grid className="h-5 w-5 text-[#6C5CE7]" />
            </button>
            <button className="rounded-r-lg p-2 hover:bg-gray-50">
              <LayoutGrid className="h-5 w-5 text-[#666666]" />
            </button>
          </div>
          <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
            <span className="mr-2">Sort By</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search screenshots..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
          />
        </div>
      </div>

      {/* Screenshot Grid */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className="group relative mb-6 break-inside-avoid rounded-lg border border-gray-200 bg-white"
          >
            <div className="relative">
              <Image
                src={screenshot.thumbnail}
                alt={screenshot.title}
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-center space-x-2">
                  <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-1 font-medium">{screenshot.title}</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#666666]">
                <span>{screenshot.date}</span>
                <span>•</span>
                <span>{screenshot.size}</span>
                <span>•</span>
                <span>{screenshot.dimensions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 