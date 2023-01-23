import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";

import { PlayIcon,InformationCircleIcon } from "@heroicons/react/24/solid";
function Benner({ netflixOriginals }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="hearo-section">
      <div className="movie">
        <div className="movie--benner">
          <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            className="bennerImage"
          />
        </div>
        <h1 className="movie--title">{movie?.title || movie?.name}</h1>
        <p className="movie--discription">{movie?.overview}</p>
      </div>

      <div className="btn-section">
        <button className="btn play">
          <PlayIcon />
          Play
        </button>
        <button className="btn info">
          More Info
          <InformationCircleIcon />
        </button>
      </div>
    </div>
  );
}

export default Benner;
