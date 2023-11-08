import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../api/recpie";
import Loader from "../components/Loader";

const MoreRecipeDetail = () => {
  const { recipeID } = useParams();
  const recipeIDNumber = parseInt(recipeID);
  const [isLoading, setIsLoading] = useState(false);

  const [recipeDetail, setRecipeDetail] = useState({
    id: recipeIDNumber,
    analyzedInstructions: [
      {
        steps: [
          {
            number: 0,
            step: "",
            ingredients: [{ name: "" }],
            equipment: [{ name: "" }],
          },
        ],
      },
    ],
    dishTypes: [],
    extendedIngredients: [{ original: "" }],
    healthScore: 0,
    image: "",
    pricePerServing: 0,
    sourceUrl: "",
    summary: "",
    title: "",
  });

  useEffect(() => {
    const getRecipeInformation = async () => {
      setIsLoading(true);
      const reponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeID}/information`,
        {
          params: {
            apiKey: apiKey,
          },
        }
      );

      const data = reponse.data;
      setRecipeDetail(data);
      setIsLoading(false);
    };

    getRecipeInformation();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-start mt-10">
        <Loader />
      </div>
    );

  return (
    <div className="py-5 px-4 md:px-40">
      <img
        className="w-[95%] md:w-[600px] mx-auto rounded-sm"
        src={recipeDetail.image}
        alt=""
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mt-10">
          {recipeDetail.title}
        </h2>
        <div className="mt-5 flex items-center justify-start flex-wrap gap-2">
          {recipeDetail.dishTypes.map((type, index) => (
            <div
              className="bg-green-100 text-green-600 py-1 px-3 rounded-full"
              key={index}
            >
              {type}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-5">
          HealthScore:{" "}
          <span className="font-semibold">{recipeDetail.healthScore}</span>
        </p>
        <p className="mt-2 mb-2 text-gray-600">
          Price:{" "}
          <span className="font-semibold">{recipeDetail.pricePerServing}</span>{" "}
        </p>
        <a
          className="text-blue-600 border-b-[1px] border-solid border-blue-400"
          href={`${recipeDetail.sourceUrl}`}
        >
          Original Source
        </a>
        <h2 className="text-xl mt-5 font-semibold text-gray-600">Summary</h2>
        <div
          className="mt-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
        />
        <h2 className="text-xl font-semibold text-gray-600 my-5">
          Instructions
        </h2>
        <div>
          {recipeDetail.analyzedInstructions[0].steps.map((s, index) => (
            <div className="flex gap-5 mb-10" key={index}>
              <div className="bg-slate-100 text-slate-700 font-medium cursor-pointer w-[65px] h-[65px] rounded-full flex items-center justify-center">
                Step {s.number}
              </div>

              <div className="w-[80%]">
                <p className="text-gray-600">{s.step}</p>
                {s.ingredients.length > 0 && (
                  <h2 className="mt-2 text-gray-600 font-semibold">
                    Ingredients
                  </h2>
                )}
                <ul className="pl-5 list-disc">
                  {s.ingredients.map((ingredient, index) => (
                    <li className="text-gray-600" key={index}>
                      {ingredient.name}
                    </li>
                  ))}
                </ul>
                {s.equipment.length > 0 && (
                  <h2 className="mt-2 text-gray-600 font-semibold">
                    Equipments
                  </h2>
                )}
                <ul className="pl-5 list-disc">
                  {s.equipment.map((e, index) => (
                    <li className="text-gray-600" key={index}>
                      {e.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-gray-600 my-5">
          Ingredients
        </h2>
        <ul className="list-disc pl-10">
          {recipeDetail.extendedIngredients.map((ei, index) => (
            <li className="text-gray-600" key={index}>
              {ei.original}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreRecipeDetail;
