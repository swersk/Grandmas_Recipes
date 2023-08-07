import React from 'react'
import { useState, createContext } from 'react';
import recipesData from './data/recipes';
import Recipes from './components/Recipes';
import Header from './components/Header';
import Footer from './components/Footer';
import SubHeader from './components/SubHeader';

import { Outlet } from 'react-router-dom';

export const HomeContext = createContext();
export const RecipeContext = createContext();

export default function App() {

  const [recipes, setRecipes] = useState(recipesData);
  const [isHome, setIsHome] = useState(true);

  return (
    <HomeContext.Provider value={setIsHome} >
      <RecipeContext.Provider value={recipes} >
          <Header />
          <SubHeader />
          <Recipes />
          <Footer />
        <Outlet />
      </RecipeContext.Provider>
    </HomeContext.Provider>

  )
}