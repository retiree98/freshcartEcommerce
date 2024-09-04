import Loader from "../Loader/Loader"
import { Helmet } from "react-helmet";
import useFetchSingle from "../../Hooks/useFetchSingle";




const CategoriesDeatails = () => {
  let {single,loading}=useFetchSingle("categories")



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
     <img className="p-5  rounded-3 " src={single.image} alt={single.name} />
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
  );
};

export default CategoriesDeatails;
