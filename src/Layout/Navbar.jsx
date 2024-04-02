import { NavLink, useNavigate } from "react-router-dom";
import userIcon from '../assets/taskimg/user2.svg'
import logo from "../assets/logo/logo.png";
import { BiMenu } from "react-icons/bi";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, singout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    singout()
      .then((result) => {
        toast.success("Logout Successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-rose-500" : ""
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "underline text-rose-500" : ""
        }
        to="/taskmanagement"
      >
        Favourite Task
      </NavLink>

      {user?.email ? (
        <NavLink
          onClick={handleLogOut}
          className={({ isActive }) =>
            isActive ? "underline text-rose-500" : ""
          }
          to="/login"
        >
          logout
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline text-rose-500" : ""
          }
          to="/login"
        >
          login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="w-full sticky top-0 left-0   z-30  md:px-10   ">
      <div className="md:max-w-screen-xl w-full  mx-auto   px-3">
        <div className="navbar md:max-w-screen-2xl mx-auto  backdrop-blur  rounded-xl bg-white/30">
          <div className="navbar-start w-full">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-rose-500  border border-rose-500 btn-circle  mr-5  lg:hidden"
              >
                <BiMenu className="text-3xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 absolute p-5 shadow   backdrop-blur  bg-black/60 w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {nav}
              </ul>
            </div>
            <NavLink to="/" className="  items-center hidden lg:flex">
              <img className="w-12 " src={logo} alt="" />
              <div>
                <h1 className="text-3xl font-bold first-letter:text-rose-500 first-letter:text-4xl ml-5">
                  Task.com
                </h1>
              </div>
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex"></div>

          <div className="navbar-end w-full ">
            <div className="dropdown dropdown-end">
             <div>
             <ul className="menu font-bold  items-center hidden lg:flex menu-horizontal px-1  uppercase  gap-5 ">
                {nav}
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user ? user.photoURL : userIcon} alt="" />
                  </div>
                </label>
              </ul>
             </div>
              <NavLink to="/" className="  items-center lg:hidden flex w-full ">
                <img className="md:w-12 w-10 " src={logo} alt="" />
                <div>
                  <h1 className="md:text-3xl text-2xl font-bold   first-letter:text-rose-400 first-letter:text-4xl ml-5">
                    Task.com
                  </h1>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
