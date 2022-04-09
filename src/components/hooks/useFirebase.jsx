// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { auth } from "../../firebase.init";


// const useFirebase = () => {
//     const googleProiver = new GoogleAuthProvider();
    
//     const [user,setUser] = useState([]);
    



//     const signinWithGoogle = () =>{

//     signInWithPopup(auth, googleProiver)
//     .then(results =>{
//         setUser(results.user) 
        
//     }).catch(err =>{

//         console.log(err.message);
//     })

//     }

//     const logOut = () =>{
        
//         signOut(auth)
//         .then(() =>{

//         })
//         .catch(err =>{
//             console.log(err.message);
//         })
//     }

//     useEffect(() => {
//        onAuthStateChanged(auth, user =>{
//             setUser(user);
//         })

      
//     },[])





//     return {signinWithGoogle, user, logOut};


// };

// export default useFirebase;