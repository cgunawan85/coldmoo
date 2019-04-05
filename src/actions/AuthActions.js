import firebase from '@firebase/app';
import NavigationService from '../services/NavigationService';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	REGISTER_USER, 
	REGISTER_USER_SUCCESS, 
	REGISTER_USER_FAIL 
} from './types';

require('firebase/auth');

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const registerUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER }); // for loading spinner
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => { 
			dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
			NavigationService.navigate('Dashboard');
		})
		.catch((error) => {
			const errorMessage = error.message;
			dispatch({ type: REGISTER_USER_FAIL, payload: errorMessage });
		});
	};
};
