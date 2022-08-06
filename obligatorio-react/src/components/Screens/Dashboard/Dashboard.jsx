import './Dashboard.css'
//import Header from './Header'
import Main from './Main'
import Header from './Header'
import Charts from './Charts'
import Graficas from './Graficas/Graficas'
import FilterSelect from '../../UI/FilterSelect/FilterSelect'
import Card from 'react-bootstrap/Card';
import { useRef } from 'react'
import { useState } from 'react'
import GraficaMoneda from './Charts/GraficaMoneda'




const Dashboard = () => {

  const selectRef = useRef()

  const [moneda, setMoneda] = useState(0)

  const onSelectChange = () => {
    const id = selectRef.current.value
    setMoneda(id)
  }

  console.log(moneda)

  return (
    
    <div className='container-fluid dashboard'>
      <div className='col-9 mx-auto'>
       
        <Graficas />
        <Charts />
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Grafica por Moneda</Card.Header>
        <Card.Body>
          <Card.Title>      
        <select
          className='form-control'
          onChange={onSelectChange}
          ref={selectRef}
        ><FilterSelect/></select></Card.Title>
        
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
      <GraficaMoneda moneda={moneda}/>
      <br />
        <h5>Crypto</h5>
        <div className='card'>
          <div className='card-body'>
            <Main />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
