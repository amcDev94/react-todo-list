/**
 * Es importante saber, que sólo debemos tener un useEffect
 * por cada componente
 */

import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("Componente creado");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Actualización del componente");
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenid";
      clearInterval(intervalID);
    };
    //Cuando se dejan los corchetes vacíos es porque queremos que se haga una vez
    //Cuando se borran los corchetes es porque queremos que se haga todas las veces
  }, []);

  return <div></div>;
};

export default AllCycles;
