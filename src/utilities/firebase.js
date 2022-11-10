import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update} from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyC60rr3FRluRW6DKclZ6rB8K3y60lQGO58",
    authDomain: "nugymbuddies-ba6d2.firebaseapp.com",
    databaseURL: "https://nugymbuddies-ba6d2-default-rtdb.firebaseio.com",
    projectId: "nugymbuddies-ba6d2",
    storageBucket: "nugymbuddies-ba6d2.appspot.com",
    messagingSenderId: "642747954033",
    appId: "1:642747954033:web:a579dc0a60078228ab3cd0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};