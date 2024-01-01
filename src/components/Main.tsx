import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="relative">
       <nav className="absolute top-0 left-0 w-full z-10">
        <ul className="flex justify-center bg-black p-4">
          <li className="mx-2 text-white">
            <Link to="/signup" className="border border-white rounded-sm px-4 py-2">Sign-up</Link>
          </li>
          <li className="mx-2 text-white">
            <Link to="/signin" className="border border-white rounded-sm px-4 py-2">Sign-in</Link>
          </li>
        </ul>
      </nav>
  
      <div
        id="main"
        className="bg-black flex justify-center bg-cover relative h-screen"
        // style={{
        //   backgroundImage: "url('https://cutewallpaper.org/23/background-wallpaper-black-and-white/144341261.jpg')",
        // }}
      >
        <img
          className="h-full object-center"
          src="https://i.pinimg.com/originals/24/cd/04/24cd04a346f186d936ac62bdd5e3f672.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Main;
