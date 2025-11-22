import { useState } from 'react';
import PrioritySelector from './PrioritySelector';
import './TodoItem.css';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description);
    const [editedPriority, setEditedPriority] = useState(todo.priority);

    const handleToggleComplete = () => {
        onUpdate(todo._id, { ...todo, completed: !todo.completed });
    };

    const handleSaveEdit = () => {
        onUpdate(todo._id, {
            ...todo,
            title: editedTitle,
            description: editedDescription,
            priority: editedPriority,
        });
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedTitle(todo.title);
        setEditedDescription(todo.description);
        setEditedPriority(todo.priority);
        setIsEditing(false);
    };

    const formatDate = (date) => {
        if (!date) return null;
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    if (isEditing) {
        return (
            <div className="todo-item glass-card editing scale-in">
                <div className="todo-edit-form">
                    <input
                        type="text"
                        className="input-field"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        placeholder="Task title"
                        autoFocus
                    />
                    <textarea
                        className="input-field"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        placeholder="Description (optional)"
                    />
                    <PrioritySelector
                        value={editedPriority}
                        onChange={setEditedPriority}
                    />
                    <div className="edit-actions">
                        <button className="btn btn-primary" onClick={handleSaveEdit}>
                            💾 Save
                        </button>
                        <button className="btn btn-secondary" onClick={handleCancelEdit}>
                            ✕ Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`todo-item glass-card slide-in ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <div className="todo-checkbox-wrapper">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                </div>
                <div className="todo-details">
                    <h3 className="todo-title">{todo.title}</h3>
                    {todo.description && (
                        <p className="todo-description">{todo.description}</p>
                    )}
                    <div className="todo-meta">
                        <span className={`priority-badge priority-${todo.priority}`}>
                            {todo.priority}
                        </span>
                        {todo.dueDate && (
                            <span className="due-date">
                                📅 {formatDate(todo.dueDate)}
                            </span>
                        )}
                        <span className="created-date">
                            Created {formatDate(todo.createdAt)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="todo-actions">
                <button
                    className="btn-icon"
                    onClick={() => setIsEditing(true)}
                    title="Edit"
                >
                    ✏️
                </button>
                <button
                    className="btn-icon delete-btn"
                    onClick={() => onDelete(todo._id)}
                    title="Delete"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
