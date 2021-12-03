import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./style.css";

function Footer() {
  const mycontext = useContext(UserContext);

  return (
    <footer>
      <ul>
        <li>{mycontext.usersData.name}</li>
        <li>{mycontext.usersData.age}</li>
        <li>{mycontext.usersData.country}</li>
      </ul>
    </footer>
  );
}

export default Footer;
