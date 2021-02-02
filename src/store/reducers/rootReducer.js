import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer;

//All imports
//npm i redux react-redux //To enable redux
//npm i redux-thunk //Middleware apply (store enhancer) to halt actions dispatch to perform api req
//npm i firebase //to obtain firebase config

//NEW
//npm i --save react-redux-firebase@next

//OLD
//npm i react-redux-firebase redux-firestore // to connect firebase config to app
