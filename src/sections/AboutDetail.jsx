import { useParams } from "react-router-dom";
import { Abouts } from "../data/About";
export const AboutDetail = () => {
  const { id } = useParams();
  const abouts = Abouts.find((item) => item.id === parseInt(id));
  if (!abouts) {
    return <div></div>;
  }

  return (
    <div className="w-100% p-[30px] min-h-screen flex flex-col items-center justify-start ">
      <div className="w-full   md: items-center flex justify-center mt-20 px-6 md:px-24   2xl:px-96 gap-12 pb-24 bg-gray-100 rounded-lg shadow-md">
        <img
          src={abouts.img}
          alt={abouts.name}
          className="w-full h-auto max-w-md rounded-md mt-[100px]"
        />
        <div>
          <p className="text-4xl font-semibold mt-[40px] ">{abouts.name}</p>
          <h2 className="text-4xl font-extrabold mt-[20px] ">{abouts.role}</h2>
          <p className="text-gray-700 mt-[50px]">{abouts.about}</p>
        </div>
      </div>
    </div>
  );
};
