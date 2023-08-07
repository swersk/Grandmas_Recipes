import SubHeader from './SubHeader';
import { useContext, useEffect } from 'react';
import { HomeContext } from '../App';
import { useNavigate } from "react-router-dom";
import Search from './Search';

export default function Header() {

  const { isHome, setIsHome } = useContext(HomeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsHome(true);
    navigate('/');
  }
console.log('ishome', isHome)
  return (
    <>
      {isHome ? (
        <>
          <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-evenly text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <i className="fa-solid fa-utensils fa-2xs"></i>
          <p>Grandma's Recipes</p>
          <Search />
          </div>
          <SubHeader />
        </>
      ) : (
        <>
        <div >
            <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
              <button id="back-button" onClick={handleClick}>Back</button>
              <p>Grandma's Recipes</p>
              <i className="fa-solid fa-utensils fa-2xs"></i>
            </div>
          </div>
          {/* <SubHeader /> */}
        </>
      )}
    </>
  );
}
