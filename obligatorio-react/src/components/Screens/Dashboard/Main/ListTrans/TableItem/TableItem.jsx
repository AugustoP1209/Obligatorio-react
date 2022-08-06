import { useSelector } from "react-redux";

import { useDispatch} from 'react-redux'


const TableItem = ({ transaccion }) => {

 
  const dispatch = useDispatch()
  const monedas = useSelector(state => state.monedas.monedas)




  const _getNameByCoin = (id) => {
    let moneda = monedas.find(item => item.id === id);
    return moneda ? moneda.nombre : "N/D"
  }

  return (
    <tr >
      <th scope='row'>{transaccion.id}</th>
      <td>{transaccion.tipo_operacion}</td>
      <td>{_getNameByCoin(transaccion.moneda)}</td>
      <td>{transaccion.cantidad}</td>
      <td>{transaccion.valor_actual}</td>
    </tr>
  )
}

export default TableItem;
