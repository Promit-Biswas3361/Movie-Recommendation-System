import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = (e) => {
    if (e.key == "Enter") {
      console.log("Searched for: ", input);
      setInput("");
      setIsVisible(false);
    }
  };

  const displayBox = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="bg-slate-900 w-full flex items-center py-6 justify-between shadow-2xl fixed top-0 z-20">
      <div className="text-4xl lg:text-5xl font-bold mx-3 lg:mx-5 bg-gradient-to-b from-white via-[#64e7fe] to-[#14cbeb] bg-clip-text text-transparent">
        <Link to="/">FlickVault</Link>
      </div>
      <div className="hidden md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              isActive ? "text-cyan-300 font-bold" : "text-white",
              "text-lg mx-4 lg:mx-5",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            [
              isActive ? "text-cyan-300 font-bold" : "text-white",
              "text-lg mx-4 lg:mx-5",
            ].join(" ")
          }
        >
          Watchlist
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            [
              isActive ? "text-cyan-300 font-bold" : "text-white",
              "text-lg mx-4 lg:mx-5",
            ].join(" ")
          }
        >
          Profile
        </NavLink>
      </div>
      <div className="flex items-center">
        <div
          className={`flex p-1 mx-2 ${
            isVisible ? "border border-white" : "border-none"
          }`}
        >
          <Search
            color="white"
            className="cursor-pointer"
            onClick={displayBox}
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search for a movie..."
            className={`outline-none text-white mx-2 bg-transparent transition-all duration-500 ease-in-out ${
              isVisible ? "w-40 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
        <div className="hidden md:block bg-cyan-300 px-4 py-2 mx-3 lg:mx-5 rounded-[10%] hover:bg-cyan-500">
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className="md:hidden bottom-1 relative">
          <a className="text-4xl text-white mx-3" href="#">
            &#8801;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
