import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyChBo5DWXRbAp1tf9nk2tYyXTaIwtf3FsY',
	authDomain: 'net-ninja-mario-plan-708e3.firebaseapp.com',
	projectId: 'net-ninja-mario-plan-708e3',
	storageBucket: 'net-ninja-mario-plan-708e3.appspot.com',
	messagingSenderId: '496276623769',
	appId: '1:496276623769:web:8f0d7588e4e6fda16ec308',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
