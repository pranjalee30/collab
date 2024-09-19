export function groupTickets(tickets, grouping, users) {
  const grouped = {};


  const userMap = {};
  users.forEach(user => {
    userMap[user.id] = user.name;
  });

  tickets.forEach(ticket => {
    let group;

    if (grouping === 'user') {
      group = userMap[ticket.userId]; 
    } else {
      group = ticket[grouping]; 
    }

    if (!grouped[group]) {
      grouped[group] = [];
    }
    grouped[group].push({ ticket});
    
  });

  return grouped;
}

