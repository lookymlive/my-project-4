'use client';

import Image from 'next/image';
import { GripVertical, Play, Plus, MoreVertical } from 'lucide-react';

const watchLaterVideos = [
  {
    id: 1,
    title: 'Getting Started with Screen Recording',
    thumbnail: 'https://picsum.photos/seed/watch1/300/200',
    duration: '15:30',
    progress: 0,
    addedDate: '2 days ago',
  },
  {
    id: 2,
    title: 'Advanced Video Editing Techniques',
    thumbnail: 'https://picsum.photos/seed/watch2/300/200',
    duration: '23:45',
    progress: 35,
    addedDate: '3 days ago',
  },
  {
    id: 3,
    title: 'Team Collaboration Best Practices',
    thumbnail: 'https://picsum.photos/seed/watch3/300/200',
    duration: '18:20',
    progress: 75,
    addedDate: '1 week ago',
  },
];

const playlists = [
  { id: 1, name: 'Tutorial Videos', count: 12 },
  { id: 2, name: 'Meeting Recordings', count: 8 },
  { id: 3, name: 'Product Demos', count: 5 },
];

export default function WatchLaterPage() {
  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Watch Later</h1>
            <p className="text-sm text-[#666666]">
              {watchLaterVideos.length} videos in your queue
            </p>
          </div>
          <button className="flex items-center rounded-lg bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white hover:bg-[#5A4BD1]">
            <Play className="mr-2 h-4 w-4" />
            Play All
          </button>
        </div>

        {/* Video Queue */}
        <div className="space-y-4">
          {watchLaterVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4"
            >
              <button className="cursor-move text-gray-400 hover:text-gray-600">
                <GripVertical className="h-5 w-5" />
              </button>
              <div className="relative aspect-video w-48">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {video.duration}
                </div>
                {video.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div
                      className="h-full bg-[#6C5CE7]"
                      style={{ width: `${video.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{video.title}</h3>
                <p className="mt-1 text-sm text-[#666666]">
                  Added {video.addedDate}
                </p>
              </div>
              <button className="text-[#666666] hover:text-[#333333]">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Playlists</h2>
            <button className="text-[#6C5CE7] hover:text-[#5A4BD1]">
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-gray-50"
              >
                <span className="text-sm font-medium">{playlist.name}</span>
                <span className="text-xs text-[#666666]">
                  {playlist.count} videos
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Watch Time</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">Today</span>
              <span className="font-medium">2h 15m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">This Week</span>
              <span className="font-medium">8h 45m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#666666]">This Month</span>
              <span className="font-medium">24h 30m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 