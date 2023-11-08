/* eslint-disable react/prop-types */
import ads from "./../assets/img/ads.png";

function Ingredients({ ingredients, otherRecipes }) {
  const mainDishes = ingredients.mainDish;
  const sauces = ingredients.sauce;

  return (
    <div>
      <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col flex-col pb-[70px]  ">
        <div className="lg:w-[930px] pr-[150px]">
          <h1 className="font-semibold text-[33px] pl-[80px] p-[20px]">
            Ingredients
          </h1>
          <div>
            <h1 className="font-semibold text-[22px] pl-[80px] p-[20px] ">
              For man dish
            </h1>
            <div className="pl-[80px] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[350px] ">
              {mainDishes &&
                mainDishes.map((dish, index) => (
                  <div key={index}>
                    <div>
                      <div className="flex pb-[8px] pt-[8px]">
                        <input
                          type="checkbox"
                          name="maindish"
                          id={`dish-${index}`}
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
                          htmlFor={`dish-${index}`}
                          className="p-4 bg-opacity-90 backdrop-blur-2xl text-[16px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                        >
                          {dish}
                        </label>
                      </div>
                    </div>

                    <div className="border-b-2"></div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-[22px] pl-[80px] pt-[60px] pb-[20px] ">
              For the sauce
            </h1>
            <div className="pl-[80px] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[350px]">
              {sauces &&
                sauces.map((s, index) => (
                  <div key={index}>
                    <div className="flex pb-[8px] pt-[8px]">
                      <input
                        type="checkbox"
                        name="sauce"
                        id={`sauce-${index}`}
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
                        htmlFor={`sauce-${index}`}
                        className="p-4 bg-opacity-90 backdrop-blur-2xl text-[16px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                      >
                        {s}
                      </label>
                    </div>
                    <div className="border-b-2"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex lg:w-[440px] md:w-[70%] sm:w-[70%] w-[70%]  md:ml-[80px] sm:ml-[80px] ml-[80px] ">
          <div className="flex flex-col">
            <h1 className="text-[31px] pt-[20px] pb-[30px] font-semibold">
              Other Recipe
            </h1>
            <div className="flex flex-col gap-[30px]">
              {otherRecipes &&
                otherRecipes.map((r, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-[20px]">
                      <div>
                        <img
                          className="w-[190px] rounded-[20px] p[]"
                          src={r.recipePhoto}
                        ></img>
                      </div>
                      <div>
                        <p className="font-bold text-[19px] pb-[10px]">
                          {r.foodName}
                        </p>
                        <p className="font-semibold text-[12px] text-[#00000099]">
                          {r.authorName}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <img className="w-[350px] h-[440px] pt-[60px]" src={ads}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ingredients;
