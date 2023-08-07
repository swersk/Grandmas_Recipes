import React, { useContext } from "react";
import { RecipeContext } from "../App.jsx";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipeTitle } = useParams();
  const recipes = useContext(RecipeContext);

  // Find the correct recipe based on the slug
  const recipe = recipes.find(
    (r) => `${r.title.toLowerCase().replace(/\s+/g, "-")}` === recipeTitle
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${recipe.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          opacity: "0.9",
        }}
        className="text-5xl h-96 font-gamberino flex justify-center items-center align-middle font-extrabold"
      >
        {recipe.title}
      </div>
      <div
        id="ingredients-and-directions"
        className="text-black flex justify-evenly"
      >
        <div>
          <h2 className="text-3xl font-dancing-bold text-left">Ingredients</h2>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <li className="text-left" key={index}>
                {ingredient}
              </li>
            );
          })}
        </div>

        <div className=" text-black text-left">
          <h2 className="text-3xl text-black font-dancing-bold">Directions</h2>
          <ol className="text-left">
            {recipe.directions.map((direction, index) => {
              return <li key={index}>{direction}</li>;
            })}
          </ol>
        </div>
      </div>
      <div>
        <div id="video" className="flex justify-center items-center  p-12 ">
          <video className="w-full" src={recipe.video} controls>
            <source src={recipe.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
