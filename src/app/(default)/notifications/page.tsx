'use client';

import { Bell, Check, Trash2, Filter } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'mention',
    title: 'You were mentioned in a comment',
    message: '@johndoe mentioned you in "Product Demo Video"',
    time: '2 minutes ago',
    unread: true,
  },
  {
    id: 2,
    type: 'share',
    title: 'Video shared with you',
    message: 'Sarah shared "Team Meeting Recording" with you',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    type: 'system',
    title: 'Recording completed',
    message: 'Your screen recording has been processed and is ready to view',
    time: '2 hours ago',
    unread: false,
  },
  {
    id: 4,
    type: 'comment',
    title: 'New comment on your video',
    message: 'Mike left a comment on "Client Presentation"',
    time: 'Yesterday',
    unread: false,
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-[#666666]">
            Stay updated with your video activity
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-[#666666] hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center rounded-lg bg-[#6C5CE7] px-4 py-2 text-sm font-medium text-white hover:bg-[#5A4BD1]">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`relative rounded-lg border border-gray-200 bg-white p-4 ${
              notification.unread ? 'bg-[#EEF0FF]' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div
                  className={`rounded-full p-2 ${
                    notification.unread
                      ? 'bg-[#6C5CE7] text-white'
                      : 'bg-gray-100 text-[#666666]'
                  }`}
                >
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="mt-1 text-sm text-[#666666]">
                    {notification.message}
                  </p>
                  <span className="mt-2 text-xs text-[#666666]">
                    {notification.time}
                  </span>
                </div>
              </div>
              <button className="text-[#666666] hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            {notification.unread && (
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[#6C5CE7]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 