import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransacciones } from '../../../../../app/slices/transaccionesSlice'
import { getTransacciones} from '../../../../../services/crypto'
import TableItem from './TableItem'
import './ListTrans.css'

const ListTrans = () => {

    const dispatch = useDispatch()
    const transacciones = useSelector(state => state.transacciones.transacciones)
    const user = useSelector(state => state.user.user)
    

  useEffect(() => {
    try {
      ;(async () => {
        const response = await getTransacciones(user.id, user.apiKey)
        dispatch(setTransacciones(response.transacciones))
      })()
    } catch (error) { 
      console.error(error)
    }
  })



  return (
    
    <table className='table table-hover'>

        <thead>
    <tr>
    <th scope='col'>Id</th>
          <th scope='col'>Tipo Operacion</th>
          <th scope='col'>Moneda</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Valor Actual</th>
    </tr>
  </thead>
      
      <tbody>
      
        {transacciones.map(transaccion => (
         
          <TableItem transaccion={transaccion} key={transaccion.id} />
        ))}
      </tbody>
    </table>
    
  )
}
export default ListTrans
