import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import {WishlistContext} from "../../Context/WishlistContext"
import { CartContext } from "../../Context/CartContext";
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Context/AuthContext';
import "./wishlish.css";


const Wishlist = () => {
  const {loading,removeWishlist,wishlistProducts} = useContext(WishlistContext)
  const {AddToCart } = useContext(CartContext);
  const {userData } = useContext(AuthContext);


    <Helmet>
    <title>wishlist</title>
    </Helmet>



const displayWishlist = wishlistProducts?.length>0 ? wishlistProducts.map((wishlist) => {
    const { title, imageCover, _id, category, price, ratingsAverage,id } = wishlist;

    return (
      <div key={id} className="col-lg-3  col-md-4">

        <div className="product px-3 py-3 position-relative shadow my-3 rounded-3">
        <i onClick={()=>removeWishlist(_id)} className=" fa-solid fa-heart text-muted witchlist fs-4"></i>
        

     
        <div className="mx-auto productImg">
        <img className="w-100" src={imageCover} alt={title} />
        </div>
          <p className="text-main mt-3">{category?.name}</p>
          <h3 className="h6">{title?.split(" ").slice(0,2).join(" ")}</h3>

          <div className="d-flex justify-content-between">
            <p>{price}EGP</p>
            
            <div>
              <i className="fa fa-star rating-color">
                <span className=" text-secondary font-sm">{ratingsAverage}</span>
              </i>
            </div>

          </div>

       
          

            <button onClick={() => AddToCart(_id)}
             className="btn bg-main text-white w-100">
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Add
            </button>

        </div>
      </div>
    );
  })
  : <p className="text-center text-muted my-5">Your wishlist is empty.</p>
  ;







  return (
    <div className='marginTop'>
     
    <h3 className='mt-5 text-main fw-bolder text-center text-muted'>
          Welcome {userData?.name} to your Wishlist {" "} 
          <i className="fa-solid fa-heart text-danger"></i>
        </h3>


        {loading ? <Loader/> :
            <div className="container py-5">
                <div className="row">
                {displayWishlist}
                </div>
            </div>
        
        
        }


    </div>
  )
}

export default Wishlist;
