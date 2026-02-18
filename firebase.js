// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCM7bW_Ui-UxAAn3PjMONWM5aiP_DtXl3w",
  authDomain: "louarte-e66bd.firebaseapp.com",
  projectId: "louarte-e66bd",
  storageBucket: "louarte-e66bd.firebasestorage.app",
  messagingSenderId: "161343618798",
  appId: "1:161343618798:web:4b2a124f566ab49b1b3dff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);