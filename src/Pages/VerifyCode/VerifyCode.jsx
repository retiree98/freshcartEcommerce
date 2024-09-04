import React, { useContext } from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import {useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import authInstanse from "../../Networking/authInstanse";




const VerifyCode = () => {
  let navigate=useNavigate();
  const {loading,setLoading} = useContext(CartContext);



  const verifyPassword= async (values) => {
    try {
      setLoading(true)
      let {data}=await authInstanse.post("verifyResetCode",values)
      if(data.status==="Success"){
          toast.success('You can create a new Password',{duration:2000,className:"text-success px-4 fw-bolder"});
          setLoading(false)
          navigate("/reset-password")
      }
    } 
    catch (error) {
      setLoading(false)
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
    }
  
}


  // validate with Yup

  let validationForm=Yup.object({
    resetCode: Yup.string()
      .required("Reset Code is Required")
      .matches(/^\d{6}$/, "Reset Code must be a 6-digit number")
  })



  const formik = useFormik({
    initialValues: {
        "resetCode" : ""
    },
    validationSchema:validationForm,
    onSubmit: (values)=>{
        verifyPassword(values)
    },
  });




  return (
    <>

    <Helmet>
    <title>Verify Code</title>
  </Helmet>




      <div className="formik mx-auto py-4 mb-5 marginTop">

      <h3>Verify Code :</h3>

        
        <form onSubmit={formik.handleSubmit}>
          
          <label className=" form-label my-3" htmlFor="resetCode">
          Enter Reset Code
          </label>
          <input
            id="resetCode"
            name="resetCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resetCode}
            className="form-control"
            placeholder="Enter Reset Code"
          />

          {
            formik.errors.resetCode && formik.touched.resetCode ?
          <small className="text-danger d-block mt-3">{formik.errors.resetCode}</small>
          :null
          }


        <div className="mt-5">
        <button  disabled={!(formik.isValid && formik.dirty)}
         type="submit" className="btn bg-main text-white">
          {!loading ? "Verify Code" :  <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
        </button>
        </div>




         
       

       
        


        </form>
      </div>
    </>
  );
};

export default VerifyCode;





