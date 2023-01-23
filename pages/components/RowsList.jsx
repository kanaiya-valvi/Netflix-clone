import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
function RowsList({ title, movies }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="row">
        <ChevronLeftIcon className="row-slider__left" />
        <ChevronRightIcon className="row-slider__right" />
      </div>
    </div>
  );
}

export default RowsList;
