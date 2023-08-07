import { useContext, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { useParams } from "react-router-dom";


export default function Recipe() {
  const { recipeTitle } = useParams();
  const recipes = useContext(RecipeContext);
  const { setIsHome } = useContext(HomeContext);


  // Find the correct recipe based on the slug
  const recipe = recipes.find(
    (r) => `${r.title.toLowerCase().replace(/\s+/g, "-")}` === recipeTitle
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  useEffect(() => {
    setIsHome(false);
  }, [])

  const handleMade = () => {
    console.log('Made!')
  }

  const handleLike = () => {
    console.log('Liked!')
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${recipe.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          opacity: '0.9',
        }}
        className="text-5xl h-96 font-satoshi-medium flex justify-center items-center align-middle font-extrabold text-black shadow-lg"
      >
        {recipe.title}
      </div>



      <div
        id="ingredients-and-directions"
        className="text-black flex justify-center grid grid-cols-2 p-4"
      >
        <div className="ml-16">
          <h2 className="text-3xl font-dancing-bold text-left mb-2 leading-relaxed">Ingredients</h2>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <li className="text-left text-1xl leading-relaxed font-satoshi-regular" key={index}>
                {ingredient}
              </li>
            );
          })}
        </div>

        <div className=" text-black text-left mr-16 ">
          <h2 className="text-3xl text-black font-dancing-bold mb-2">Directions</h2>
          <ol className="text-left text-1xl font-satoshi-regular leading-8">
            {recipe.directions.map((direction, index) => {
              return <li key={index}>{direction}</li>;
            })}
          </ol>
        </div>

      </div>
      <div className="text-black flex justify-center items-center justify-evenly bg-blue-100 h-8 p-10">
      <i className="fa-regular fa-calendar-check" onClick={handleMade}>  I made this!</i>

                <i className="fa-regular fa-heart" onClick={handleLike}>  I like this!</i>
      </div>
      <div>
        <div id="video" className="flex justify-center items-center p-12 ">
        <iframe
        width="560"
        height="315"
        src={recipe.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        >
        </iframe>
        </div>
      </div>
    </>
  );
}
