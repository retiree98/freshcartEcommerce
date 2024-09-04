import React, { useContext } from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import {useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import authInstanse from "../../Networking/authInstanse";




const ResetPassword = () => {
  let navigate=useNavigate();
  const {loading,setLoading} = useContext(CartContext);



  const resetPassword = async (values) => {
    try {
      setLoading(true)
      let {data}=await authInstanse.put("resetPassword",values)
      if(data.token !== null){
        toast.success("Your Password Changed Successfully",{duration:2000,className:"text-success px-4 fw-bolder"});
        setLoading(false)
        navigate("/login")
      }
    } 
    catch (error) {
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
      setLoading(false)
    }
  
}


  // validate with Yup

  let validationForm=Yup.object({
    email:Yup.string().required("Email is  Required")
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
  newPassword:Yup.string().required("Password is Required")
    .matches(/^[A-Z][a-z0-9]{5,10}$/i,"Your password must start with an uppercase letter and be between 5 and 10 characters"),
  })



  const formik = useFormik({
    initialValues: {
      "email":"",
      "newPassword": ""
    },
    validationSchema:validationForm,
    onSubmit: (values)=>{
      resetPassword(values)
    },
  });




  return (
    <>

    <Helmet>
    <title>Reset New Password</title>
    </Helmet>




      <div className="formik mx-auto py-4 mb-5 marginTop">



        <h3>Reset New Password :</h3>

        
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

          <label className=" form-label my-3" htmlFor="newPassword">
          New Password :
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className="form-control"
            placeholder="Enter your Password"
            autoComplete="true"
          />

         {
          formik.errors.newPassword && formik.touched.newPassword ?
          <small className="text-danger d-block mt-3">{formik.errors.newPassword}</small>
          :null
         }






        <div className=" mt-5">
        <button  disabled={!(formik.isValid && formik.dirty)}
         type="submit" className="btn bg-main text-white">
          {!loading ? "Confirm" :  <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
        </button>


        </div>
        


        </form>
      </div>
    </>
  );
};

export default ResetPassword;
