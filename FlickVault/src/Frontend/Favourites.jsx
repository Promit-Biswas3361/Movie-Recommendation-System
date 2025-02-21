import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

const Favourites = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className="bg-gradient-to-b from-slate-900 to-[#03333d] bg-fixed w-full h-auto">
        <Navbar />
        <p className="mt-22 lg:mt-24 pt-5 md:pt-10 text-white text-2xl text-center">
          My Favourites
        </p>
        <div className="my-10 lg:my-15 flex flex-wrap justify-center gap-x-3.5 gap-y-12 lg:gap-y-15">
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
          <MovieCard page="Watchlist" />
        </div>
        <div
          className="hidden sm:block text-black fixed right-0 bottom-30 bg-gray-100 rounded-l-full p-1 cursor-pointer"
          onClick={scrollToTop}
        >
          <ArrowUp />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Favourites;
