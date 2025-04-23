'use client';

import Image from 'next/image';
import {
  Search,
  Filter,
  Calendar,
  RotateCcw,
  Trash2,
} from 'lucide-react';

const archiveItems = [
  {
    month: 'March 2024',
    storage: '2.5 GB',
    items: [
      {
        id: 1,
        title: 'Q1 Review Meeting',
        thumbnail: 'https://picsum.photos/seed/archive1/300/200',
        duration: '1:15:20',
        date: 'Mar 15, 2024',
        size: '850 MB',
      },
      {
        id: 2,
        title: 'Product Launch Preparation',
        thumbnail: 'https://picsum.photos/seed/archive2/300/200',
        duration: '45:30',
        date: 'Mar 10, 2024',
        size: '500 MB',
      },
    ],
  },
  {
    month: 'February 2024',
    storage: '4.2 GB',
    items: [
      {
        id: 3,
        title: 'Team Training Session',
        thumbnail: 'https://picsum.photos/seed/archive3/300/200',
        duration: '2:30:15',
        date: 'Feb 28, 2024',
        size: '1.2 GB',
      },
      {
        id: 4,
        title: 'Client Onboarding Meeting',
        thumbnail: 'https://picsum.photos/seed/archive4/300/200',
        duration: '55:45',
        date: 'Feb 15, 2024',
        size: '600 MB',
      },
    ],
  },
];

export default function ArchivePage() {
  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Archive</h1>
            <p className="text-sm text-[#666666]">Access your archived content</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#666666] hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              <Calendar className="mr-2 h-4 w-4" />
              Select Date
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search archive..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
            />
          </div>
        </div>

        {/* Archive Timeline */}
        <div className="space-y-8">
          {archiveItems.map((group) => (
            <div key={group.month}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{group.month}</h2>
                <span className="text-sm text-[#666666]">
                  Storage used: {group.storage}
                </span>
              </div>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <div className="relative aspect-video w-48">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {item.duration}
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="mt-1 flex items-center text-sm text-[#666666]">
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="rounded-lg border border-[#6C5CE7] p-2 text-[#6C5CE7] hover:bg-[#EEF0FF]">
                          <RotateCcw className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg border border-red-200 p-2 text-red-500 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-64 space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Storage Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-[#666666]">Used Space</span>
                <span className="font-medium">6.7 GB</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-full w-[67%] rounded-full bg-[#6C5CE7]" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#666666]">Total Space</span>
              <span className="font-medium">10 GB</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Archive Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Auto-Archive After
              </label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
                <option>Never</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Storage Limit
              </label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>10 GB</option>
                <option>20 GB</option>
                <option>50 GB</option>
                <option>100 GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 