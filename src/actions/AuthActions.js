import { Toast } from 'native-base';
import firebase from '@firebase/app';
import NavigationService from '../services/NavigationService';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	REGISTER_USER, 
	REGISTER_USER_SUCCESS, 
	REGISTER_USER_FAIL,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_SUCCESS,
	RESET_ERROR
} from './types';

require('firebase/auth');

function renderErrorMessage(errorMessage) {
	return Toast.show({
		text: errorMessage,
		duration: 3000,
		buttonText: 'Try again!'
	});
}

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
			renderErrorMessage(error.message);
			dispatch({ type: REGISTER_USER_FAIL });
		});
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
				NavigationService.navigate('Dashboard');
			})
			.catch((error) => {
				renderErrorMessage(error.message);
				dispatch({ type: LOGIN_USER_FAIL });
		});
	};
};

export const signOut = () => {
	return (dispatch) => {
		firebase.auth().signOut().then(() => {
			dispatch({ type: LOGOUT_SUCCESS });
			NavigationService.navigate('Welcome');
		});
	};
};
