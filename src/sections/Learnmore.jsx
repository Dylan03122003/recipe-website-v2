import hi from "./../assets/img/Group 880.png";

const Learnmore = () => {
  return (
    <div class="md:flex items-center justify-center h-screen pb-[80px] ">
      <div class="md:flex justify-center items-center p-10 ">
        <div class=" mt-4 md:mt-0 md:ml-6 ">
          <h1
            class="block
         mt-1
         xl:text-[60px]
         lg:text-[50px]
         leading-tight
         font-semibold
         text-gray-900
         md:text-clip
         md:inline
         md:text-[40px]
         sm:text-[39px]
         max-sm:text-[30px]        
         
       "
          >
            Everyone can be a <br /> chef in their own kitchen
          </h1>
          <p class="mt-10 text-gray-600 max-sm:text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px]">
            Lorem ipusm dolor sit amet, consectetuipisicing elit, sed do
            <br /> eiusmod tempor incididunt labore et dolore magna aliqut enim
            <br />
            ad minim
          </p>
          <button class="bg-black text-white font-bold py-2 px-4 rounded mt-10 mb-10">
            Learn More
          </button>
        </div>
        <div class="md:flex-shrink-0 float-left md:w-[50%]">
          <img class="rounded-lg " src={hi} />
        </div>
      </div>
    </div>
  );
};
export default Learnmore;
