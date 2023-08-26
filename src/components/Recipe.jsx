import { useContext, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipeTitle } = useParams();
  const recipes = useContext(RecipeContext);
  const { setIsHome, setIsAbout } = useContext(HomeContext);

  const recipe = recipes.find(
    (r) => `${r.title.toLowerCase().replace(/\s+/g, "-")}` === recipeTitle
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  useEffect(() => {
    setIsHome(false);
    setIsAbout(false);
  }, []);

  return (
    <>
      <div className="recipe-container relative">
        <div
          style={{
            backgroundImage: `url(${recipe.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            opacity: "0.8",
          }}
          className="recipe-image text-5xl h-80 font-satoshi-medium flex justify-center items-center font-extrabold text-white shadow-lg"
        >
          {recipe.title}
        </div>
      </div>

      <div
        id="ingredients-and-directions"
        className="text-black md:flex md:justify-center md:grid md:grid-cols-2 md:p-4 "
      >
        <div className="md:ml-56 md:w-auto">
          <h2
            id="recipe-header"
            className="md:text-5xl font-dancing-bold text-left md:mb-6 md:ml-16 leading-relaxed md:mt-2"
          >
            Ingredients
          </h2>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <li
                className="text-left md:text-xl md:leading-relaxed font-satoshi-regular md:ml-16 md:mr-12"
                key={index}
              >
                {ingredient}
              </li>
            );
          })}
        </div>

        <div className=" text-black text-left md:mr-72  w-full">
          <h2
            id="recipe-header"
            className="md:mt-2 md:mb-6 md:text-5xl text-black font-dancing-bold"
          >
            Directions
          </h2>
          <ol className=" text-left md:text-xl font-satoshi-regular">
            {recipe.directions.map((direction, index) => {
              return (
                <li className="mb-4" key={index}>
                  {direction}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div>
        <div id="video" className="flex justify-center items-center p-6 ">
          <iframe
            width="560"
            height="315"
            src={recipe.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
