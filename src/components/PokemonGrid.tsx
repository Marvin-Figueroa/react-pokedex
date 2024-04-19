import { Col, Row, Typography } from 'antd'
import usePokemons from '../hooks/usePokemons'
import PokemonCard from './PokemonCard'
import PokemonCardSkeleton from './PokemonCardSkeleton'

const { Text } = Typography

const PokemonGrid = () => {
  const { pokemons, error, loading } = usePokemons()

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
