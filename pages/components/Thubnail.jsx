import React from "react";
import Image from "next/legacy/image";

function Thubnail({movie}) {

  return (
    <div className="thubnail--wrapper">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.posters_path
        }`}
        layout="fill"
        className="thubnail--image"
      />
    </div>
  );
}

export default Thubnail;
