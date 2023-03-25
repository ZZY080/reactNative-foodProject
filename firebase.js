import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDInx2lYUzfxVsGDhNZqRo180x8rj08HWg",
    authDomain: "rn-uber-eats-clone-yt-2ab9b.firebaseapp.com",
    projectId: "rn-uber-eats-clone-yt-2ab9b",
    storageBucket: "rn-uber-eats-clone-yt-2ab9b.appspot.com",
    messagingSenderId: "573780519042",
    appId: "1:573780519042:web:c629df98f8dfb3af19ac9b"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;


