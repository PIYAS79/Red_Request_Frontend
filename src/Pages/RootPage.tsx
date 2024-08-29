import { Outlet } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import Logo from '../Components/Others_Components/Logo';
import { menuArr } from '../Global/MenuArray';
import BloodButton from '../Components/Others_Components/BloodButton';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { removeUser } from '../redux/features/auth.slice';
import generateAnt_D_Routes from '../Routes/ant.routes';
import baseRoutes from '../Routes/base.routes';
const { Header, Content, Footer } = Layout;



const items = generateAnt_D_Routes(baseRoutes)


const RootPage = () => {
  const dispatch = useAppDispatch();
  const { me } = useAppSelector(state => state.auth)

  const handleClickLogOut = () => {
    dispatch(removeUser());
  }

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
          backgroundColor: 'pink',
          padding:'.5rem'
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
          {me ?
            <Button onClick={handleClickLogOut} style={{ background: 'red', border: 'none', color: 'white' }}>Logout</Button>
            :
            <BloodButton link='/login' text='Login' />
          }

        </div>


      </Header>





      <Content>
        <Outlet />
      </Content>

    </Layout>
  );
}

export default RootPage