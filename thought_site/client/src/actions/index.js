import axios from 'axios';

export const updateField = (newValue, fieldType) => {
    switch(fieldType) {
        case "firstName":
            return {
                type: 'UPDATE_FIRSTNAME_FIELD',
                payload: newValue
            };
        case "lastName":
            return {
                type: 'UPDATE_LASTNAME_FIELD',
                payload: newValue
            };
        case "thought":
            return {
                type: 'UPDATE_THOUGHT_FIELD',
                payload: newValue
            }
        case "clear":
            return {
                type: 'CLEAR_FORM',
                payload: newValue
            }
        default:
           return; 
    } 
};

export const putThought = (newPost) => {
    return {
        type: 'ADD_THOUGHT',
        payload: newPost
    }
}

export const putThoughtData = (newPost) => {
    return (dispatch) => {
        return axios.post('/api/putData',
            {   
                _id: newPost._id,
                firstName: newPost.firstName,
                lastName: newPost.lastName,
                thought: newPost.thought
            }).catch(error => {
                throw error;
            }).then(
                dispatch(putThought(newPost))
            );
    };
}

export const updatePage = (page) => {
    return {
        type: 'UPDATE_PAGE',
        payload: page
    }
}

export const toggleFormInput = (show) => {
    return {
        type: 'TOGGLE_FORM_INPUT',
        payload: show
    }
}

export const fetchData = (data) => {
    return {
        type: 'FETCH_THOUGHT_DATA',
        payload: data.data
    }
}

export const fetchThoughtDataFromDb = () => {
    return (dispatch) => {
        return axios.get('/api/getData')
            .catch(error => {
                throw(error);
            }).then(response => {
                dispatch(fetchData(response.data))
            })
    };       
};

export const deleteThought = (postid) => {
    return {
        type: 'DELETE_THOUGHT',
        payload: postid
    }
}
export const deleteThoughtDataFromDb = (postid) => {
    return (dispatch) => {
        return axios.delete('/api/deleteData', {
            data: {
                id: postid
            }
        }).then(
            dispatch(deleteThought(postid))
        );
    };
}
