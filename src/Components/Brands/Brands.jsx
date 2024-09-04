import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import Pagination from "../Pagination/Pagination";




const Brands = () => {

let {dataList,loading,getAllDetails,pageCount }=useFetch("brands")



  const displayData = dataList.map((brands)=>{

    const {_id,image,name}=brands;

    return(
      <div key={_id} className="col-lg-3 col-md-6 ">
     <div  className="brand-item  rounded-5 shadow">

     <Link to={"/brand-details/" + _id}>
          <img src={image}alt={name} className="w-100" />
          <h4 className='text-success text-center py-4'>{name}</h4>
     </Link>
      </div>
    </div>
    )
  })


  return (
    <>

      <Helmet>
        <title>Brands</title>
      </Helmet>

    <div className="container py-5 marginTop">
      <div className="row gy-5 align-items-center ">
    
      <div className="col-lg-3 col-md-6">
        <div className="title">
        <h3 className='text-success fw-bolder'>Our Brands</h3>
          <p className='text-muted lead'>
          You can see our brands and each brand includes the products in it
          </p>
        </div>
      </div>

      {loading? <Loader/>:displayData}
      <Pagination getAllDetails={getAllDetails} pageCount={pageCount} />
      </div>
    </div>
    </>
  );
};

export default Brands;
