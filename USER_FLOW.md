# SurveyStream - Mock User Flow Documentation

## Overview
This document describes the complete mock user flow for the SurveyStream application, demonstrating how users can log in and navigate through the dashboard, rewards, and surveys pages.

## User Flow Steps

### 1. **Homepage** (`/`)
- User lands on the homepage
- Sees the main hero section with call-to-action buttons
- Navigation header shows: Dashboard, Surveys, Rewards, About Us, Log In, Sign Up

### 2. **Login Process**
- User clicks "Log In" button in the header (triggers `#sign-in` hash)
- Login modal appears with:
  - Pre-filled email: `user@example.com`
  - Pre-filled password: `password`
- User clicks "Login" button
- Modal closes and user is redirected to `/dashboard`

### 3. **Dashboard Page** (`/dashboard`)
The dashboard displays a comprehensive overview of the user's account:

#### Stats Cards (Top Section)
- **Total Tokens**: 3,450 tokens (= £34.50)
  - Includes "Redeem Now" link to rewards page
  - Hover effect with scale animation

- **Completed Surveys**: 12 surveys
  - Shows "+2 this week" indicator

- **Login Streak**: 5 days
  - Shows "+50 tokens today!" bonus

- **Level Progress**: 69% to Gold Level
  - Current level: Silver
  - Visual progress bar showing advancement

#### Available Surveys Section
Three featured surveys with details:
1. **Streaming Service Preferences**
   - Category: Entertainment
   - Tokens: 700
   - Duration: 20 min
   - Difficulty: Medium
   - Badge: Popular

2. **Coffee Preferences**
   - Category: Quick Poll
   - Tokens: 100
   - Duration: 3 min
   - Difficulty: Easy
   - Badge: Quick

3. **Financial Services Survey**
   - Category: Finance
   - Tokens: 1,200
   - Duration: 25 min
   - Difficulty: Hard
   - Badge: High Reward

Each survey card includes:
- Category badge with color coding
- Special badges (Popular, Quick, High Reward)
- Time estimate and difficulty level
- Token reward amount
- "Start" button with hover animation

#### Sidebar Features

**Quick Actions Panel:**
- Redeem Rewards (green gradient)
- Browse Surveys (blue gradient)
- View Profile (purple gradient)
- Each with hover effects and chevron icons

**Recent Activity Panel:**
Shows last 3 activities:
1. Mobile Banking App Experience - +750 tokens (2 hours ago)
2. Weekly Shopping Habits - +350 tokens (1 day ago)
3. Daily Login Streak Bonus - +50 tokens (Today)

**Daily Bonus Card:**
- Yellow/orange gradient design
- Shows claimed bonus: +50 tokens
- Encourages return tomorrow

### 4. **Rewards Page** (`/rewards`)
Accessible via:
- Navigation header
- Dashboard "Redeem Now" link
- Dashboard Quick Actions panel

Features:
- **Hero Section**: "Your Rewards. Your Way."
- **Three Reward Types**:
  1. **Cash Payouts** (Green)
     - Minimum: £5.00
     - Processing: 1-3 days
     - Rate: 100 tokens = £1

  2. **Gift Cards** (Purple)
     - Range: £5 - £500
     - Instant delivery
     - Up to 5% bonus

  3. **NFT Collectibles** (Blue)
     - Starting from: 1,000 tokens
     - Built-in marketplace
     - 5 rarity tiers

- **Popular Brands Section**:
  - Amazon (+2% bonus)
  - Netflix (+3% bonus)
  - Spotify (+5% bonus)
  - PayPal (standard rate)

- **Token Value Calculator**:
  - 1,000 tokens = £10.00
  - 5,000 tokens = £50.00
  - 10,000 tokens = £100.00

### 5. **Surveys Page** (`/surveys`)
Accessible via navigation header or dashboard

Features:
- **Hero Section**: "Share Your Voice. Earn Real Rewards."
- **How It Works** (4 steps):
  1. Find Your Match
  2. Take the Survey
  3. Get Verified
  4. Earn Rewards

- **Survey Categories** (6 types):
  1. Consumer Products (100-800 tokens)
  2. Technology (200-1000 tokens)
  3. Lifestyle & Entertainment (150-600 tokens)
  4. Financial Services (300-1200 tokens)
  5. Health & Wellness (250-900 tokens)
  6. Quick Polls (25-150 tokens)

- **Available Surveys Section**:
  Shows 4 detailed survey cards with:
  - Category and special badges
  - Full description
  - Time estimate
  - Token reward
  - "Take Survey" button

- **Tips for Success**:
  - Be Honest & Consistent
  - Complete Your Profile
  - Check Daily
  - Take Your Time

## Design Features

### Visual Excellence
- **Color Palette**: Vibrant gradients (blue, purple, green, orange, teal)
- **Dark Mode**: Professional dark theme with gray-900 background
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Typography**: Geist Sans and Geist Mono fonts

### Animations & Interactions
- **Hover Effects**:
  - Scale transformations on cards
  - Color transitions on buttons
  - Border glow effects
- **Smooth Transitions**: All elements use CSS transitions
- **Progress Bars**: Animated width changes
- **Micro-animations**: Subtle movements on interactive elements

### Responsive Design
- **Mobile-First**: Fully responsive grid layouts
- **Breakpoints**:
  - Mobile: Single column
  - Tablet (md): 2 columns
  - Desktop (lg): 3-4 columns
- **Flexible Navigation**: Hamburger menu on mobile (hidden on desktop)

### User Experience
- **Clear CTAs**: Prominent call-to-action buttons
- **Visual Hierarchy**: Clear heading structure (h1, h2, h3)
- **Consistent Spacing**: Uniform padding and margins
- **Loading States**: Smooth page transitions
- **Accessibility**: Semantic HTML and proper ARIA labels

## Mock Data

### User Profile
```javascript
{
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  totalTokens: 3450,
  completedSurveys: 12,
  pendingSurveys: 3,
  loginStreak: 5,
  level: 'Silver',
  nextLevelTokens: 5000
}
```

### Token Exchange Rate
- 100 tokens = £1.00
- Minimum payout: £5.00 (500 tokens)
- Gift card bonuses: Up to 5% extra value

## Navigation Flow

```
Homepage (/)
    ├── Click "Log In" → Login Modal
    │   └── Submit → Dashboard (/dashboard)
    │
    ├── Dashboard (/dashboard)
    │   ├── View Stats (Tokens, Surveys, Streak, Level)
    │   ├── Browse Available Surveys
    │   ├── Check Recent Activity
    │   ├── Quick Actions
    │   │   ├── → Rewards (/rewards)
    │   │   ├── → Surveys (/surveys)
    │   │   └── → Profile
    │   └── Daily Bonus Card
    │
    ├── Rewards (/rewards)
    │   ├── Choose Reward Type (Cash, Gift Cards, NFTs)
    │   ├── Browse Popular Brands
    │   └── Use Token Calculator
    │
    └── Surveys (/surveys)
        ├── Learn How It Works
        ├── Browse Categories
        ├── View Available Surveys
        └── Read Success Tips
```

## Technical Implementation

### Routes Created
- `/dashboard` - User dashboard with stats and overview
- `/rewards` - Rewards redemption page (already existed)
- `/surveys` - Survey browsing page (already existed)

### Components Modified
- `components/forms/login/index.tsx` - Added redirect to dashboard on login
- `components/header/index.tsx` - Added Dashboard link to navigation

### New Components Created
- `contents/dashboard.tsx` - Complete dashboard page content
- `app/dashboard/page.tsx` - Dashboard route page

### Styling
- Uses existing TailwindCSS configuration
- Custom gradients and color schemes
- Glass effect utility class
- Smooth transitions and animations

## Testing the Flow

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:44321`
3. Click "Log In" in the header
4. Click "Login" button (credentials pre-filled)
5. Observe redirect to dashboard
6. Explore the dashboard features
7. Navigate to Rewards page
8. Navigate to Surveys page
9. Use header navigation to move between pages

## Future Enhancements

Potential improvements for a production version:
- Real authentication with JWT tokens
- Backend API integration
- Actual survey taking functionality
- Real-time token balance updates
- User profile editing
- Survey filtering and search
- Reward redemption processing
- Email notifications
- Mobile app version
- Social sharing features
