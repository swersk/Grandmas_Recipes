//import SubHeader from './SubHeader';
import { useContext } from 'react';
import { HomeContext } from '../App';

export default function Header() {


  const { isHome, setIsHome } = useContext(HomeContext);
  return (
    <>
      {isHome ? (
        <>
          <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center grid grid-rows-2 text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
            <p className="mt-9">Grandma's Recipes</p>
          </div>
          {/* <SubHeader /> */}
        </>
      ) : (
        <>
        <div >
            <div id="header" className="font-dancing-bold text-5xl h-16 flex items-center justify-center justify-evenly text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
              {/* <button>Back</button> */}
              <p>Grandma's Recipes</p>
            </div>
          </div>
          {/* <SubHeader /> */}
        </>
      )}
    </>
  );
}
