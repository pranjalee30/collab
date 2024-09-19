import React, { useState, useEffect, useRef } from 'react';
import { RxCaretDown } from "react-icons/rx";


function DisplayOptions({ selectedGrouping, selectedOrdering, onGroupingChange, onOrderingChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown on hover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown if the click is outside the dropdown
    }
  };

  // Set up the event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="display-options" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      <button className="display-button">
        <div className="dis">
          <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Display.svg`} alt="display" />
          <label>Display <RxCaretDown className='r-icon' /></label>
        </div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <label>Grouping</label>
            <select value={selectedGrouping} onChange={onGroupingChange}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-section">
            <label>Ordering</label>
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
