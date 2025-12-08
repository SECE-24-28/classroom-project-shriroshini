# Day 5 - Mobile Recharge Web Application with API Integration

## Overview
This folder contains the complete Mobile Recharge Web Application with MockAPI integration for fetching recharge plans dynamically.

## API Setup Instructions

### 1. Create MockAPI Account
- Go to https://mockapi.io/
- Sign up or log in to your account

### 2. Create New Project
- Click "New Project"
- Name it "Mobile Recharge"

### 3. Create Plans Endpoint
- Click "+ New Resource"
- Name: `plans`
- This will create endpoint: `https://[your-project-id].mockapi.io/api/v1/plans`

### 4. Add Sample Data
Add the following recharge plans (click "+ New" for each):

```json
{
  "id": "1",
  "type": "prepaid",
  "price": 199,
  "validity": "28 days",
  "data": "1.5GB/day",
  "description": "Unlimited calls + 100 SMS/day"
}

{
  "id": "2",
  "type": "prepaid",
  "price": 299,
  "validity": "28 days",
  "data": "2GB/day",
  "description": "Unlimited calls + 100 SMS/day"
}

{
  "id": "3",
  "type": "prepaid",
  "price": 399,
  "validity": "56 days",
  "data": "2GB/day",
  "description": "Unlimited calls + 100 SMS/day"
}

{
  "id": "4",
  "type": "prepaid",
  "price": 499,
  "validity": "84 days",
  "data": "1.5GB/day",
  "description": "Unlimited calls + 100 SMS/day"
}

{
  "id": "5",
  "type": "postpaid",
  "price": 399,
  "validity": "30 days",
  "data": "Unlimited",
  "description": "Unlimited calls + 100 SMS/day"
}

{
  "id": "6",
  "type": "postpaid",
  "price": 599,
  "validity": "30 days",
  "data": "Unlimited",
  "description": "Unlimited calls + 100 SMS/day + Netflix"
}

{
  "id": "7",
  "type": "postpaid",
  "price": 799,
  "validity": "30 days",
  "data": "Unlimited",
  "description": "Unlimited calls + 100 SMS/day + Netflix + Prime"
}
```

### 5. Update API URL
- Copy your API endpoint URL from MockAPI
- Open `plan.js` file
- Replace the API_URL value with your endpoint:
```javascript
const API_URL = 'https://YOUR_PROJECT_ID.mockapi.io/api/v1/plans';
```

## Features Implemented

### Day 5 Specific Features:
- ✅ Fetch recharge plans from MockAPI
- ✅ Display loading message while fetching data
- ✅ Filter plans by type (prepaid/postpaid)
- ✅ Dynamic plan rendering using JavaScript
- ✅ Error handling for API failures
- ✅ Async/await for API calls
- ✅ Modal popup for plan confirmation
- ✅ Update UI without page refresh

### All Features:
- ✅ Form validation (email, password, mobile number)
- ✅ Client-side validation with error messages
- ✅ LocalStorage for user data and recharge history
- ✅ Responsive design with Tailwind CSS
- ✅ Dynamic content updates
- ✅ Navigation between pages

## How to Run
1. Open `index.html` in a web browser
2. Sign up or login
3. Navigate to recharge page
4. Enter mobile number, select operator and plan type
5. View dynamically loaded plans from API
6. Select a plan and confirm recharge

## Files Structure
- `index.html` - Login page
- `signup.html` - Signup page
- `dashboard.html` - User dashboard
- `recharge.html` - Recharge input form
- `plan.html` - Plan selection page (with API integration)
- `login.js` - Login validation
- `signup.js` - Signup validation
- `dashboard.js` - Dashboard functionality
- `recharge.js` - Recharge form validation
- `plan.js` - API integration and plan display

## Technologies Used
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Fetch API
- LocalStorage
- MockAPI.io
