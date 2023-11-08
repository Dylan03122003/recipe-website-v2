/* eslint-disable react/prop-types */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./delicious_recipe.css";

library.add(fas);

const dishes = [
  {
    recipeID: 9,
    img: "src/assets/img/image-34.png",
    name: "Mixed Tropical Fruit Salad with Superfood Boosts",
    foodType: "Healthy",
  },
  {
    recipeID: 10,
    img: "src/assets/img/image-35.png",
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    foodType: "Western",
  },
  {
    recipeID: 11,
    img: "src/assets/img/image-36.png",
    name: "Healthy Japanese Fried Rice with Asparagus",
    foodType: "Healthy",
  },
  {
    recipeID: 12,
    img: "src/assets/img/image-37.png",
    name: "Cauliflower Walnut Vegetarian Taco Meat",
    foodType: "Eastern",
  },
  {
    recipeID: 1,
    img: "src/assets/img/image-38.png",
    name: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    foodType: "Healthy",
  },
  {
    recipeID: 1,
    img: "src/assets/img/image-39.png",
    name: "Barbeque Spicy Sandwiches with Chips",
    foodType: "Snack",
  },
  {
    recipeID: 1,
    img: "src/assets/img/image-40.png",
    name: "Firecracker Vegan Lettuce Wraps - Spicy!",
    foodType: "Seafood",
  },
  {
    recipeID: 1,
    img: "src/assets/img/image-41.png",
    name: "Chicken Ramen Soup with Mushroom",
    foodType: "Japanese",
  },
];

function Header() {
  return (
    <div className="header-delicious">
      <h1>Try this delicious recipe to make your day</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
    </div>
  );
}

function Menu({ dishes }) {
  return (
    <div className="menu-delicious">
      {dishes.map((dish, index) => (
        <Link key={index} to={`recipes/${dish.recipeID}`}>
          <Dish dish={dish} />
        </Link>
      ))}
    </div>
  );
}

function Dish({ dish }) {
  const [color, setColor] = useState(false);

  return (
    <div className="dish-delicious">
      <div className="dish-content">
        <div className="dish-image">
          <div className="dish-icon" onClick={() => setColor((h) => !h)}>
            <FontAwesomeIcon
              values={color}
              className={`heart ${color ? "active" : ""}`}
              icon="fa-solid fa-heart"
            />
          </div>
          <img src={dish.img} alt="" />
        </div>

        <div className="dish-description">
          <h4>{dish.name}</h4>
          <div>
            <span>
              <FontAwesomeIcon
                className="bottom-icon clock"
                icon="fa-solid fa-clock"
              />
              30 minutes
            </span>
            <span>
              <img
                className="bottom-icon knife"
                src="src/assets/img/ForkKnife.png"
                alt=""
              />
              {dish.foodType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TastyRecipe() {
  return (
    <div className="container">
      <Header />
      <Menu dishes={dishes} />
    </div>
  );
}
