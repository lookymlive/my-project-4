'use client';

import Image from 'next/image';
import {
  Search,
  Grid,
  List,
  ChevronDown,
  Play,
  MoreVertical,
} from 'lucide-react';

const categories = [
  'All Videos',
  'Recent',
  'Meeting Recordings',
  'Screen Recordings',
  'Webcam',
];

const videos = [
  {
    id: 1,
    title: 'Team Standup Meeting',
    thumbnail: 'https://picsum.photos/seed/video1/300/200',
    duration: '45:20',
    views: 128,
    date: '2 days ago',
    category: 'Meeting Recordings',
  },
  {
    id: 2,
    title: 'Product Demo Walkthrough',
    thumbnail: 'https://picsum.photos/seed/video2/300/200',
    duration: '15:45',
    views: 256,
    date: '3 days ago',
    category: 'Screen Recordings',
  },
  {
    id: 3,
    title: 'Client Presentation Review',
    thumbnail: 'https://picsum.photos/seed/video3/300/200',
    duration: '32:15',
    views: 64,
    date: '1 week ago',
    category: 'Meeting Recordings',
  },
  {
    id: 4,
    title: 'Bug Report Recording',
    thumbnail: 'https://picsum.photos/seed/video4/300/200',
    duration: '08:30',
    views: 32,
    date: '1 week ago',
    category: 'Screen Recordings',
  },
  {
    id: 5,
    title: 'Weekly Team Update',
    thumbnail: 'https://picsum.photos/seed/video5/300/200',
    duration: '25:15',
    views: 96,
    date: '2 weeks ago',
    category: 'Webcam',
  },
  {
    id: 6,
    title: 'Feature Demo Recording',
    thumbnail: 'https://picsum.photos/seed/video6/300/200',
    duration: '12:45',
    views: 48,
    date: '2 weeks ago',
    category: 'Screen Recordings',
  },
];

export default function VideosPage() {
  return (
    <div className="flex gap-8">
      {/* Sidebar Filters */}
      <div className="w-64 shrink-0 space-y-6">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-gray-100 data-[active=true]:bg-[#EEF0FF] data-[active=true]:text-[#6C5CE7]"
                data-active={category === 'All Videos'}
              >
                {category}
                <span className="text-xs text-[#666666]">
                  {category === 'All Videos' ? '24' : ''}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Date</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>All Time</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Duration</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Any Length</option>
                <option>Under 5 minutes</option>
                <option>5-20 minutes</option>
                <option>Over 20 minutes</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full max-w-md rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-lg border border-gray-200">
              <button className="rounded-l-lg border-r border-gray-200 p-2 hover:bg-gray-50">
                <Grid className="h-5 w-5 text-[#6C5CE7]" />
              </button>
              <button className="rounded-r-lg p-2 hover:bg-gray-50">
                <List className="h-5 w-5 text-[#666666]" />
              </button>
            </div>
            <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
              <span className="mr-2">Sort By</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="flex-1 text-sm font-medium line-clamp-2">
                    {video.title}
                  </h3>
                  <button className="ml-2 text-[#666666] hover:text-[#333333]">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center text-xs text-[#666666]">
                  <span>{video.views} views</span>
                  <span className="mx-1">•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 