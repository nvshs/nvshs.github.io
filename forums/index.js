import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    // don't try, it won't work
    apiKey: "AIzaSyDeUKXICjjn41e98czRNvfsQiwC7ste_k8",
    authDomain: "nvshs-41c4f.firebaseapp.com",
    projectId: "nvshs-41c4f",
    storageBucket: "nvshs-41c4f.appspot.com",
    messagingSenderId: "413506833426",
    appId: "1:413506833426:web:139a93fc6799ca7c08dccb",
    measurementId: "G-G2FTKKTK58",
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth();
const user = getAuth().currentUser;

/*
document.getElementById("signinGoogle").addEventListener("click", function () {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(handleSignIn())
    console.log("signed in")
});

document.getElementById("signout").addEventListener("click", function () {
    authentication.signOut().then(handleSignOut())
    console.log("signed out")
});
*/

function handleSignIn(){
    if (user) {
        console.log('A')
    } else {
        console.log('V')
    }
}
function handleSignOut(){

}
