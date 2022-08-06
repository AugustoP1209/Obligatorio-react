import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMonedas } from '../../../services/crypto'
import {setMonedas} from '../../../app/slices/monedasSlice'

const FilterSelect = () => {
 

  
  const dispatch = useDispatch()  
  const monedas = useSelector(state => state.monedas.monedas)
  const user = useSelector(state => state.user.user)


  useEffect(() => {
    try {
      ;(async () => {
        const response = await getMonedas(user.apiKey)
        dispatch(setMonedas(response.monedas))
      })()
    } catch (error) { 
      console.error(error)
    }
  },[])


  return (
    <>
          <option value={0} defaultValue>Seleccione una moneda</option>
          {monedas.map(moneda => (
            <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
          ))}

    </>
  )
}
FilterSelect.defaultProps = {
  onFilter: () => {
    console.log('Filtrando')
  }
}
export default FilterSelect
