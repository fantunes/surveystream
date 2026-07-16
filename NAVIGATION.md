# Navigation System Documentation

## Overview

The SurveyStream application now has **two distinct navigation systems**:

1. **Public Navigation** - For non-authenticated users (marketing pages)
2. **Dashboard Navigation** - For authenticated users (app pages)

## Navigation Types

### 1. Public Navigation (Marketing)
**Used on:** Homepage, About, FAQ pages
**Header Component:** `components/header/index.tsx`
**Layout:** `layout/main.tsx`

**Navigation Items:**
- Home (/)
- About Us (/about)
- FAQ (/faq)
- Log In (→ /dashboard)
- Sign Up (→ /dashboard)

### 2. Dashboard Navigation (Authenticated)
**Used on:** Dashboard, Surveys, Rewards pages
**Header Component:** `components/header/dashboard-header.tsx`
**Layout:** `layout/dashboard.tsx`

**Navigation Items:**
- Dashboard (/dashboard)
- Surveys (/surveys)
- Rewards (/rewards)
- User Info Display
- Logout Button

## Authentication System

### Mock Authentication
The application uses a **mock authentication system** for demonstration purposes:

**Location:** `lib/auth-context.tsx`

**How it works:**
- Automatically "logs in" users when they visit `/dashboard`, `/surveys`, or `/rewards`
- Provides a React Context with user data and auth state
- Includes `login()` and `logout()` functions

**Mock User Data:**
```typescript
{
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com'
}
```

### Using Authentication in Components

```tsx
import { useAuth } from '@/lib/auth-context';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {user.name}!</div>;
}
```

## Page Layouts

### Public Pages
Use `MainLayout` which includes the public header:

```tsx
import MainLayout from '@/layout/main';

export default function PublicPage() {
  return (
    <MainLayout>
      <YourContent />
    </MainLayout>
  );
}
```

### Dashboard/Protected Pages
Use `DashboardLayout` which includes the dashboard header and auth provider:

```tsx
import DashboardLayout from '@/layout/dashboard';

export default function ProtectedPage() {
  return (
    <DashboardLayout>
      <YourContent />
    </DashboardLayout>
  );
}
```

## File Structure

```
├── app/
│   ├── page.tsx                    # Homepage (MainLayout)
│   ├── about/page.tsx              # About page (MainLayout)
│   ├── faq/page.tsx                # FAQ page (MainLayout)
│   ├── dashboard/page.tsx          # Dashboard (DashboardLayout)
│   ├── surveys/page.tsx            # Surveys (DashboardLayout)
│   └── rewards/page.tsx            # Rewards (DashboardLayout)
├── components/
│   └── header/
│       ├── index.tsx               # Public header
│       └── dashboard-header.tsx    # Dashboard header
├── layout/
│   ├── main.tsx                    # Public layout
│   └── dashboard.tsx               # Dashboard layout
└── lib/
    └── auth-context.tsx            # Mock authentication
```

## Features

### Public Header
- Clean, marketing-focused navigation
- Prominent "Sign Up" CTA button
- Links to informational pages
- Login redirects to dashboard

### Dashboard Header
- User profile display (name, email, avatar)
- Quick access to app features
- Logout functionality
- Responsive mobile menu
- Icons for better UX

### Responsive Design
Both headers include:
- Desktop navigation (visible on md+ screens)
- Mobile hamburger menu
- Smooth transitions and hover effects
- Consistent branding

## Testing the Navigation

1. **Visit Homepage** (`/`):
   - Should see: Home, About Us, FAQ, Log In, Sign Up
   - Public navigation header

2. **Click "Log In" or "Sign Up"**:
   - Redirects to `/dashboard`
   - Automatically "logs in" as Sarah Johnson
   - Navigation changes to dashboard nav

3. **Visit Dashboard** (`/dashboard`):
   - Should see: Dashboard, Surveys, Rewards, User Info, Logout
   - Dashboard navigation header

4. **Click "Logout"**:
   - Redirects to homepage
   - Navigation changes back to public nav

## Future Enhancements

To implement real authentication:

1. Replace mock auth in `lib/auth-context.tsx` with real API calls
2. Add authentication middleware/guards
3. Implement proper session management
4. Add login/signup forms
5. Handle token storage and refresh
6. Add protected route redirects

## Notes

- The mock authentication automatically logs in users on protected routes for demo purposes
- In production, you'd want proper authentication with JWT tokens or sessions
- The `AuthProvider` wraps the dashboard layout to provide auth context to all dashboard pages
- Public pages don't need the `AuthProvider` as they don't require authentication
