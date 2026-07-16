# SurveyStream User Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOMEPAGE (/)                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  • Hero Section: "Get Paid for Your Opinion"            │   │
│  │  • Features Overview                                      │   │
│  │  • Call-to-Action Buttons                               │   │
│  │  • Header: [Dashboard] [Surveys] [Rewards] [Log In]     │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Click "Log In"
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LOGIN MODAL                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Email: user@example.com (pre-filled)                   │   │
│  │  Password: ******** (pre-filled)                        │   │
│  │  [Login Button]                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Click "Login"
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD (/dashboard)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  STATS CARDS (4 cards in a row)                         │   │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐        │   │
│  │  │ 3,450  │  │   12   │  │ 5 Days │  │  69%   │        │   │
│  │  │ Tokens │  │Surveys │  │ Streak │  │ to Gold│        │   │
│  │  │ £34.50 │  │Complete│  │+50 tok │  │ Silver │        │   │
│  │  └────────┘  └────────┘  └────────┘  └────────┘        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │  AVAILABLE SURVEYS          │  │  SIDEBAR                 │ │
│  │  ┌────────────────────────┐ │  │  ┌────────────────────┐ │ │
│  │  │ Streaming Preferences  │ │  │  │ Quick Actions      │ │ │
│  │  │ 700 tokens | 20 min    │ │  │  │ • Redeem Rewards ──┼─┼─┐
│  │  │ [Start]                │ │  │  │ • Browse Surveys ──┼─┼─┤
│  │  └────────────────────────┘ │  │  │ • View Profile     │ │ │
│  │  ┌────────────────────────┐ │  │  └────────────────────┘ │ │
│  │  │ Coffee Preferences     │ │  │  ┌────────────────────┐ │ │
│  │  │ 100 tokens | 3 min     │ │  │  │ Recent Activity    │ │ │
│  │  │ [Start]                │ │  │  │ • Banking App +750 │ │ │
│  │  └────────────────────────┘ │  │  │ • Shopping +350    │ │ │
│  │  ┌────────────────────────┐ │  │  │ • Daily Bonus +50  │ │ │
│  │  │ Financial Services     │ │  │  └────────────────────┘ │ │
│  │  │ 1,200 tokens | 25 min  │ │  │  ┌────────────────────┐ │ │
│  │  │ [Start]                │ │  │  │ Daily Bonus        │ │ │
│  │  └────────────────────────┘ │  │  │ ⚡ +50 Tokens      │ │ │
│  │  [Browse All Surveys] ─────┼──┼──│ Claimed!           │ │ │
│  └─────────────────────────────┘  │  └────────────────────┘ │ │
└───────────────────────────────────┴──────────────────────────┴─┘
                │                                              │
                │                                              │
    ┌───────────┴──────────┐                    ┌─────────────┘
    │                      │                    │
    ▼                      ▼                    ▼
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
│  REWARDS    │    │   SURVEYS    │    │   PROFILE    │
│ (/rewards)  │    │  (/surveys)  │    │  (future)    │
└─────────────┘    └──────────────┘    └──────────────┘
    │                      │
    ▼                      ▼
┌─────────────────────────────────────────────────────┐
│              REWARDS PAGE                            │
│  ┌──────────────────────────────────────────────┐   │
│  │  REWARD TYPES (3 cards)                      │   │
│  │  ┌────────────┐ ┌────────────┐ ┌──────────┐ │   │
│  │  │ Cash       │ │ Gift Cards │ │   NFTs   │ │   │
│  │  │ Payouts    │ │ Amazon     │ │ Digital  │ │   │
│  │  │ £5 min     │ │ Netflix    │ │ Collect. │ │   │
│  │  │ 1-3 days   │ │ Spotify    │ │ Trading  │ │   │
│  │  │ 100t = £1  │ │ +5% bonus  │ │ 1000t+   │ │   │
│  │  └────────────┘ └────────────┘ └──────────┘ │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │  TOKEN CALCULATOR                            │   │
│  │  1,000 tokens = £10.00                       │   │
│  │  5,000 tokens = £50.00                       │   │
│  │  10,000 tokens = £100.00                     │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              SURVEYS PAGE                            │
│  ┌──────────────────────────────────────────────┐   │
│  │  HOW IT WORKS (4 steps)                      │   │
│  │  1. Find Match → 2. Take Survey →           │   │
│  │  3. Get Verified → 4. Earn Rewards           │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │  CATEGORIES (6 types)                        │   │
│  │  • Consumer Products (100-800 tokens)        │   │
│  │  • Technology (200-1000 tokens)              │   │
│  │  • Lifestyle (150-600 tokens)                │   │
│  │  • Financial (300-1200 tokens)               │   │
│  │  • Health (250-900 tokens)                   │   │
│  │  • Quick Polls (25-150 tokens)               │   │
│  └──────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────┐   │
│  │  AVAILABLE SURVEYS (4 detailed cards)        │   │
│  │  • Mobile Banking App - 750 tokens           │   │
│  │  • Shopping Habits - 350 tokens              │   │
│  │  • Streaming Preferences - 700 tokens        │   │
│  │  • Coffee Preferences - 100 tokens           │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## Navigation Summary

**Primary Flow:**
1. Homepage → Login Modal → Dashboard
2. Dashboard → Rewards (via Quick Actions or header)
3. Dashboard → Surveys (via Quick Actions or header)

**Header Navigation (Always Available):**
- Dashboard
- Surveys
- Rewards
- About Us
- Log In / Sign Up

**Dashboard Quick Actions:**
- Redeem Rewards → /rewards
- Browse Surveys → /surveys
- View Profile → (future feature)

**Key Features by Page:**

**Dashboard:**
- 4 stat cards with real-time data
- 3 featured available surveys
- Recent activity feed
- Quick action buttons
- Daily bonus indicator

**Rewards:**
- 3 reward redemption options
- Popular brand showcase
- Token value calculator
- Detailed payout information

**Surveys:**
- How it works guide
- 6 survey categories
- 4+ available surveys
- Success tips
- Category filtering

## Mock User Data

**User Profile:**
- Name: Sarah Johnson
- Email: sarah.j@example.com
- Total Tokens: 3,450 (£34.50)
- Completed Surveys: 12
- Login Streak: 5 days
- Level: Silver (69% to Gold)

**Recent Activity:**
1. Mobile Banking App Experience - +750 tokens (2 hours ago)
2. Weekly Shopping Habits - +350 tokens (1 day ago)
3. Daily Login Streak Bonus - +50 tokens (Today)
