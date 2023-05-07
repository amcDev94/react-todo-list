import React from "react";
import ReactDOM from "react-dom/client";

// Añadimos Bootstrap a nuestro proyecto
// Es importante importarlo arriba del archivo de CSS
// para que si hemos dado estilos propios en el CSS se sobreescriban por ir después
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import App from "./App";

// import AppRoutingOne from "./AppRoutingFinal";
import reportWebVitals from "./reportWebVitals";
// import AppRoutingFinal from "./AppRoutingFinal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne /> */}
    {/* <AppRoutingFinal /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
