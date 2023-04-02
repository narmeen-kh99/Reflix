import React from "react";
import { useParams } from "react-router";
import "./MovieDetail.css";

function MovieDetail({ getCatalogData }) {
  const { movieId } = useParams();
  let movie = getCatalogData.find((movie) => movie.id === parseInt(movieId));
  let { title, img, year, descrShort } = movie;
  return (
    <div>
      <div className="desc-card">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <p className="desc-card-year">{year}</p>
      </div>
      <p className="desc-card-description">{descrShort}</p>
    </div>
  );
}

export default MovieDetail;
