import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className=" bg-background bg-no-repeat h-screen bg-cover md:px-10 md:py-5  rounded-lg  to-sky-500  from-sky-500">
        <div className="backdrop-blur border-l border-rose-700 p-5 rounded-lg md:rounded-xl bg-white/10">
          <img
            className=" w-32 border p-2 rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-white mt-3">
            <p className=" px-2 py-1 text-xl  text-rose-200 rounded mb-2 border-rose-400">
              <span className="text-lg text-rose-500 font-semibold">
                Name :{" "}
              </span>
              {user?.displayName}
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-rose-400">
              <span className="text-lg text-rose-500 font-semibold">
                Email :{" "}
              </span>
              {user?.email}
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-rose-400">
              <span className="text-lg text-rose-500 font-semibold">
                Home :{" "}
              </span>
              Set Your Home
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-rose-400">
              <span className="text-lg text-rose-500 font-semibold">
                Age :{" "}
              </span>
              Set Your Age
            </p>
            <p className=" px-2 py-1 rounded mb-2 border-rose-400">
              <span className="text-lg text-rose-500 font-semibold">
                Education :{" "}
              </span>
              Set Your Education
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
