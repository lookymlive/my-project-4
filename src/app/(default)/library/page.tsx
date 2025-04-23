'use client';

import { Calendar } from 'lucide-react';
import VideoGrid from '@/components/layout/VideoGrid';

export default function LibraryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-6 text-2xl font-bold">My Library</h1>
        <div className="mb-8 rounded-lg border border-[#EEF0FF] bg-white p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-lg font-semibold">
                Record your meetings automatically
              </h2>
              <p className="mb-4 text-sm text-[#666666]">
                Connect your calendar to automatically record all your meetings.
              </p>
              <div className="flex space-x-4">
                <button className="inline-flex items-center rounded-lg bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white hover:bg-[#5A4BD1]">
                  <Calendar className="mr-2 h-4 w-4" />
                  Connect Google Calendar
                </button>
                <button className="inline-flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#666666] hover:bg-gray-50">
                  <Calendar className="mr-2 h-4 w-4" />
                  Connect Microsoft Calendar
                </button>
              </div>
            </div>
            <div className="text-sm text-[#666666]">326 videos</div>
          </div>
        </div>
      </div>

      <section>
        <h2 className="mb-6 text-lg font-semibold">Videos</h2>
        <VideoGrid />
      </section>
    </div>
  );
} 