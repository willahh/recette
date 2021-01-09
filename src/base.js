import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConf from './conf.js';

const firebaseApp = firebase.initializeApp(firebaseConf);

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
