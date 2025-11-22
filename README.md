# TaskFlow - Modern Todo Application

A beautiful, feature-rich todo list application built with the MERN stack (MongoDB, Express, React, Node.js) featuring a stunning glassmorphic design with smooth animations.

## ✨ Features

- **Beautiful UI**: Glassmorphic design with vibrant gradients and smooth animations
- **Full CRUD Operations**: Create, read, update, and delete todos
- **Priority Levels**: Organize tasks by low, medium, or high priority
- **Due Dates**: Set deadlines for your tasks
- **Filter Views**: View all, active, or completed tasks
- **Task Statistics**: Track your progress with real-time stats
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Inline Editing**: Edit tasks directly without opening a modal
- **Bulk Actions**: Clear all completed tasks at once

## 🚀 Tech Stack

### Frontend
- **React** with Vite for fast development
- **Axios** for API calls
- **Custom CSS** with glassmorphism and animations
- **Google Fonts** (Inter) for modern typography

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose ODM
- **CORS** enabled for cross-origin requests
- **RESTful API** architecture

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **MongoDB** installed and running locally
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Install MongoDB (if not already installed)

**Windows:**
- Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- Install and start MongoDB service

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### 2. Clone and Setup Backend

```bash
# Navigate to the project root
cd c:\Users\Admin\Downloads\test

# Install backend dependencies
npm install

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal:

```bash
# Navigate to the client folder
cd c:\Users\Admin\Downloads\test\client

# Install frontend dependencies (already done)
npm install

# Start the frontend development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎯 Usage

1. **Start MongoDB**: Make sure MongoDB is running
2. **Start Backend**: Run `npm run dev` in the root directory
3. **Start Frontend**: Run `npm run dev` in the client directory
4. **Open Browser**: Navigate to `http://localhost:5173`

## 📁 Project Structure

```
test/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── AddTodo.jsx
│   │   │   ├── AddTodo.css
│   │   │   ├── TodoItem.jsx
│   │   │   ├── TodoItem.css
│   │   │   ├── FilterBar.jsx
│   │   │   └── FilterBar.css
│   │   ├── services/      # API service layer
│   │   │   └── api.js
│   │   ├── App.jsx        # Main App component
│   │   ├── App.css
│   │   ├── index.css      # Global styles & design system
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   └── package.json
├── models/                # MongoDB models
│   └── Todo.js
├── server.js              # Express server
├── .env                   # Environment variables
└── package.json           # Backend dependencies
```

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Gradient Backgrounds**: Animated radial gradients
- **Smooth Animations**: Fade-in, slide-in, and scale animations
- **Hover Effects**: Interactive button and card effects
- **Custom Scrollbar**: Styled to match the theme
- **Priority Badges**: Color-coded priority indicators
- **Responsive Layout**: Mobile-first design approach

## 🔌 API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a single todo
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `DELETE /api/todos/completed/all` - Delete all completed todos

## 🌟 Key Components

### AddTodo
- Expandable form for creating new tasks
- Priority selection
- Due date picker
- Form validation

### TodoItem
- Inline editing capability
- Completion toggle
- Priority badge display
- Delete functionality
- Smooth animations

### FilterBar
- Real-time statistics
- Filter buttons (All/Active/Completed)
- Clear completed tasks button

## 🐛 Troubleshooting

**Backend won't start:**
- Make sure MongoDB is running
- Check if port 5000 is available
- Verify `.env` file exists with correct MongoDB URI

**Frontend can't connect to backend:**
- Ensure backend is running on port 5000
- Check CORS settings in `server.js`
- Verify API URL in `client/src/services/api.js`

**MongoDB connection error:**
- Start MongoDB service
- Check MongoDB URI in `.env` file
- Ensure MongoDB is installed correctly

## 📝 License

MIT License - feel free to use this project for learning or personal use!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ by phoenixdev100
