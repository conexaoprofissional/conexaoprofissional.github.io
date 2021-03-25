var didNotInitialize = true;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDNfla6i5xS44bdtXGlYDP0Onz2W8DeSpg",
    authDomain: "futtura-4a46d.firebaseapp.com",
    projectId: "futtura-4a46d",
    storageBucket: "futtura-4a46d.appspot.com",
    messagingSenderId: "1002753016801",
    appId: "1:1002753016801:web:02740ac265a09a15afc8a0",
    measurementId: "G-XKWCBNP17H"
};

if (didNotInitialize) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    didNotInitialize = false;
}

firebase.analytics();