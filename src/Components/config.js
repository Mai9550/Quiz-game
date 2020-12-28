
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

const config = {
	apiKey: 'AIzaSyDiKDagO4fhO8mKiHqrUz7WZha7cLyj7yc',
	authDomain: 'database-ff98e.firebaseapp.com',
	databaseURL: 'https://database-ff98e-default-rtdb.firebaseio.com',
	projectId: 'database-ff98e',
	storageBucket: 'database-ff98e.appspot.com',
	messagingSenderId: '447477814327',
	appId: '1:447477814327:web:f5bde10e36e19f3f01dbb2'
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;
export const firestore=firebase.firestore();