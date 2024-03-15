import { Card } from 'antd'
import { Pokemon } from '../hooks/usePokemons'
import PokemonTypeIconList from './PokemonTypeIconList'
import Meta from 'antd/es/card/Meta'

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card
      size='small'
      cover={
        <img
          alt={pokemon.name}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
      }>
      <Meta
        title={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        description={
          <>
            <p>
              <strong>Height: </strong>
              <span>{pokemon.height / 10} m</span>
            </p>
            <p>
              <strong>Weight: </strong>
              <span>{pokemon.weight / 10} kg</span>
            </p>
          </>
        }
      />
      <PokemonTypeIconList types={pokemon.types} />
    </Card>
  )
}

export default PokemonCard
