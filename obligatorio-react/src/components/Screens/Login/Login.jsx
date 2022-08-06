import './Login.css'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginUser } from '../../../app/slices/userSlice'
import { login } from '../../../services/crypto'
import Button from '../../UI/Button/Button'
import  Alert  from '../../UI/Alert'
import { Link,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'




const Login = () => {

    const [message, setMessage] = useState('')
    const [messageClass, setClass] = useState('')
    const [btnDisabled, setDisable] = useState(false)
    const [btnCta, setBtnCTA] = useState('Login')


    const navigate = useNavigate()

    const inputUserName = useRef()
    const inputPassword = useRef()

    const dispatch = useDispatch()  

      
 
  


    const onHandleLogin = async e => {
    e.preventDefault()
    const userName = inputUserName.current.value
    const password = inputPassword.current.value

    setDisable(true)
    setBtnCTA('Sending...')



    if (userName !== '' && password !== '') {
      
      try {
        const { apiKey, id } = await login(userName, password)
        const user = { userName: userName, apiKey: apiKey, id: id }
        

        setClass('success')
        setMessage('Inicio de sesión correcto')

        setTimeout(() => {
          dispatch(setLoginUser(user))
          
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
    setBtnCTA('Login')

  }

  const _resetMessage = () => {
    setTimeout(() => {
      setClass('')
      setMessage('')
    }, 3000)
  }
  
  
  const onClickNavigate = () =>{
    navigate('/Register')
  }


  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])



    
  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Login</h3>
          <section className='card-body'>
            <form>
                {message !== '' ? (
                <Alert classColor={messageClass} message={message} />
                ) : (
                ''
                )}
                <label>Usuario</label>
                <br />
                <input 
                  className='form-control' 
                  type='text' 
                  ref={inputUserName}
                  />
                <br />
                <label>Contraseña</label>
                <input 
                  className='form-control' 
                  type='password' 
                  ref={inputPassword} 
                  />
                <br />
                <Button
          cta={btnCta}
          classColor={'btn-primary'}
          onHandleClick={onHandleLogin}
          disabled={btnDisabled}
        />
            </form>
          </section>
          <section className='card-body'>
          <Button
          cta="Registrarse"
          onHandleClick={onClickNavigate}
          classColor={'btn-primary'}
        />
          </section>
          
        </div>
      </section>
    </>
  )
}

export default Login