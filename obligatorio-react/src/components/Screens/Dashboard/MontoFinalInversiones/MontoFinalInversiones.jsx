import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransacciones } from '../../../../app/slices/transaccionesSlice'
import { getTransacciones } from '../../../../services/crypto'
import './MontoFinalInversiones.css'



const MontoFinalInversiones = () => {

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




  const _compras = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 1)
  }

  const _ventas = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 2)
  }


  const calculateMontoTotal = () => {
    const compras = _compras()
    const ventas = _ventas()

    let total = 0;
    compras.forEach(compra => {
      total += compra.cantidad * compra.valor_actual
    })

    ventas.forEach(venta => {
      total -= venta.cantidad * venta.valor_actual
    })

    return total
  }

  const montoCompras = () => {
    const compras = _compras()
   

    let total = 0;
    compras.forEach(compra => {
      total += compra.cantidad * compra.valor_actual
    })
    return total;
  }

  const montoVentas = () => {
    const ventas = _ventas()
   

    let total = 0;
    ventas.forEach(venta => {
      total += venta.cantidad * venta.valor_actual
    })
    return total;
  }

  console.log(montoCompras)
  console.log(montoVentas)


  

  return (

        <table className='table table-hover'>

        <thead>
    <tr>
    <th scope='col'>Monto total compras</th>
          <th scope='col'>Monto total ventas</th>
          <th scope='col'>Monto final inversiones</th>
    </tr>
  </thead>
      
      <tbody>
      
      <tr>
        <td>{montoCompras()}</td>
        <td>{montoVentas()}</td>
        <td>{calculateMontoTotal()}</td>
  </tr>
      </tbody>
    </table>
  )

}

export default MontoFinalInversiones;