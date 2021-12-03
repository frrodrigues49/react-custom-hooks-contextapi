import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./style.css";

function Header() {
  const mycontext = useContext(UserContext);

  return (
    <header>
      <h1>CustomHooks</h1>
      <span>Bem vindo, {mycontext.usersData.name}</span>
    </header>
  );
}

export default Header;
