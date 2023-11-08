/* eslint-disable react/prop-types */
function Directions({ directions }) {
  return (
    <div>
      <div className=" lg:w-[915px] md:w-[700px] ">
        <h1 className="font-semibold text-[33px] pl-[80px] pt-[50px]">
          Directions
        </h1>
        <div className="pb-[90px]">
          {directions &&
            directions.map((d, index) => (
              <div key={index}>
                <div className="pl-[80px] ">
                  <div className="flex ">
                    <input
                      type="checkbox"
                      name="direction"
                      id={`direction-${index}`}
                      className="hidden peer"
                    ></input>
                    <div className="flex items-center justify-center top-0 right-4 bottom-0 w-6 h-6 my-auto rounded-full bg-white border-[3px] peer-checked:border-hidden peer-checked:bg-black transition delay-50">
                      <svg
                        width="12"
                        height="8"
                        className=""
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3L5 7L11 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor={`direction-${index}`}
                      className="p-6 bg-opacity-90 font-semibold backdrop-blur-2xl text-[22px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                    >
                      {index + 1}. {d.title}
                    </label>
                  </div>
                  <p className="text-[#00000099] text-[14px] pl-[50px] w-[90%] pb-[50px]">
                    {d.guide}
                  </p>
                  <div className="border-b-2"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Directions;
