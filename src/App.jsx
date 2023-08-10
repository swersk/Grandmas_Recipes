import React from 'react'
import { useState, createContext } from 'react';
import recipesData from './data/recipes';
import Recipes from './components/Recipes';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import { Outlet } from 'react-router-dom';

export const HomeContext = createContext();
export const RecipeContext = createContext();

export default function App() {

  const [recipes, setRecipes] = useState(recipesData);
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [isFiltered, setIsFiltered] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);

  return (
    <HomeContext.Provider value={{isHome, setIsHome, filteredRecipes, setFilteredRecipes, isFiltered, setIsFiltered, recipesData, setRecipes, isAbout, setIsAbout}} >
      <RecipeContext.Provider value={recipes} >
          <Header />
          <Outlet />
      </RecipeContext.Provider>
    </HomeContext.Provider>
  )
}