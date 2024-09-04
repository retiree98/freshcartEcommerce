import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

const Product = ({ product }) => {
  const { _id, title, imageCover, category, price, ratingsAverage } = product;
  const { AddToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);





  return (
    <div className="col-lg-3 col-md-4 col-sm-6">

      <div className="product px-3 py-3 position-relative shadow my-3 rounded-3">
        <i onClick={() => addToWishlist(_id)}
         className="fa-solid fa-heart text-danger witchlist fs-4"></i>

        <Link to={`/product-details/${_id}`}>

          <div className="mx-auto productImg">
            <img className="w-100" src={imageCover} alt={title} />
          </div>

          <p className="text-main mt-3">{category.name}</p>
          <h3 className="h6">{title.split(" ").slice(0, 2).join(" ")}</h3>

          <div className="d-flex justify-content-between">
            <p className=" text-main">{price} EGP</p>
            <div>
              <i className="fa fa-star rating-color">
              <span className=" text-secondary font-sm">{ratingsAverage}</span>
              </i>
            </div>
          </div>

        </Link>

        <button onClick={() => AddToCart(_id)} className="btn bg-main text-white w-100">
          <i className="fa-solid fa-cart-shopping me-2"></i>
          Add
        </button>
        
      </div>
    </div>
  );
};

export default Product;
