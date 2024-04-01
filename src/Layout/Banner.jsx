import { Link } from "react-router-dom";
import bannerImg from "../assets/banner/banner2.jpg";
import { TypeAnimation } from "react-type-animation";
import downWave from '../assets/wave/wave (6).svg'
const Banner = () => {
  return (
    <div className="">
      <div className="flex max-w-screen-2xl p-2 md:p-5   relative mx-auto items-center md:flex-row flex-col justify-evenly">
        <div>
          <h1 className="text-5xl   font-bold ">
            Task Management
          </h1>
          <TypeAnimation
              className="text-rose-500 font-poppins text-sm  mb-4 mt-5"
              sequence={[
                "Create Your Task",
                1000,
                "Get Any Task",
                1000,
                "",
                1000,
                "Develop your career",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Autem recusandae quos amet Autem recusandae
            quos amet, similique labore rem.
          </p>
          <Link to='dashboard/taskmanagement'>
            <button className="px-8 py-2 rounded z-50 cursor-pointer bg-gradient-to-r from-pink-600 to-orange-400 font-rubik font-light text-white shadow-lg mt-4">
              Let's Explore
            </button>
          </Link>
        </div>
        <div>
          <img className="w-[700px]" src={bannerImg} alt="" />
        </div>
      </div>
      <div className="w-full">
        <img className="absolute   md:-bottom-10 bottom-4" src={downWave} alt="" />
      </div>
    </div>
  );
};
export default Banner;
