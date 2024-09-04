import Loader from "../Loader/Loader";
import { Helmet } from "react-helmet";
import useFetchSingle from "../../Hooks/useFetchSingle";





const BrandDetails = () => {

    let {single,loading}=useFetchSingle("brands")



  return (
    <>

      <Helmet>
        <title>{single.name}</title>
      </Helmet>

    <div className="container py-5 marginTop">

        <div className="row gx-5 align-items-center">
        {loading ? <Loader/>
        : 
        <>
        <div className="col-md-4">
     <div className="brand-item shadow rounded-5 p-5  ">
     <img className="w-100 " src={single.image} alt={single.name} />
     </div>
        </div>


    <div className="col-md-8 text-center">
      <h1 className=" text-main mt-5 mt-sm-0">{single.name}</h1>
        <p className=" my-3">{single.updatedAt}</p>
        <p>{single.createdAt}</p>

    </div>
        </>
        }
    




        </div>
    </div>
    </>
  )
}

export default BrandDetails;
