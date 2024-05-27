export async function showListUsers() {
  const response = await fetch('https://miturnoback.onrender.com/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al obtener la lista de usuarios');
  }

  const data = await response.json();
  return data;
}
