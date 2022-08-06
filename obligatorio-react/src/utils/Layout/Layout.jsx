import { Outlet } from 'react-router-dom'
import Header from '../../components/Screens/Dashboard/Header'

const Layout = () => {
  return (
    <div className='container-fluid dashboard'>
      <Header />
      <div className='col-9 mx-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
