import { Link } from "react-router-dom";
import HeadingContent from "../Components/Shared/HeadingContent";
import task1 from "../assets/taskimg/Programming-amico.png";
import task2 from "../assets/taskimg/task2.jpg";
import { BsCheck } from "react-icons/bs";
const WhoTask = () => {
  return (
    <div className="p-2 md:p-5 md:mt-32">
      <HeadingContent
        heading={"Development"}
        subHeading={"Only For Developer"}
      />
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex gap-10 flex-col md:flex-row items-center">
          <img className="w-[600px]" src={task1} alt="" />
          <div>
            <h1 className="text-3xl font-bold">Developer can be use This site</h1>
            <p className="mt-3 text-lg mb-4">
              This site is for developers only. What would you do if you could
              work from work? <br /> You can see your dashboard by pressing the
              Dia button for better understanding.
            </p>
            <p className="flex items-center text-cyan-700 font-semibold gap-1"><BsCheck className="text-2xl text-green-500"/> Full Stack Development</p>
            <p className="flex items-center text-cyan-700 font-semibold gap-1"><BsCheck className="text-2xl text-green-500"/>  Mern Stack Development</p>
            <p className="flex items-center text-cyan-700 font-semibold gap-1"><BsCheck className="text-2xl text-green-500"/> Front-End  Development</p>
            <p className="flex items-center text-cyan-700 font-semibold gap-1"><BsCheck className="text-2xl text-green-500"/> React  Development</p>
            <p className="flex items-center text-cyan-700 font-semibold gap-1"><BsCheck className="text-2xl text-green-500"/>  React Native Development</p>
            <Link to="dashboard/taskmanagement">
              <button className="px-4 py-2 rounded border border-rose-200 font-rubik font-light text-rose-500 shadow-lg mt-4">
                Let's Explore
              </button>
            </Link>
          </div>
        </div>
        {/* task 2 */}
        <div className="flex items-center mt-10 md:mt-0 gap-10 flex-col-reverse md:flex-row justify-evenly ">
          <div className="text-right">
            <h1 className="text-2xl mb-4 font-semibold font-rubik">Only For Developer can be access</h1>
            <p>
              This site is for developers only. What would you do if you could
              work from work? <br /> You can see your dashboard by pressing the
              Dia button for better understanding.
            </p>
            
            <Link to='dashboard/taskmanagement'>
            <button className="px-4 py-2 rounded bg-rose-500 font-rubik font-light text-white shadow-lg mt-4">
              Let's Explore
            </button>
          </Link>
          </div>
          <img className="w-[600px]" src={task2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default WhoTask;
