import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
const Taskitems = ({ item, index, todoType, onDropTodo, handleDelete }) => {
  const [{ isDraggble }, dragRef] = useDrag({
    type: todoType,
    item: () => ({ ...item, index }),

    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(item);
      if (item) {
        onDropTodo(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div>
      <div
        ref={dragRef}
        className="bg-white/10 backdrop-blur border-gray-600 mb-2 border mt-5 p-3 rounded"
      >
        <h1 className="text-xl text-cyan-500 font-semibold">{item.title}</h1>

        <p className="font-normal max-w-[450px]   tracking-wide text-gray-300">
          {item.description}
        </p>

        <p className="capitalize text-gray-300 ">
          {" "}
          <span className="text-white">Priority : </span>
          {item.priority}
        </p>

        <div className="flex justify-between">
          <p>
            <span>DeadLine : </span> {item.deadline}
          </p>

          <div className="flex gap-5">
            <AiFillDelete
              onClick={() => handleDelete(item._id)}
              className="bg-red-600 w-6 h-6 rounded-full p-1"
            />{" "}
            <Link to={`/dashboard/update/${item._id}`}>
              <AiFillEdit className="bg-cyan-600 w-6 h-6 rounded-full p-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Taskitems;
