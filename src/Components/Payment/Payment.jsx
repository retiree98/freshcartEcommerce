import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import creditCard from "../../assets/images/creditCard.png";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
import "./Payment.css";




const Payment = () => {

  const {loading,onlinePayment,cartDetails} = useContext(CartContext);

  



    let validationPayment = Yup.object({
      details: Yup.string().required("Details field is required."),
      phone: Yup.string()
        .required("Phone is Required")
        .matches(/^01[0125][0-9]{8}$/i, "Phone must be a valid number"),
      city: Yup.string().required("City field is required."),
    });
  
    let formik = useFormik({
      initialValues: {
        details: "",
        phone: "",
        city: "",
      },
      validationSchema: validationPayment,
      onSubmit: (values) => {
        onlinePayment(cartDetails, values);
      },
    });



  return (
    <>

    <Helmet>
        <title>Payment</title>
      </Helmet>
     

      <div className="marginTop container mx-auto w-75 payment">

    <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Credit Payment</button>
    </div>
   </nav>



        <div className="tab-content" id="nav-tabContent">

          <div
            className="tab-pane fade show active py-4"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >

            <div className="row ">

              <div className="col-md-6">

                <form onSubmit={formik.handleSubmit} className="form-control px-5 py-4">
                  <label className="form-label my-3" htmlFor="details">
                    Address Details :
                  </label>
                  <input
                  id="details"
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                    type="text"
                    className="form-control"
                    placeholder="Details Address"
                  />

            {
            formik.errors.details && formik.touched.details ? 
          <small className="text-danger d-block mt-3">{formik.errors.details}</small>
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
            placeholder="Entter your Phone"
          />

         {
            formik.errors.phone && formik.touched.phone ?
          <small className="text-danger d-block mt-3">{formik.errors.phone}</small>
          :null
          }

                  <label className="form-label my-3" htmlFor="city">
                    City / Area
                  </label>
                  <input
                   id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                    type="text"
                    className="form-control"
                    placeholder='City / Area'
                  />
                  {
             formik.errors.city && formik.touched.city ? 
                <small className="text-danger d-block mt-3">{formik.errors.city}</small>
            :null
            }


                  <button  disabled={!(formik.isValid && formik.dirty)}
                    type="submit" className="btn bg-main text-white mt-5">
                {!loading ? "Credit  Payment" :  <i className="fas fa-spinner fa-spin"></i>}
                </button>

                  
                </form>
              </div>

              <div className="col-md-6">
                <img className="w-100" src={creditCard} alt="creditCard" />
              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Payment;

