import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";

function DisplayOptions({ selectedGrouping, selectedOrdering, onGroupingChange, onOrderingChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="display-options">
      <button className="display-button" onClick={toggleDropdown}>
         <div className="dis">
          <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Display.svg` } alt="display"></img>
          <label>Display <RxCaretDown className='r-icon' /></label>
         </div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <label>Grouping </label>
            <select value={selectedGrouping} onChange={onGroupingChange}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-section">
            <label>Ordering </label>
            <select value={selectedOrdering} onChange={onOrderingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
