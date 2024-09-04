

import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";




const Profile = () => {
 const { userData } = useContext(AuthContext);


  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className="p-5 marginTop">
        <h2 className="text-center">Welcome  {userData?.name} </h2>
      </div>
    </>
  );
};

export default Profile;
