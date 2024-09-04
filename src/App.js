import Layout from "./Components/Layout/Layout";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// --------------------Components--------------------
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import BrandDetails from "./Components/Brands/BrandDetails";
import ProductDetails from "./Components/FeaturedProducts/ProductDetails";
import CategoriesDeatails from "./Components/Categories/CategoriesDeatails";
import Payment from "./Components/Payment/Payment";
import AllOrders from "./Components/AllOrders/AllOrders";
import NotFound from "./Components/Notfound/Notfound";
// --------------------Pages-------------------------
import Home from "./Pages/Home/Home";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import VerifyCode from "./Pages/VerifyCode/VerifyCode";
import Wishlist from "./Pages/Wishlist/Wishlist";
// --------------------Context-------------------------------
import CartContextProvider from "./Context/CartContext";
import WishlistContextProvider from "./Context/WishlistContext";
import AuthContextProvider from "./Context/AuthContext";



const App = () => {


  
  const router = createBrowserRouter([
    {
      path: "/",element: <Layout  />, children: [
        { index: true, element:<Home/>},
        { path: "products", element: <ProtectedRoute> <Products/></ProtectedRoute>},
        { path: "product-details/:id", element:<ProductDetails/> },
        { path: "categories", element:<ProtectedRoute> <Categories/></ProtectedRoute> },
        { path: "categories-details/:id", element:<ProtectedRoute><CategoriesDeatails/></ProtectedRoute>  },
        { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute>},
        { path: "profile", element: <ProtectedRoute><Profile /></ProtectedRoute>},
        { path: "brands", element: <ProtectedRoute><Brands/></ProtectedRoute>  },
        { path: "brand-details/:id", element:<ProtectedRoute><BrandDetails/></ProtectedRoute> },
        { path: "login", element:<Login  /> },
        { path: "register", element:<Register /> },
        { path: "forget-password", element:<ForgetPassword  /> },
        { path: "reset-password", element:<ResetPassword  /> },
        { path: "verify-code", element:<VerifyCode /> },
        { path: "payment", element: <ProtectedRoute><Payment /></ProtectedRoute>  },
        { path: "wishlist", element: <ProtectedRoute><Wishlist/></ProtectedRoute>  },
        { path: "allorders", element: <ProtectedRoute><AllOrders /> </ProtectedRoute> },
        { path: "*", element:<NotFound /> },
      ],
    },
  ]);

  return(
    <>
     <Toaster />
    <AuthContextProvider>
      <CartContextProvider>
        <WishlistContextProvider> 
          <RouterProvider router={router} />
        </WishlistContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </>
   
  
    ) 

};

export default App;
