import { useContext, useState, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { Link } from "react-router-dom";

export default function Recipes() {
  const { isHome, setIsHome, filteredRecipes, isFiltered, setIsFiltered, recipesData, setRecipes, setFilteredRecipes } =
    useContext(HomeContext);
  let recipeArr = useContext(RecipeContext);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const handleClick = (recipe) => {
    setIsHome(false);
  };

  useEffect(() => {
    setIsHome(true);
  }, []);



  const handleShowAll = () => {
    console.log('Show All')
    setIsFiltered(false);
    setFilteredRecipes(recipeArr)
    setIsHome(true);
  }

  return (
    <>
      {isFiltered ? (
        <>
        <Link to="/"><button onClick={handleShowAll} className="rounded-full text-3xl bg-blue-200 p-4 mr-5 hover:bg-blue-100/80 transition-colors duration-150 ml-32">Show All</button></Link>
        <div
          id="recipes"
          className="antialiased grid grid-cols-3 gap-0 font-medium mt-8 flex justify-center p-3 ml-24 mr-24"
        >
          {filteredRecipes.map((recipe, index) => {
            return (
              <Link
                to={`/${recipe.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="flex flex-col items-center justify-center p-3 h-96"
                onClick={() => handleClick(recipe)}
              >
                <div className="w-full h-80 flex justify-center ">
                  <img
                    src={recipe.img}
                    alt={recipe.alt_text}
                    className="w-72 h-70 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg "
                  />
                </div>
                <div>
                  <div className="h-14 mt-2 text-black text-3xl font-dancing-bold">
                    {recipe.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        </>
      ) : (
        <div
          id="recipes"
          className="antialiased grid grid-cols-3 gap-0 font-medium mt-8 flex justify-center p-3 ml-24 mr-24"
        >
          {recipeArr.map((recipe, index) => {
            return (
              <Link
                to={`/${recipe.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="flex flex-col items-center justify-center p-3 h-96"
                onClick={() => handleClick(recipe)}
              >
                <div className="w-full h-80 flex justify-center ">
                  <img
                    src={recipe.img}
                    alt={recipe.alt_text}
                    className="w-72 h-70 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg "
                  />
                </div>
                <div>
                  <div className="h-14 mt-2 text-black text-3xl font-dancing-bold">
                    {recipe.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
