export async function getProviders() {
  try {
    const response = await fetch('https://miturnoback.onrender.com/api/provider', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error al obtener la lista de proveedores');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al procesar la solicitud GET');
  }
}
