import React, { useEffect, useContext } from 'react'
import { HomeContext } from '../App';

export default function About() {

const { setIsHome } = useContext(HomeContext);
  useEffect(() => {
    setIsHome(false);
  }, []);

  return (
    <>
    <div className="flex flex-col-2">
    <div>
    <img src="./us.jpg" alt="pic of Grandma and I" className="w-92 h-92"/>
    </div>
    <div className="w-full text-black">
      <h2 className="font-satoshi-bold text-4xl mt-5">About</h2>
      <p className="font-satoshi-regular mt-10">Coming soon!</p>
    </div>
    </div>
    </>
  )
}
