export async function getCharacters() {
  const response = await fetch(
    'https://starwars-databank-server.vercel.app/api/v1/characters'
  )
  const data = await response.json()
  return data
}

export async function getCharacter(id: string) {
  const response = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/characters/${id}`
  )
  const data = await response.json()
  return data
}