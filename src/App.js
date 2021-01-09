import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';
import Cards from './components/Card';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemple = () => this.setState({ recettes });

  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Cards key={key} details={this.state.recettes[key]}></Cards>);

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <h1>Bonjour  {this.state.pseudo}</h1>
        { cards }
        <Admin
         chargerExemple={ this.chargerExemple }></Admin>
      </div>
    )
  }
}

export default App
