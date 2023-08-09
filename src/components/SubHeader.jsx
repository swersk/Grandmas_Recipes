export default function SubHeader() {

  const handleClick = () => {
    console.log('test')
  }

  return (
    <>
    <div id="subheader" className="text-black w-full flex flex-row justify-evenly font-dancing-regular text-2xl gap-1 p-0 ">
        <p onClick={handleClick} className="subheader-button"> Mains</p>
        <button onClick={handleClick} className="subheader-button"> Sides</button>
        <button onClick={handleClick} className="subheader-button"> Soups</button>
        <button onClick={handleClick} className="subheader-button"> Veggies</button>
    </div>
    </>
  )
}