import { Avatar, List } from 'antd'
import pokemonTypes from '../data/pokemonTypes'

const PokemonTypeList = () => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={pokemonTypes}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
            avatar={<Avatar src={item.image} />}
            title={
              <a href='#'>
                {item.name[0].toUpperCase() + item.name.substring(1)}
              </a>
            }
          />
        </List.Item>
      )}
    />
  )
}

export default PokemonTypeList
