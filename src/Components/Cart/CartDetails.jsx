import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import shoppingCart from "../../assets/images/green_shoppictcart_1484336527-1.png";
import "./Cart.css"

const CartDetails = ({cartDetails}) => {
  const {ClearAllProduct,numOfCartItems} = useContext(CartContext);

  return (
    <div  className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <img className="shopCart" src={shoppingCart} alt="shoppingCart" />

        <div className="orderPayment my-5 text-muted">

        <h2 className='text-center py-3 text-black'>Orders</h2>

        <h5 className='pt-3 px-3 pb-2'>Products  
        <span className='text-success'> {numOfCartItems} items</span>
        </h5>

        <h5 className='px-3'>Total Price :  
        <span className='text-success'>{ cartDetails.totalCartPrice} EGP</span>
        </h5>

         <Link to={"/payment"}>
           <button className='btn btn-outline-success fw-bolder mt-3 w-75 mx-4'>CheckOut</button>
         </Link>

        <button onClick={()=> ClearAllProduct()} 
        className='btn btn-outline-danger fw-bolder my-3 w-75 mx-4'>
        Clear All Product
        </button>
        </div>

            </div>
  )
}

export default CartDetails;
