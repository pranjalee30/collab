export async function fetchTickets() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
  
      // Ensure data is an array or contains tickets array
      return Array.isArray(data) ? data : data.tickets || [];
    } catch (error) {
      console.error("Error fetching tickets:", error);
      return [];  // Return empty array on error
    }
  }