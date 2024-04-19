import usePokemonTypes from '../hooks/usePokemonTypes'

const PokemonTypeList = () => {
  const { pokemonTypes } = usePokemonTypes()

  return (
    <ul>
      {pokemonTypes.map((pokemonType) => (
        <li key={pokemonType.name}>{pokemonType.name}</li>
      ))}
    </ul>
  )
}

export default PokemonTypeList
