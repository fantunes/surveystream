# SurveyStream

A modern survey rewards platform built with Next.js, where users can earn tokens by completing surveys and redeem them for cash, gift cards, or NFT collectibles.

## 🚀 Features

### User Dashboard
- **Real-time Stats**: View total tokens, completed surveys, login streak, and level progress
- **Available Surveys**: Browse and start surveys directly from the dashboard
- **Recent Activity**: Track your earning history
- **Quick Actions**: Fast navigation to rewards and surveys
- **Daily Bonuses**: Earn streak rewards for consecutive logins

### Rewards System
- **Cash Payouts**: Convert tokens to real money (100 tokens = £1)
- **Gift Cards**: Redeem for popular brands with bonus value (up to 5%)
- **NFT Collectibles**: Exclusive digital collectibles with built-in marketplace
- **Token Calculator**: See the value of your tokens in real-time

### Surveys
- **Multiple Categories**: Consumer Products, Technology, Lifestyle, Finance, Health, Quick Polls
- **Detailed Information**: View time estimates, difficulty levels, and token rewards
- **Quality Assurance**: Built-in verification system for genuine responses

## 🎯 User Flow

The complete user flow includes:

1. **Homepage** → Browse features and learn about SurveyStream
2. **Login** → Simple modal-based authentication
3. **Dashboard** → Central hub with stats, available surveys, and quick actions
4. **Surveys** → Browse and complete surveys to earn tokens
5. **Rewards** → Redeem tokens for various rewards

For detailed flow documentation, see:
- [USER_FLOW.md](./USER_FLOW.md) - Complete user flow documentation
- [FLOW_DIAGRAM.md](./FLOW_DIAGRAM.md) - Visual flow diagram

## 🧭 Navigation System

SurveyStream features **two distinct navigation systems** that adapt based on user authentication:

### Public Navigation (Marketing)
- **Pages**: Homepage, About, FAQ, Surveys (marketing), Rewards (marketing)
- **Items**: Home, Surveys, Rewards, About Us, FAQ, Log In, Sign Up
- **Purpose**: Marketing and information for visitors

### Dashboard Navigation (Authenticated)
- **Pages**: Dashboard, Surveys (app), Games (app), Rewards (app)
- **Items**: Dashboard, Surveys, Games, Rewards, User Profile, Logout
- **Routes**: `/dashboard`, `/dashboard/surveys`, `/dashboard/games`, `/dashboard/rewards`
- **Purpose**: App functionality for authenticated users
- **Features**: User info display, logout button, feature icons

The navigation automatically switches when users log in or visit protected pages. For detailed documentation, see:
- [NAVIGATION.md](./NAVIGATION.md) - Complete navigation documentation
- [NAVIGATION_COMPARISON.md](./NAVIGATION_COMPARISON.md) - Visual comparison

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:44321](http://localhost:44321) with your browser to see the application.

### Mock Login Credentials

For testing the user flow:
- **Email**: user@example.com
- **Password**: password

These credentials are pre-filled in the login modal.

## 📁 Project Structure

```
surveystream-nextjs/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx        # Dashboard home (DashboardLayout)
│   │   ├── surveys/
│   │   │   └── page.tsx    # Dashboard surveys (DashboardLayout)
│   │   ├── games/
│   │   │   └── page.tsx    # Dashboard games (DashboardLayout)
│   │   └── rewards/
│   │       └── page.tsx    # Dashboard rewards (DashboardLayout)
│   ├── surveys/
│   │   └── page.tsx        # Public surveys page (MainLayout)
│   ├── rewards/
│   │   └── page.tsx        # Public rewards page (MainLayout)
│   ├── about/page.tsx      # About page (MainLayout)
│   ├── faq/page.tsx        # FAQ page (MainLayout)
│   └── layout.tsx          # Root layout
├── components/
│   ├── forms/              # Login and signup forms
│   ├── header/
│   │   ├── index.tsx       # Public navigation header
│   │   └── dashboard-header.tsx  # Dashboard navigation header
│   ├── footer/             # Footer component
│   ├── modal/              # Login modal
│   └── ui/                 # UI components (shadcn/ui)
├── contents/
│   ├── dashboard.tsx       # Dashboard home content
│   ├── dashboard-surveys.tsx  # Dashboard surveys content
│   ├── dashboard-games.tsx    # Dashboard games content
│   ├── dashboard-rewards.tsx  # Dashboard rewards content
│   ├── surveys.tsx         # Public surveys marketing page
│   ├── rewards.tsx         # Public rewards marketing page
│   └── homepage.tsx        # Homepage content
├── layout/
│   ├── main.tsx            # Public pages layout
│   └── dashboard.tsx       # Dashboard pages layout (with auth)
└── lib/
    └── auth-context.tsx    # Mock authentication context
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradients (blue-400 to blue-600)
- **Secondary**: Purple, Green, Orange, Teal
- **Background**: Dark theme (gray-900)
- **Text**: White and gray variants

### Typography
- **Sans**: Geist Sans
- **Mono**: Geist Mono

### Effects
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradients**: Vibrant multi-color gradients
- **Animations**: Smooth hover effects and transitions
- **Responsive**: Mobile-first design

## 🧪 Mock Data

The application uses mock data for demonstration:

### User Profile
- Name: Sarah Johnson
- Email: sarah.j@example.com
- Total Tokens: 3,450 (£34.50)
- Completed Surveys: 12
- Login Streak: 5 days
- Level: Silver (69% to Gold)

### Available Surveys
- Streaming Service Preferences (700 tokens, 20 min)
- Coffee Preferences (100 tokens, 3 min)
- Financial Services Survey (1,200 tokens, 25 min)

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Turbopack
- **Fonts**: Geist Sans & Geist Mono

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server on port 44321

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
```

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, please contact the development team.

