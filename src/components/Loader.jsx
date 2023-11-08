import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center gap-2">
      <Oval
        height={30}
        width={30}
        color="#616161"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#e0e0e0"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p className="text-gray-700">Wait a minute...</p>
    </div>
  );
};

export default Loader;
