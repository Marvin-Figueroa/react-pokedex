import { Col, Row, Typography } from 'antd'
import usePokemons from '../hooks/usePokemons'
import PokemonCard from './PokemonCard'

const { Text } = Typography

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons()

  return (
    <>
      {error && <Text type='danger'>{error}</Text>}
      <Row gutter={[15, 15]}>
        {pokemons.map((pokemon) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default PokemonGrid
