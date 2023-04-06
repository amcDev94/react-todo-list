/**
 * Ejemplo de uso del hook de ciclo de vida en componente funcional
 */

import React, { useEffect } from "react";

const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};

export default DidMountHook;
