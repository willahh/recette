import React, { Component } from "react";
import AjouterRecette from "./AjouterRecette";
import AdminForm from './AdminForm';

class Admin extends Component {
  render() {
    const { recettes, ajouterRecette, majRecette, chargerExemple } = this.props;

    return (
      <div className="cards">
        <div className="cards">
          <AjouterRecette ajouterRecette={ajouterRecette} />
          {
            Object.keys(recettes)
              .map(key => <AdminForm
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            recettes={recettes}>
                            </AdminForm>)
          }
        </div>
        <footer>
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    );
  }
}

export default Admin;
