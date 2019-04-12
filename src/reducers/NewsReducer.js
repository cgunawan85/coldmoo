import { NEWS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	newsList: null,
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NEWS_FETCH_SUCCESS:
			return { ...state, loading: false, newsList: action.payload };
		default:
			return state;
	}
};
