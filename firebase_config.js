// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

//createUserWithEmailAndPassword
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase, set, get, ref, update, onValue, increment, push, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

export { set, get, ref, update, onValue, increment, push, remove};

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
export const database = getDatabase(app);

//Credential class
class Credential {
    constructor(staffCode, name, role) {
        this.staffCode = staffCode;
        this.name = name;
        this.role = role;
    };

    //Get user info
    async getInfo() {
        try {
            const snapshot = await get(ref(database, 'staffcode/' + this.staffCode));
            const user = snapshot.val();
            // console.log(user);
            if (user) {
                //Store user credential and create order cart
                this.name = user.name;
                this.role = user.role;
                return true;
            } else {
                alertFunc("No such staff " + this.staffCode + ".");
                return false;
            }
        } catch (error) {
            alertFunc("Error: ", + error.message);
            return false;
        };
    };

    // //Login function
    // login() {
    //     this.getInfo().then(success => {
    //         if (success) {
    //             sessionStorage.setItem("credential", JSON.stringify(this));
    //             window.location.href = "main.html";
    //         };
    //     });
    // };

};

var userPass = JSON.parse(sessionStorage.getItem("credential"));

const credential = (function () {
    if (userPass != null) {
        return new Credential(userPass.staffCode, userPass.name, userPass.role);
    };
    return false;
});

//Export class object
export { credential };

//Run general function to process user credential
var loading;

//Start up
window.onload = function () {
    //Get data from session storage
    // If not in staff code page
    if (!document.getElementById("staffPin")) {
        // If credential is valid
        if (credential() != false) {
            document.getElementById("Account").innerHTML = credential().name;

            // Loading animation
            var rotate = 0;
            loading = setInterval(() => {
                document.getElementById("loading").style.transform = ("translate(-50%, -50%) rotate(" + rotate + "deg)");
                rotate += 10;
                if (rotate > 360) {
                    rotate = 0;
                }
            }, 10);

            setTimeout(() => {
                clearInterval(loading);
            }, 3000);

        } else {

            //session outdated
            var info = "Session outdated.\n Please login again.";
            document.body.innerHTML += `
                <div style="position: absolute; left: 0px; top: 0px; height: 100%; width: 100%; z-index: 1;">
                    <div style="font-size: 30px; white-space: pre-line; text-align: center; position: absolute; top: 50%; left: 50%; padding: 10px 30px 10px 30px; transform: translate(-50%, -50%); border: 1px solid rgba(0, 0, 0, 0.6); background-color: rgba(255, 255, 255, 0.6);"
                    >${info}
                        <button type="button" onclick="window.location.href = 'staffcode.html'">Return to Login</button>
                    </div>
                </div>
            `;

        };
    };

};

// If logged out somewhere
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("[User Credential] " + user.uid);

        if (loading && document.getElementById("loading")) {
            // Remove loading animation
            clearInterval(loading);
            document.getElementById("loading").remove();
        };

        // ...
    } else {
        // User is signed out
        // ...
        alert("Oh no, you have been signed out.");
        window.location.href = "login.html"
    }
});

console.log("Firebase config is loaded!");