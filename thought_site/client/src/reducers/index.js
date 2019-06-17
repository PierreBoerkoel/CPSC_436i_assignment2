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

const formViewReducer = (show = false, action) => {
	if (action.type === 'TOGGLE_FORM_INPUT') {
		return !action.payload;
	}
	return show;
}

const postsReducer = (posts = null, action) => {
	switch (action.type) {
		case 'FETCH_THOUGHT_DATA':
			return action.payload;
		case 'DELETE_THOUGHT':
			console.log(posts)
			return posts.filter(post => post._id !== action.payload)
		case 'ADD_THOUGHT':
			return [...posts, action.payload]
		default:
			return posts;
	}
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
	posts: postsReducer,
	showForm: formViewReducer
});
