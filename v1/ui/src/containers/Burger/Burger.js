import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import { Container, Card, Row, Col } from "react-bootstrap";

const burger = (props) => {
  const ingredients = props.ingredients;

  let burgerIngredients = [];

  if (ingredients)
    burgerIngredients = Object.keys(ingredients)
      .map((ingredient) =>
        [...Array(ingredients[ingredient])].map((index, no) => (
          <BurgerIngredients key={ingredient + no} type={ingredient} />
        ))
      )
      .reduce((app, temp) => app.concat(temp), []);
  if (burgerIngredients.length === 0)
    burgerIngredients = "Please start adding ingredients!";

  return (
    <div>
      <Row className="justify-content-center">
        <Col className="">
          <BurgerIngredients type="bread-top" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
         {burgerIngredients} 
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
        <BurgerIngredients type="bread-bottom" />
        </Col>
      </Row>
      {/* <Row>{burgerIngredients}</Row> */}
      {/* {burgerIngredients} */}
      {/* <BurgerIngredients type="bread-bottom" /> */}
    </div>
  );
};

export default burger;
