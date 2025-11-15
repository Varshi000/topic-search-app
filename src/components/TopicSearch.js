import React, { useState, useMemo, useCallback } from 'react';
import './TopicSearch.css'; // Import CSS file

// Sample topics data with more variety
const sampleTopics = [
  { id: 1, name: "Thermodynamics", category: "Physics", description: "Study of heat and energy transfer" },
  { id: 2, name: "Quantum Mechanics", category: "Physics", description: "Behavior of particles at atomic scales" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry", description: "Study of carbon-based compounds" },
  { id: 4, name: "Calculus", category: "Mathematics", description: "Mathematics of continuous change" },
  { id: 5, name: "Cell Biology", category: "Biology", description: "Study of cellular structure and function" },
  { id: 6, name: "Genetics", category: "Biology", description: "Study of genes and heredity" },
  { id: 7, name: "Electromagnetism", category: "Physics", description: "Study of electromagnetic forces" },
  { id: 8, name: "Algorithms", category: "Computer Science", description: "Step-by-step computational procedures" }
];

// Custom hook for search functionality
const useSearch = (topics) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = useMemo(() => {
    if (!searchTerm.trim()) return topics;
    
    return topics.filter(topic =>
      topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [topics, searchTerm]);

  return { searchTerm, setSearchTerm, filteredTopics };
};

// Topic Card Component
const TopicCard = React.memo(({ topic }) => (
  <div className="topic-card">
    <div className="card-header">
      <h3 className="topic-name">{topic.name}</h3>
      <span className="category-badge">{topic.category}</span>
    </div>
    <p className="topic-description">{topic.description}</p>
    <div className="card-footer">
      <span className="topic-id">ID: {topic.id}</span>
    </div>
  </div>
));

// Search Input Component
const SearchInput = React.memo(({ searchTerm, onSearchChange }) => (
  <div className="search-container">
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search topics by name or category..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
        aria-label="Search topics"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange({ target: { value: '' } })}
          className="clear-button"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  </div>
));

// Results Info Component
const ResultsInfo = React.memo(({ count, total, searchTerm }) => (
  <div className="results-info">
    {searchTerm ? (
      <p>
        Found <strong>{count}</strong> of <strong>{total}</strong> topics 
        matching "<strong>{searchTerm}</strong>"
      </p>
    ) : (
      <p>Showing all <strong>{total}</strong> topics</p>
    )}
  </div>
));

// Main TopicSearch Component
const TopicSearch = () => {
  const [topics] = useState(sampleTopics);
  const { searchTerm, setSearchTerm, filteredTopics } = useSearch(topics);
  
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [setSearchTerm]);

  return (
    <div className="topic-search-container">
      <header className="app-header">
        <h1 className="app-title">📚 Topic Catalogue</h1>
        <p className="app-subtitle">Browse and search through our collection of topics</p>
      </header>
      
      <SearchInput 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
      />
      
      <ResultsInfo 
        count={filteredTopics.length} 
        total={topics.length} 
        searchTerm={searchTerm} 
      />

      <div className="topics-grid">
        {filteredTopics.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No topics found</h3>
            <p>Try adjusting your search terms or browse all topics</p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="show-all-button"
              >
                Show All Topics
              </button>
            )}
          </div>
        ) : (
          filteredTopics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))
        )}
      </div>
    </div>
  );
};

export default TopicSearch;