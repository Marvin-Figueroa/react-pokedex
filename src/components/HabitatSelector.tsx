import { Select } from 'antd'

import { ItemResource } from '../hooks/usePokemons'
import { PokemonHabitat } from '../data/pokemonHabitats'

interface Props {
  options: ItemResource[]
  onHabitatSelect: (habitat: PokemonHabitat) => void
}

const HabitatSelector = ({ options, onHabitatSelect }: Props) => {
  return (
    <Select
      placeholder={<h4>Habitat</h4>}
      style={{ width: 200, marginBottom: '20px' }}
      options={options.map((option) => ({
        value: option.name,
        label: option.name[0].toUpperCase() + option.name.substring(1)
      }))}
      onChange={onHabitatSelect}
    />
  )
}

export default HabitatSelector
