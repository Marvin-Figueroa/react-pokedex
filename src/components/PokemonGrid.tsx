import { Col, Row, Typography } from 'antd'
import usePokemons, { PokemonType } from '../hooks/usePokemons'
import PokemonCard from './PokemonCard'
import PokemonCardSkeleton from './PokemonCardSkeleton'

const { Text } = Typography

interface Props {
  selectedPokemonType: PokemonType | null
}

const PokemonGrid = ({ selectedPokemonType }: Props) => {
  const { pokemons, error, loading } = usePokemons(selectedPokemonType)

  return (
    <>
      {error && <Text type='danger'>{error}</Text>}
      <Row gutter={[15, 15]}>
        {loading
          ? // If loading, show Skeletons
            Array.from({ length: 20 }).map((_, index) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={6} key={index}>
                <PokemonCardSkeleton key={index} />
              </Col>
            ))
          : // If not loading, render Pokemon cards
            pokemons.map((pokemon) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={6} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </Col>
            ))}
      </Row>
    </>
  )
}

export default PokemonGrid
