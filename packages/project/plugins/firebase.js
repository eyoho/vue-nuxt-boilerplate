import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAEzU0DaVU7eBthmFy8N3c2bKr5tW9iIdk',
    authDomain: 'test-fffe2.firebaseapp.com',
    databaseURL: 'https://test-fffe2.firebaseio.com',
    projectId: 'test-fffe2',
    storageBucket: 'test-fffe2.appspot.com',
    messagingSenderId: '40823370208'
  })
}

export const database = firebase.database()
export const storage = firebase.storage()

export default firebase
