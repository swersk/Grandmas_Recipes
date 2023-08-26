import { useContext } from "react";
import { HomeContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const { isHome, setIsHome, recipeArr, isAbout, setIsAbout, setIsFiltered } =
    useContext(HomeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsHome(true);
    setIsFiltered(false);
    navigate("/");
  };

  return (
    <>
      {isHome ? (
        <div
          id="header"
          className="bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300"
        >
          <div className="font-dancing-bold text-black flex h-32 items-center justify-between content-between">
            <Search />
            <p className="text-5xl text-shadow-sm">Grandma's Recipes</p>
            <Link
              className="rounded-3xl text-3xl bg-blue-200 p-3 hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl "
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      ) : isAbout ? (
        <div
          id="header"
          className="bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300"
        >
          <div className="font-dancing-bold text-black  text-5xl flex h-32 items-center justify-between content-between ">
            <Link
              className="rounded-3xl text-3xl bg-blue-200 p-3  hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl"
              to="/"
              onClick={handleClick}
            >
              Home
            </Link>
            <p className="text-5xl text-shadow-sm">Grandma's Recipes</p>
            <span className="heart-icon">❤️</span>
          </div>
        </div>
      ) : (
        <div
          id="header"
          className=" text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300"
        >
          <div className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between">
            <Link
              className="rounded-3xl text-3xl bg-blue-200 p-3 hover:bg-blue-100/80 transition-colors duration-150  text-shadow-sm shadow-xl"
              to="/"
              onClick={handleClick}
            >
              Home
            </Link>
            <p className="text-5xl text-shadow-sm ">Grandma's Recipes</p>
            <Link
              className="rounded-3xl text-3xl bg-blue-200 p-3  hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl "
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
