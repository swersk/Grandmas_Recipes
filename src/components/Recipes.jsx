
import { useContext, useState, useEffect } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";
import { Link } from "react-router-dom";
import Recipe from "./Recipe.jsx";


export default function Recipes() {

  const { isHome, setIsHome, filteredRecipes, isFiltered, setIsFilterd } = useContext(HomeContext);
  let recipeArr = useContext(RecipeContext);
  const [selectedRecipe, setSelectedRecipe] = useState({})


  const handleClick = (recipe) => {
    setIsHome(false);
  };

  useEffect(() => {
    setIsHome(true)
  }, [])

  useEffect(() => {

  }, [filteredRecipes])

  return (
    <>
    {isFiltered ? (
       <div id="recipes" className="antialiased grid grid-cols-3 gap-0 font-medium mt-8 flex justify-center p-3 ml-24 mr-24">
       {filteredRecipes.map((recipe, index) => {
         return (
           <Link
             to={`/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
             key={index}
             className="flex flex-col items-center justify-center p-3 h-96"
             onClick={() => handleClick(recipe)}>
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
    ) : (
      <div id="recipes" className="antialiased grid grid-cols-3 gap-0 font-medium mt-8 flex justify-center p-3 ml-24 mr-24">
      {recipeArr.map((recipe, index) => {
        return (
          <Link
            to={`/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="flex flex-col items-center justify-center p-3 h-96"
            onClick={() => handleClick(recipe)}>
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
  )
}




// import { useContext, useState, useEffect } from "react";
// import { RecipeContext, HomeContext } from "../App.jsx";
// import { Link } from "react-router-dom";
// import Recipe from "./Recipe.jsx";


// export default function Recipes() {

//   const { isHome, setIsHome, filteredRecipes, isFiltered, setIsFilterd } = useContext(HomeContext);
//   let recipeArr = useContext(RecipeContext);
//   const [selectedRecipe, setSelectedRecipe] = useState({})


//   const handleClick = (recipe) => {
//     setIsHome(false);
//   };

//   useEffect(() => {
//     setIsHome(true)
//   }, [])

//   useEffect(() => {

//   }, [filteredRecipes])

//   return (
//     <>
//     {isFiltered ? (
//       <p>Filtered Recipes here</p>
//     ) : (
//       <div id="recipes" className="antialiased grid grid-cols-3 gap-0 font-medium mt-8 flex justify-center p-3 ml-24 mr-24">
//       {recipeArr.map((recipe, index) => {
//         return (
//           <Link
//             to={`/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`}
//             key={index}
//             // className="grid place-content-center"
//             className="flex flex-col items-center justify-center p-3 h-96"
//             onClick={() => handleClick(recipe)}>
//               <div className="w-full h-80 flex justify-center ">
//                 <img
//                   src={recipe.img}
//                   alt={recipe.alt_text}
//                   className="w-72 h-70 rounded-md object-cover scale-95 hover:scale-100 ease-in duration-100 hover:shadow-lg "
//                 />
//               </div>
//               <div>
//               <div className="h-14 mt-2 text-black text-3xl font-dancing-bold">
//                 {recipe.title}
//               </div>
//               </div>
//           </Link>
//         );
//       })}
//     </div>
//      )}
//     </>
//   )
// }


