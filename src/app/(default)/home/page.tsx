'use client';

import Image from 'next/image';
import { Clock, Link as LinkIcon, ExternalLink } from 'lucide-react';

const gettingStartedVideos = [
  {
    title: 'Loom for introductions',
    duration: '2 min',
    thumbnail: 'https://picsum.photos/seed/loom-intro/800/450',
  },
  {
    title: 'Replacing a meeting with Loom',
    duration: '4 min',
    thumbnail: 'https://picsum.photos/seed/loom-meeting/800/450',
  },
  {
    title: 'How to give feedback with Loom',
    duration: '4 min',
    thumbnail: 'https://picsum.photos/seed/loom-feedback/800/450',
  },
  {
    title: 'Recording a presentation with Loom',
    duration: '4 min',
    thumbnail: 'https://picsum.photos/seed/loom-presentation/800/450',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Team Collaboration Section */}
      <div className="relative rounded-lg bg-white p-8">
        <div className="flex items-start justify-between">
          <div className="max-w-lg">
            <h1 className="mb-4 text-2xl font-bold">Work&apos;s always better together</h1>
            <p className="mb-6 text-gray-600">
              Add teammates and you&apos;ll be able to collaborate and quickly get a sense of what&apos;s happening at work.
            </p>
            <button className="rounded-lg bg-[#6C5CE7] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#5A4BD1]">
              Send an invite
            </button>
          </div>
          <div className="relative h-48 w-64">
            <Image
              src="https://picsum.photos/seed/loom-team/800/600"
              alt="Team collaboration illustration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div>
        <h2 className="mb-6 text-xl font-semibold">Getting Started</h2>
        <div className="grid grid-cols-2 gap-6">
          {gettingStartedVideos.map((video) => (
            <div
              key={video.title}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="rounded-full bg-white/90 p-2 hover:bg-white">
                      <LinkIcon className="h-5 w-5 text-gray-800" />
                    </button>
                    <button className="rounded-full bg-white/90 p-2 hover:bg-white">
                      <ExternalLink className="h-5 w-5 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    {video.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 