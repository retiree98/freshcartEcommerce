import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/CartContext";
import Loader from "../Loader/Loader";
import baseInstance from "../../Networking/baseInstance";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import OrdersList from "./OrdersList";




const AllOrders = () => {

  const [allOrders, setAllOrders] = useState([]);
  const {loading,setLoading} = useContext(CartContext);
  const {userData} = useContext(AuthContext);


  const getAllOrders = async () => {
    try {
      setLoading(true);
      let  {data} = await baseInstance.get(`orders/user/${userData?.id}`);
        setAllOrders(data)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        className: "text-danger fw-bolder",
      });
    }
    finally{
      setLoading(false);
    }
  };


  useEffect(() => {
    if (userData) {
      getAllOrders();
    }
  }, [userData]);






  return (
    <>
      <Helmet>
        <title>All Orders</title>
      </Helmet>

      <div className="container marginTop">

        <h5 className=" text-success fw-bolder text-center text-muted">
          Welcome {userData?.name} to All Orders
        </h5>

        <div className="row">
        {loading ? <Loader/> : allOrders?.length ?
        <>
        {allOrders?.map((order) => (
          <div key={order._id} className="col-12">
          <OrdersList order={order}/>
          </div>
      ))}
        </>
        : <p className="text-center text-muted my-5 py-5">
        You haven't ordered any products to your orders
        </p>
        }
        </div>
        </div>
    </>
  );
};

export default AllOrders;









