import avatar2 from "./../assets/img/avatar2.png";
import food1 from "./../assets/img/food1.png";
import food2 from "./../assets/img/food2.png";
import food3 from "./../assets/img/food3.png";

const recipe1 = {
  recipeID: 1,
  foodName: "Big and Juicy Wagyu Beef Cheeseburge",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/BIG1h2vG-Qg?si=90Nssw0ZLbiTKtS8",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "If you have approximately 45 minutes to spend in the kitchen, White cake with marzipan and almonds might be a great lacto ovo vegetarian recipe to try. This dessert has 442 calories, 6g of protein, and 24g of fat per serving. For 92 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 29%, which is not so super. If you like this recipe, you might also like recipes such as Christmas stollen with almonds & marzipan, Homemade Marzipan (Boiled Marzipan), and German Marzipan Apple Cake.",
  ingredients: {
    mainDish: [
      "olive oil",
      "chili pepper",
      "salt and pepper",
      "spinach",
      "poached egg",
    ],
    sauce: ["water", "vinegar", "spinach"],
  },
  directions: [
    {
      stepID: 1,
      title: "Step 1",
      guide:
        "Take a wide skillet and fill it with enough water so the eggs can be submerged. Bring it up to a steady boil and then drop the temperature so it's at a steady simmer.",
    },
    {
      stepID: 2,
      title: "Step 2",

      guide:
        "Break one egg into a bowl and slowly pour into the boiling water. Do the same with the second egg.",
    },
    {
      stepID: 3,
      title: "Step 3",
      guide:
        "Let it cook until the white is cooked around the yolk, about two to three minutes.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe2 = {
  recipeID: 2,
  foodName: "Fresh Lime Roasted Salmon with Ginger Sauce",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/FLd00Bx4tOk?si=8qtkApIsW3Mrkx-4",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe3 = {
  recipeID: 3,
  foodName: "Strawberry Oatmeal Pancake with Honey Syrup",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/FLd00Bx4tOk?si=8qtkApIsW3Mrkx-4",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe4 = {
  recipeID: 4,
  foodName: "Fresh and Healthy Mixed Mayonnaise Salad",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ingredients: {
    mainDish: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  directions: [
    {
      stepID: 1,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 2,
      title: "titile",

      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      stepID: 3,
      title: "titile",
      guide:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe9 = {
  recipeID: 9,
  foodName: "Mixed Tropical Fruit Salad with Superfood Boosts",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "If you have approximately 45 minutes to spend in the kitchen, White cake with marzipan and almonds might be a great lacto ovo vegetarian recipe to try. This dessert has 442 calories, 6g of protein, and 24g of fat per serving. For 92 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 29%, which is not so super. If you like this recipe, you might also like recipes such as Christmas stollen with almonds & marzipan, Homemade Marzipan (Boiled Marzipan), and German Marzipan Apple Cake.",
  ingredients: {
    mainDish: [
      "olive oil",
      "chili pepper",
      "salt and pepper",
      "spinach",
      "poached egg",
    ],
    sauce: ["water", "vinegar", "spinach"],
  },
  directions: [
    {
      stepID: 1,
      title: "Step 1",
      guide:
        "Take a wide skillet and fill it with enough water so the eggs can be submerged. Bring it up to a steady boil and then drop the temperature so it's at a steady simmer.",
    },
    {
      stepID: 2,
      title: "Step 2",

      guide:
        "Break one egg into a bowl and slowly pour into the boiling water. Do the same with the second egg.",
    },
    {
      stepID: 3,
      title: "Step 3",
      guide:
        "Let it cook until the white is cooked around the yolk, about two to three minutes.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe10 = {
  recipeID: 10,
  foodName: "Big and Juicy Wagyu Beef Cheeseburger",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "If you have approximately 45 minutes to spend in the kitchen, White cake with marzipan and almonds might be a great lacto ovo vegetarian recipe to try. This dessert has 442 calories, 6g of protein, and 24g of fat per serving. For 92 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 29%, which is not so super. If you like this recipe, you might also like recipes such as Christmas stollen with almonds & marzipan, Homemade Marzipan (Boiled Marzipan), and German Marzipan Apple Cake.",
  ingredients: {
    mainDish: [
      "olive oil",
      "chili pepper",
      "salt and pepper",
      "spinach",
      "poached egg",
    ],
    sauce: ["water", "vinegar", "spinach"],
  },
  directions: [
    {
      stepID: 1,
      title: "Step 1",
      guide:
        "Take a wide skillet and fill it with enough water so the eggs can be submerged. Bring it up to a steady boil and then drop the temperature so it's at a steady simmer.",
    },
    {
      stepID: 2,
      title: "Step 2",

      guide:
        "Break one egg into a bowl and slowly pour into the boiling water. Do the same with the second egg.",
    },
    {
      stepID: 3,
      title: "Step 3",
      guide:
        "Let it cook until the white is cooked around the yolk, about two to three minutes.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe11 = {
  recipeID: 11,
  foodName: "Healthy Japanese Fried Rice with Asparagus",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "If you have approximately 45 minutes to spend in the kitchen, White cake with marzipan and almonds might be a great lacto ovo vegetarian recipe to try. This dessert has 442 calories, 6g of protein, and 24g of fat per serving. For 92 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 29%, which is not so super. If you like this recipe, you might also like recipes such as Christmas stollen with almonds & marzipan, Homemade Marzipan (Boiled Marzipan), and German Marzipan Apple Cake.",
  ingredients: {
    mainDish: [
      "olive oil",
      "chili pepper",
      "salt and pepper",
      "spinach",
      "poached egg",
    ],
    sauce: ["water", "vinegar", "spinach"],
  },
  directions: [
    {
      stepID: 1,
      title: "Step 1",
      guide:
        "Take a wide skillet and fill it with enough water so the eggs can be submerged. Bring it up to a steady boil and then drop the temperature so it's at a steady simmer.",
    },
    {
      stepID: 2,
      title: "Step 2",

      guide:
        "Break one egg into a bowl and slowly pour into the boiling water. Do the same with the second egg.",
    },
    {
      stepID: 3,
      title: "Step 3",
      guide:
        "Let it cook until the white is cooked around the yolk, about two to three minutes.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

const recipe12 = {
  recipeID: 12,
  foodName: "Cauliflower Walnut Vegetarian Taco Meat",
  authorPhoto: avatar2,
  authorName: "John Smithh",
  createdAt: new Date("2022-03-15"),
  prepTime: 15, // minutes
  cookTime: 15, // minutes
  category: "Snack",
  video: "https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw",
  nutrition: {
    calories: "230 kcal", // kcal
    totalFat: "1 g", // g
    protein: "3 g", // g
    carbohydrate: "3 g", // g
    cholesterol: "13 mg", //mg
  },
  description:
    "If you have approximately 45 minutes to spend in the kitchen, White cake with marzipan and almonds might be a great lacto ovo vegetarian recipe to try. This dessert has 442 calories, 6g of protein, and 24g of fat per serving. For 92 cents per serving, this recipe covers 8% of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 29%, which is not so super. If you like this recipe, you might also like recipes such as Christmas stollen with almonds & marzipan, Homemade Marzipan (Boiled Marzipan), and German Marzipan Apple Cake.",
  ingredients: {
    mainDish: [
      "olive oil",
      "chili pepper",
      "salt and pepper",
      "spinach",
      "poached egg",
    ],
    sauce: ["water", "vinegar", "spinach"],
  },
  directions: [
    {
      stepID: 1,
      title: "Step 1",
      guide:
        "Take a wide skillet and fill it with enough water so the eggs can be submerged. Bring it up to a steady boil and then drop the temperature so it's at a steady simmer.",
    },
    {
      stepID: 2,
      title: "Step 2",

      guide:
        "Break one egg into a bowl and slowly pour into the boiling water. Do the same with the second egg.",
    },
    {
      stepID: 3,
      title: "Step 3",
      guide:
        "Let it cook until the white is cooked around the yolk, about two to three minutes.",
    },
  ],

  otherRecipes: [
    {
      recipeID: 1,
      recipePhoto: food1,
      foodName: "Chicken Meatball with Creamy Chees...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 2,
      recipePhoto: food2,
      foodName: "The Creamiest Creamy Chicken an...",
      authorName: "By Andreas Paula",
    },
    {
      recipeID: 3,
      recipePhoto: food3,
      foodName: "The Best Easy One Pot Chicken and Rice",
      authorName: "By Andreas Paula",
    },
  ],
};

export const recipesDetailData = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe9,
  recipe10,
  recipe11,
  recipe12,
];
