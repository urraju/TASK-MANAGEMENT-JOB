import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
 

const SocialLogin = () => {
  const { google } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogle = () => {
    google().then((result) => {
      console.log(result.user);
      navigate(location.state ? location.state : "/");
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogle}
        className=" h-8 cursor-pointer w-8 p-2 rounded-full bg-gray-200"
      >
        <FaGoogle className="text-orange-600" />
      </div>
    </div>
  );
};
export default SocialLogin;
