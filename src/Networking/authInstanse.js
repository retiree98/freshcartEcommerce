import axios from "axios";

const authInstanse = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/auth/",
});

export default authInstanse;
