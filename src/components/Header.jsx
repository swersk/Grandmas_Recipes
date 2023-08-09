import SubHeader from './SubHeader';
import { useContext, useEffect } from 'react';
import { HomeContext } from '../App';
import { useNavigate, Link } from "react-router-dom";
import Search from './Search';
import About from './About';

export default function Header() {

  const { isHome, setIsHome } = useContext(HomeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsHome(true);
    navigate('/');
  }

  return (
    <>
      {isHome ? (
        <>
          <div id="header" className="font-dancing-bold h-32 flex items-center justify-between content-between text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <Search />
          <p className="text-5xl">Grandma's Recipes</p>
          <Link className="rounded-full text-3xl bg-blue-200 p-2 mr-28 hover:bg-blue-100/80 transition-colors duration-150" to="/about">About</Link>
          </div>
        </>
      ) : (
        <>
        <div >
            <div id="header" className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
            <Link className="rounded-full text-3xl bg-blue-200 p-2 mr-5 hover:bg-blue-100/80 transition-colors duration-150 ml-20" to="/">Home</Link>
              <p>Grandma's Recipes</p>
              <Link className="rounded-full text-3xl bg-blue-200 p-2 mr-28 hover:bg-blue-100/80 transition-colors duration-150" to="/about">About</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
        {/* <SubHeader /> */}
{/* <i className="fa-solid fa-utensils fa-2xs"></i> */}