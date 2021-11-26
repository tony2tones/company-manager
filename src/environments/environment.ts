import { initializeApp } from "firebase/app";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtE3MZ9EeADmLEqUA13DIXgx1t3CoAUE",
  authDomain: "likes-b1d27.firebaseapp.com",
  databaseURL: "https://likes-b1d27.firebaseio.com",
  projectId: "likes-b1d27",
  storageBucket: "likes-b1d27.appspot.com",
  messagingSenderId: "937248567100",
  appId: "1:937248567100:web:3917c992c42b8aa9f27839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);