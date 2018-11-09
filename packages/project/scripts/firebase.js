import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAEzU0DaVU7eBthmFy8N3c2bKr5tW9iIdk",
  authDomain: "test-fffe2.firebaseapp.com",
  databaseURL: "https://test-fffe2.firebaseio.com",
  projectId: "test-fffe2",
  storageBucket: "test-fffe2.appspot.com",
  messagingSenderId: "40823370208"
})

const database = app.database()

const storage = app.storage()

const todosRef = database.ref('todos')

const imagesRef = database.ref('images')

export {
  app,
  database,
  storage,
  todosRef,
  imagesRef
}
