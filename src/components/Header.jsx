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
          <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-evenly text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <Search />
          <p>Grandma's Recipes</p>
          <Link className="rounded-full bg-slate-200 p-4 hover:bg-blue-100/80 transition-colors duration-150" to="/about">About</Link>
          </div>
        </>
      ) : (
        <>
        <div >
            <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
            <Link to="/">Home</Link>
              <p>Grandma's Recipes</p>
              <i className="fa-solid fa-utensils fa-2xs"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
}
        {/* <SubHeader /> */}
{/* <i className="fa-solid fa-utensils fa-2xs"></i> */}