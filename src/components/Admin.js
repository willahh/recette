import React, { Component } from "react"
import AjouterRecette from "./AjouterRecette"
import AdminForm from './AdminForm'
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login'

class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  handleAuth = async authData => {
    console.log('handleAuth', authData);
    const box = await base.fetch(this.props.pseudo, { context: this })

    if (!box.chef) {
      await base.post(`${this.props.pseudo}/chef`, {
        data: authData.user.uid
      })
    }

    console.log('box', box)

    this.setState({
      uid: authData.user.uid,
      chef: box.chef || authData.user.uid
    })

  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  render() {
    const { recettes, ajouterRecette, majRecette, chargerExemple } = this.props;

    // Si l'utilisateur n'est pas connecté
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }

    if (this.state.uid != this.state.chef) {
      return (
        <div>
          <p>Tu n'es pas le chef de cette boîte !</p>
        </div>
      )
    }

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
