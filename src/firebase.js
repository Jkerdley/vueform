import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: 'vueform-2ed6a.firebaseapp.com',
  projectId: 'vueform-2ed6a',
  storageBucket: 'vueform-2ed6a.firebasestorage.app',
  messagingSenderId: '377183542225',
  appId: '1:377183542225:web:8e047eb91a5ad66a739ef0',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
