import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'


// Initialize Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyC_8wu-4XSGZJbjNy6Ury3bSdQegWBCzI4',
    authDomain: 'curso-react-7e162.firebaseapp.com',
    databaseURL: 'https://curso-react-7e162.firebaseio.com',
    storageBucket: 'curso-react-7e162.appspot.com',
    messagingSenderId: '233924961009'
});


import App from './componentes/App'

ReactDOM.render(<App />, document.getElementById('root'))