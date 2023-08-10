import { useContext } from 'react';
import { HomeContext } from '../App';
import { useNavigate, Link } from "react-router-dom";
import Search from './Search';

export default function Header() {

  const { isHome, setIsHome, recipeArr, isAbout, setIsAbout, setIsFiltered } = useContext(HomeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsHome(true);
    setIsFiltered(false);
    navigate('/');
  }

  return (
    <>
      {isHome ? (
        <div id="header" className="font-dancing-bold h-32 flex items-center justify-between content-between text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <Search />
          <p className="text-5xl text-shadow-sm mr-44">Grandma's Recipes</p>
          <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-36 hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl " to="/about">About</Link>
        </div>
      ) : isAbout ? (
        <div id="header" className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-5 hover:bg-blue-100/80 transition-colors duration-150 ml-44 text-shadow-sm shadow-xl" to="/" onClick={handleClick}>Home</Link>
          <p className="text-5xl text-shadow-sm ">Grandma's Recipes</p>
          <span className="heart-icon mr-40">❤️</span>
        </div>
      ) : (
        <div id="header" className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
          <Link className="rounded-full text-3xl bg-blue-200 p-3 hover:bg-blue-100/80 transition-colors duration-150 ml-44 text-shadow-sm shadow-xl" to="/" onClick={handleClick}>Home</Link>
          <p className="text-5xl text-shadow-sm ml-[22px]">Grandma's Recipes</p>
          <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-36 hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl " to="/about">About</Link>
        </div>
      )}
    </>
  );
}



// import { useContext } from 'react';
// import { HomeContext } from '../App';
// import { useNavigate, Link } from "react-router-dom";
// import Search from './Search';

// export default function Header() {

//   const { isHome, setIsHome, recipeArr, isAbout } = useContext(HomeContext);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     setIsHome(true);
//     setFilteredRecipes(recipeArr);
//     navigate('/');
//   }


//   return (
//     <>
//       {isHome ? (
//         <>
//           <div id="header" className="font-dancing-bold h-32 flex items-center justify-between content-between text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
//           <Search />
//           <p className="text-5xl text-shadow-sm mr-44">Grandma's Recipes</p>
//           <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-36 hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl " to="/about">About</Link>
//           </div>
//         </>
//       ) : (
//         <>
//         <div >
//             <div id="header" className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
//             <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-5 hover:bg-blue-100/80 transition-colors duration-150 ml-32 text-shadow-sm shadow-xl" to="/" onClick={handleClick}>Home</Link>
//               <p className="text-5xl text-shadow-sm">Grandma's Recipes</p>
//               <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-32 hover:bg-blue-100/80 transition-colors duration-150 text-shadow-sm shadow-xl " to="/about">About</Link>
//             </div>
//           </div>
//         </>
//       )

//       {isAbout ? (
//         <div >
//         <div id="header" className="font-dancing-bold text-5xl h-32 flex items-center justify-between content-between  text-black bg-gradient-to-r from-blue-300 via-blue-200/70 to-blue-300">
//         <Link className="rounded-full text-3xl bg-blue-200 p-4 mr-5 hover:bg-blue-100/80 transition-colors duration-150 ml-32 text-shadow-sm shadow-xl" to="/" onClick={handleClick}>Home</Link>
//           <p className="text-5xl text-shadow-sm">Grandma's Recipes</p>
//           <span className="heart-icon">❤️</span>
//         </div>
//       </div>
//     </>

//     )


//       }
//     </>
//   );
// }