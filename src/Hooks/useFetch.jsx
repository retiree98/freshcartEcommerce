import { useEffect, useState } from "react";
import baseInstance from "../Networking/baseInstance";

const useFetch = (url) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(1);
  const [perPage] = useState(8);

  const getAllDetails = async (page) => {
    setLoading(true);
    const { data } = await baseInstance.get(`${url}?page=${page}&limit=${perPage}`);
    setDataList(data.data);
    setpageCount(data.metadata.numberOfPages);
    setLoading(false);
  };



  useEffect(() => {
    getAllDetails();
  }, []);

  return { dataList, loading, pageCount, getAllDetails };
};

export default useFetch;
