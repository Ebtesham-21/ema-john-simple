import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {} =props.product;
    const {name,img,seller, price, stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div className="product">
           <div> 
           <img src={img} alt="" />
           </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <div> 
                    <p>By:{seller}</p>
                    <p>Price:{price}</p>
                    <p>Only {stock} left in stock - order soon</p>
                    <button onClick={() =>props.handleAddToCart(props.product)} className="btn-regular">{element} add to Cart</button>
                </div>
              
            </div>
          
                
        </div>
    );
};

export default Product;