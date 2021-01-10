import React from "react";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Cards from "./components/Card";
import withFirebase from "./hoc/withFirebase";

const App = ({ match, recettes, chargerExemple, ajouterRecette, majRecette }) => {
  const cards = Object.keys(recettes).map((key) => (
    <Cards key={key} details={recettes[key]} />
  ));

  return (
    <div className="box">
      <Header pseudo={match.params.pseudo} />
      <h1>Bonjour {match.params.pseudo}</h1>
      {cards}
      <Admin
        recettes={recettes}
        chargerExemple={chargerExemple}
        ajouterRecette={ajouterRecette}
        majRecette={majRecette}
      />
    </div>
  );
};
const WrappedComponent = withFirebase(App);

export default WrappedComponent;
