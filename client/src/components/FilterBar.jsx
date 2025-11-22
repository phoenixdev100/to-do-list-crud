import './FilterBar.css';

const FilterBar = ({ filter, setFilter, stats, onClearCompleted }) => {
    return (
        <div className="filter-bar glass-card fade-in">
            <div className="stats-section">
                <div className="stat-item">
                    <span className="stat-value">{stats.total}</span>
                    <span className="stat-label">Total</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value active-count">{stats.active}</span>
                    <span className="stat-label">Active</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value completed-count">{stats.completed}</span>
                    <span className="stat-label">Completed</span>
                </div>
            </div>

            <div className="filter-buttons">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            {stats.completed > 0 && (
                <button className="btn btn-danger clear-btn" onClick={onClearCompleted}>
                    🗑️ Clear Completed
                </button>
            )}
        </div>
    );
};

export default FilterBar;
