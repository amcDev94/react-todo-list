/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR: Cuando se instancia el componente");
  }

  componentWillMount() {}

  render() {
    return <div></div>;
  }
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
