import React, { useContext, useEffect} from "react";
import "./Cart.css";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import CartItems from "./CartItems";
import CartDetails from "./CartDetails";

const Cart = () => {
  const {getCart,cartDetails } = useContext(CartContext);
  const {userData}= useContext(AuthContext)


  useEffect(() => {
    getCart();
  }, []);


  return (



    <div className="marginTop">

    <Helmet>
    <title>Cart</title>
    </Helmet>


        <h3 className='mt-5 pt-3 text-main fw-bolder text-center text-muted'>
          Welcome {userData?.name} to your Cart {" "}
        <i className="fa-solid fa-cart-arrow-down text-success"></i>
        </h3>

        

        {cartDetails !== null ? 
        <div className="container">
        <CartDetails cartDetails={cartDetails}/>

      {cartDetails.products.map((product)=>(
        <div  key={product._id}
        className="row align-items-center border-bottom py-2 my-3">
        <CartItems product={product}/>
      </div>

      ))}
      

      </div>
     :  <p className="text-center text-muted my-5 py-5">No items in the cart</p>}
    </div>
  );
};

export default Cart;



