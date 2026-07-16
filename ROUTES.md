# Route Structure Update

## Overview

The application now has **separate routes for public marketing pages and dashboard app pages** for Surveys and Rewards.

## Route Structure

### Public Routes (Marketing Pages)
These pages use `MainLayout` with the public header and are accessible to all visitors:

| Route | Purpose | Content File | Layout |
|-------|---------|--------------|--------|
| `/` | Homepage | `homepage.tsx` | MainLayout |
| `/about` | About page | `about.tsx` | MainLayout |
| `/faq` | FAQ page | `faq.tsx` | MainLayout |
| `/surveys` | **Surveys marketing page** | `surveys.tsx` | MainLayout |
| `/rewards` | **Rewards marketing page** | `rewards.tsx` | MainLayout |

### Dashboard Routes (App Pages)
These pages use `DashboardLayout` with the dashboard header and require authentication:

| Route | Purpose | Content File | Layout |
|-------|---------|--------------|--------|
| `/dashboard` | Dashboard home | `dashboard.tsx` | DashboardLayout |
| `/dashboard/surveys` | **Surveys app page** | `dashboard-surveys.tsx` | DashboardLayout |
| `/dashboard/rewards` | **Rewards app page** | `dashboard-rewards.tsx` | DashboardLayout |

## Key Differences

### Public Surveys Page (`/surveys`)
**Purpose**: Marketing and information about surveys
- Hero section with value proposition
- "How It Works" explanation
- Survey categories overview
- Sample available surveys
- Tips for success
- CTA to sign up
- **Target Audience**: Visitors and prospects

### Dashboard Surveys Page (`/dashboard/surveys`)
**Purpose**: Functional survey browsing and taking
- Stats display (available, completed, in progress, avg reward)
- Filtering sidebar (categories, difficulty, duration)
- List of available surveys with "Start" buttons
- User-specific content
- **Target Audience**: Authenticated users

### Public Rewards Page (`/rewards`)
**Purpose**: Marketing and information about rewards
- Hero section highlighting reward options
- Reward types explanation (Cash, Gift Cards, NFTs)
- Popular brands showcase
- Token value calculator
- How earning works
- CTA to sign up
- **Target Audience**: Visitors and prospects

### Dashboard Rewards Page (`/dashboard/rewards`)
**Purpose**: Functional reward redemption
- User's token balance display
- Reward categories with availability
- Popular redemptions with affordability checking
- Recent redemption history
- Quick stats
- **Target Audience**: Authenticated users

## Navigation Updates

### Public Header
Now includes links to both marketing pages:
- Home → `/`
- **Surveys** → `/surveys` (marketing)
- **Rewards** → `/rewards` (marketing)
- About Us → `/about`
- FAQ → `/faq`
- Log In → `/dashboard` (auto-login)
- Sign Up → `/dashboard` (auto-login)

### Dashboard Header
Links to dashboard app pages:
- Dashboard → `/dashboard`
- **Surveys** → `/dashboard/surveys` (app)
- **Rewards** → `/dashboard/rewards` (app)
- User Info Display
- Logout Button

## User Flow Examples

### New Visitor Exploring Surveys
```
1. Lands on Homepage (/)
   ↓
2. Clicks "Surveys" in public nav
   ↓
3. Views /surveys (marketing page)
   ↓
4. Learns about survey types, rewards, etc.
   ↓
5. Clicks "Sign Up" or "Start Taking Surveys"
   ↓
6. Redirected to /dashboard
   ↓
7. Auto-logged in
   ↓
8. Clicks "Surveys" in dashboard nav
   ↓
9. Views /dashboard/surveys (app page)
   ↓
10. Can actually start taking surveys
```

### Authenticated User Browsing Surveys
```
1. Visits /dashboard directly
   ↓
2. Auto-logged in
   ↓
3. Clicks "Surveys" in dashboard nav
   ↓
4. Views /dashboard/surveys (app page)
   ↓
5. Filters and starts surveys
```

### Visitor Learning About Rewards
```
1. On homepage
   ↓
2. Clicks "Rewards" in public nav
   ↓
3. Views /rewards (marketing page)
   ↓
4. Sees reward options, brands, calculator
   ↓
5. Clicks "Start Earning Now"
   ↓
6. Redirected to /dashboard
```

### Authenticated User Redeeming Rewards
```
1. In dashboard
   ↓
2. Clicks "Rewards" in dashboard nav
   ↓
3. Views /dashboard/rewards (app page)
   ↓
4. Sees actual token balance
   ↓
5. Can redeem rewards
```

## File Organization

### Content Files

**Public Marketing Content:**
- `contents/surveys.tsx` - Marketing page for surveys
- `contents/rewards.tsx` - Marketing page for rewards

**Dashboard App Content:**
- `contents/dashboard.tsx` - Dashboard home
- `contents/dashboard-surveys.tsx` - Surveys app functionality
- `contents/dashboard-rewards.tsx` - Rewards app functionality

### Page Files

**Public Pages:**
- `app/surveys/page.tsx` - Uses `MainLayout` + `SurveysPageContents`
- `app/rewards/page.tsx` - Uses `MainLayout` + `RewardsPageContents`

**Dashboard Pages:**
- `app/dashboard/page.tsx` - Uses `DashboardLayout` + `DashboardPageContents`
- `app/dashboard/surveys/page.tsx` - Uses `DashboardLayout` + `DashboardSurveysPageContents`
- `app/dashboard/rewards/page.tsx` - Uses `DashboardLayout` + `DashboardRewardsPageContents`

## Benefits of This Structure

1. **Clear Separation**: Marketing vs. functional pages are clearly separated
2. **SEO Friendly**: Public pages can be optimized for search engines
3. **Better UX**: Visitors get informational content, users get functional tools
4. **Scalable**: Easy to add more public or dashboard pages
5. **Maintainable**: Clear file organization and naming conventions
6. **Flexible**: Can customize each page type independently

## Migration Notes

### What Changed
- `/surveys` moved from dashboard to public (marketing)
- `/rewards` moved from dashboard to public (marketing)
- Dashboard surveys moved to `/dashboard/surveys`
- Dashboard rewards moved to `/dashboard/rewards`
- All internal links updated to reflect new structure
- Navigation headers updated with correct routes

### What Stayed the Same
- `/dashboard` route unchanged
- Authentication logic unchanged
- Layout components unchanged
- Content components renamed but functionality preserved

## Testing Checklist

- [ ] Visit `/surveys` - should show marketing page with public header
- [ ] Visit `/rewards` - should show marketing page with public header
- [ ] Visit `/dashboard` - should auto-login and show dashboard header
- [ ] Click "Surveys" in dashboard nav - should go to `/dashboard/surveys`
- [ ] Click "Rewards" in dashboard nav - should go to `/dashboard/rewards`
- [ ] Click "Surveys" in public nav - should go to `/surveys`
- [ ] Click "Rewards" in public nav - should go to `/rewards`
- [ ] All links in dashboard content point to dashboard routes
- [ ] Logout redirects to homepage with public header
