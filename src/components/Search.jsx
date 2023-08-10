import { useState, useContext } from "react";
import { RecipeContext, HomeContext } from "../App.jsx";

export default function Search() {
  const [query, setQuery] = useState("");
  let recipeArr = useContext(RecipeContext);
  const {
    setFilteredRecipes,
    setIsFiltered,
    setIsHome,
  } = useContext(HomeContext);

  const handleChange = (e) => {
    if (e.target.value.length >= 3) {
      setQuery(e.target.value.toLowerCase());

      const doesMatch = recipeArr.filter((recipe) => {
        return recipe.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });

      if (doesMatch.length >= 1) {
        setFilteredRecipes(doesMatch);
        setIsFiltered(true);
        setIsHome(false);
      }
    }
  };

  return (
    <>
      <i className="fa-solid fa-magnifying-glass text-2xl ml-32 text-black text-shadow-sm rounded-full bg-blue-200 p-4 mr-32 hover:bg-blue-100/80 transition-colors duration-150 shadow-xl">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
          autoFocus
          onChange={handleChange}
          className="text-2xl mx-0 w-8 ml-2 font-satoshi-light text-shadow-sm  bg-blue-200 appearance-none"
        />
      </i>
    </>
  );
}
