import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      preRecipe => preRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else{
      alert('Recipe already exists in the queue')
    }
  };

  return (
    <div className="max-w-[1600px] container mx-auto">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
      {/* Recipe card section */}
      <section className="flex flex-col md:flex-row gap-6 px-[140px]">
        {/* Card */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;
