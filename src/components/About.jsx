import { useEffect, useContext } from "react";
import { HomeContext } from "../App";

export default function About() {
  const { setIsHome, setIsAbout } = useContext(HomeContext);

  useEffect(() => {
    setIsHome(false);
    setIsAbout(true);
  }, []);

  return (
    <>
      <div className="content-wrapper h-screen">
        <div className="p-8">
          <img
            src="./us.jpg"
            alt="pic of Grandma and I"
            id="about-img"
            className="float-left mr-8"
          />
          <div className="text  text-black text-start">
            <span className="font-dancing-bold text-5xl">Welcome </span>{" "}
            <span className="font-satoshi-regular text-lg">
              to this cherished, hidden corner of the internet! This page
              celebrates the cooking of our wonderful Grandma Jeanette.
              <br />
              <br />
              Grandma was blessed to be born in the best place on Earth: Bay
              Ridge, Brooklyn. Growing up she watched her mother Lucy cook in
              the kitchen. Infused with love, care, and Italian authenticity in
              everything she made, Grandma Lucy's cooking was a treat and a
              treasure. Her approach was grounded in a few core principles: Keep
              it simple. Do not waste food. Share with others.
              <br />
              <br />
              Grandma Jeanette learned from the best, while adding her own
              twist. For example, she cuts string beans with a scissor and not
              by hand. Grandma Lucy might call that 'wasteful' but we might just
              say that Grandma is modern. 😊
              <br />
              <br />
              It's the blessing of a lifetime to enjoy cooking with my grandma
              and to learn from someone who knows the kitchen so well. With this
              website, I hope to keep the Priolo/DeGaetano culinary traditions
              alive.
              <br />
              <br />
              Thank you for visiting!
              <br />
              <br />
              With love,
            </span>
            <p className="font-dancing-bold text-4xl">Lauren</p>
          </div>
        </div>
      </div>
    </>
  );
}
