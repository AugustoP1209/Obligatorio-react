import './App.css';
import 'bootstrap-css-only';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import { useSelector } from 'react-redux'
import AgregarTrans from '../Screens/Dashboard/AgregarTrans';
import MontoFinalInversiones from '../Screens/Dashboard/MontoFinalInversiones';
import {Route,Routes} from 'react-router-dom'
import PrivateRoute from '../../utils/PrivateRoute'
import Layout from '../../utils/Layout'



const App = () => {
  const userLogged = useSelector(state => state.user.user)

  return(
     
      
      <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route
          path='/dashboard'
          element={
            <PrivateRoute user={userLogged}>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path='' element={<Dashboard />} />
          <Route path='list' element={<Dashboard />} />
          <Route path='AgregarTrans' element={<AgregarTrans />} />
        <Route path='montofinal' element={<MontoFinalInversiones />} />  
          
        </Route>
      </Routes>
    </div>
  ) 
}

export default App;
