/**
 * Ejemplo de uso del Hook useState
 * (Todos los Hooks empiezan por use)
 *
 * La idea es crear un componente de tipo función y acceder a
 * su estado privado a través de un Hook y, además, poder modificarlo.
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contador

  const valorInicial = 0;

  const personaInicial = {
    nombre: "Miguel",
    email: "ejemplo@openbootcamp.com",
  };

  /**
   * Queremos que el valor inicial y persona inicial sean parte del estado del componente
   * para así poder gestionar su cambio y que este se vea reflejado en la vista
   * del componente
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**
   * Función para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Pepe",
      email: "pepe@pepe.com",
    });
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2> Contador: {contador}</h2>
      <h2> Datos de la persona</h2>
      <h3> Nombre: {persona.nombre}</h3>
      <h3> Email: {persona.email}</h3>
      {/* Bloque de botones para actualizar el estado */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>
        Actualizar datos de la persona
      </button>
    </div>
  );
};

export default Ejemplo1;
