import ScrollToTop from "react-scroll-to-top";
import { FooterData, stores } from "./Data";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Footer.css";
import toast from "react-hot-toast";

const Footer = () => {
  const date = new Date().getFullYear();

  const validationSchema = Yup.object({
    emailShare: Yup.string()
      .required("email is required")
      .email("Please Enter a valid Email"),
  });

  const handelEmail = () => {
    toast.success("success", {
      duration: 2000,
      className: "text-success px-4 fw-bolder",
    });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      emailShare: "",
    },
    validationSchema,
    onSubmit: handelEmail,
  });

  return (
    <>
      <ScrollToTop smooth={3000} top={500} color=" #0aad0a" />
      <footer className="footer">
        <div className="container">
          <h2 className=" fw-bold">Get The FreshCart App</h2>
          <p className="text-muted">
            We will send you a link, Open it in your phone to download App
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row mb-4">
              <div className="col-md-9">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="form-control "
                  name="emailShare"
                  id="emailShare"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailShare}
                />
                {formik.errors.emailShare && formik.touched.emailShare ? (
                  <small className="text-danger d-block mt-3">
                    {formik.errors.emailShare}
                  </small>
                ) : null}
              </div>

              <div className="col-md-3">
                <button
                  type="submit"
                  className="btn btn-success w-100 mt-3 mt-md-0"
                >
                  Share App Link
                </button>
              </div>
            </div>
          </form>

          <hr />

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <h6 className=" me-4">Payment Partners</h6>

                {FooterData.map((data) => {
                  const { id, image, alt } = data;
                  return (
                    <img src={image} className="footerImg" alt={alt} key={id} />
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6">
              <div className=" d-flex align-items-center">
                <h6 className="text-muted me-4 footer-title">
                  Get deliveries with FreshCart
                </h6>
                {stores.map((store) => {
                  const { id, image, alt } = store;
                  return (
                    <img
                      src={image}
                      className="storeImg cursor-pointer"
                      alt={alt}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="copy-right">
            <p className="text-center">
              Copyrights {date} © By FreshCart All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
