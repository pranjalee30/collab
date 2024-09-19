import React from 'react';
function TicketCard({ ticket }) {
  const statusImageMap = {
    'Todo': 'To-do.svg',
    'In progress': 'in-progress.svg',
    'Backlog': 'Backlog.svg',
    'Done': 'Done.svg',
    'Cancelled': 'Cancelled.svg'
  };

  const statusImage = statusImageMap[ticket.status];
  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <div className="header">
        <h1 className="cam">{ticket.id}</h1>
        <div className="avatar-container">
         <img src={`${process.env.PUBLIC_URL}/Pranjal.jpg`} alt="User avatar" className="avatar" />
         <div className="status"></div>
        </div>
      </div>
      <div className="status-image-container">
        <img src={`${process.env.PUBLIC_URL}/icons_FEtask/${statusImage}`} alt={ticket.status} className="status-image"/>
        <h1 id="title" className="title">{ticket.title}</h1>
      </div>
      <div className="tag-section">
        <div className="tag-icon">
          <div className="priority-icon">!</div>
        </div>
        <div className="tag2">
          <div className='circle'></div>
          {ticket.tag}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
