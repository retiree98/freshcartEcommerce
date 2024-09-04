import Error from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <img className="w-100" src={Error} alt="eror" />
    </div>
  );
};

export default NotFound;
