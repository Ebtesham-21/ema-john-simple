import {faTaxi} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
        
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
             <h3>Order Summary</h3>
             <h5>items Ordered: {props.cart.length}</h5>
             <p>Total : {total.toFixed(2)}</p>
             <p>Shipping : {shipping}</p>
             <p>tax : {tax.toFixed(2)}</p>
             <p>Grand Total : {grandTotal.toFixed(2)}</p>

             
        </div>
    );
};

export default Cart;