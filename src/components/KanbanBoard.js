import React from 'react';
import TicketCard from './TicketCard';
import { groupTickets } from '../utils/groupTickets';
import { priorityMap } from '../utils/priorityMap';

function KanbanBoard({ tickets, grouping, users }) {
  // Group tickets by status, priority, or user
  const groupedTickets = groupTickets(tickets, grouping, users);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <div className="kanban-column-header">
            <h2 className="kanban-column-title">
              {grouping === 'priority' ? priorityMap[group] : group} {/* Show priority name or group */}
            </h2>
            {/* Display the number of tickets inline with the title */}
            <span className="kanban-card-count">
              {groupedTickets[group].length}
            </span>
          </div>
          <div className="kanban-cards">
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
