# MoneyMap-expense-tracker
MoneyMap is a comprehensive expense and income tracking application with a full-stack implementation. It helps users track their finances, manage expenses and income, and visualize their financial data.

## Project Structure
The project is structured into two main directories:
```
moneymap-expense-tracker/
├── backend/   
└── frontend/moneymap-expense-tracker/   
```
    
### Backend Architecture

The backend follows an MVC (Model-View-Controller) architecture:

- **Models**: Database schemas for User, Expense, and Income
- **Controllers** : Business logic handling for:
    - Authentication
    - Dashboard
    - Expenses
    - Income
    - User Profiles
- **Routes** : API endpoints for:
    - Authentication
    - Dashboard
    - Expenses
    - Income

### Configuration
- Database configuration in db.js
- Cloudinary setup for image storage in cloudinary.js

### Middleware
- Authentication middleware for protecting routes
- Upload middleware for handling file uploads

## Getting Started
Backend Setup
  1. Navigate to the backend directory:
     ```bash
     cd backend
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Create a `.env` file with the following variables:
     ```env
     PORT=your_port
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

  4. Start the development server:
     ```bash
     npm run dev
     ```

## Technologies Used
Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for image storage

Frontend
- React
- Vite
- Modern JavaScript (ES6+)
- Tailwind CSS/ CSS
