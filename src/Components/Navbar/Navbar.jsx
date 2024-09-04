import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Navbar.css";
import { toast } from "react-hot-toast";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  let navigate= useNavigate();

  const [isActive, setIsActive] = useState(false);
  
  
  const {numOfCartItems} = useContext(CartContext);
  const {numOfWishlist} = useContext(WishlistContext);
  const {userData,setUserData} = useContext(AuthContext);
  


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  },[]);

 

  const Logout=()=>{
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login")
  }



  const handleLogout = () =>{
    Logout();
    toast.success("Logged out successfully!",{duration:2000,className:"text-success px-4 fw-bolder"});
  }




  return (
    <>
     <nav className={`navbar navbar-expand-lg ${isActive ? 'bg-white shadow-lg' : 'navbar-transparent'}
      fixed-top z-3 py-3`} >

  <div className="container">
    <NavLink to="/" className="navbar-brand" >
      <img src={Logo} alt="logo" />
    </NavLink>
    <button className="navbar-toggler toogles" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars fs-3"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    {
      userData !==null ?
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="cart" className="nav-link" >Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="products" className="nav-link" >Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="categories" className="nav-link" >Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="brands" className="nav-link">Brands</NavLink>
        </li>
      </ul>
      : null
    }


    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

        {userData == null ? 
        <>
        <li className="nav-item">
          <NavLink to="login" className="nav-link" >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="register" className="nav-link" >Register</NavLink>
        </li>
        </>   
        :
          <>
          <li className="nav-item">
          <NavLink to="cart" className="nav-link non-active-link position-relative">
           <i className="fa-solid fa-cart-arrow-down text-success fs-4">
            <div className="numCustomize d-flex justify-content-center align-items-center rounded-5 bg-danger">
            <span className='text-white fs-6'>{numOfCartItems}</span>
            </div>
           </i>
          </NavLink>
           </li>

        <li className="nav-item mx-0 mx-md-3 ">
          <NavLink to="wishlist" className="nav-link non-active-link position-relative">
           <i className="fa-solid fa-heart text-danger fs-4">
            <div className="numCustomize d-flex justify-content-center align-items-center rounded-5 bg-danger">
            <span className='text-white fs-6'>{numOfWishlist}</span>
            </div>
           </i>
          </NavLink>
        </li>

          <li className="nav-item">
          <NavLink to="profile" className="nav-link non-active-link">
            <i className="fa-solid fa-user"></i> {userData.name} 
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="allorders" className="nav-link non-active-link">
            All Orders 
          </NavLink>
        </li>
        
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={handleLogout}>Logout</span>
        </li>
          </>
        
         }
     
    </ul>


    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;



