import './PrioritySelector.css';

const PrioritySelector = ({ value, onChange, className = '' }) => {
    const priorities = [
        { value: 'low', label: 'Low', color: '#4facfe', emoji: '🟢' },
        { value: 'medium', label: 'Medium', color: '#f5576c', emoji: '🟡' },
        { value: 'high', label: 'High', color: '#fee140', emoji: '🔴' },
    ];

    return (
        <div className={`priority-selector ${className}`}>
            {priorities.map((priority) => (
                <button
                    key={priority.value}
                    type="button"
                    className={`priority-option ${value === priority.value ? 'active' : ''}`}
                    onClick={() => onChange(priority.value)}
                    data-priority={priority.value}
                >
                    <span className="priority-indicator" style={{ backgroundColor: priority.color }}></span>
                    <span className="priority-text">{priority.label}</span>
                </button>
            ))}
        </div>
    );
};

export default PrioritySelector;
