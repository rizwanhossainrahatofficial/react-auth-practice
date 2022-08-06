import { useEffect, useState } from "react"
import authenticationinitialize from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";

 authenticationinitialize()

const useFibase=()=>{
const [user,setUser]=useState({})

const auth = getAuth();
const googleProvider=new GoogleAuthProvider()

const GoogleSignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        console.log(result.user)
        setUser(result.user)
    })
}

const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
}


useEffect(()=>{
    onAuthStateChanged (auth,user=>{
        if(user){
            setUser(user)
        }
    })
},[])



return {
    user,
    GoogleSignIn,
    logout
}

}

export default useFibase;
