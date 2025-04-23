'use client';

import Image from 'next/image';
import {
  User,
  Bell,
  Lock,
  Monitor,
  HardDrive,
  Globe,
  Camera,
  Mic,
  Upload,
} from 'lucide-react';

const settingsSections = [
  { id: 'profile', icon: User, label: 'Profile' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'privacy', icon: Lock, label: 'Privacy' },
  { id: 'recording', icon: Monitor, label: 'Recording' },
  { id: 'storage', icon: HardDrive, label: 'Storage' },
  { id: 'language', icon: Globe, label: 'Language' },
];

export default function SettingsPage() {
  return (
    <div className="flex gap-8">
      {/* Navigation Sidebar */}
      <div className="w-64 shrink-0">
        <h2 className="mb-4 text-lg font-semibold">Settings</h2>
        <nav className="space-y-1">
          {settingsSections.map((section) => (
            <button
              key={section.id}
              className="flex w-full items-center rounded-lg px-4 py-2 text-sm hover:bg-gray-100 data-[active=true]:bg-[#EEF0FF] data-[active=true]:text-[#6C5CE7]"
              data-active={section.id === 'profile'}
            >
              <section.icon className="mr-3 h-5 w-5" />
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h1 className="mb-6 text-xl font-semibold">Profile Settings</h1>

          {/* Profile Section */}
          <div className="mb-8">
            <div className="mb-6 flex items-center space-x-4">
              <div className="relative h-20 w-20">
                <Image
                  src="https://picsum.photos/seed/user/200"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 rounded-full bg-[#6C5CE7] p-2 text-white hover:bg-[#5A4BD1]">
                  <Upload className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="font-medium">Profile Photo</h3>
                <p className="text-sm text-[#666666]">
                  Upload a new profile photo
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="timezone"
                  className="mb-1 block text-sm font-medium"
                >
                  Timezone
                </label>
                <select
                  id="timezone"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:border-[#6C5CE7] focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]"
                >
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Recording Preferences */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Recording Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <Camera className="h-5 w-5 text-[#666666]" />
                  <div>
                    <h3 className="font-medium">Camera</h3>
                    <p className="text-sm text-[#666666]">
                      Default camera for recordings
                    </p>
                  </div>
                </div>
                <select className="rounded-lg border border-gray-200 p-2 text-sm">
                  <option>Built-in Webcam</option>
                  <option>External Camera</option>
                </select>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <Mic className="h-5 w-5 text-[#666666]" />
                  <div>
                    <h3 className="font-medium">Microphone</h3>
                    <p className="text-sm text-[#666666]">
                      Default microphone for recordings
                    </p>
                  </div>
                </div>
                <select className="rounded-lg border border-gray-200 p-2 text-sm">
                  <option>Built-in Microphone</option>
                  <option>External Microphone</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="rounded-lg bg-[#6C5CE7] px-6 py-2 text-sm font-medium text-white hover:bg-[#5A4BD1]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 