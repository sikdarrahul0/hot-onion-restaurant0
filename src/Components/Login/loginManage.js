import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const initializeFirebase = () =>{
        firebase.initializeApp(firebaseConfig);
}

export const googleSignInPopup = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res =>{
     const newUser = res.user;
     return newUser;
    }).catch(error =>{
     const newUser = {};
     newUser.message = error.message;
     return newUser;
    });
  }
export const fbSignInPopup = ()=> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
     const newUser = res.user;
     return newUser;
    }).catch(error =>{
      const newUser = {}
      newUser.message = error.message;
    });
  }
  export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
        const newUser = res.user;
        updateUserInfo(name);
        return newUser;
    })
    .catch(error => {
        const newUser = {};
        newUser.message = error.message;
        return newUser;
      });
}
export const signInWithEmailandPassword = (email, password) =>{
   return firebase.auth().signInWithEmailAndPassword(email, password)
   .then(res => {
        const newUser = res.user;
        return newUser;
   })
   .catch(error => {
        const newUser = {};
        newUser.message = error.message;
        return newUser;
      });
}
const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    })
    .then(response => {
    //   response
    })
    .catch( error => {
      console.log(error);
    })
  }