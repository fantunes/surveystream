# Navigation Comparison

## Public Navigation (Non-Authenticated Users)

**Pages:** Homepage (`/`), About (`/about`), FAQ (`/faq`)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] SurveyStream    Home  About Us  FAQ    Log In  [Sign Up]│
└─────────────────────────────────────────────────────────────────┘
```

### Features:
- Marketing-focused navigation
- Simple, clean links to informational pages
- Prominent "Sign Up" call-to-action button
- "Log In" and "Sign Up" both redirect to `/dashboard`

### Navigation Items:
1. **Home** → `/` - Homepage
2. **About Us** → `/about` - About page
3. **FAQ** → `/faq` - FAQ page
4. **Log In** → `/dashboard` - Redirects to dashboard (auto-login)
5. **Sign Up** → `/dashboard` - Redirects to dashboard (auto-login)

---

## Dashboard Navigation (Authenticated Users)

**Pages:** Dashboard (`/dashboard`), Surveys (`/surveys`), Rewards (`/rewards`)

```
┌──────────────────────────────────────────────────────────────────────┐
│  [Logo] SurveyStream  [📊] Dashboard  [📋] Surveys  [🏆] Rewards     │
│                                                                       │
│                                    Sarah Johnson  [👤]  [Logout]     │
│                                    sarah.j@example.com                │
└──────────────────────────────────────────────────────────────────────┘
```

### Features:
- App-focused navigation with icons
- User profile display (name, email, avatar)
- Logout functionality
- Responsive mobile menu
- Access to all app features

### Navigation Items:
1. **Dashboard** → `/dashboard` - Main dashboard with stats and overview
2. **Surveys** → `/surveys` - Browse and take surveys
3. **Rewards** → `/rewards` - Redeem tokens for rewards
4. **User Info** - Displays current user's name and email
5. **Logout** - Logs out and redirects to homepage

---

## Key Differences

| Feature | Public Navigation | Dashboard Navigation |
|---------|------------------|---------------------|
| **Purpose** | Marketing & Information | App Functionality |
| **Target Users** | Visitors & Prospects | Authenticated Users |
| **Nav Items** | Home, About, FAQ | Dashboard, Surveys, Rewards |
| **User Display** | None | Name, Email, Avatar |
| **Auth Actions** | Log In, Sign Up | Logout |
| **Icons** | None | Feature icons |
| **Mobile Menu** | Basic | Enhanced with user info |

---

## User Flow

### First-Time Visitor
```
1. Lands on Homepage (/)
   ↓
2. Sees Public Navigation
   ↓
3. Clicks "Sign Up" or "Log In"
   ↓
4. Redirected to /dashboard
   ↓
5. Auto-logged in (mock auth)
   ↓
6. Sees Dashboard Navigation
```

### Returning User (Direct Link)
```
1. Visits /dashboard directly
   ↓
2. Auto-logged in (mock auth)
   ↓
3. Sees Dashboard Navigation immediately
```

### Logout Flow
```
1. User clicks "Logout" in Dashboard Navigation
   ↓
2. Redirected to Homepage (/)
   ↓
3. Sees Public Navigation again
```

---

## Implementation Details

### Public Pages Use:
- **Layout:** `layout/main.tsx`
- **Header:** `components/header/index.tsx`
- **No Auth Required**

### Dashboard Pages Use:
- **Layout:** `layout/dashboard.tsx`
- **Header:** `components/header/dashboard-header.tsx`
- **Auth Provider:** `lib/auth-context.tsx`
- **Auto-login on protected routes** (mock)

---

## Mobile Responsiveness

### Public Navigation (Mobile)
```
┌─────────────────────────┐
│ [Logo] SurveyStream  [☰]│
└─────────────────────────┘
  (Hamburger menu expands to show all links)
```

### Dashboard Navigation (Mobile)
```
┌─────────────────────────┐
│ [Logo] SurveyStream  [☰]│
└─────────────────────────┘
  (Hamburger menu expands to show:)
  - User info with avatar
  - Dashboard link
  - Surveys link
  - Rewards link
  - Logout button
```

Both navigation systems are fully responsive and provide an excellent mobile experience.
