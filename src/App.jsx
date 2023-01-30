import React from "react";
import sedan from "./assets/icon-sedans.svg";
import suv from "./assets/icon-suvs.svg";
import luxury from "./assets/icon-luxury.svg";

function App() {
  return (
    <main className="container mx-4 my-10 grid h-full w-auto items-center justify-center md:mx-auto md:my-auto md:flex md:h-[100vh] md:w-[850px] lg:mx-auto lg:my-auto lg:flex lg:h-[100vh] lg:w-[850px]">
      <div
        id="sedan"
        className="h-[460px] rounded-l-xl bg-brightOrange px-10 py-10"
      >
        <img src={sedan} alt="sedan image icon" />
        <h1 className="mt-6 font-heading text-3xl uppercase text-veryLightGray">
          Sedans
        </h1>
        <p className="mt-6 font-normal text-transparentWhite">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="mt-20 rounded-full bg-veryLightGray px-8 py-3 text-brightOrange duration-200 ease-in hover:border-2 hover:border-veryLightGray hover:bg-brightOrange hover:text-veryLightGray">
          Learn More
        </button>
      </div>
      <div id="suvs" className="h-[460px] bg-darkCyan px-10 py-10">
        <img src={suv} alt="sedan image icon" />
        <h1 className="mt-6 font-heading text-3xl uppercase text-veryLightGray">
          Suvs
        </h1>
        <p className="mt-6 font-normal text-transparentWhite">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="mt-20 rounded-full bg-veryLightGray px-8 py-3 text-veryDarkCyan duration-200 ease-in hover:border-2 hover:border-veryLightGray hover:bg-darkCyan hover:text-veryLightGray">
          Learn More
        </button>
      </div>
      <div
        id="luxury"
        className="h-[460px] rounded-r-xl bg-veryDarkCyan px-10 py-10"
      >
        <img src={luxury} alt="sedan image icon" />
        <h1 className="mt-6 font-heading text-3xl uppercase text-veryLightGray">
          Luxury
        </h1>
        <p className="mt-6 font-normal text-transparentWhite">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="mt-20 rounded-full bg-veryLightGray px-8 py-3 text-veryDarkCyan duration-200 ease-in hover:border-2 hover:border-veryLightGray hover:bg-veryDarkCyan hover:text-veryLightGray">
          Learn More
        </button>
      </div>
    </main>
  );
}

export default App;
