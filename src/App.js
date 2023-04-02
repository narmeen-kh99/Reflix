import "./App.css";
import Landing from "./components/Landing";
import HogwartNavbar from "./components/Header/HogwartNavbar";
import { useState } from "react";
import { CATALOG } from "./Constants";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Catalog from "./components/Catalog";
import MovieDetail from "./components/MovieDetail";
import Budget from "./components/Budget";
const USERS = ["Narmeen", "Nader", "Rami", "sara"];

function App() {
  let [users, setusers] = useState(USERS);
  const [catalog, setCatalog] = useState(CATALOG);
  const STATE_MAP = {
    users: users,
  };
  const getCatalogData = (catalog) => {
    return STATE_MAP[catalog];
  };
  const changeCatalogData = (id) => {
    let newArrData = [...catalog];
    newArrData.forEach((movie) => {
      if (movie.id == id) {
        movie.isRented = true;
      }
    });
    setCatalog([...newArrData]);
  };
  const removeMovieFRomRent = (id) => {
    let newArrData = [...catalog];
    newArrData.forEach((movie) => {
      if (movie.id == id) {
        movie.isRented = false;
      }
    });
    setCatalog([...newArrData]);
  };
  return (
    <Router>
      <div>
        <HogwartNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Landing usersObj={STATE_MAP} />}></Route>
        <Route
          path="/catalog"
          element={
            <Catalog
              getCatalogData={catalog}
              changeCatalogData={changeCatalogData}
              removeMovieFRomRent={removeMovieFRomRent}
              setCatalog={setCatalog}
            />
          }
        ></Route>
        <Route
          path="/catalog/:movieId"
          element={<MovieDetail getCatalogData={catalog} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
