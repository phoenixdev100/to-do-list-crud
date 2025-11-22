<div align="center">

# 🚀 TaskFlow

### *Modern Todo Application with Glassmorphic Design*

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A beautiful, feature-rich todo list application built with the MERN stack**  
*Featuring stunning glassmorphic design, smooth animations, and modern UX*

[Features](#-features) • [Installation](#%EF%B8%8F-installation--setup) • [Usage](#-usage) • [API](#-api-endpoints) • [Contributing](#-contributing)

---

</div>

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Beautiful UI** | Glassmorphic design with vibrant gradients and smooth animations |
| 📝 **Full CRUD** | Create, read, update, and delete todos seamlessly |
| 🎯 **Priority Levels** | Organize tasks by low, medium, or high priority |
| 📅 **Due Dates** | Set deadlines and never miss important tasks |
| 🔍 **Filter Views** | View all, active, or completed tasks instantly |
| 📊 **Task Statistics** | Track your progress with real-time stats |
| 📱 **Responsive Design** | Works perfectly on desktop, tablet, and mobile |
| ✏️ **Inline Editing** | Edit tasks directly without opening modals |
| 🗑️ **Bulk Actions** | Clear all completed tasks at once |

</div>

---

<div align="center">

## 🚀 Tech Stack

</div>

### Frontend
```
⚛️  React (v18+)          - Modern UI library
⚡  Vite                  - Lightning-fast build tool
🌐  Axios                 - Promise-based HTTP client
🎨  Custom CSS            - Glassmorphism & animations
🔤  Google Fonts (Inter)  - Modern typography
```

### Backend
```
🟢  Node.js               - JavaScript runtime
🚂  Express.js            - Web application framework
🍃  MongoDB               - NoSQL database
📦  Mongoose              - MongoDB object modeling
🔗  CORS                  - Cross-origin resource sharing
```

---

<div align="center">

## 📋 Prerequisites

</div>

Before running this application, ensure you have:

| Requirement | Version | Download Link |
|-------------|---------|---------------|
| **Node.js** | v14+ | [Download](https://nodejs.org/) |
| **MongoDB** | v4+ | [Download](https://www.mongodb.com/try/download/community) |
| **npm/yarn** | Latest | Comes with Node.js |

---

<div align="center">

## 🛠️ Installation & Setup

</div>

### **Step 1: Install MongoDB**

<details>
<summary><b>Windows Installation</b></summary>

1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Run the installer and follow the setup wizard
3. Start MongoDB service from Services panel
4. Verify installation: `mongod --version`

</details>

<details>
<summary><b>macOS Installation</b></summary>

```bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Verify installation
mongod --version
```

</details>

<details>
<summary><b>Linux Installation</b></summary>

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install mongodb

# Start MongoDB service
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Verify installation
mongod --version
```

</details>

---

### **Step 2: Clone & Setup Backend**

```bash
# Navigate to the project root
cd path/to/project

# Install backend dependencies
npm install

# Create environment file (if not exists)
# Add: MONGODB_URI=mongodb://localhost:27017/taskflow

# Start the backend server
npm run dev
```

✅ Backend server will run on **`http://localhost:5000`**

---

### **Step 3: Setup Frontend**

```bash
# Open a new terminal and navigate to client folder
cd path/to/project/client

# Install frontend dependencies
npm install

# Start the frontend development server
npm run dev
```

✅ Frontend will run on **`http://localhost:5173`**

---

<div align="center">

## 🎯 Usage

</div>

### **Quick Start Guide**

1. **🍃 Start MongoDB**  
   Ensure MongoDB service is running on your system

2. **🔧 Start Backend**  
   Run `npm run dev` in the root directory

3. **⚛️ Start Frontend**  
   Run `npm run dev` in the client directory

4. **🌐 Open Browser**  
   Navigate to `http://localhost:5173`

5. **✨ Start Creating Tasks!**  
   Click the "+" button to add your first todo

---

<div align="center">

## 📁 Project Structure

</div>

```
test/
│
├── 📂 client/                    # Frontend React application
│   ├── 📂 src/
│   │   ├── 📂 components/       # React components
│   │   │   ├── 📄 AddTodo.jsx
│   │   │   ├── 🎨 AddTodo.css
│   │   │   ├── 📄 TodoItem.jsx
│   │   │   ├── 🎨 TodoItem.css
│   │   │   ├── 📄 FilterBar.jsx
│   │   │   └── 🎨 FilterBar.css
│   │   ├── 📂 services/         # API service layer
│   │   │   └── 📄 api.js
│   │   ├── 📄 App.jsx           # Main App component
│   │   ├── 🎨 App.css
│   │   ├── 🎨 index.css         # Global styles & design system
│   │   └── 📄 main.jsx          # Entry point
│   ├── 📄 index.html
│   ├── ⚙️ vite.config.js
│   └── 📦 package.json
│
├── 📂 models/                   # MongoDB models
│   └── 📄 Todo.js
│
├── 📄 server.js                 # Express server
├── 🔐 .env                      # Environment variables
└── 📦 package.json              # Backend dependencies
```

---

<div align="center">

## 🎨 Design Features

</div>

Our application features a **premium, modern design** with attention to detail:

| Design Element | Implementation |
|----------------|----------------|
| 🪟 **Glassmorphism** | Frosted glass effect with backdrop blur |
| 🌈 **Gradient Backgrounds** | Animated radial gradients with vibrant colors |
| ✨ **Smooth Animations** | Fade-in, slide-in, and scale transitions |
| 🎯 **Hover Effects** | Interactive button and card micro-interactions |
| 📜 **Custom Scrollbar** | Styled scrollbar matching the theme |
| 🏷️ **Priority Badges** | Color-coded priority indicators (Low/Medium/High) |
| 📱 **Responsive Layout** | Mobile-first design approach |
| 🎭 **Dark Theme** | Eye-friendly dark color palette |

---

<div align="center">

## 🔌 API Endpoints

</div>

### **RESTful API Documentation**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Retrieve all todos |
| `GET` | `/api/todos/:id` | Retrieve a single todo by ID |
| `POST` | `/api/todos` | Create a new todo |
| `PATCH` | `/api/todos/:id` | Update an existing todo |
| `DELETE` | `/api/todos/:id` | Delete a specific todo |
| `DELETE` | `/api/todos/completed/all` | Delete all completed todos |

### **Example Request**

```javascript
// Create a new todo
POST /api/todos
Content-Type: application/json

{
  "text": "Complete project documentation",
  "priority": "high",
  "dueDate": "2025-11-30"
}
```

---

<div align="center">

## 🌟 Key Components

</div>

### **AddTodo Component**
- ➕ Expandable form for creating new tasks
- 🎯 Priority selection (Low/Medium/High)
- 📅 Due date picker with calendar
- ✅ Form validation and error handling
- 🎨 Smooth expand/collapse animations

### **TodoItem Component**
- ✏️ Inline editing capability
- ✅ Completion toggle with animation
- 🏷️ Priority badge display
- 🗑️ Delete functionality with confirmation
- 🎭 Smooth hover and transition effects

### **FilterBar Component**
- 📊 Real-time task statistics
- 🔍 Filter buttons (All/Active/Completed)
- 🗑️ Clear completed tasks button
- 📈 Progress tracking visualization

---

<div align="center">

## 🐛 Troubleshooting

</div>

<details>
<summary><b>❌ Backend won't start</b></summary>

**Possible Solutions:**
- ✅ Ensure MongoDB is running (`mongod` command)
- ✅ Check if port 5000 is available
- ✅ Verify `.env` file exists with correct MongoDB URI
- ✅ Check Node.js version (should be v14+)
- ✅ Delete `node_modules` and run `npm install` again

</details>

<details>
<summary><b>❌ Frontend can't connect to backend</b></summary>

**Possible Solutions:**
- ✅ Ensure backend is running on port 5000
- ✅ Check CORS settings in `server.js`
- ✅ Verify API URL in `client/src/services/api.js`
- ✅ Check browser console for error messages
- ✅ Ensure no firewall is blocking the connection

</details>

<details>
<summary><b>❌ MongoDB connection error</b></summary>

**Possible Solutions:**
- ✅ Start MongoDB service
- ✅ Check MongoDB URI in `.env` file
- ✅ Ensure MongoDB is installed correctly
- ✅ Verify MongoDB is running on default port 27017
- ✅ Check MongoDB logs for errors

</details>

<details>
<summary><b>❌ Dependencies installation fails</b></summary>

**Possible Solutions:**
- ✅ Clear npm cache: `npm cache clean --force`
- ✅ Delete `package-lock.json` and `node_modules`
- ✅ Run `npm install` again
- ✅ Try using yarn instead: `yarn install`
- ✅ Check your internet connection

</details>

---

<div align="center">

## 📸 Screenshots

</div>

> **Note:** Add your application screenshots here to showcase the beautiful UI!

```
[Main Dashboard]  [Add Todo Form]  [Filter Views]  [Mobile View]
```

---

<div align="center">

## 🚀 Future Enhancements

</div>

- [ ] � User authentication and authorization
- [ ] 🌙 Dark/Light theme toggle
- [ ] 🔔 Push notifications for due dates
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🏷️ Tags and categories
- [ ] 🔍 Advanced search functionality
- [ ] 📊 Analytics dashboard
- [ ] 🌐 Multi-language support
- [ ] ☁️ Cloud sync across devices
- [ ] 🎨 Customizable themes

---

<div align="center">

## �📝 License

</div>

```
MIT License

Copyright (c) 2025 phoenixdev100

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

MIT License - Feel free to use this project for learning or personal use!
```

---

<div align="center">

## 🤝 Contributing

</div>

Contributions are **welcome and appreciated**! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a new branch (`git checkout -b feature/AmazingFeature`)
3. ✍️ **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 **Open** a Pull Request

### **Code of Conduct**
Please be respectful and constructive in all interactions.

---

<div align="center">

## 💖 Acknowledgments

</div>

- **React Team** - For the amazing React library
- **MongoDB** - For the powerful database
- **Vite** - For the blazing-fast build tool
- **Google Fonts** - For the beautiful Inter font
- **Community** - For inspiration and support

---

<div align="center">

## 📧 Contact

</div>

**Developer:** phoenixdev100  
**Project Link:** [TaskFlow Repository](https://github.com/phoenixdev100/to-do-list-crud)

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Built with ❤️ and ☕ by phoenixdev100**

*Happy Task Managing! 🚀*

</div>
