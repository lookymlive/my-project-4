# Initialize Next.js in current directory

```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):

```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):

```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt and use the attached image as reference (./copycoder-prompts/loom.png):
 frontend-prompt

Create detailed components with these requirements:

1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:

- Use @/ path aliases
- Keep component imports organized
- Update current src/app/page.tsx with new comprehensive code
- Don't forget root route (page.tsx) handling
- You MUST complete the entire prompt before stopping

<summary_title>
Video Library Management Dashboard with Meeting Recording Integration
</summary_title>

<image_analysis>

1. Navigation Elements:

- Left sidebar with: Home, My Library, Meetings (Beta), Notifications, Watch Later, History, Settings
- Top navigation with: Videos, Archive, Screenshots
- Spaces section with Browse and workspace options

2.Layout Components:

- Left sidebar: 240px width, full height
- Main content area: Fluid width
- Header: 64px height
- Search bar: ~600px width centered
- Content cards: Grid layout with 300px width per card

3.Content Sections:

- My Library header with Videos title
- Meeting recording promotion section
- Folders section with folder cards
- Videos grid section with video thumbnails
- Video count indicator (326 videos)

4.Interactive Controls:

- Search bar with icon
- "New folder" and "New video" buttons
- Connect calendar buttons (Google, Microsoft)
- Video thumbnail cards with duration indicators
- Notification badge (6)

5.Colors:

- Primary Purple: #6C5CE7
- White Background: #FFFFFF
- Light Purple (Beta tag): #EEF0FF
- Text Dark: #333333
- Text Light: #666666

6.Grid/Layout Structure:

- 3-column video grid
- 24px gap between grid items
- 16px padding for content sections
- Responsive breakpoints at 768px, 1024px, 1440px
</image_analysis>

<development_planning>

1. Project Structure:

```pwsh
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── Header
│   │   └── VideoGrid
│   ├── features/
│   │   ├── VideoPlayer
│   │   ├── MeetingRecorder
│   │   └── FolderManager
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```

2.Key Features:

- Video recording and upload
- Calendar integration
- Folder management
- Search functionality
- Video playback
- Meeting recording

3.State Management:

```typescript
interface AppState {
├── videos: {
│   ├── items: Video[]
│   ├── loading: boolean
│   ├── filters: FilterOptions
│   └── selectedFolder: string
├── folders: {
│   ├── items: Folder[]
│   ├── loading: boolean
│   └── active: string
├── user: {
│   ├── preferences: UserPreferences
│   └── notifications: Notification[]
└── }
}
```

4.Routes:

```typescript
const routes = [
├── '/dashboard',
├── '/library/*',
├── '/meetings/*',
├── '/folders/:id',
└── '/settings/*'
]
```

5.Component Architecture:

- VideoLibrary (container)
- FolderGrid (presentation)
- VideoGrid (presentation)
- SearchBar (shared)
- NavigationMenu (shared)

6.Responsive Breakpoints:

```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);
```

</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.
