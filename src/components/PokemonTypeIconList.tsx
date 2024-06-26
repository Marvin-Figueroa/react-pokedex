import { Flex, Tooltip, Image } from 'antd'
import { PokemonTypeResource } from '../hooks/usePokemons'
import bug from '../assets/bug.svg'
import dark from '../assets/dark.svg'
import dragon from '../assets/dragon.svg'
import electric from '../assets/electric.svg'
import normal from '../assets/normal.svg'
import fairy from '../assets/fairy.svg'
import fighting from '../assets/fighting.svg'
import fire from '../assets/fire.svg'
import flying from '../assets/flying.svg'
import ghost from '../assets/ghost.svg'
import grass from '../assets/grass.svg'
import ground from '../assets/ground.svg'
import ice from '../assets/grass.svg'
import poison from '../assets/poison.svg'
import psychic from '../assets/psychic.svg'
import rock from '../assets/rock.svg'
import steel from '../assets/steel.svg'
import water from '../assets/water.svg'

interface Props {
  types: PokemonTypeResource[]
}

const iconMap: { [key: string]: string } = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water
}

const PokemonTypeIconList = ({ types }: Props) => {
  return (
    <Flex wrap='wrap' gap='middle'>
      {types.map(({ type }) => (
        <Tooltip
          key={type.name}
          placement='bottom'
          title={type.name[0].toUpperCase() + type.name.substring(1)}>
          <Image preview={false} width={30} src={iconMap[type.name]} />
        </Tooltip>
      ))}
    </Flex>
  )
}

export default PokemonTypeIconList
