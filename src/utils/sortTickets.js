export function sortTickets(groupedTickets, sorting) {
  Object.keys(groupedTickets).forEach(group => {
    groupedTickets[group].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;  // Descending order of priority (Urgent -> High -> Medium -> Low -> No Priority)
      } else if (sorting === 'title') {
        return a.title.localeCompare(b.title);  // Alphabetical order for title (A -> Z)
      }
      return 0;  // Default case, no sorting
    });
  });

  return groupedTickets;
}
