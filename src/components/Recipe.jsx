import { useContext, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipeTitle } = useParams();
  const recipes = useContext(RecipeContext);
  const { setIsHome } = useContext(HomeContext);


  const recipe = recipes.find(
    (r) => `${r.title.toLowerCase().replace(/\s+/g, "-")}` === recipeTitle
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  useEffect(() => {
    setIsHome(false);
  }, []);

  const handleMade = () => {
    console.log("Made!");
  };

  const handleLike = () => {
    console.log("Liked!");
  };

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
        // className="relative text-5xl h-80 font-satoshi-medium flex justify-center items-center align-middle font-extrabold text-white shadow-lg overlay"
        className="recipe-image text-5xl h-80 font-satoshi-medium flex justify-center items-center font-extrabold text-white shadow-lg"
      >
        {recipe.title}
      </div>
      </div>

      <div
        id="ingredients-and-directions"
        className="text-black flex justify-center grid grid-cols-2 p-4 "
      >
        <div className="ml-48 w-auto">
          <h2 className="text-3xl font-dancing-bold text-left mb-2 ml-16 leading-relaxed">
            Ingredients
          </h2>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <li
                className="text-left text-1xl leading-relaxed font-satoshi-regular ml-16"
                key={index}
              >
                {ingredient}
              </li>
            );
          })}
        </div>

        <div className=" text-black text-left mr-72  w-full">
          <h2 className="text-3xl text-black font-dancing-bold mb-2">
            Directions
          </h2>
          <ol className="text-left text-1xl font-satoshi-regular leading-8">
            {recipe.directions.map((direction, index) => {
              return <li key={index}>{direction}</li>;
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
