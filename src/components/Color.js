import React, { Component } from 'react'

const ColorContext = React.createContext()

class ColorProvider extends Component {
  state = {
    color: 'seagreen'
  }

  render() {

    return (
      <ColorContext.Provider></ColorContext.Provider>
    )
  }
}

export default ColorProvider