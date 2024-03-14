import { Flex, Image, Typography } from 'antd'
import Logo from '../assets/pokedex-logo.png'

const { Text } = Typography

const NavBar = () => {
  return (
    <Flex align='center' gap='large'>
      <Image width={100} src={Logo} />
      <Text>NavBar</Text>
    </Flex>
  )
}

export default NavBar
