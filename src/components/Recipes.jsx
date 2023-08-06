import { useContext } from "react";
import { RecipeContext } from "../App.jsx";
import { Link } from "react-router-dom";
import Recipe from "./Recipe.jsx";

export default function Recipes() {
  let recipeArr = useContext(RecipeContext);

  const handleClick = () => {console.log('test')};

  return (
    <>
      <div id="recipes" className="antialiased grid grid-cols-3 font-medium mt-8 flex flex-wrap p-3">
        {recipeArr.map((recipe, index) => {
          return (
            <Link
              to={`/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="grid place-content-center p-3 h-96 "
              onClick={handleClick}>
                <div className="w-full h-80 flex justify-center align-middle ">
                  <img
                    src={recipe.img}
                    alt={recipe.alt_text}
                    className="w-72 h-68 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg "
                  />
                </div>
                <div className="h-18">
                <div className="h-16 mt-2 text-black text-3xl font-dancing-regular">
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
