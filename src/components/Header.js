import React from "react";

// import Link
import { Link } from "react-router-dom";

//import Logo image
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo images" />
        </Link>
        <div className=" flex  gap-6 items-center">
          <Link className="hover:text-violet-900 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-violet-800 hover:bg-violet-800 text-white px-4 py-3  rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
