import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGY-DvBj5DlNdKkwbRQPS7pEphp7y4sks",
    authDomain: "projeto-advocacia.firebaseapp.com",
    databaseURL: "https://projeto-advocacia.firebaseio.com",
    projectId: "projeto-advocacia",
    storageBucket: "projeto-advocacia.appspot.com",
    messagingSenderId: "486275799873",
    appId: "1:486275799873:web:679d25492656ad3d"
})

export const db = firebaseApp.database();