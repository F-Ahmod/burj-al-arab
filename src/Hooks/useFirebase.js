import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import firebaseAuthtantication from "../firebase/firebase.init";
firebaseAuthtantication();

const useFirebase =()=>{
   

    const [user,setUser]= useState({});
    const [error,Seterror]=useState('');

    const auth=getAuth()

    const provider = new GoogleAuthProvider();
    const singinwithgoogle = () =>{

    signInWithPopup(auth,provider)
    .then(result =>{
        console.log(result.user);
        setUser(result.user);
    })
    .catch(error =>{
        Seterror(error.message)
    })
    
   }
   const logOut = () => {
    signOut(auth)
        .then(() => {
            setUser({})
        })
}

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // console.log('hiiiiii',user);
            setUser(user)

        }

   })
   
   
  });
   return{
       
        user,
        error,
        logOut,
        singinwithgoogle,
        
    }
}
export default useFirebase;