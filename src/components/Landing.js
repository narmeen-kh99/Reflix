import "../components/Landing.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className="Landing">
      <h1 className="sentanse">WHO'S WATCHING!!</h1>
      <span className="users">
        {props.usersObj.users.map((person) => (
          <span className="user">
            <Link to="/catalog">{person}</Link>
          </span>
        ))}
      </span>
    </div>
  );
}

export default Landing;
