import logo from "./logo.svg";
import "./App.css";
// import Father from "./components/container/father";
// import GreetingStyled from "./components/pure/greetingStyled";
// import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import MiComponenteConContexto from "./hooks/Ejemplo3";
// import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Ángel"></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="Ángel"></GreetingF> */}
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* Ejemplos de uso de Hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre="Martín"> */}
      {/* Todo lo que hay aquí dentro es tratado como props.children */}
      {/* <h3>Contenido del props.children</h3> */}
      {/* </Ejemplo4> */}
      {/* <GreetingStyled name="Ángel"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
