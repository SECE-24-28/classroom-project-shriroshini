# Mobile Recharge Backend - Day 11

## Project Structure

```
Day11/
├── config/          # Database configuration
│   └── database.js  # MongoDB connection setup
├── models/          # Mongoose schemas
│   ├── User.js      # User model
│   └── Recharge.js  # Recharge transaction model
├── routes/          # API route definitions
│   └── userRoutes.js
├── controllers/     # Request handling logic
│   └── userController.js
├── server.js        # Main server file
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## Folder Purpose

- **config/**: Contains database configuration and connection setup
- **models/**: Mongoose schemas defining data structure
- **routes/**: API endpoint definitions and routing
- **controllers/**: Business logic and request handling
- **server.js**: Main application entry point

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start MongoDB service (local installation)

3. Run the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

4. Test the server:
   - Open browser: http://localhost:5000
   - Should see: "Mobile Recharge Backend Server is running!"

## MongoDB Connection

- Local: `mongodb://localhost:27017/mobile_recharge`
- For MongoDB Atlas, update the connection string in `config/database.js`

## Models Created

1. **User Model**: Basic user schema with name, email, phone, password, and balance
2. **Recharge Model**: Transaction schema for mobile recharge operations

## Next Steps

- Implement user authentication
- Create recharge API endpoints
- Add validation middleware
- Implement error handling