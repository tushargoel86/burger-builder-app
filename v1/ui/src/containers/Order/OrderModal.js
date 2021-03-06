import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const OrderModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ingridients = { ...props.ingredients };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Order Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(ingridients).map((key) => (
            <li>
              {key.charAt(0).toUpperCase() + key.slice(1)} : {ingridients[key]}
            </li>
          ))}
          {<div className="text-center">Total Price: <span>{props.totalPrice}</span></div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Place Order!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
