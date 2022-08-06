import { useSelector } from 'react-redux'
import Bar from '../Bar'
import Pie from '../Pie'

const GraficaMoneda = ({moneda}) => {
  const transacciones = useSelector(state => state.transacciones.transacciones)

  const _compras = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 1 && transaccion.moneda === moneda)
  }

  const _ventas = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 2 && transaccion.moneda === moneda)
  }

  const calculateMontoTotalCompras = () => {
    const compras = _compras()
    

    let total = 0;
    compras.forEach(compra => {
      total += compra.cantidad * compra.valor_actual
    })



    return total
  }
  
  const calculateMontoTotalVentas = () => {

    const ventas = _ventas()

    let total = 0;
    ventas.forEach(venta => {
      total += venta.cantidad * venta.valor_actual
    })

    return total
  }

  return (
    <div className='container metrics'>
     
      <div className='row'>
        <div className='col-8'>
          <div className='card'>
            <div className='card-body'>
            <Bar
                compras={calculateMontoTotalCompras()}
                ventas={calculateMontoTotalVentas()}
              />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <Pie
                compras={calculateMontoTotalCompras()}
                ventas={calculateMontoTotalVentas()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraficaMoneda