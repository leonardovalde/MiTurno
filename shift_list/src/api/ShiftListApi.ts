export async function getListShift() {
  const response = await fetch('https://miturnoback.onrender.com/api/shifts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error getting list of shifts');
  }

  const data = await response.json();
  return data;
}
