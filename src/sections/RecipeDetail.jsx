import { useParams } from "react-router-dom";
import Direction from "../sections/Directions";
import Health from "../sections/Health";
import Ingredients from "../sections/Ingredients";
import { recipesDetailData } from "./../data/recipe";

function RecipeDetail() {
  const { recipeID } = useParams();
  const recipeDetail =
    recipeID &&
    recipesDetailData.find((recipe) => {
      return parseInt(recipeID) === recipe.recipeID;
    });

  return (
    <div>
      <Health recipeDetail={recipeDetail} />
      <Ingredients
        ingredients={recipeDetail.ingredients}
        otherRecipes={recipeDetail.otherRecipes}
      />
      <Direction directions={recipeDetail.directions} />
    </div>
  );
}
export default RecipeDetail;
