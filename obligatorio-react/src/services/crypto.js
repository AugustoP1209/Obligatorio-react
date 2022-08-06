const BASE_URL = 'https://crypto.develotion.com';

const login = async (user, pass) => {
  try {
  
    const response = await fetch(`${BASE_URL}/login.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        usuario: user,
        password: pass,
      }),
    });

    if (response.status === 200) {
      return response.json();
    } else {
      return Promise.reject('Ha ocurrido un error', response.status);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};




const register = async (user, pass,idDepartamento,idCiudad) => {
    try {
      
      const response = await fetch(`${BASE_URL}/usuarios.php`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          usuario: user,
          password: pass,
          idDepartamento : idDepartamento,
          idCiudad : idCiudad
        }),
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }; 

  const getDepartamentos = async (apiKey) => {
    try {
     
      const response = await fetch(`${BASE_URL}/departamentos.php`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getCiudades = async (idDepartamento,apiKey) => {
    try {
  
      const response = await fetch(`${BASE_URL}/ciudades.php?idDepartamento=${idDepartamento}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getTodasLasCiudades = async (apiKey) => {
    try {
    
      const response = await fetch(`${BASE_URL}/ciudades.php`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getTransacciones = async (idUser,apiKey) => { 
    try {
    
      const response = await fetch(`${BASE_URL}/transacciones.php?idUsuario=${idUser}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const agregarTransaccion = async (idUsuario,tipo_operacion,moneda,cantidad,valor_actual,apiKey) => {
    try {
    
      const response = await fetch(`${BASE_URL}/transacciones.php`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
        body: JSON.stringify({
            idUsuario: idUsuario,
            tipo_operacion: tipo_operacion,
            moneda : moneda,
            cantidad : cantidad,
            valor_actual: valor_actual

        }),
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }; 

  const getMonedas = async (apiKey) => {
    try {

      const response = await fetch(`${BASE_URL}/monedas.php`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const getUsuariosDepartamento = async (apiKey) => {
    try {
  
      const response = await fetch(`${BASE_URL}/usuariosPorDepartamento.php`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'apiKey' : apiKey,
        },
      });
  
      if (response.status === 200) {
        return response.json();
      } else {
        return Promise.reject('Ha ocurrido un error', response.status);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };


export { 
        login, 
        register, 
        getDepartamentos,
        getCiudades, 
        getTodasLasCiudades, 
        getTransacciones, 
        agregarTransaccion,
        getMonedas,
        getUsuariosDepartamento
     };