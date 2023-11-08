import Categories from "../sections/Categories";
import Delcious from "../sections/Delicious";
import { default as DeliciousRecipe } from "../sections/DeliciousRecipe";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Instagram from "../sections/Instagram";
import Learnmore from "../sections/Learnmore";
import TastyRecipe from "../sections/TastyRecipe";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <TastyRecipe />
      <Instagram />
      <Learnmore />
      <DeliciousRecipe />
      <Delcious />
      <Footer />
    </>
  );
};

export default Home;
