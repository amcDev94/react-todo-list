/**
 * Ejemplo de uso de hooks para componente funcional
 * (El WillUnmount es cuando el componente va a desaparecer)
 */

import React, { useEffect } from "react";

export const WillUnmountHook = () => {
  useEffect(() => {
    // Aquí no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
};
