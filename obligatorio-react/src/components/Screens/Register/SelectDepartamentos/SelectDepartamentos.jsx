import { setDepartamentos } from "../../../../app/slices/departamentosSlice";
import { getDepartamentos } from "../../../../services/crypto";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";


const SelectDepartamentos = () =>{



        const dispatch = useDispatch()
        const departamentos = useSelector(state => state.departamentos.departamentos)

      
        useEffect(() => {
          try {
            (async () => {
              const response = await getDepartamentos()
              dispatch(setDepartamentos(response.departamentos))

            })()
          } catch (error) {
            console.error(error)
          }
        },[])

        console.log(departamentos)

   

        return (
             
          <>
            <option value={0} defaultValue>Seleccione un depto</option>
            {departamentos.map(departamento => (
            <option value={departamento.id} key={departamento.id}>{departamento.nombre}</option>
          ))}
            </>
           
          ) 
}


    
export default SelectDepartamentos;