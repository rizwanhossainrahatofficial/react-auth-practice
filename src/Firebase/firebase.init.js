import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const authenticationinitialize=()=>{
    initializeApp(firebaseConfig)
}


export default authenticationinitialize;