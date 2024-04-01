

const HeadingContent = ({heading,subHeading}) => {
    return(
        <div className="md:w-96 z-30 border-b border-rose-400 text-center mx-auto mt-10 my-5">
            <p className="text-rose-400  font-kdam uppercase text-lg mb-2">{heading}</p>
            <p className="text-4xl  py-4 inline-block font-kdam  uppercase text-gray-300 ">{subHeading}</p>
        </div>
    )}
export default HeadingContent;