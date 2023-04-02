import Movie from "./Movie";
import "./Rented.css";

const Rented = ({
  removeMovieFRomRent,
  getCatalogData,
  budget,
  addFunc,
  removeFun,
  changeCatalogData,
}) => {
  return (
    <div className="rented">
      <h1>Rented Movies:</h1>
      <div className="Catalg-list">
        {getCatalogData.map((movie) =>
          movie.isRented == true ? (
            <Movie
              key={movie.id}
              title={movie.title}
              img={movie.img}
              year={movie.year}
              budgetObj={budget}
              addFunc={addFunc}
              getCatalogData={getCatalogData}
              removeFunc={removeFun}
              changeCatalogData={changeCatalogData}
              removeMovieFRomRent={removeMovieFRomRent}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Rented;
