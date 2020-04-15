import React from 'react';
import OrderModal from './OrderModal';

const order = (props) => {
    return <OrderModal ingredients={props.ingredients} totalPrice={props.totalPrice}></OrderModal>
}

export default order;