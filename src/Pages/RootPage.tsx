import { Outlet } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import Logo from '../Components/Logo';
import { menuArr } from '../Global/MenuArray';
const { Header, Content, Footer } = Layout;





const items = menuArr.map((one) => {
  return {
    key: one.key,
    label: one.value
  }
});







const RootPage = () => {


  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'pink'
        }}
      >
        <div className="demo-logo">
          <Logo size={40} />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: 'center', backgroundColor: 'pink' }}
        />

        <div>
          {/* <Button>LOGIN</Button> */}
          <Button danger>LOGOUT</Button>
        </div>


      </Header>





      <Content>
        <Outlet />
      </Content>




      <Footer style={{ textAlign: 'center' }}>
        Red Request ©{new Date().getFullYear()} Created by PiyasMahamudeAlif
      </Footer>
    </Layout>
  );
}

export default RootPage