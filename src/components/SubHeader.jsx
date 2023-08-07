import React from 'react'

export default function SubHeader() {

  const handleClick = () => {
    console.log('test')
  }

  return (
    <>
    <div id="subheader" className="text-black mt-1 mb-1 w-full flex flex-row justify-evenly font-dancing-regular text-3xl gap-3 p-5 my-2">
        <p onClick={handleClick} className="subheader-button"> Mains</p>
        <button onClick={handleClick} className="subheader-button"> Sides</button>
        <button onClick={handleClick} className="subheader-button"> Soups</button>
        <button onClick={handleClick} className="subheader-button"> Veggies</button>
    </div>
    </>
  )
}