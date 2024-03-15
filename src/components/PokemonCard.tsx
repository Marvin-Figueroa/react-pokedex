import { Card, Typography } from 'antd'
import { Pokemon } from '../hooks/usePokemons'

interface Props {
  pokemon: Pokemon
}

const { Title } = Typography

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={pokemon.name}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
      }>
      <Title level={4}>
        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      </Title>
    </Card>
  )
}

export default PokemonCard
