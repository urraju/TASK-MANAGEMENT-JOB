import { FaBars, FaEnvelope, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import { MdHome, MdManageAccounts } from "react-icons/md";

import HelmetUse from "../Shared/HelmetUse";
import useAuth from "../../Hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();

  return (
    <div>
      <HelmetUse helmet={"Dashboard"} />
      <div className=" w-full p-2 flex flex-col lg:flex-row md:p-5 gap-10 justify-evenly   ">
        <div className=" bg-background bg-no-repeat bg-cover bg-center rounded-lg p-10 lg:w-[500px]  h-max lg:min-h-screen">
          <div>
            <div className="flex gap-3 items-center mb-5 ">
              <div className="border rounded-full p-2">
                <img
                  className="rounded-full w-24 h-24 object-cover obj"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <div>
                <p className=" text-rose-200  font-rubik text-2xl">
                  {user.displayName}
                </p>
                <p className="text-rose-200">{user.email}</p>
              </div>
            </div>
          </div>

          <ul className="flex flex-col text-white gap-4">
            <>
              <li>
                <NavLink
                  className="flex font-roboto  gap-1 items-center uppercase"
                  to="/DashBoard/taskmanagement"
                >
                  <MdManageAccounts className="text-2xl" />
                  Task Management
                </NavLink>
              </li>
            </>

            <>
              <li>
                <NavLink
                  className="flex font-roboto   gap-2 items-center uppercase"
                  to="/DashBoard/userProfile"
                >
                  <FaUser className="text-lg" />
                  My Profile
                </NavLink>
              </li>
            </>
          </ul>

          <div className="border-b border-dashed mt-5"></div>

          <ul className="mt-4 text-white flex flex-col gap-3">
            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/"
            >
              <MdHome className="text-xl" />
              Home
            </NavLink>
            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/DashBoard/cart"
            >
              <FaBars className="text-lg" />
              Menu
            </NavLink>

            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/DashBoard/cart"
            >
              <FaEnvelope className="text-lg" />
              contact
            </NavLink>
          </ul>
        </div>

        <div className=" lg:col-span-8  rounded-lg   w-full bg-opacity-20 bg-gradient-to-tl justify-center flex ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
