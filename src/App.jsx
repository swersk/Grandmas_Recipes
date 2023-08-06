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
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="min-h-screen m-0 p-0">
    <HomeContext.Provider value={setIsHome} >
      <RecipeContext.Provider value={recipes} >
          <Header />
          <SubHeader />
          <Recipes />
        <Outlet />
      </RecipeContext.Provider>
    </HomeContext.Provider>
    </div>
  )
}
