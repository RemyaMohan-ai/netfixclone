
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD2LItBmlARrX2r6XDB8D7QrPhyEvwGvEA",
  authDomain: "netflix-e04fb.firebaseapp.com",
  projectId: "netflix-e04fb",
  storageBucket: "netflix-e04fb.firebasestorage.app",
  messagingSenderId: "617237667470",
  appId: "1:617237667470:web:de24a799bbba00a19cf3df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user
    await addDoc(collection(db,"user"),{
      uid : user.uid,
      name,
      authProvider : "local",
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))    
  }
}

const login = async(email,password)=>{
  try {
   await signInWithEmailAndPassword(auth , email,password)
  } catch (error) {
    console.log(error);

    toast.error(error.code.split('/')[1].split('-').join(" ") ) }
}

const logout = async()=>{
  signOut(auth)
}

export {auth , db, signup, login, logout}