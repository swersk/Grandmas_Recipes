//import SubHeader from './SubHeader';
import { useContext } from 'react';
import { HomeContext } from '../App';

export default function Header() {


  const { isHome, setIsHome } = useContext(HomeContext);
  return (
    <>
      {isHome ? (
        <>
          <div id="header" className="font-dancing-bold text-5xl h-24 flex items-center justify-center grid grid-rows-2 text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
            <p className="mt-9">Grandma's Recipes</p>
          </div>
          {/* <SubHeader /> */}
        </>
      ) : (
        <>
          <div id="header" className="font-dancing-bold text-5xl h-24 flex items-center justify-center grid grid-rows-2 text-black bg-gradient-to-r from-pink-300 via-pink-200/70 to-pink-300">
            <p>Grandma's Recipes</p>
            <button>Back</button>
          </div>
          {/* <SubHeader /> */}
        </>
      )}
    </>
  );
}
