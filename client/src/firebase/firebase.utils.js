import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDPY_PbTevfW5PaWJgW9WoBFfIPpXUKyAc",
  authDomain: "simply-beautiful-floral.firebaseapp.com",
  databaseURL: "https://simply-beautiful-floral.firebaseio.com",
  projectId: "simply-beautiful-floral",
  storageBucket: "simply-beautiful-floral.appspot.com",
  messagingSenderId: "161777523187",
  appId: "1:161777523187:web:2a6b191b2ebd76f2129a86",
  measurementId: "G-0Z0WSRTNZF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth ) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       });
     } catch(error) {
         console.log('error creating user', error.message);
       }
     }

     return userRef;
   };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
 
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit() 
}

export const convertCollectionsSnapshotToMap = (collections) => {

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
 return new Promise((resolve, reject) => {
   const unsubscribe = auth.onAuthStateChanged(userAuth => {
     unsubscribe();
     resolve(userAuth);
   }, reject) 
 })
}  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;