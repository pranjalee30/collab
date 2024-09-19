import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayOptions from './components/DisplayOptions';
import { fetchTickets } from './api/fetchTickets'; // Assuming fetchTickets API call

function App() {
  // Initializing state variables
  const [tickets, setTickets] = useState([]); // Tickets state
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status'); // Grouping based on localStorage
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority'); // Sorting based on localStorage

  // Fetch data from API on component mount
  useEffect(() => {
    fetchTickets().then(data => {
      setTickets(data); // Set the fetched tickets
    }).catch(err => {
      console.error("Failed to fetch tickets:", err); // Handle errors if necessary
    });
  }, []);

  // Handle grouping changes
  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping); // Save grouping option to localStorage
  };

  // Handle sorting changes
  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting); // Save sorting option to localStorage
  };

  return (
    <div className="app">
        <DisplayOptions
          selectedGrouping={grouping}
          selectedOrdering={sorting}
          onGroupingChange={(e) => handleGroupingChange(e.target.value)} // Pass new grouping
          onOrderingChange={(e) => handleSortingChange(e.target.value)} // Pass new sorting
        />
      <div >
        <div className="controls">
          <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
        </div>
      </div>
    </div>
  );
}

export default App;
