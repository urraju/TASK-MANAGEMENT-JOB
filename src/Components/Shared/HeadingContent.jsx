const HeadingContent = ({ heading, subHeading }) => {
  return (
    <div className="md:w-96 z-30 border-b border-rose-400 border-dashed text-center mx-auto mt-10 my-5">
      <div className="flex gap-3 justify-center items-center py-4 w-full">
        <div className="bg-gradient-to-r h-[3px] w-16 to-rose-500 from-slate-50 rounded-lg"></div>
        <h1 className="text-rose-500 text-lg font-semibold ">{heading}</h1>

        <div className="bg-gradient-to-r h-[3px] w-16 from-rose-500 to-slate-50 rounded-lg"></div>
      </div>
      <p className="text-4xl  py-4 inline-block font-kdam text-gray-600 uppercase  ">
        {subHeading}
      </p>
    </div>
  );
};
export default HeadingContent;
