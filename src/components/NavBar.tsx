import { Flex, Image, Space, Switch, Typography } from 'antd'
import Logo from '../assets/pokedex-logo.png'

const { Text } = Typography

interface Props {
  isDarkMode: boolean
  onToggleDarkMode: () => void
}

const NavBar = ({ onToggleDarkMode, isDarkMode }: Props) => {
  return (
    <Flex justify='space-between' align='center' gap='large'>
      <Space>
        <Image preview={false} width={100} src={Logo} />
        <Text>NavBar</Text>
      </Space>
      <Space>
        <Text>Dark Mode</Text>
        <Switch checked={isDarkMode} onChange={onToggleDarkMode} />
      </Space>
    </Flex>
  )
}

export default NavBar
