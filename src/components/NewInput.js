import { useState } from "react";
import "../components/NewInput.css";
import Catalog from "./Catalog";
import { CATALOG } from "../Constants";

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
    setText(event.target.value);
    console.log(text);
  };
  const searchMovie = () => {
    console.log(text);
    let newInp = text;
    let newData = [];
    CATALOG.forEach((element) => {
      if (newInp == "") {
        newData = [...CATALOG];
      } else if (element.title.includes(newInp)) {
        newData.push(element);
      }
    });
    //setSearchRes(newData);
    setCatalog(newData);
  };
  return (
    <div>
      <input
        className="newInput"
        type="text"
        onChange={updateText}
        value={text}
      />
      <button
        className="Button"
        onClick={() => {
          searchMovie();
        }}
      >
        search
      </button>
    </div>
  );
};

export default NewInput;
