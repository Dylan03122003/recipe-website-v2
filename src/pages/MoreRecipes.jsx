import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../api/recpie";
import Loader from "../components/Loader";

const MoreRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const searchKeyRef = useRef();

  useEffect(() => {
    const getRandomRecipes = async (number) => {
      setIsLoading(true);
      const reponse = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=${number}`,
        {
          params: {
            apiKey: apiKey,
          },
        }
      );

      const data = reponse.data;
      const recipes = data.recipes.map((r) => {
        return { ...r, imgLoaded: false };
      });
      setRecipes(recipes);
      setIsLoading(false);
    };

    getRandomRecipes(10);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${
        searchKeyRef.current ? searchKeyRef.current.value : ""
      }`,
      {
        params: {
          apiKey: apiKey,
        },
      }
    );
    setIsLoading(false);
    const data = response.data;
    setRecipes(data.results);

    if (data.totalResults === 0) {
      setErrorMessage("There is no recipe with that search key!");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="relative w-fit m-auto my-[40px] max-lg:w-[90%]"
      >
        <input
          type="text"
          ref={searchKeyRef}
          placeholder="Search article, news or recipe..."
          className="max-lg:w-[100%] w-[700px] h-[80px] border border-black/10 rounded-[24px] p-[32px] pr-[180px] max-sm:h-[30px] max-sm:text-[15px] max-sm:pl-[20px]  max-sm:pr-[110px]"
        />
        <button
          type="submit"
          className="absolute right-[10px] top-[10px] w-[160px] h-[60px] rounded-[16px] bg-black text-white tracking-[-0.28px] text-[14px] max-sm:w-[90px] max-sm:h-[50px]  max-sm:top-[8px]"
        >
          Search
        </button>
      </form>

      {isLoading && (
        <div className="flex justify-center items-start mt-10">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="my-5 flex justify-center flex-wrap gap-10">
          {recipes.map((r) => (
            <Link
              key={r.id}
              to={`/more-recipes/${r.id}`}
              className="flex flex-col w-[300px] bg-gray-100 p-4 rounded-md shadow-custom"
            >
              <img src={r.image} alt="" className="w-full " loading="lazy" />

              <h2 className="flex-grow my-5 text-gray-600 font-semibold">
                {r.title}
              </h2>
            </Link>
          ))}
        </div>
      )}

      {errorMessage && (
        <p className="text-center mt-10 text-gray-700 text-xl">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default MoreRecipes;
