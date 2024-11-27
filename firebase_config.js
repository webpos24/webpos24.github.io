// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

//createUserWithEmailAndPassword
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmYAF5VJ0RntbtrfJ_4Sk9syHYGKev4nw",
    authDomain: "webpos24-e0eb3.firebaseapp.com",
    databaseURL: "https://webpos24-e0eb3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webpos24-e0eb3",
    storageBucket: "webpos24-e0eb3.firebasestorage.app",
    messagingSenderId: "544188889423",
    appId: "1:544188889423:web:9d7c59723cde33292bad3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// If logged out somewhere
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("[User Credential] " + user.uid);

        // ...
    } else {
        // User is signed out
        // ...
        alert("Oh no, you have been signed out.");
        window.location.href = "login.html"
    }
});