import { ConfigProvider, theme, Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import './index.css'
import NavBar from './components/NavBar'
import { useState } from 'react'
import PokemonGrid from './components/PokemonGrid'
import PokemonTypeList from './components/PokemonTypeList'

const { defaultAlgorithm, darkAlgorithm } = theme

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
      }}>
      <Layout>
        <Header style={{ backgroundColor: isDarkMode ? '#2b1d11' : 'orange' }}>
          <NavBar
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        </Header>
        <Layout>
          <Sider
            breakpoint='sm'
            collapsedWidth='0'
            trigger={null}
            width='15%'
            style={{
              padding: '20px',
              backgroundColor: isDarkMode ? 'currentcolor' : '#fff'
            }}>
            <PokemonTypeList />
          </Sider>
          <Content>
            <PokemonGrid />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App

