import { setCiudades } from "../../../../app/slices/ciudadesSlice";
import { getCiudades } from "../../../../services/crypto";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";


const SelectCiudades = ({idDpto}) =>{

        const dispatch = useDispatch()
        const ciudades = useSelector(state => state.ciudades.ciudades)
       
      
        useEffect(() => {
          try {
            (async () => {
              if(idDpto !== 0) {
                const response = await getCiudades(idDpto)
                console.log("Ciudades",response)
                dispatch(setCiudades(response.ciudades))
              }
            })()
          } catch (error) {
            console.error(error)
          }
        },[idDpto])


        return (

                   <>
                   {ciudades.map(ciudad => (
                    <option key={ciudad.id}>{ciudad.nombre}</option>
                  ))}
                  </>
           
          ) 
}
    
export default SelectCiudades;