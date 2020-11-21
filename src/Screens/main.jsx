import { useState } from "react";

import PrintPaises from "../Components/WebService,";
const Main = () => {
  const [nombre, setnombre] = useState("no tiene nombre");

  const eventTextBox = (e) => {
    setnombre(e.target.value);
  };

  return (
    <div>
      <h1>Hola {nombre} Bienvenido a esta pequeña practica</h1>
      <input name="nombre" type="text" value={nombre} onChange={eventTextBox} />
      <PrintPaises nombre={nombre} />
    </div>
  );
};
export default Main;
