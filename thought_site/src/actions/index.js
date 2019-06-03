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
        default:
           return; 
    } 
};

export const updatePage = (page) => {
    console.log(page, 'updatePage')
    return {
        type: 'UPDATE_PAGE',
        payload: page
    }
}
