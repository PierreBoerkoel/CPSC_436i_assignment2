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

export const updatePosts = (newPost) => {
    return {
        type: 'ADD_POST',
        payload: newPost
    }
}

export const updatePage = (page) => {
    return {
        type: 'UPDATE_PAGE',
        payload: page
    }
}
