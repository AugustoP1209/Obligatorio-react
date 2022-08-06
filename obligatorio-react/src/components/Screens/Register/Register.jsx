import './Register.css'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginUser } from '../../../app/slices/userSlice'
import { register } from '../../../services/crypto'
import Button from '../../UI/Button/Button'
import SelectDepartamentos from './SelectDepartamentos'
import SelectCiudades from './SelectCiudades'
import { useNavigate} from 'react-router-dom'
import  Alert  from '../../UI/Alert'



const Register = () => {

    const inputUserName = useRef()
    const inputPassword = useRef()
    const inputDepartamento = useRef()
    const inputCiudad = useRef()

    const [message, setMessage] = useState('')
    const [messageClass, setClass] = useState('')
    const [btnDisabled, setDisable] = useState(false)
    const [btnCta, setBtnCTA] = useState('Register')

    const navigate = useNavigate()

    const dispatch = useDispatch()  

    const [idDpto, setDpto] = useState(0)

    const onChangeDpto = () => {
      const id = inputDepartamento.current.value
      setDpto(id)
    }

    const onHandleRegister = async e => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const idDepartamento = inputDepartamento.current.value
    const idCiudad = inputCiudad.current.value

    if (userName !== '' && password !== '' && idDepartamento !== '' && idCiudad !== '') {
        try {
        const { apiKey, id } = await register(userName, password,idDepartamento,idCiudad)
        const user = { apiKey: apiKey, id: id }
        setClass('success')
        setMessage('Registro exitoso!')

        setTimeout(() => {
          dispatch(setLoginUser(user))
          navigate('/Dashboard')
        }, 1000)
       
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
    setBtnCTA('Register')

  }

  const _resetMessage = () => {
    setTimeout(() => {
      setClass('')
      setMessage('')
    }, 3000)
  }
    
    const onClickNavigate = () =>{
      navigate('/Login')
    }
    
    
  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Registro</h3>
          <section className='card-body'>
            <form>
            {message !== '' ? (
                <Alert classColor={messageClass} message={message} />
                ) : (
                ''
                )}
                <label>Usuario</label>
                <br />
                <input className='form-control' type='text' ref={inputUserName} />
                <br />
                <label>Contraseña</label>
                <br />
                <input className='form-control' type='password' ref={inputPassword} />
                <br></br>
                <label>Departamento</label>
                <br />
                <select ref={inputDepartamento} onChange={onChangeDpto} className='form-control'>
                  <SelectDepartamentos  />
                </select>
                <br />
                <label>Ciudad</label>
                <br />
                <select ref={inputCiudad} className='form-control'>
                  <SelectCiudades idDpto={idDpto}/></select>
                <br />
                <Button
          cta={btnCta}
          classColor={'btn-primary'}
          onHandleClick={onHandleRegister}
          disabled={btnDisabled}
        />
            </form>
            <br></br>
            <Button
          cta="Volver"
          onHandleClick={onClickNavigate}
          classColor={'btn-primary'}
        />
          </section>
        </div>
      </section>
    </>
  )
}

export default Register