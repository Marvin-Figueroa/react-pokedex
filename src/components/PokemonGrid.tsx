import { Typography } from 'antd'
import usePokemons from '../hooks/usePokemons'

const { Text } = Typography

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons()

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
