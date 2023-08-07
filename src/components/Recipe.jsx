import React, { useContext} from "react";
import { RecipeContext } from "../App.jsx";
import { useParams } from "react-router-dom";

export default function Recipe() {

  const { recipeTitle } = useParams();
  const recipes = useContext(RecipeContext);
  console.log('received')

  // Find the correct recipe based on the slug
  const recipe = recipes.find(r => `${r.title.toLowerCase().replace(/\s+/g, '-')}` === recipeTitle);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <>
      <div>{recipe.title}</div>
      <img src={recipe.img} alt={recipe.alt_text} width="100" height="100" />

      <div>
        <h1>Video</h1>
        <video src={recipe.video} controls>
          <source src={recipe.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </div>

      <div>
        <h2>Directions</h2>
        <ol>
          {recipe.directions.map((direction, index) => {
            return <li key={index}>{direction}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

// .recipe-header {
//   position: relative;
//   text-align: center;
//   color: white;
//   overflow: hidden;
// }

// .header-text {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// }

// .recipe-header img {
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   position: relative;
//   filter: brightness(50%);
//   width: 100%;
//   text-align: center;
//   height: 220px;
//   object-fit: cover;
//   object-position :center;
// }

// .recipe-header h1 {
//   background-color: rgb(0,0,0); /* Fallback color */
//   background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
//   border: 1px solid #f1f1f1;
//   color: white;
//   font-weight: bold;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 2;
//   width: 40%;
//   padding: 20px;
//   text-align: center;
//   text-transform: uppercase;
// }
