import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  return (
    <div className="w-[180px] sm:w-[200px] lg:w-[230px] h-[120px] md:h-[135px] lg:h-[150px] transition-transform duration-300 hover:scale-110 hover:z-10">
      <div className="relative rounded-md overflow-hidden cursor-pointer">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/e/2/7/medium-movie-mission-impossible-ghost-protocol-mission-original-imagbx2qayphhfrh.jpeg?q=20&crop=false"
          alt="Mission Impossible: Dead Reckoning Part-1"
          className="h-full w-full object-fill"
        />
        <Heart
          color={isWatchlisted ? "red" : "white"}
          className={`absolute bottom-1 right-1 text-4xl z-1 cursor-pointer ${
            isWatchlisted && "fill-red-500"
          }`}
          onClick={() => setIsWatchlisted((prev) => !prev)}
        />
      </div>
      <div className="text-white text-center">
        <Link to="">Mission Impossible</Link>
      </div>
    </div>
  );
};

export default MovieCard;
