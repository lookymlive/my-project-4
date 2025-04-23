# Set up the page structure according to the following prompt

page-structure-prompt
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:

- /home
- /my-library
- /meetings-beta
- /notifications
- /watch-later
- /history
- /settings
- /videos
- /archive
- /screenshots

Page Implementations:
/home:
Core Purpose: Main dashboard showing personalized content feed
Key Components

- Featured content carousel
- Recent activity feed
- Quick access shortcuts
- Content recommendations
Layout Structure
- Grid layout with featured content at top
- Two column layout below for feed and sidebar
- Fully responsive with stack on mobile

/my-library:
Core Purpose: Personal content management hub
Key Components

- Content organization tabs
- Search and filter controls
- Content grid

/list view toggle

- Batch actions toolbar
Layout Structure:
- Top navigation bar with tabs
- Filter sidebar (collapsible)
- Main content area with grid

/meetings-beta:
Core Purpose: Video conferencing and meeting management
Key Components

- Meeting scheduler
- Join meeting form
- Meeting history list
- Quick join buttons
Layout Structure
- Split view with calendar and meeting list
- Modal overlays for meeting creation
- Compact mobile view with tabs

/notifications:
Core Purpose: Activity and system notifications center
Key Components

- Notification filters
- Read

/unread toggles

- Notification cards
- Clear all button
Layout Structure:
- Single column scrollable list
- Sticky header with controls
- Bottom loading pagination

/watch-later:
Core Purpose: Saved content queue management
Key Components

- Queue reordering
- Playlist creation
- Watch progress indicators
- Bulk actions
Layout Structure
- Draggable list interface
- Right sidebar for playlist management
- Responsive grid on larger screens

/history:
Core Purpose: View and manage watch history
Key Components

- Timeline view
- Search history
- Clear history options
- Activity filters
Layout Structure
- Chronological list view
- Calendar navigation sidebar
- Compact list on mobile

/settings:
Core Purpose: User preferences and account management
Key Components

- Settings categories
- Profile editor
- Notification preferences
- Privacy controls
Layout Structure
- Two-panel layout with navigation
- Form-based settings panels
- Full-width mobile layout

/videos:
Core Purpose: Video content browser and player
Key Components

- Video grid

/list

- Category filters
- Search functionality
- Video player
Layout Structure:
- Masonry grid layout
- Sidebar filters
- Modal player overlay
- Responsive grid sizing

/archive:
Core Purpose: Access to archived

/older content
Key Components:

- Archive browser
- Date filters
- Restore functions
- Storage usage info
Layout Structure
- Timeline-based layout
- Filter sidebar
- List

/screenshots:
Core Purpose: Screenshot gallery and management
Key Components

- Image grid
- Quick edit tools
- Share options
- Organization tools
Layout Structure
- Masonry image grid
- Lightbox viewer
- Toolbar overlay
- Touch-friendly mobile layout

Layouts:
DefaultLayout:

- Applicable routes: all except /meetings-beta
- Core components
  - Header with navigation
  - Sidebar menu
  - Footer
  - Content area
- Responsive behavior
  - Collapsible sidebar
  - Stack navigation on mobile
  - Fluid content area

MeetingsLayout

- Applicable routes: /meetings-beta
- Core components
  - Minimal header
  - Meeting controls
  - Video grid
- Responsive behavior
  - Optimized for video calls
  - Floating controls on mobile
  - Dynamic video grid sizing

</page-structure-prompt>
