import React, { useContext } from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import {useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import authInstanse from "../../Networking/authInstanse";




const ForgetPassword = () => {
  let navigate=useNavigate();
  const {loading,setLoading} = useContext(CartContext);



  const forgetPassword= async (values) => {
    try {
      setLoading(true)
      let {data}=await authInstanse.post("forgotPasswords",values)
      if(data.statusMsg==="success"){
        toast.success(data.message,{duration:2000,className:"text-success px-4 fw-bolder"});
        navigate("/verify-code")
        setLoading(false)
      }
    } 
    catch (error) {
      setLoading(false)
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
    }
  
}


  // validate with Yup

  let validationForm=Yup.object({
    email:Yup.string().required("Email is  Required")
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
  })



  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema:validationForm,
    onSubmit: (values)=>{
      forgetPassword(values)
    },
  });




  return (
    <>

    <Helmet>
      <title>Forget Password</title>
    </Helmet>




      <div className="formik mx-auto py-4 mb-5 marginTop">

      <h3>Forget Password :</h3>
        
        <form onSubmit={formik.handleSubmit}>
          
          <label className=" form-label my-3" htmlFor="email">
            Email :
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control"
            placeholder="Enter your Email"
          />

          {
            formik.errors.email && formik.touched.email ?
          <small className="text-danger d-block mt-3">{formik.errors.email}</small>
          :null
          }


        <div className="mt-5">
        <button  disabled={!(formik.isValid && formik.dirty)}
         type="submit" className="btn bg-main text-white">
          {!loading ? "Send Code" :  <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
        </button>
        </div>




         
       

       
        


        </form>
      </div>
    </>
  );
};

export default ForgetPassword;





