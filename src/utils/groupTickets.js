export function groupTickets(tickets, grouping, users = []) {
  const grouped = {};

  // Map user IDs to user names
  const userMap = users.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  tickets.forEach(ticket => {
    let group;

    if (grouping === 'user') {
      group = userMap[ticket.userId] || 'Unknown User'; // Group by user name
    } else {
      group = ticket[grouping]; // Group by status or priority
    }

    if (!grouped[group]) {
      grouped[group] = [];
    }

    grouped[group].push(ticket);
  });

  return grouped;
}
