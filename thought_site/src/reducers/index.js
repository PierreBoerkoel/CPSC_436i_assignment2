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
		case 'CLEAR_FORM':
			return initialState;
		default:
			return state
	}
}

const initialPosts = [
	{
		"firstName": "Pierre",
		"lastName": "Boerkoel",
		"thought": "This took way too long"
	},
	{
		"firstName": "Will",
		"lastName": "Zhang",
		"thought": "I'm tired and hungry"
	}
]

const postsReducer = (state = initialPosts, action) => {
	if (action.type === 'ADD_POST') {
		return [ ...state, action.payload ];
	}
	return state;
}

const viewReducer = (page = 'Home', action) => {
	if (action.type === 'UPDATE_PAGE') {
		return action.payload;
	}
	return page;
}

export default combineReducers({ 
	form: formReducer,
	renderPage: viewReducer,
	posts: postsReducer
});
