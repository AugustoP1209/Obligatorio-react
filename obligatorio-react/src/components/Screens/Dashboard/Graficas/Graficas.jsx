import { useSelector } from 'react-redux'
import './Graficas.css'
const Graficas = () => {
  const transacciones = useSelector(state => state.transacciones.transacciones)

  const _compras = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 1).length
  }

  const _ventas = () => {
    return transacciones.filter(transaccion => transaccion.tipo_operacion === 2).length
  }
  return (
    <div className='container metrics'>
      <div className='row'>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>TOTAL</h5>
              <p className='card-text'>
                <span className='badge bg-secondary'>
                  {transacciones ? transacciones.length : 0}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Compras</h5>
              <p className='card-text'>
                <span className='badge bg-success'>
                  {_compras()}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Ventas</h5>
              <p className='card-text'>
                <span className='badge bg-danger'>
                  {_ventas()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graficas