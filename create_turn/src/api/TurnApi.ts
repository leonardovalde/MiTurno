export async function createTurn(userId, shiftTime, description, providerId) {
    const response = await fetch('https://miturnoback.onrender.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, shiftTime, description, providerId }),       
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    const data = await response.json();
    return data;
  }