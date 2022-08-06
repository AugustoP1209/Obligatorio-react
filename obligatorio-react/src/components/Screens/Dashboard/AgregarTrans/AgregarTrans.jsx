import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarTransaccion } from '../../../../services/crypto'
import { getMonedas } from '../../../../services/crypto'
import Button from '../../../UI/Button/Button'
import { addNewTrans } from '../../../../app/slices/transaccionesSlice'
import { useState } from 'react'
import Alert from '../../../UI/Alert'
import { setMonedas } from '../../../../app/slices/monedasSlice'

const AgregarTrans = () => {

    const user = useSelector(state => state.user.user)

    const inputTipoOperacion = useRef()
    const inputMoneda = useRef()
    const inputCantidad = useRef()
    
    const [message, setMessage] = useState('')
    const [messageClass, setClass] = useState('')
    const [btnDisabled, setDisable] = useState(false)
    const [btnCta, setBtnCTA] = useState('AgregarTrans')

    const dispatch = useDispatch()  
    const monedas = useSelector(state => state.monedas.monedas)

  

    const [moneda, setMoneda] = useState(0)
  
    const onSelectChange = () => {
      const id = inputMoneda.current.value
      setMoneda(id)
    }

    



    const onAddTrans = async e => {
    e.preventDefault()
    const tipoOperacion = inputTipoOperacion.current.value
    const moneda = inputMoneda.current.value
    const cantidad = inputCantidad.current.value
    const valorActual =_getNameByCoin();

 
    

    if (tipoOperacion !== '' && moneda !== '' && cantidad !== '') {
        try {
            const { idTransaccion, codigo} = await agregarTransaccion(user.id,tipoOperacion,moneda,cantidad,valorActual,user.apiKey)
            if (codigo === 200) {
              const newTrans = {
                id: idTransaccion,
                usuarios_id : user.id,
                tipoOperacion: tipoOperacion,
                moneda: moneda,
                cantidad: cantidad,
                valorActual: valorActual
              }
            
              
              setClass('success')
              setMessage('Transaccion generada!')
      
              setTimeout(() => {
                dispatch(addNewTrans(newTrans))
              }, 1000)
              console.log(newTrans,codigo)
            }
            } catch (error) {
              setClass('danger')
              setMessage('Ha ocurrido un error')
              _resetMessage()
            }
          } else {
            setClass('danger')
            setMessage('Por favor complete los campos')
            _resetMessage()
          }
          setDisable(false)
          setBtnCTA('AgregarTrans') 
        
}

const _resetMessage = () => {
  setTimeout(() => {
    setClass('')
    setMessage('')
  }, 3000)
}



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


  const _getNameByCoin = () => {
    let m = monedas.find(item => item.id == moneda);
    return m ? m.cotizacion : "N/D"
  }





  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Nueva Transaccion</h3>
          <section className='card-body'>
          <div className='input-group'>
            <form>
            {message !== '' ? (
                <Alert classColor={messageClass} message={message} />
                ) : (
                ''
                )}
                <label>Tipo de Operacion</label>
                <br />
                <select ref={inputTipoOperacion} className='form-control'>
                  <option value={1}>Compra</option>
                  <option value={2}>Venta</option>
                </select>
                <br />
                <label>Moneda</label>
                <br />
                <select           className='form-control'
          onChange={onSelectChange}
          ref={inputMoneda} >
            <option defaultValue>Seleccione Moneda</option>
                {monedas.map(moneda => (
            <option value={moneda.id} key={moneda.id}>{moneda.nombre}</option>
          ))}
                </select>
                <label>Cantidad</label>
                <br />
                <input className='form-control' type='number'  ref={inputCantidad}/>
                <br />
                <label>Valor Actual : {_getNameByCoin()}</label>
                <br />
                
                <br />
                <Button
          cta={btnCta}
          classColor={'btn-primary'}
          onHandleClick={onAddTrans}
          disabled={btnDisabled}
        />
            </form>
            </div>
          </section>
        </div>
      </section>
    </>
  )

}
export default AgregarTrans