import React, { useContext} from "react";
import { useFormik } from "formik";
import  * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import authInstanse from "../../Networking/authInstanse";

const Register = () => {
  let navigate=useNavigate();
  const {loading,setLoading} = useContext(CartContext);




  const handleRegister = async (values) => {
    try {
      setLoading(true)
      let {data}=await authInstanse.post("signup",values)
      if(data.message==="success"){
        toast.success(data.message,{duration:2000,className:"text-success px-4 fw-bolder"});
        setLoading(false)
        navigate("/login")
      }
    } 
    catch (error) {
      setLoading(false)
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
    }
  
}



  // validate with Yup

  let validationForm=Yup.object({
    name:Yup.string().required("Name is Required")
    .min(3,"Name Must Be More Than 3 Characters and Less Than 10 Characters")
    .max(10,"Name Must Be More Than 3 Characters and Less Than 10 Characters"),
    email:Yup.string().required("Email is  Required")
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
    password:Yup.string().required("Password is Required")
    .matches(/^[A-Z][a-z0-9]{5,10}$/i,"Your password must start with an uppercase letter and be between 5 and 10 characters"),
    rePassword:Yup.string().required("Repeat Password is Required")
    .oneOf([Yup.ref("password")],"Password and Repeat Password Not Matched"),
    phone:Yup.string().required("Phone is Required")
    .matches(/^01[0125][0-9]{8}$/i,"Phone must be valid Number")
  })



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema:validationForm,
    onSubmit: handleRegister,
  });








  return (
    <>

    <Helmet>
      <title>Register</title>
    </Helmet>



      <div className=" mx-auto py-4 mb-5 formik marginTop">
        <h3>Register Now :</h3>





        
        <form onSubmit={formik.handleSubmit}>

          <label className=" form-label my-3" htmlFor="name">
            Name :
          </label>
          
          <input
            name="name"
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="form-control"
            placeholder="Enter your Name"
          />
          {
            formik.errors.name && formik.touched.name ? 
          <small className="text-danger d-block mt-3">{formik.errors.name}</small>
            :null
          }

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




          <label className=" form-label my-3" htmlFor="rePassword">
            Repeat Password :
          </label>

          <input
            id="rePassword"
            name="rePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            className="form-control"
            placeholder="Confirm Password"
            autoComplete="true"
          />

          {
            formik.errors.rePassword && formik.touched.rePassword ?
          <small className="text-danger d-block mt-3">{formik.errors.rePassword}</small>
          :null
          }


          <label className=" form-label my-3" htmlFor="phone">
            Phone :
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="form-control mb-3"
            placeholder="Enter your Phone"
          />

         {
            formik.errors.phone && formik.touched.phone ?
          <small className="text-danger d-block mt-3">{formik.errors.phone}</small>
          :null
          }




         
        <button  disabled={!(formik.isValid && formik.dirty)}
         type="submit" className="btn bg-main text-white mt-4">
          {!loading ? "Register" : <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
        </button>

       
        


        </form>
      </div>
    </>
  );
};

export default Register;




       




  // old code with formik

  /*
   const validationForm = (values)=>{
     let errors={};
     if(!values.name){
       errors.name="Name is Required"
     }else if(values.name.length <3){
       errors.name="Name Must Be More Than 3 Characters and Less Than 10 Characters"
     }else if(values.name.length >10){
       errors.name="Name Must Be More Than 3 Characters and Less Than 10 Characters"
     }

     if(!values.email){
       errors.email="Email is  Required"
     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
       errors.email="Email is invalid"
     }

     if(!values.password){
       errors.password="Password is  Required"
     }else if(!/^[A-Z][a-z0-9]{5,10}$/i.test(values.password)){
       errors.password="Your password must start with an uppercase letter and be between 5 and 10 characters"
     }

   if(!values.rePassword){
     errors.rePassword="Repeat Password is  Required"
   }else if(values.rePassword !== values.password){
     errors.rePassword="Password and Repeat Password Not Matched"
    }

   if(!values.phone){
     errors.phone="Phone is  Required"
   }else if(!/^01[0125][0-9]{8}$/i.test(values.phone)){
     errors.phone="Password and Repeat Password Not Matched"
   }


   return errors;
 }

 */
  
