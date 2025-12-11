# Day 7 - QuickRecharge App

## Features Implemented

### ✅ Tailwind CSS
- Fully styled with Tailwind utility classes
- Gradient backgrounds and modern design
- Responsive grid layout
- Smooth transitions and animations

### ✅ Props
- **PlanCard** receives plan data (name, price, validity, data, icon, gradient)
- Dynamic rendering based on props
- Reusable component for all plans

### ✅ State (useState)
- **PlanCard**: `isSelected` state for selection feedback
- **RechargeHistory**: `isExpanded` state for show more/less
- Interactive UI with instant feedback

### ✅ Context API (Global State)
- **AppContext** manages:
  - `theme`: Light/Dark mode toggle
  - `user`: User info with balance
  - `recharges`: Recharge history array
- Functions: `toggleTheme()`, `addRecharge()`
- Used in Navbar, PlanCard, RechargeHistory

### ✅ Components
- **Navbar**: Shows balance, theme toggle
- **PlanCard**: Interactive plan cards with selection
- **RechargeHistory**: Expandable history list
- **App**: Main component integrating everything

## Unique Features
- 💰 Live balance tracking
- 🎨 Dark/Light theme toggle
- 📊 Expandable recharge history
- ⚡ Instant selection feedback
- 🎯 6 unique gradient plan cards
- 💎 Modern glassmorphism design

## Setup
```bash
npm install
npm run dev
```

## How It Works
1. Select any plan card
2. Balance automatically deducts
3. Recharge appears in history
4. Toggle theme anytime
5. Expand/collapse history
