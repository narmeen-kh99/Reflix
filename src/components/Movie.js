import React from "react";
import Rented from "./Rented";
import { useState } from "react";
import { Link } from "react-router-dom";

function Movie({
  isRented,
  keyId,
  title,
  img,
  year,
  addFunc,
  removeFunc,
  addMovie,
  getCatalogData,
  changeCatalogData,
  removeMovieFRomRent,
}) {
  let [val, setVal] = useState(isRented ? "-" : "+");

  const changeval = (keyId) => {
    let newVal = val;
    if (val == "+") {
      newVal = "-";
      setVal(newVal);
      changeCatalogData(keyId);

      removeFunc();
    } else {
      val = "+";
      setVal(val);
      removeMovieFRomRent(keyId);
      addFunc();
    }
  };

  return (
    <div className="Movie">
      <Link className="Movie" to={"/catalog/" + keyId}>
        <div itemID={keyId}>
          <img src={img} alt={title} />
          <div className="info">
            <h2>{title}</h2>
            <p>year: {year}</p>
          </div>
        </div>
      </Link>
      <button
        className="but"
        onClick={() => {
          changeval(keyId);
        }}
      >
        {val}
      </button>
    </div>
  );
}

export default Movie;
