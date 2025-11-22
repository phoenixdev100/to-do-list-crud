import { useState, useEffect } from 'react';
import { todoAPI } from './services/api';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await todoAPI.getAllTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      const newTodo = await todoAPI.createTodo(todoData);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  const handleUpdateTodo = async (id, updatedData) => {
    try {
      const updatedTodo = await todoAPI.updateTodo(id, updatedData);
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const handleClearCompleted = async () => {
    try {
      await todoAPI.deleteCompletedTodos();
      setTodos(todos.filter((todo) => !todo.completed));
    } catch (err) {
      setError('Failed to clear completed todos');
      console.error('Error clearing completed todos:', err);
    }
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Calculate stats
  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header fade-in">
          <div className="header-content">
            <h1 className="app-title">
              <span className="title-icon">✨</span>
              TaskFlow
            </h1>
            <p className="app-subtitle">Organize your life, one task at a time</p>
          </div>
        </header>

        <main className="app-main">
          <AddTodo onAdd={handleAddTodo} />

          {error && (
            <div className="error-message glass-card">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
              <button className="btn-icon" onClick={() => setError(null)}>
                ✕
              </button>
            </div>
          )}

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading your tasks...</p>
            </div>
          ) : (
            <>
              {todos.length > 0 && (
                <FilterBar
                  filter={filter}
                  setFilter={setFilter}
                  stats={stats}
                  onClearCompleted={handleClearCompleted}
                />
              )}

              <div className="todos-container">
                {filteredTodos.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">
                      {filter === 'completed' ? '🎉' : filter === 'active' ? '📝' : '🌟'}
                    </div>
                    <h3 className="empty-title">
                      {filter === 'completed'
                        ? 'No completed tasks yet'
                        : filter === 'active'
                          ? 'No active tasks'
                          : 'No tasks yet'}
                    </h3>
                    <p className="empty-description">
                      {filter === 'all'
                        ? 'Create your first task to get started!'
                        : `Switch to "All" to see all your tasks`}
                    </p>
                  </div>
                ) : (
                  filteredTodos.map((todo) => (
                    <TodoItem
                      key={todo._id}
                      todo={todo}
                      onUpdate={handleUpdateTodo}
                      onDelete={handleDeleteTodo}
                    />
                  ))
                )}
              </div>
            </>
          )}
        </main>

        <footer className="app-footer">
          <p>Built with ❤️ using React, Node.js & MongoDB</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
