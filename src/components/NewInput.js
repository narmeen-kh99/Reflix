import { useState } from "react";
import "../components/NewInput.css";
import Catalog from "./Catalog";

const NewInput = ({
  getCatalogData,
  setCatalog,
  removeMovieFRomRent,
  changeCatalogData,
}) => {
  const [text, setText] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [staticData, setStaticData] = useState(getCatalogData);

  const updateText = (event) => {
    setText(event.target);
  };
  const searchMovie = (text) => {
    let newInp = text.value;
    let newDataa = text.value.toLowerCase();
    let newData = [];
    getCatalogData.forEach((element) => {
      if (newInp == "") {
        newData = [...getCatalogData];
      } else if (element.title.toUpperCase().includes(newInp.toUpperCase())) {
        newData.push(element);
      }
    });
    //setSearchRes(newData);
    setCatalog(newData);
  };
  return (
    <div>
      <input className="newInput" type="text" onChange={updateText} />
      <button
        className="Button"
        onClick={() => {
          searchMovie(text);
        }}
      >
        search
      </button>
      <di>{}</di>;
    </div>
  );
};

export default NewInput;
