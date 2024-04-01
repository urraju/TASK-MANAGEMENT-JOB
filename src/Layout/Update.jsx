import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
const Update = ( ) => {
    const axiosPublic = useAxios();
    const navigate = useNavigate()
    const item = useLoaderData()
    console.log(item);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updateInfo = {
      title: data.title,
      priority: data.priority,
      deadline: data.deadline,
      description: data.description,
    };
    axiosPublic.put(`/task/updateTask/${item._id}`, updateInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/taskmanagement')
        reset();

      }
    });
  };
  return (
    <div className="w-full">
      <div className="flex items-center rounded-lg bg-background h-screen justify-center p-3">
        <div className=" lg:p-10 p-5 rounded-xl backdrop-blur bg-white/15 lg:w-1/2 w-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold uppercase text-center text-xl text-green-400 border-b-2 py-2 font-roboto flex justify-center gap-3 items-center">
            Update Task <FaEdit />
          </h3>
          <div className="mt-3 text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">
                Title
                <input
                  className="block bg-transparent border-gray-400 text-gray-200 mb-3 outline-none   px-3 py-2 rounded mt-2 border w-full"
                  type="text"
                  name="title"
                  defaultValue={item.title}
                  id=""
                  placeholder="Task Title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-600 block">
                    This title is required
                  </span>
                )}
              </label>
              <label htmlFor="">
                Priority
                <select
                  className="block mb-3 bg-transparent border-gray-400 text-gray-200 outline-none  px-3 py-2 rounded mt-2 border  w-full"
                  name="priority"
                  defaultValue={item.priority}
                  {...register("priority")}
                >
                  <option value="low">Prioriry</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                  <option value="other">Others</option>
                </select>
                {errors.priority && (
                  <span className="text-red-600 block">
                    This priority is required
                  </span>
                )}
              </label>

              <label htmlFor="">
                DeadLine
                <select
                  className="block mb-3 outline-none bg-transparent border-gray-400 text-gray-200 px-3 py-2 rounded mt-2 border w-full"
                  name="deadline"
                  defaultValue={item.deadline}
                  {...register("deadline")}
                >
                  <option value="21-24">21-24</option>
                  <option value="21-23">21-23</option>
                  <option value="21-27">21-27</option>
                  <option value="22-25">22-25</option>
                  <option value="23-28">23-28</option>
                </select>
                {errors.deadline && (
                  <span className="text-red-600 block">
                    This dedline is required
                  </span>
                )}
              </label>
              <label htmlFor="">
                Description
                <textarea
                  className="block mb-3 outline-none bg-transparent border-gray-400 text-gray-200 px-3 py-2 rounded mt-2 border w-full"
                  type="text"
                  name="title"
                  defaultValue={item.description}
                  id=""
                  placeholder="Task Title"
                  {...register("description", { required: true })}
                  cols="5"
                  rows="4"
                ></textarea>
                {errors.description && (
                  <span className="text-red-600 block">
                    This description is required
                  </span>
                )}
              </label>
              <button
                type="submit"
                className=" backdrop-blur border border-gray-400 flex items-center gap-2  justify-center uppercase text-white w-full py-2 rounded"
              >
                Update Task <FaEdit className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update;
