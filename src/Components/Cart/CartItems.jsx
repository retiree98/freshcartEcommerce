import React from 'react'
import { CartContext } from "../../Context/CartContext";
import { useContext } from 'react';
import "./Cart.css"


const CartItems = ({product}) => {
    const {RemoveItem,UpdateProduct } = useContext(CartContext);



  return (
    <>
    <div className="col-md-1 ">
    <div className='text-center'>

      <img src={product.product.imageCover} alt={product.product.title} className="imgCart" />
    </div>
    </div>

    <div className="col-md-11 d-flex justify-content-between align-items-center ">
        <div className=" rounded-5 products ">
        <h6 className="text-success title-details fw-bold">{product?.product?.title?.split(" ").splice(0,2).join(" ")}</h6>
        <h6 className="text-muted">
        Price : 
        <span className="text-success fw-bolder"> {product.price} EGP</span>
        </h6>
         <button onClick={()=>RemoveItem(product.product._id)}
         className="btn btn-outline-danger btn-delete my-2"> 
        <i className="fa-solid fa-trash-can text-danger "></i> Remove
        </button>
        </div>

       

        <div className="d-flex align-items-center justify-content-center">
      <button onClick={()=>UpdateProduct(product.product._id,product.count+1)}
       className="btn btn-lg  btn-outline-success fw-bolder">+</button>
      <h4 className="text-muted px-3 fw-bolder">{product.count}</h4>
      <button onClick={() => UpdateProduct(product.product._id, product.count - 1)}
      className="btn btn-lg btn-outline-danger fw-bolder">-</button>
      </div>




    </div>
</>


  )
}

export default CartItems;
