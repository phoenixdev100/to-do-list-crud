# Contributing to TaskFlow

First off, thank you for considering contributing to TaskFlow! 🎉

It's people like you that make TaskFlow such a great tool. We welcome contributions from everyone, whether it's a bug report, feature suggestion, documentation improvement, or code contribution.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to phoenixdev100.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 11, macOS 14]
 - Browser: [e.g. Chrome 120, Firefox 121]
 - Node.js version: [e.g. 18.17.0]
 - MongoDB version: [e.g. 6.0.5]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Features

Feature suggestions are tracked as GitHub issues. When creating a feature suggestion:

**Feature Request Template:**
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes** (following our commit guidelines)
6. **Push to your fork** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request**

---

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (v4+)
- npm or yarn

### Setup Steps

1. **Clone your fork:**
```bash
git clone https://github.com/YOUR_USERNAME/to-do-list-crud.git
cd to-do-list-crud
```

2. **Install backend dependencies:**
```bash
npm install
```

3. **Install frontend dependencies:**
```bash
cd client
npm install
cd ..
```

4. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/taskflow
PORT=5000
NODE_ENV=development
```

5. **Start MongoDB:**
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

6. **Run the development servers:**

Terminal 1 (Backend):
```bash
npm run dev
```

Terminal 2 (Frontend):
```bash
cd client
npm run dev
```

---

## 💻 Coding Standards

### JavaScript/React Style Guide

We follow industry-standard best practices:

#### General Rules
- Use **ES6+** syntax
- Use **const** for variables that won't be reassigned, **let** otherwise
- Use **arrow functions** for callbacks
- Use **template literals** for string concatenation
- Use **async/await** instead of promise chains
- Keep functions **small and focused** (single responsibility)

#### React Specific
```javascript
// ✅ Good - Functional components with hooks
import { useState, useEffect } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    // Side effects here
  }, []);
  
  return (
    <div className="todo-item">
      {/* Component JSX */}
    </div>
  );
};

export default TodoItem;
```

```javascript
// ❌ Avoid - Class components (unless necessary)
class TodoItem extends React.Component {
  // ...
}
```

#### Naming Conventions
- **Components:** PascalCase (`TodoItem.jsx`)
- **Functions/Variables:** camelCase (`handleSubmit`, `todoList`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **CSS Classes:** kebab-case (`todo-item`, `filter-bar`)
- **Files:** PascalCase for components, camelCase for utilities

#### Code Organization
```javascript
// Import order:
// 1. React/External libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 2. Internal components
import TodoItem from './TodoItem';
import FilterBar from './FilterBar';

// 3. Services/Utils
import { fetchTodos } from '../services/api';

// 4. Styles
import './App.css';

// 5. Constants
const API_URL = 'http://localhost:5000/api';
```

### CSS Style Guide

```css
/* ✅ Good - BEM-like naming, organized properties */
.todo-item {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  padding: 1rem;
  margin-bottom: 0.5rem;
  
  /* Visual */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  
  /* Animation */
  transition: all 0.3s ease;
}

.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Backend Style Guide

```javascript
// ✅ Good - RESTful routes, error handling
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching todos', 
      error: error.message 
    });
  }
});

module.exports = router;
```

---

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation only changes
- **style:** Changes that don't affect code meaning (formatting, etc.)
- **refactor:** Code change that neither fixes a bug nor adds a feature
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **chore:** Changes to build process or auxiliary tools

### Examples

```bash
# Feature
git commit -m "feat(todo): add priority filter functionality"

# Bug fix
git commit -m "fix(api): resolve CORS issue with DELETE requests"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Style
git commit -m "style(todo-item): improve hover animation timing"

# Refactor
git commit -m "refactor(api): extract error handling to middleware"
```

### Commit Message Rules

- Use the **imperative mood** ("add feature" not "added feature")
- **Don't capitalize** the first letter
- **No period** at the end
- Keep the subject line **under 50 characters**
- Wrap the body at **72 characters**
- Use the body to explain **what and why** vs. how

---

## 🔄 Pull Request Process

### Before Submitting

1. ✅ **Test your changes** thoroughly
2. ✅ **Update documentation** if needed
3. ✅ **Follow coding standards**
4. ✅ **Write meaningful commit messages**
5. ✅ **Ensure no console errors or warnings**
6. ✅ **Check responsive design** (if UI changes)

### PR Template

When you create a PR, please include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran and how to reproduce them.

## Screenshots (if applicable)
Add screenshots to demonstrate the changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes thoroughly
```

### Review Process

1. At least **one maintainer** must approve the PR
2. All **CI checks** must pass
3. **No merge conflicts** with the main branch
4. **Address all review comments** before merging

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, test the following:

**Frontend:**
- [ ] Add a new todo
- [ ] Edit an existing todo
- [ ] Mark todo as complete/incomplete
- [ ] Delete a todo
- [ ] Filter todos (All/Active/Completed)
- [ ] Clear completed todos
- [ ] Test on different screen sizes
- [ ] Check for console errors

**Backend:**
- [ ] All API endpoints return correct responses
- [ ] Error handling works properly
- [ ] Database operations complete successfully
- [ ] CORS is configured correctly

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## ❓ Questions?

If you have questions, feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers

---

**Thank you for contributing to TaskFlow! 🚀**

Every contribution, no matter how small, is valued and appreciated.
