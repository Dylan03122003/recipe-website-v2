import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MoreRecipeDetail from "./pages/MoreRecipeDetail";
import MoreRecipes from "./pages/MoreRecipes";
import Blog from "./sections/Blog";
import BlogList from "./sections/BlogList";
import Contact from "./sections/Contact";
import RecipeDetail from "./sections/RecipeDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-recipes" element={<MoreRecipes />} />
        <Route path="/more-recipes/:recipeID" element={<MoreRecipeDetail />} />
        <Route path="/recipes/:recipeID" element={<RecipeDetail />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:blogID" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
