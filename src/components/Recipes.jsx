import { useContext, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { Link } from "react-router-dom";

export default function Recipes() {
  const {
    setIsHome,
    filteredRecipes,
    isFiltered,
    setIsFiltered,
    setFilteredRecipes,
  } = useContext(HomeContext);
  let recipeArr = useContext(RecipeContext);

  const handleClick = () => {
    setIsHome(false);
  };

  const handleShowAll = () => {
    console.log("Show All");
    setIsFiltered(false);
    setFilteredRecipes(recipeArr);
    setIsHome(true);
  };

  return (
    <>
      {isFiltered ? (
        <>
          <Link to="/">
            <button
              onClick={handleShowAll}
              className="rounded-3xl text-3xl bg-blue-200 p-3 mr-5 hover:bg-slate-600 transition-colors duration-150 ml-32 font-satoshi-medium mt-8"
            >
              Show All
            </button>
          </Link>
          <div
            id="recipes"
            className="antialiased  font-medium mt-8 flex justify-left h-screen p-3 ml-24 mr-24"
          >
            {filteredRecipes.map((recipe, index) => {
              return (
                <Link
                  to={`/${recipe.title.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                  className="flex flex-col items-center justify-center p-3 h-96  "
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
                    <div className="h-14 mt-2 text-black text-3xl font-dancing-bold ">
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
          className="antialiased grid grid-cols-3 gap-0 font-medium mt-3 flex justify-center p-7 h-screen"
        >
          {recipeArr.map((recipe, index) => {
            return (
              <Link
                to={`/${recipe.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="flex flex-col items-center justify-center h-96"
                onClick={() => handleClick(recipe)}
              >
                <div className="w-full h-80 flex justify-center">
                  <img
                    src={recipe.img}
                    alt={recipe.alt_text}
                    className="w-72 h-70 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg shadow-2xl"
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
