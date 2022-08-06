/*IA para sugerir operaciones: tomando como referencia la última
transacción que se haya hecho en cada moneda (en las que se
hayan hecho transacciones), verificar para informarle al usuario si es
un buen momento para comprar o vender. Si la última operación con
una moneda fue de compra y ahora el valor de la moneda es mayor
que al momento de la compra la aplicación sugerirá vender esa
cantidad de cripto monedas. Lo mismo se deberá hacer para el caso
inverso.
*/

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTransacciones } from '../../../../services/crypto'
import { getMonedas } from '../../../../services/crypto'


const IaOperaciones = () => {

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
  },[])

  console.log(transacciones)
  console.log(user)

  return (
    <table className='table'>
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
export default IaOperaciones