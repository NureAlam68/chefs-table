import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes)

  return (
    <div className="md:w-3/5 mt-[48px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {
        recipes.map(recipe =><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
      }
      </div>
    </div>
  );
};

export default Recipes;
