export async function getListShift(userId) {
  const response = await fetch('https://miturnoback.onrender.com/api/shifts/getShifts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: userId }), // Ajusta el cuerpo de la solicitud según los requisitos de la API
  });

  if (!response.ok) {
    throw new Error('Error getting list of shifts');
  }

  const data = await response.json();
  return data;
}

