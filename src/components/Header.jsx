import SubHeader from './SubHeader';
import { useContext, useEffect } from 'react';
import { HomeContext } from '../App';
import { useNavigate } from "react-router-dom";

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
          <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center grid grid-rows-2 text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
            <p className="mt-9">Grandma's Recipes</p>
          </div>
          <SubHeader />
        </>
      ) : (
        <>
        <div >
            <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center justify-evenly text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
              <button onClick={handleClick}>Back</button>
              <p>Grandma's Recipes</p>
            </div>
          </div>
          {/* <SubHeader /> */}
        </>
      )}
    </>
  );
}
