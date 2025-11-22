import { useState } from 'react';
import PrioritySelector from './PrioritySelector';
import './AddTodo.css';

const AddTodo = ({ onAdd }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd({
            title: title.trim(),
            description: description.trim(),
            priority,
            dueDate: dueDate || null,
        });

        // Reset form
        setTitle('');
        setDescription('');
        setPriority('medium');
        setDueDate('');
        setIsExpanded(false);
    };

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        setPriority('medium');
        setDueDate('');
        setIsExpanded(false);
    };

    if (!isExpanded) {
        return (
            <div className="add-todo-compact glass-card scale-in" onClick={() => setIsExpanded(true)}>
                <div className="add-todo-placeholder">
                    <span className="add-icon">➕</span>
                    <span>Add a new task...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="add-todo-form glass-card scale-in">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3>✨ Create New Task</h3>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="What needs to be done?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                </div>

                <div className="form-group">
                    <textarea
                        className="input-field"
                        placeholder="Add description (optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Priority</label>
                        <PrioritySelector
                            value={priority}
                            onChange={setPriority}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Due Date</label>
                        <input
                            type="date"
                            className="input-field"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary" disabled={!title.trim()}>
                        ✓ Add Task
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                        ✕ Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
