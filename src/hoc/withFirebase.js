import React, { Component } from "react";

import base from "./../base.js";
import recettes from "./../recettes";

const withFirebase = (WrappedComponent) =>
  class HOC extends Component {
    state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {},
    };

    componentDidMount() {
      this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
        context: this,
        state: "recettes",
      });
    }

    componentWillUnmount() {
      base.removeBinding(this.ref);
    }

    ajouterRecette = (recette) => {
      const recettes = { ...this.state.recettes };
      recettes[`recette-${Date.now()}`] = recette;

      this.setState({ recettes });
    };

    majRecette = (key, newRecette) => {
      const recettes = { ...this.state.recettes };
      recettes[key] = newRecette;

      this.setState({ recettes });
    };

    chargerExemple = () => {
      console.log("chargerExemple", recettes);
      this.setState({ recettes });
    };

    render() {
      return (
        <WrappedComponent
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          chargerExemple={this.chargerExemple}
          {...this.props}
        />
      );
    }
  };

export default withFirebase;
