import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { Typography } from 'antd'

interface Pokemon {
  id: number
  name: string
}

interface FetchPokemonsResponse {
  count: number
  results: Pokemon[]
}

const { Text } = Typography

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchPokemonsResponse>('/xpokemon')
      .then((response) => setPokemons(response.data.results))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <>
      {error && <Text type='danger'>{error}</Text>}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}

export default PokemonGrid
