import firebase from '@firebase/app';
import { NEWS_FETCH_SUCCESS } from './types';

require('firebase/database');

export const newsFetch = () => {
	return function (dispatch) {
		// add NEWS_FETCH_START to show loading indicator?
		firebase.database().ref('/content/news/').on('value', (snapshot) => {
			dispatch({ type: NEWS_FETCH_SUCCESS, payload: snapshot.val() });
		}, (error) => { console.log(error); });
	};
};
