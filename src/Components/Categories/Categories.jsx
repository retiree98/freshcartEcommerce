import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import "./Category.css";
import Pagination from "../Pagination/Pagination";

const Categories = () => {
 
  let {dataList,loading,getAllDetails,pageCount}=useFetch("categories")


  const allCategories=dataList.map((category)=>{

    const {_id,name,image}=category

    return(
      <div className="col-lg-3 col-md-4 col-sm-6" key={_id}>
      <Link to={"/categories-details/"+_id}>
        <div className="category rounded-3 shadow ">
          <img className="  rounded-3"   src={image} alt={name} />
          <div >
            <h6 className=" fw-bold text-center p-3  text-main">{name}</h6>
          </div>
        </div>
        </Link>
      </div>
    )
  })


  return (
    <>


      <Helmet>
        <title>Categories</title>
      </Helmet>



      <div className="container py-4 marginTop">
        <div className="row align-items-center gy-5 gx-5">
       
          <div className="col-lg-3 col-md-6">

            <div className="title">
              <h3 className="text-success fw-bolder">Our Categories</h3>
              <p className="text-muted lead">
                You can see our categories and each category includes the
                products in it
              </p>
            </div>
          </div>

          {loading ? <Loader/>  : allCategories }

      <Pagination getAllDetails={getAllDetails} pageCount={pageCount} />


        </div>
      </div>
    </>
  );
};

export default Categories;
