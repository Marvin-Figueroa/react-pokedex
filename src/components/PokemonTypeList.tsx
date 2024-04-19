import usePokemonTypes from '../hooks/usePokemonTypes'

const PokemonTypeList = () => {
  const { data } = usePokemonTypes()

  return (
    <ul>
      {data.map((type) => (
        <li key={type.name}>{type.name}</li>
      ))}
    </ul>
  )
}

export default PokemonTypeList
