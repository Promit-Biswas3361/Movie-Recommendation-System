import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

const Landing = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 to-[#03333d] bg-fixed w-full h-auto">
      <Navbar />
      <div className="my-22 lg:my-24 pt-10 md:pt-15 flex flex-wrap justify-center gap-x-3.5 gap-y-12 lg:gap-y-15">
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
        <MovieCard page="Home" />
      </div>
      <div
        className="hidden sm:block text-black fixed right-0 bottom-30 bg-gray-100 rounded-l-full p-1 cursor-pointer"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
