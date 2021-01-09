import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';
import Cards from './components/Card';

// Firebase
import base from './base';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    });
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recette;

    this.setState({ recettes });
  }

  chargerExemple = () => {
    console.log('chargerExemple', recettes);
    this.setState({ recettes });
  }

  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Cards key={key} details={this.state.recettes[key]}></Cards>);

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <h1>Bonjour  {this.state.pseudo}</h1>
        { cards }
        <Admin
         chargerExemple={ this.chargerExemple }
         ajouterRecette={ this.ajouterRecette }></Admin>
      </div>
    )
  }
}

export default App
