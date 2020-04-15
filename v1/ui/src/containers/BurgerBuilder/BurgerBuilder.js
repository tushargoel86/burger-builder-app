import React, { useState } from "react";
import Burger from "../Burger/Burger";
import BurgerControllers from "../BurgerController/BurgerControllers";
import { Container, Card, Row, Form, Col } from "react-bootstrap";
import Order from "../Order/Order";

const burgerControllerStyle = { background: "#D39952" };
const BurgerBuilder = (props) => {
  const [burgerControllers, setBurgerControllers] = useState([
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
  ]);

  const [ingredients, setIngredients] = useState({
    cheese: 0,
    meat: 0,
    salad: 0,
  });

  const [pricePerIngridient, setPricePerIngridient] = useState({
    cheese: 1,
    meat: 2,
    salad: 1,
  });

  var [totalPrice, setTotalPrice] = useState(0);

  const addIngridients = (type) => {
    var items = { ...ingredients };
    items[type] = items[type] + 1;
    setTotalPrice(totalPrice + pricePerIngridient[type]);
    setIngredients(items);
  };

  const removeIngridients = (type) => {
    var items = { ...ingredients };
    if (items[type] !== 0) {
      items[type] = items[type] - 1;
      setTotalPrice(totalPrice - pricePerIngridient[type]);
    }
    setIngredients(items);
  };

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Card border="primary" style={{ width: "30%" }}>
          <Card.Body className="text-center ">
            <Card.Title>Burger</Card.Title>
            <Burger ingredients={ingredients} />
            <div style={burgerControllerStyle}>
              <Form className="mt-5 justify-content-center">
                <Row className="justify-content-center">
                  <Form.Group>
                    Total Price: <span className="text-dark">{totalPrice}</span>
                  </Form.Group>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <BurgerControllers
                      addIngridient={addIngridients}
                      removeIngridient={removeIngridients}
                      burgerControllers={burgerControllers}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Order ingredients={ingredients} totalPrice={totalPrice} />
                </Row>
                <br />
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default BurgerBuilder;
