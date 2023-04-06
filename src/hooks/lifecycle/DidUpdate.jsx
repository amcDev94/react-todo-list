/**
 * Ejemplo de uso hook en componente funcional
 */

import React, { useEffect } from "react";

const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};

export default DidUpdateHook;
