import useAuth from "../../Hooks/useAuth";
import { AiFillEdit } from "react-icons/ai";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className=" bg-background bg-no-repeat  h-screen bg-cover md:px-10 md:py-5  rounded-lg  to-sky-500  from-sky-500 ">
        <div className="  border-l w-[500px] h-max border-cyan-700 lg:ml-32 lg:mt-32 p-5 rounded relative">
          <img
            className="w-32 h-32  object-cover border p-1 rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-white mt-3">
            <p className=" px-2 py-1 text-xl text-rose-200  rounded mb-2  border border-cyan-400 border-opacity-20">
              <span className="text-lg text-cyan-500 font-semibold">
                Name :{" "}
              </span>
              {user?.displayName}
            </p>
            <p className=" px-2 py-1 rounded mb-2    border border-cyan-400 border-opacity-20">
              <span className="text-lg text-cyan-500 font-semibold">
                Email :{" "}
              </span>
              {user?.email}
            </p>
            <p className=" px-2 py-1 rounded mb-2   border border-cyan-400 border-opacity-20">
              <span className="text-lg text-cyan-500 font-semibold">
                Home :{" "}
              </span>
              Set Your Home
            </p>
            <p className=" px-2 py-1 rounded mb-2   border border-cyan-400 border-opacity-20">
              <span className="text-lg text-cyan-500 font-semibold">
                Age :{" "}
              </span>
              Set Your Age
            </p>
            <p className=" px-2 py-1 rounded mb-2   border border-cyan-400 border-opacity-20">
              <span className="text-lg text-cyan-500 font-semibold">
                Education :{" "}
              </span>
              Set Your Education
            </p>
          </div>
          <button className="text-white flex items-center gap-3 absolute top-0 lg:right-0 right-36 border-b py-2 border-cyan-500">Edit profile<AiFillEdit/> </button>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
