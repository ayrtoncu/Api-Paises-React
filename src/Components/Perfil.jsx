import React from "react";

const Perfil =(props)=>{

  React.useEffect(()=>{
    document.title = props.nombre;
  },[props.nombre])

  return(
    <div style={{background:"yellow"}}>
      Bienvenido {props.nombre}
    </div>
  );
}
export default Perfil;