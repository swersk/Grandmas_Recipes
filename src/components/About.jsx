import { useEffect, useContext } from "react";
import { HomeContext } from "../App";

export default function About() {
  const { setIsHome } = useContext(HomeContext);
  useEffect(() => {
    setIsHome(false);
  }, []);

  return (
    <>
      <div className="flex mt-0 mb-0 ">
        <img src="./us.jpg" alt="pic of Grandma and I" className="h-[90vh] mb-5 ml-0" />
        <div className=" text-black border-2">
          <h2 className="font-satoshi-bold text-4xl mt-8">Welcome.</h2><br /><br />
          <p className="font-satoshi-regular">Welcome to this cherished, hidden corner of the internet! This page celebrates the cooking of our wonderful Grandma Jeanette.
          <br /><br />
          Grandma was blessed to be born in the best place on Earth: Bay Ridge, Brooklyn. Growing up she watched her mother Lucy cook in the kitchen. Infused with love, care, and Italian authenticity in everything she made, Lucy's cooking was a treat and a treasure.
          <br /><br />
          Lucy's approach was grounded in a few core principles: Keep it simple. Do not waste food. Cook for others.
          <br /><br />
          Grandma Jeanette learned from the best, while adding her own twist. For example, she cuts string beans with a scissor and not by hand. Grandma Lucy might call that 'wasteful' but we might just say that Grandma is modern.
          <br /><br />
          It's the blessing of a lifetime to enjoy cooking with my grandma and to learn from someone who knows the kitchen so well. With this website, I hope to keep the Priolo/DeGaetano culinary traditions alive.
          <br /><br />
          Thank you for visiting!
          <br /><br />
          With love,</p>
          <p className="font-dancing-bold text-3xl">Lauren</p>
        </div>
      </div>
    </>
  );
}
