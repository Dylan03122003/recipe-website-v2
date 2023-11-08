/* eslint-disable react/prop-types */
import breakfast1 from "./../assets/img/breakfast1.png";
import chocolate1 from "./../assets/img/chocolate1.png";
import dessert1 from "./../assets/img/dessert1.png";
import lunch1 from "./../assets/img/lunch1.png";
import meat1 from "./../assets/img/meat1.png";
import vegan1 from "./../assets/img/vegan1.png";
function Grid(props) {
  const [src1, src2] = props.srcs;
  return (
    <div>
      <div className="justify-center items-center text-center relative">
        <div className="flex-shrink-0">
          <img src={src1} alt="img 1" className="w-16 h-16 mx-auto my-auto" />
        </div>
      </div>
      <div className="flex flex-col justify-end items-center h-20">
        <span className="mt-auto font-bold pb-4">{props.description}</span>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <div className="pt-12">
      <div className="flex justify-between items-center pb-8 pr-[20px] max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold pl-5">Categories</h1>
        <button className="bg-[#E7FAFE] p-4 rounded-xl font-bold text-1xl">
          View All Categories
        </button>
      </div>
      <div className="grid lg:grid-cols-6 gap-x-8 max-w-6xl mx-auto md:grid-cols-3 sm:grid-cols-1 ">
        <a
          href="#"
          className="rounded-3xl bg-gradient-to-b from-transparent via-white to-[#7082461A] pt-3"
        >
          <Grid srcs={[breakfast1]} description="Breakfast" />
        </a>

        <a
          href="#"
          className=" rounded-3xl bg-gradient-to-b from-transparent  via-white to-[#6CC63F1A] pt-3"
        >
          <Grid srcs={[vegan1]} description="Vegan" />
        </a>

        <a
          href="#"
          className="rounded-3xl bg-gradient-to-b from-transparent  via-white to-[#CC261B1A] pt-3"
        >
          <Grid srcs={[meat1]} description="Meat" />
        </a>

        <a
          href="#"
          className="rounded-3xl bg-gradient-to-b from-transparent via-white to-[#F09E001A] pt-3"
        >
          <Grid srcs={[dessert1]} description="Dessert" />
        </a>

        <a
          href="#"
          className=" rounded-3xl bg-gradient-to-b from-transparent via-white to-[#0000000D] pt-3"
        >
          <Grid srcs={[lunch1]} description="Lunch" />
        </a>

        <a
          href="#"
          className=" rounded-3xl bg-gradient-to-b from-transparent via-white to-[#0000000D] pt-3"
        >
          <Grid srcs={[chocolate1]} description="Chocolate" />
        </a>
      </div>
    </div>
  );
}

export default Categories;
