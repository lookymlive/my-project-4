'use client';

import Image from 'next/image';
import { Calendar, Clock, Filter, Search, Trash2 } from 'lucide-react';

const historyItems = [
  {
    date: 'Today',
    items: [
      {
        id: 1,
        title: 'Team Standup Meeting',
        thumbnail: 'https://picsum.photos/seed/history1/300/200',
        duration: '45:20',
        watchedAt: '2 hours ago',
        progress: 100,
      },
      {
        id: 2,
        title: 'Product Demo Recording',
        thumbnail: 'https://picsum.photos/seed/history2/300/200',
        duration: '15:45',
        watchedAt: '4 hours ago',
        progress: 80,
      },
    ],
  },
  {
    date: 'Yesterday',
    items: [
      {
        id: 3,
        title: 'Client Meeting Highlights',
        thumbnail: 'https://picsum.photos/seed/history3/300/200',
        duration: '32:15',
        watchedAt: '1 day ago',
        progress: 100,
      },
    ],
  },
  {
    date: 'Last Week',
    items: [
      {
        id: 4,
        title: 'Project Review Session',
        thumbnail: 'https://picsum.photos/seed/history4/300/200',
        duration: '28:30',
        watchedAt: '5 days ago',
        progress: 65,
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Watch History</h1>
            <p className="text-sm text-[#666666]">Your recently watched videos</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#666666] hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear History
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search history..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {historyItems.map((group) => (
            <div key={group.date}>
              <h2 className="mb-4 text-lg font-semibold">{group.date}</h2>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 rounded-lg border border-gray-200 bg-white p-4"
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
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                        <div
                          className="h-full bg-[#6C5CE7]"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#666666]">
                          Watched {item.watchedAt}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-[#666666]">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{item.progress}% watched</span>
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
          <h2 className="mb-4 text-lg font-semibold">Calendar</h2>
          <div className="flex items-center justify-center rounded-lg border border-gray-200 p-4">
            <Calendar className="h-6 w-6 text-[#6C5CE7]" />
            <span className="ml-2 text-sm">Calendar View Coming Soon</span>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Activity Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">Videos Watched</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">Total Watch Time</span>
              <span className="font-medium">12h 45m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">Average Duration</span>
              <span className="font-medium">32m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 