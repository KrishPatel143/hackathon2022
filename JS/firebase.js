import { initializeApp } from 'firebase/app'
import{
    getFirestore, collection
} from 'firebase/Firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDkDjqrtO5X3_CeVg5EFptQ74tQorSH4_k",
  authDomain: "ctracker-75cb0.firebaseapp.com",
  databaseURL: "https://ctracker-75cb0-default-rtdb.firebaseio.com",
  projectId: "ctracker-75cb0",
  storageBucket: "ctracker-75cb0.appspot.com",
  messagingSenderId: "294702395260",
  appId: "1:294702395260:web:68b1c6fe5b67464a3abef9",
  measurementId: "G-JCPWLXH0XV"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'Positive')

getDocs(colRef)
    .then((snapshot) => {
        let Positive = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id})
        })
        console.log(Positive)
    })
.catch(err => {
    console.log(err.message)
})
