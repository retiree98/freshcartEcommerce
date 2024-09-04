import { createContext, useState,useEffect } from "react";
import baseInstance from "../Networking/baseInstance";
import toast from "react-hot-toast";
export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [numOfWishlist, setNumOfWishlist] = useState(0);
  const [wishlistProducts, setWishlistProducts] = useState(null);

 

  const getWishlist = async() => {
    try {
      setLoading(true)
      const {data} = await baseInstance.get("wishlist", {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      if (data?.status === "success") {
        setNumOfWishlist(data.count)
        setWishlistProducts(data.data)
      }
    } catch (error) {
      return error
    }
    finally{
      setLoading(false)
    }
     
  };

  const addToWishlist = async(productId) => {
    try {
      const {data} = await baseInstance.post(
        "wishlist",
        { productId: productId },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      if (data.status === "success") {
        setNumOfWishlist(data.count)
        setWishlistProducts(data.data)
        getWishlist();

        toast.success(data.message, {
          duration: 2000,
          className: "text-main fw-bolder",
        });
      } 
    }
      catch (error) {
        toast.error(error.response.data.message, {
          duration: 2000,
          className: "text-danger fw-bolder",
        });
      }
  };


  const removeWishlist = async(productId) => {
    
    try {
      const {data} = await baseInstance.delete(`wishlist/${productId}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      });
      if (data.status === "success") {
        setNumOfWishlist(data.count)
        setWishlistProducts(data.data)
        getWishlist();
        toast.success(data.message, {
          duration: 2000,
          className: "text-main fw-bolder",
        });
      } else {
        toast.error(data.message, {
          duration: 2000,
          className: "text-danger fw-bolder",
        });
      }
    } catch (error) {
      return error
    }   
  };

 
  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        removeWishlist,
        loading,
        numOfWishlist,
        wishlistProducts
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
