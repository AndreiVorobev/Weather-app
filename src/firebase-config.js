import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFsPzDfdSViBj74Quvrp5pjDzB4fYuSrU",
  authDomain: "weather-app-cd7c0.firebaseapp.com",
  projectId: "weather-app-cd7c0",
  storageBucket: "weather-app-cd7c0.appspot.com",
  messagingSenderId: "667702200225",
  appId: "1:667702200225:web:2605f01a2ea1b7d1972de0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
