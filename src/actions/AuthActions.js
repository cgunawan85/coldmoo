import firebase from '@firebase/app';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
