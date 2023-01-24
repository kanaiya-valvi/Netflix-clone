import React, { useRef, useState } from "react";
import Thubnail from "./Thubnail";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
function RowsList({ title, movies }) {
  const rowRef = useRef();
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="rowList">
      <h2 className="rowList--title">{title}</h2>
      <div className="row">
        {isMoved && (
          <ChevronLeftIcon
            className="row-slider__left"
            onClick={() => handleClick("left")}
          />
        )}
        <div ref={rowRef} className="rowList--content">
          {movies.map((movie) => (
            <Thubnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="row-slider__right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default RowsList;
