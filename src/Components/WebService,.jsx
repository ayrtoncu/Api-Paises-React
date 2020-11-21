import React, {useState} from "react";
import axios from "axios";
const PrintPaises =(props)=>{
  const [paises,setPaises]=useState([]);
  const [status, setStatus]=useState(false);
  // useEffect se ejecuta tan solo cargue la pantalla
  React.useEffect(()=>{
    //axios es una libreria basada en promesas para el cliente y el servidor
    //cuando se hace peticiones Json hace transformaciones automaticas

    axios.get("https://restcountries.eu/rest/v2/all")//esta obteniendo datos de un WEbservice
      .then(result => {//la funcion the.obtiene los datos en resul, se abre la funcion
        setPaises(result.data);//se envia los datos a constante paises
        setStatus(true);
      })
      .catch(error => {
        setStatus(true);
      })
  },[])
  //Este if imprime el los datos tipo lista del estado paises
  if(status){
    return(
      <ul>
        {paises.map((pais,indice)=>//map es un for pais obtiene los datos, indice obtiene un contador o llave
          <li key={indice}>
            {pais.name}
          </li>
        )}
      </ul>
    );
  }else{
    return(
      <h1>Esta cargando los valores Rest Service....</h1>
    );
  }
}
export default PrintPaises;