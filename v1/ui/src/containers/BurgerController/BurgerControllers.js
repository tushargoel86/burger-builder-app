import React from "react";

import BurgerController from "./BurgerController";

const burgerControllers = (props) => {
  return props.burgerControllers.map((controller) => (
    <BurgerController
      addIngridient={props.addIngridient}
      removeIngridient={props.removeIngridient}
      controller={controller}
    />
  ));
};

export default burgerControllers;
