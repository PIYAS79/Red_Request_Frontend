import { Outlet } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import Logo from '../Components/Others_Components/Logo';
import { menuArr } from '../Global/MenuArray';
import BloodButton from '../Components/Others_Components/BloodButton';
const { Header, Content, Footer } = Layout;



const items = menuArr.map((one) => {
  return {
    key: one.key,
    label: one.value
  }
});


const RootPage = () => {


  return (
    <Layout style={{ height: '100%' }}>
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
          <BloodButton link='/login' text='Login' />
        </div>


      </Header>





      <Content>
        <Outlet />
      </Content>

    </Layout>
  );
}

export default RootPage