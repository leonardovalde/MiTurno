export async function registerUser(identifier, firstName, lastName, organization, address, email, password, role = 'user') {
  const response = await fetch('https://miturnoback.onrender.com/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, first_name: firstName, last_name: lastName, organization, address, email, password, role }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }
  const data = await response.json();
  return data;
}