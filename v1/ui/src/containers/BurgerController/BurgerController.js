import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const burgerController = (props) => {
  const addIngridients = (e, type) => {
    e.preventDefault();
    props.addIngridient(type);
  };

  const removeIngridients = (e, type) => {
    e.preventDefault();
    props.removeIngridient(type);
  };

  return (
      <Form.Group as={Row} className="mt-2 justify-content-center">
        <Col lg="2" md="3" sm="4">{props.controller.label}</Col>
        <Col lg="2" md="2" sm="3">
          <Button variant="secondary" onClick={(e) => addIngridients(e, props.controller.type)}>
            More
          </Button>
        </Col>
        <Col lg="2" md="2" sm="3">
          <Button variant="dark" onClick={(e) => removeIngridients(e, props.controller.type)}>
            Less
          </Button>
        </Col>
      </Form.Group>
  );
};

export default burgerController;
