import { Layout } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import './index.css'

function App() {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: 'orange'
        }}>
        Header
      </Header>
      <Layout>
        <Sider
          breakpoint='sm'
          collapsedWidth='0'
          trigger={null}
          width='25%'
          style={{
            backgroundColor: 'dodgerblue'
          }}>
          Sider
        </Sider>
        <Content
          style={{
            backgroundColor: 'gold'
          }}>
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App

