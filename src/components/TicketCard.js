import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {ticket.user}</p>
    </div>
  );
};

export default TicketCard;
