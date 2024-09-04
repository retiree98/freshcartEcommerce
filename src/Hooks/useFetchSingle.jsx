import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseInstance from "../Networking/baseInstance";



const useFetchSingle = (url) => {
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  const getSingleDetails = async () => {
    setLoading(true);
    const { data } = await baseInstance.get(`${url}/${id}`);
    setSingle(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getSingleDetails();
  }, []);

  return { single, loading };
};

export default useFetchSingle;
