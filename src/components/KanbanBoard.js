import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import DisplayOptions from './DisplayOptions';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div>
      <DisplayOptions setGrouping={setGrouping} setSorting={setSorting} />
      <div className="kanban-columns">
        {sortedTickets.map((group) => (
          <div key={group.title} className="kanban-column">
            <h2>{group.title}</h2>
            {group.tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper functions for grouping and sorting
const groupTickets = (tickets, grouping) => {
  let grouped = {};

  tickets.forEach((ticket) => {
    const groupKey = ticket[grouping];
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(ticket);
  });

  return Object.keys(grouped).map((key) => ({
    title: key,
    tickets: grouped[key],
  }));
};

const sortTickets = (groups, sorting) => {
  return groups.map((group) => ({
    ...group,
    tickets: group.tickets.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else if (sorting === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    }),
  }));
};

export default KanbanBoard;
