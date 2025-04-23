'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  views: number;
  date: string;
}

const formatViews = (views: number) => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
};

const demoVideos: Video[] = Array.from({ length: 6 }, (_, i) => ({
  id: `video-${i + 1}`,
  title: `Video Recording ${i + 1}`,
  duration: '12:34',
  thumbnail: `https://picsum.photos/seed/${i + 1}/300/200`,
  views: Math.floor(Math.random() * 1000000),
  date: '2 days ago',
}));

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {demoVideos.map((video) => (
        <div
          key={video.id}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
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
            <h3 className="mb-1 text-sm font-medium text-[#333333] line-clamp-2">
              {video.title}
            </h3>
            <div className="flex items-center text-xs text-[#666666]">
              <span>{formatViews(video.views)}</span>
              <span className="mx-1">•</span>
              <span>{video.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 