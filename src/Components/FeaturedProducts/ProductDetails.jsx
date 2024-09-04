import React, { useContext } from "react";
import Slider from "react-slick";
import Loader from "../Loader/Loader";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import useFetchSingle from "../../Hooks/useFetchSingle";




const ProductDetails = () => {

  let {single,loading}=useFetchSingle("products")
  const {AddToCart } = useContext(CartContext);





  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  };


  const allProductDetails = single.images?.map((img,i) => {
  
    return (
      <div key={i} className="sliderItem">
      <div className="productImg mx-auto">
        <img className="w-100" src={img} alt="imgSlider" />
      </div>
    </div>
    );
  });






  return (
    <>

      
    <Helmet>
      <title>{single.title?.split(" ")?.splice(0,2)?.join(" ")}</title>
    </Helmet>

     <div className="container py-5 marginTop">
      <div className="row align-items-center">
      {loading ? <Loader/>
        : <>

        <div className="col-md-4">
        <Slider {...settings}>{allProductDetails}</Slider>     
        </div>

      <div className="col-md-8">

    <h1 className=" text-main mt-5 mt-sm-0">
    {single.title?.split(" ")?.splice(0,2)?.join(" ")}
    </h1>
  <p className="my-3">{single.description}</p>


  <div className="d-flex justify-content-between">
      <p className=" text-main">{single.price} EGP</p>
      
      <div>
        <i className="fa fa-star rating-color">
          <span className=" text-secondary font-sm">{single.ratingsAverage}</span>
        </i>
      </div>

  </div>


    <p>Quantity : {[single.quantity]}</p>

    <button  onClick={() => AddToCart(single.id)}
    className="btn bg-main text-white w-100">
      <i className="fa-solid fa-cart-shopping me-2"></i>
      Add
      </button>

  
      </div>

        </>
        }



      </div>
     </div>
    </>
  );
};

export default ProductDetails;
