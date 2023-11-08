import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { left, right } from "../img";
function Delcious() {
  const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email must not be empty");
      // setEmailError("Email must not be empty");
    } else {
      toast.success("Subcribe successfully");
      // setEmailError("");
    }
  };
  return (
    <div className=" flex justify-center items-center m-[50px] mt-[250px]  ">
      <div className="bg-[#E7F9FD]  w-[1280px] sm:h-[442px] h-[500px] rounded-[50px] relative">
        <div className="mt-[60px] flex flex-col justify-center items-center">
          <h1 className="text-center font-bold lg:text-[50px] md:text-[40px] sm:text-[35px] text-[25px] w-600 text-black">
            Delicousness to your inbox
          </h1>
          <p className="text-center mt-[20px] w-[350px] sm:w-[500px] text-gray-500 mb-[30px]">
            Lorem ipsum dolor sit amet, consectetuipisicing, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className=" absolute left-[1px] bottom-[2px]">
            <img
              className=" lg:w-[300px] lg:h-[300px] md:w-[230px] md:h-[230px] sm:w-[200px] sm:h-[200px] w-[190px] h-[190px]"
              src={left}
            />
          </div>

          <div className="absolute right-[0%] bottom-[1px]">
            <img
              className=" lg:w-[300px] lg:h-[300px] md:w-[230px] md:h-[230px] sm:w-[200px] sm:h-[200px] w-[160px] h-[160px]"
              src={right}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:mt-[50px] sm:p-[10px] p-[10px]  flex justify-center  lg:relative items-center flex-col ">
            <input
              type="email"
              className="sm:w-[40%] w-full  md:[55%] h-[80px]  rounded-[15px] px-10"
              placeholder="Your email adress..."
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className=" w-[160px] h-[60px] lg:block  sm:hidden hidden mt-20px text-white bg-black md:absolute right-[31%]  rounded-[15px]  "
              type="submit"
            >
              Subscribe
            </button>
            <button
              className=" w-[160px] h-[60px] mt-[20px]  lg:hidden sm:block     text-white bg-black   rounded-[15px]  "
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <div className="text-center">
            <ToastContainer />
            {/* {emailError && (
              <p className="text-red-500 text-[30px]">{emailError}</p>
            )} */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Delcious;
