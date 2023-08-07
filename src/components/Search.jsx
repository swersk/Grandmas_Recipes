import React, { useState, useContext } from "react";
 import { RecipeContext } from "../App.jsx";
// import SearchIcon from "@mui/icons-material/Search";
// import { TextField } from "@mui/material";
// import Box from "@mui/material/Box";

export default function Search() {
   const [query, setQuery] = useState("");
   let recipeArr = useContext(RecipeContext);

  const handleChange = (e) => {

    if (e.target.value.length >= 3) {
      setQuery(e.target.value.toLowerCase());

      //return array that filters recipe titles by query
      const doesMatch = recipeArr.filter(recipe => {
        return recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
      })

      if (doesMatch.length >=1 ) {
       //only show recipes from the doesMatch arry
      }
    } else {
      console.log('Query too short')
    }
  };

  return (
    <>
      <i className="fa-solid fa-magnifying-glass text-2xl ml-1 text-black">
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        autoFocus
        onChange={handleChange}
        className="bg-white text-1xl mx-0 w-12 font-satoshi-light"
      /></i>
    </>
  );
}
