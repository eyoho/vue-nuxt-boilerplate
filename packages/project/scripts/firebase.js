import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAEzU0DaVU7eBthmFy8N3c2bKr5tW9iIdk',
  authDomain: 'test-fffe2.firebaseapp.com',
  databaseURL: 'https://test-fffe2.firebaseio.com',
  projectId: 'test-fffe2',
  storageBucket: 'test-fffe2.appspot.com',
  messagingSenderId: '40823370208'
})

const database = app.database()

const auth = app.auth()

const session = firebase.auth.Auth.Persistence.SESSION

const todosRef = database.ref('todos')

const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export {
  app,
  database,
  auth,
  session,
  GoogleProvider,
  todosRef
}
