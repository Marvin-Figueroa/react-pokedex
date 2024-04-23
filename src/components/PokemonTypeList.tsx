import { Avatar, Button, List } from 'antd'
import pokemonTypes from '../data/pokemonTypes'
import { PokemonType } from '../hooks/usePokemons'

interface Props {
  onSelectType: (type: PokemonType) => void
}

const PokemonTypeList = ({ onSelectType }: Props) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={pokemonTypes}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            avatar={<Avatar src={item.image} />}
            title={
              <Button
                onClick={() => onSelectType(item)}
                type='link'
                style={{ paddingTop: '8px' }}>
                {item.name[0].toUpperCase() + item.name.substring(1)}
              </Button>
            }
          />
        </List.Item>
      )}
    />
  )
}

export default PokemonTypeList
