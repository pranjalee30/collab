import React from 'react';
import TicketCard from './TicketCard';
import { groupTickets } from '../utils/groupTickets';
import { sortTickets } from '../utils/sortTickets';  // Import the sorting function
import { priorityMap } from '../utils/priorityMap';

function KanbanBoard({ tickets, grouping, users, sorting }) {
  // Group tickets by status, priority, or user
  const groupedTickets = groupTickets(tickets, grouping, users);

  // Sort tickets based on the selected ordering (priority or title)
  const sortedGroupedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.keys(sortedGroupedTickets).map(group => (
        <div key={group} className="kanban-column">
           <div>
            <div className="kanban-column-header">
              {/* Display the number of tickets inline with the title */}
              <div className="kanban-card-count">
                <h2 className="kanban-column-title">{grouping === 'priority' ? priorityMap[group] : group} {/* Show priority name or group */}</h2>
                <h5 className='kanban-column-count'>{groupedTickets[group].length}</h5>
              </div>
              <div class="added">
                <img src={`${process.env.PUBLIC_URL}/icons_FEtask/add.svg`} alt="add"/>
                <img src={`${process.env.PUBLIC_URL}/icons_FEtask/3 dot menu.svg`} alt="3 dot menu"/>
              </div>
            </div>
            </div>
          <div className="kanban-cards">
            {sortedGroupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
