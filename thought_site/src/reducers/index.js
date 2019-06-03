import { combineReducers } from 'redux';

const initialState = {
	firstName: "",
	lastName: "",
	thought: ""
}

const formReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE_FIRSTNAME_FIELD':
			return { ...state, firstName: action.payload };
		case 'UPDATE_LASTNAME_FIELD':
			return { ...state, lastName: action.payload };
		case 'UPDATE_THOUGHT_FIELD':
			return { ...state, thought: action.payload };
		default:
			return state
	}
}

const viewReducer = (page = 'Home', action) => {
	if (action.type === 'UPDATE_PAGE') {
		return action.payload;
	}
	console.log(page)
	return page;
}

export default combineReducers({ 
	form: formReducer,
	renderPage: viewReducer
});
