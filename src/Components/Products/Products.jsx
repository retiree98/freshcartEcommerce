import React, {useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Loader/Loader";
import useFetch from "../../Hooks/useFetch";
import ProductCard from "./ProductCard";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  let { dataList, loading,getAllDetails,pageCount } = useFetch("products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = dataList.filter((pro) =>
    pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <div className="container py-5 marginTop">
        <h2 className="text-main mb-5">All Products :</h2>
        <div className="row">

          <div className="col-12 mb-5 search mx-auto">
          <label className=" form-label" htmlFor="search">
            Search :
          </label>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        
        {loading ? <Loader /> : 
          <div className="row">
          {filteredData.map((product) => (
           <ProductCard key={product._id} product={product} />
          ))}
        </div>
        }
      <Pagination getAllDetails={getAllDetails} pageCount={pageCount} />
        
      </div>
    </>
  );
};

export default Products;

