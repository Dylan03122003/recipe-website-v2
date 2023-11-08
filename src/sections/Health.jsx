/* eslint-disable react/prop-types */
import clock from "./../assets/img/clock.png";
import print from "./../assets/img/print.png";
import share from "./../assets/img/share.png";
import spoon from "./../assets/img/spoon.png";
function Information({ firstParagraph, secondParagraph }) {
  return (
    <div>
      <div className="flex justify-between pt-3 ">
        <p className="text-[17px] text-[#00000099] font-semibold #00000099">
          {firstParagraph}
        </p>
        <p className="font-semibold text-[17px]">{secondParagraph}</p>
      </div>

      <div className="border-b"></div>
    </div>
  );
}
function Health({ recipeDetail }) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between items-center ">
        <div className="space-x-4 flex flex-col items-center text-center lg:w-[800px] md:w-[100%]">
          <h1
            className="lg:pl-[70px] md:pl-[70px] sm:pl-[70px] pl-[20px]  xl:text-[60px]
         lg:text-[50px]
         leading-tight
         font-semibold
         text-gray-900
         md:text-clip
         md:inline
         md:text-[40px]
         sm:text-[39px]
         max-sm:text-[30px] "
          >
            {recipeDetail.foodName}
          </h1>
          <div className="lg:pl-[150px] flex flex-row items-center justify-center lg:text-[20px]">
            <div className="flex flex-row items-center justify-center lg:w-[190px] md:w-[140px] sm:w-[120px] w-[60px]">
              <div>
                <img
                  className="min-w-[30px] max-w-[50px] lg:block md:block sm:hidden hidden"
                  src={recipeDetail.authorPhoto}
                ></img>
              </div>
              <div className="pl-5">
                <p className="lg:text-[12px] font-bold">
                  {recipeDetail.authorName}
                </p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  15 March 2022
                </p>
              </div>
            </div>
            <div className="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[70px]">
              <div>
                <img
                  className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden"
                  src={clock}
                ></img>
              </div>
              <div className="pl-3">
                <p className="font-semibold text-[12px]">PREP TIME</p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  {recipeDetail.prepTime} Minutes
                </p>
              </div>
            </div>
            <div className="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[70px]">
              <div>
                <img
                  className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden"
                  src={clock}
                ></img>
              </div>
              <div className="pl-3">
                <p className="font-semibold text-[12px]">COOK TIME</p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  {recipeDetail.cookTime} Minutes
                </p>
              </div>
            </div>
            <div className="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[120px]">
              <div>
                <img
                  className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden"
                  src={spoon}
                ></img>
              </div>
              <div className="">
                <p className="text-[#00000099] font-semibold text-[14px]">
                  {recipeDetail.category}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:pr-[80px] md:pr-[50px] pt-[20px] gap-[30px]">
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#E7FAFE] rounded-full">
            <img className="w-[30x] h-[35px]" src={print}></img>
          </div>
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#E7FAFE] rounded-full">
            <img className="w-[40px] h-40px]" src={share}></img>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between pl-[80px] pt-10 pr-[80px]">
        <div className="flex justify-center lg:w-[915px] lg:h-[600px] md:w-[100%] sm:w-[100%] w-[100%] md:h-[500px] sm:h-[400px] h-[250px]">
          <iframe
            className="rounded-[35px] w-[100%]  lg:pr-[5px] md:mr-[25px]"
            src={recipeDetail.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" flex flex-col justify-between lg:w-[400px] lg:h-[600px] md:w-[80%] sm:w-[400px] w-[300px] lg:mt-[0px] md:mt-[50px] sm:mt-[50px] mt-[50px] bg-[#E7FAFE] rounded-[20px]">
          <div className="p-10 space-y-4">
            <h1 className="text-[24px] font-semibold">Nutrition Information</h1>
            <Information
              firstParagraph="Calories"
              secondParagraph={recipeDetail.nutrition.calories}
            />
            <Information
              firstParagraph="Total Fat"
              secondParagraph={recipeDetail.nutrition.totalFat}
            />
            <Information
              firstParagraph="Protein"
              secondParagraph={recipeDetail.nutrition.protein}
            />
            <Information
              firstParagraph="Carbohudrate"
              secondParagraph={recipeDetail.nutrition.carbohydrate}
            />
            <Information
              firstParagraph="Cholesterol"
              secondParagraph={recipeDetail.nutrition.cholesterol}
            />
          </div>
          <div className="text-center p-10 text-[#00000099]">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{" "}
          </div>
        </div>
      </div>
      <div className="text-[#00000099] lg:p-[80px] md:p-[60px] sm:p-[40px] p-[30px]">
        <p>{recipeDetail.description}</p>
      </div>
    </div>
  );
}

export default Health;
