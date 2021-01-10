import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Cards from "./components/Card";
import withFirebase from "./hoc/withFirebase";

const App = ({
  match,
  recettes,
  chargerExemple,
  ajouterRecette,
  majRecette
}) => {
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

App.propTypes = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  chargerExemple: PropTypes.func.isRequired,
  ajouterRecette: PropTypes.func.isRequired,
  majRecette: PropTypes.func.isRequired
};

const WrappedComponent = withFirebase(App);

export default WrappedComponent;
