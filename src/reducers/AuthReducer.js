import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INTIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		default:
			return state;
	}
};
