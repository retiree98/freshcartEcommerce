import React, { useContext } from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import authInstanse from "../../Networking/authInstanse";
import { AuthContext } from "../../Context/AuthContext";


const Login = () => {

  let navigate=useNavigate();

  const {loading,setLoading} = useContext(CartContext);
  const {saveUserData}=useContext(AuthContext)


  const handleLogin= async (values) => {
    try {
      setLoading(true)
      let {data}=await authInstanse.post("signin",values)
      if(data.message==="success"){
        localStorage.setItem("userToken", data.token)
        saveUserData();
        setLoading(false)
        toast.success(data.message,{duration:2000,className:"text-success px-4 fw-bolder"});
        navigate("/")
      }
    } 
    catch (error) {
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
    }
    finally{
      setLoading(false)
    }
}


  // validate with Yup

  const validationForm=Yup.object({
    email:Yup.string().required("Email is  Required")
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
    password:Yup.string().required("Password is Required")
    .matches(/^[A-Z][a-z0-9]{5,10}$/i,"Your password must start with an uppercase letter and be between 5 and 10 characters"),
  })



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:validationForm,
    onSubmit: (values)=>{
      handleLogin(values)
    },
  });




  return (
    <>

    <Helmet>
      <title>Login</title>
    </Helmet>




      <div className=" mx-auto py-4 mb-5 formik marginTop">
        <h3>Login Now :</h3>
    
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

          <label className=" form-label my-3" htmlFor="password">
            Password :
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="form-control"
            placeholder="Enter your Password"
            autoComplete="true"
          />

         {
          formik.errors.password && formik.touched.password ?
          <small className="text-danger d-block mt-3">{formik.errors.password}</small>
          :null
         }


        <div className=" d-flex justify-content-between align-items-center mt-5">
        <Link to={"/forget-password"} className="text-main fs-5">Forgotten password?</Link>


        <button  disabled={!(formik.isValid && formik.dirty)}
         type="submit" className="btn bg-main text-white">
          {!loading ? "Login" :  <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
        </button>

        </div>
        
        </form>
      </div>
    </>
  );
};

export default Login;
