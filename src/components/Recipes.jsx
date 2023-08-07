import { useContext, useState } from "react";
import { RecipeContext } from "../App.jsx";
import { Link } from "react-router-dom";
import Recipe from "./Recipe.jsx";

export default function Recipes() {
  let recipeArr = useContext(RecipeContext);
  const [selectedRecipe, setSelectedRecipe] = useState({})

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe)
  };

  return (
    <>
      <div id="recipes" className="antialiased grid grid-cols-3 font-medium mt-8 flex flex-wrap p-3">
        {recipeArr.map((recipe, index) => {
          return (
            <Link
              to={`/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="grid place-content-center p-3 h-96 "
              onClick={() => handleClick(recipe)}>
                <div className="w-full h-80 flex justify-center align-middle">
                  <img
                    src={recipe.img}
                    alt={recipe.alt_text}
                    className="w-72 h-70 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg "
                  />
                </div>
                <div className="h-16">
                <div className="h-14 mt-2 text-black text-2xl font-gambarinor">
                  {recipe.title}
                </div>
                </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}