import { FirebaseApp } from "./firebase";
import { getFirestore } from "firebase/firestore"


export const fireStoreDb = getFirestore(FirebaseApp)

