import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router";
import NewInput from "./NewInput";
import Movie from "./Movie";
import Budget from "./Budget";
import { useState } from "react";

import "./Catalog.css";
import Rented from "./Rented";

function Catalog({
  getCatalogData,
  changeCatalogData,
  removeMovieFRomRent,
  setCatalog,
}) {
  let [budget, setBudget] = useState(1000);
  let [rentedMovies, setRentedMovies] = useState([]);

  const addRentedMovie = (movie) => {
    let newArr = [...rentedMovies];
    newArr.push(movie);
    setRentedMovies(newArr);
  };
  const addToBudget = () => {
    let newBudget = budget;
    newBudget += 3;
    setBudget(newBudget);
  };
  const removeFormBudget = () => {
    let newBudget = budget;
    newBudget -= 3;
    setBudget(newBudget);
  };

  return (
    <div>
      <NewInput
        getCatalogData={getCatalogData}
        setCatalog={setCatalog}
        changeCatalogData={changeCatalogData}
        removeMovieFRomRent={removeMovieFRomRent}
      />
      <Budget
        getbudget={budget}
        addFunc={addToBudget}
        removeFun={removeFormBudget}
        val="true"
      />
      <Rented
        getCatalogData={getCatalogData}
        getbudget={budget}
        addFunc={addToBudget}
        changeCatalogData={changeCatalogData}
        removeMovieFRomRent={removeMovieFRomRent}
        removeFun={removeFormBudget}
      />
      <div className="Catalg-list">
        {getCatalogData.map((movie) => (
          <Movie
            isRented={movie.isRented}
            keyId={movie.id}
            title={movie.title}
            img={movie.img}
            year={movie.year}
            budgetObj={budget}
            getCatalogData={getCatalogData}
            changeCatalogData={changeCatalogData}
            addFunc={addToBudget}
            removeFunc={removeFormBudget}
            removeMovieFRomRent={removeMovieFRomRent}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
