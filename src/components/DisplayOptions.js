import React from 'react';
import './DisplayOptions.css';

const DisplayOptions = ({ setGrouping, setSorting }) => {
  return (
    <div className="display-options">
      <div>
        <label>Group by:</label>
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => setSorting(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayOptions;
