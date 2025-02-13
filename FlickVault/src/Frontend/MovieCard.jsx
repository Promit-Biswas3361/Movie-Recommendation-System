import React, { useState } from "react";
import { Heart, CircleMinus } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = ({ page }) => {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  return (
    <div className="w-[180px] sm:w-[200px] lg:w-[230px] h-[120px] md:h-[135px] lg:h-[150px] transition-transform duration-300 hover:scale-110 hover:z-10">
      <div className="relative rounded-md overflow-hidden cursor-pointer">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/e/2/7/medium-movie-mission-impossible-ghost-protocol-mission-original-imagbx2qayphhfrh.jpeg?q=20&crop=false"
          alt="Mission Impossible: Dead Reckoning Part-1"
          className="h-full w-full object-fill"
        />
        {page?.toLowerCase() == "home" ? (
          <Heart
            color={isWatchlisted ? "red" : "white"}
            className={`absolute bottom-1 right-1 text-4xl z-1 cursor-pointer hover:fill-red-500 ${
              isWatchlisted && "fill-red-500"
            }`}
            onClick={() => setIsWatchlisted((prev) => !prev)}
          />
        ) : (
          <CircleMinus
            color="white"
            className="absolute top-1 right-1 text-4xl z-1 cursor-pointer hover:fill-red-500"
            onClick={() => setIsWatchlisted(false)}
          />
        )}
      </div>
      <div className="text-white text-center text-sm md:text-base">
        <Link to="">Mission Impossible</Link>
      </div>
    </div>
  );
};

export default MovieCard;
