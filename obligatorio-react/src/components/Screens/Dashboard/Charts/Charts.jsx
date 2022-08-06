import { useSelector } from 'react-redux'
import Bar from './Bar'
import Pie from './Pie'

const Charts = () => {
  const transacciones = useSelector(state => state.transacciones.transacciones)

  const _compras = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 1).length
  }

  const _ventas = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 2).length
  }

  

  return (
    <div className='container metrics'>
      <h5>Grafica ventas y compras</h5>
      <div className='row'>
        <div className='col-8'>
          <div className='card'>
            <div className='card-body'>
              <Bar
                compras={_compras()}
                ventas={_ventas()}
              />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <Pie
                compras={_compras()}
                ventas={_ventas()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
