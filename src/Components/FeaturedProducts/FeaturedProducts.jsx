import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import Product from "./Product";
import Pagination from "../Pagination/Pagination";

const FeaturedProducts = () => {
  let { dataList, loading,getAllDetails,pageCount } = useFetch(`products`);






  return (
    <>
      <Helmet>
        <title>Fresh Cart Store</title>
      </Helmet>

      <div className="container py-5">
        <div className="row">
        
          <div className="d-flex justify-content-between">
            <h3 className="text-main fw-bold">Our Products :</h3>
            <div>
              <h3>
                <Link className="text-main" to="products">
                  See All
                </Link>
              </h3>
            </div>
          </div>

          {loading ? <Loader /> : dataList.map((product) => <Product key={product._id} product={product} />)}

          <Pagination getAllDetails={getAllDetails} pageCount={pageCount} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;


