# Bare & Be Podcast Website

A modern, elegant podcast website built with React, TypeScript, and Vite. Features a sophisticated design with smooth animations, RSS feed integration, and a comprehensive admin dashboard for content management.

## ✨ Features

### 🎨 Modern Design
- **Premium Aesthetics**: Sophisticated dark theme with gold accents (#FFC83D)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Interactive Elements**: Grayscale-to-color hover effects, smooth transitions, and engaging UI components

### 🎧 Podcast Features
- **RSS Feed Integration**: Automatic episode fetching from Spotify RSS feeds
- **Audio Player**: Custom-built audio player with playback controls
- **Episode Grid**: Beautiful episode showcase with cover images and metadata
- **Featured Episodes**: Highlight your best content on the homepage

### 📝 Content Management
- **Articles System**: Curated blog posts and literature with rich content display
- **Article Detail Modal**: Immersive reading experience with full-screen modals
- **Newsletter Integration**: Email subscription functionality
- **Admin Dashboard**: Complete content management system for episodes and articles

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing for seamless navigation
- **RSS Parser**: Custom XML parser for podcast feeds
- **Image Optimization**: Fallback system for reliable image loading
- **Local Storage**: Persistent article and episode data management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bestweb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 📁 Project Structure

```
bestweb/
├── src/
│   ├── admin/              # Admin dashboard components
│   │   ├── Dashboard.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── ArticleManager.tsx
│   │   └── EpisodeManager.tsx
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── HomeView.tsx
│   │   │   ├── AboutView.tsx
│   │   │   ├── EpisodesView.tsx
│   │   │   ├── ArticlesView.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── App.tsx        # Main application component
│   ├── lib/               # Utilities and helpers
│   │   ├── rss-parser.ts  # RSS feed parser
│   │   ├── article-store.ts
│   │   └── episode-store.ts
│   ├── assets/            # Images and static assets
│   ├── styles/            # CSS and styling
│   └── main.tsx           # Application entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Key Pages

### Home (`/`)
- Hero section with podcast introduction
- Featured episode showcase
- Latest articles preview
- Newsletter subscription
- Episode grid

### About (`/about`)
- Host biography
- Podcast mission and vision
- Interactive image with hover effects

### Episodes (`/episodes`)
- Complete episode library
- RSS feed integration
- Episode cards with cover art
- Audio player integration

### Articles (`/articles`)
- Curated blog posts
- Article grid with grayscale hover effects
- Full article detail modals
- Reading recommendations

### Admin Dashboard (`/admin`)
- Episode management
- Article creation and editing
- Content organization
- Preview functionality

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Material-UI** - Additional UI components

### State & Data
- **Local Storage** - Client-side data persistence
- **Fast XML Parser** - RSS feed parsing
- **React Hook Form** - Form management

### Additional Libraries
- **date-fns** - Date utilities
- **Embla Carousel** - Carousel functionality
- **Sonner** - Toast notifications

## 🎨 Design System

### Colors
- **Primary Background**: `#1A1A1A` (Dark)
- **Accent Color**: `#FFC83D` (Gold)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `rgba(255, 255, 255, 0.6)` (White 60%)

### Typography
- **Serif Font**: Used for headings and elegant text
- **Pinyon Script**: Signature-style decorative font
- **Sans-serif**: Body text and UI elements

### Key Design Patterns
- Grayscale images with color on hover
- Smooth 700ms transitions
- Border radius: 4px for modern, clean edges
- Subtle borders with `border-white/10`
- Shadow effects for depth

## 📝 RSS Feed Configuration

The website supports automatic episode fetching from Spotify RSS feeds. Configure your RSS feed URL in the episode store or admin dashboard.

Example RSS feed structure:
```typescript
{
  title: "Episode Title",
  description: "Episode description",
  pubDate: "Publication date",
  enclosure: {
    url: "Audio file URL"
  },
  image: "Cover image URL"
}
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin and path aliases configured in `vite.config.ts`:
- `@/` maps to `src/`

### TypeScript Configuration
Strict mode enabled with modern ES features and React JSX support.

## 🌐 Deployment

This project can be deployed to any static hosting service:

### Vercel
```bash
npm run build
# Deploy the dist folder
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### GitHub Pages
Configure the base path in `vite.config.ts` and deploy the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Original design from Figma: [Design landing page for podcast](https://www.figma.com/design/8KHjOjmqeOPMRY8Y8CQe21/Design-landing-page-for-podcast)
- Images from Unsplash and other sources (see ATTRIBUTIONS.md)

## 📧 Contact

For questions or support, please contact the project maintainer.

---

**Built with ❤️ for Bare & Be Podcast**