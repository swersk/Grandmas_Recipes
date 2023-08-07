import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import Recipe from "./components/Recipe.jsx";
import Recipes from "./components/Recipes.jsx";
import Error from "./components/Error";
import "../index.css";
//import 'tailwindcss/tailwind.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index path="/" element={<Recipes />}></Route>
    <Route path="/:recipeTitle" element={<Recipe />}></Route>
    <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
