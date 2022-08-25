import app from './app.js'
import {
  getFirestore,
  collection,
  addDoc
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscriptionHellfireClub(subscription) {
  //importando do firebase
  //pega as informações de subcription e cria um doc no fibebase na collection hellfire-club
  const db = getFirestore(app)
  const hellfireClubcollection = collection(db, 'hellfire-club')
  const docRef = await addDoc(hellfireClubcollection, subscription)
  return docRef.id
}
