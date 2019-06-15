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

export const putThoughtData = (newPost) => {
    return () => {
        return axios.post('http://localhost:3001/api/putData',
            {
                firstName: newPost.firstName,
                lastName: newPost.lastName,
                thought: newPost.thought
            }).catch(error => {
                throw(error);
            })
    };
}

export const updatePage = (page) => {
    return {
        type: 'UPDATE_PAGE',
        payload: page
    }
}

export const fetchData = (data) => {
    return {
        type: 'FETCH_THOUGHT_DATA',
        payload: data.data
    }
}

export const fetchThoughtData = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/api/getData')
            // .then((data) => data.json())
            .then(response => {//(fetchData(res.data))) 
                dispatch(fetchData(response.data))
            }).catch(error => {
                throw(error);
            });
    };       
};


// getDataFromDb = () => {
//     fetch('http://localhost:3001/api/getData')
//     .then((data) => data.json())
//     .then((res) => this.setState({ data: res.data }));
// };

// // our put method that uses our backend api
// // to create new query into our data base
// putDataToDB = (message) => {
//     let currentIds = this.state.data.map((data) => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//     ++idToBeAdded;
//     }

//     axios.post('http://localhost:3001/api/putData', {
//     id: idToBeAdded,
//     message: message,
//     });
// };

// // our delete method that uses our backend api
// // to remove existing database information
// deleteFromDB = (idTodelete) => {
//     parseInt(idTodelete);
//     let objIdToDelete = null;
//     this.state.data.forEach((dat) => {
//     if (dat.id == idTodelete) {
//         objIdToDelete = dat._id;
//     }
//     });

//     axios.delete('http://localhost:3001/api/deleteData', {
//     data: {
//         id: objIdToDelete,
//     },
//     });
// };

// // our update method that uses our backend api
// // to overwrite existing data base information
// updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     parseInt(idToUpdate);
//     this.state.data.forEach((dat) => {
//     if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//     }
//     });

//     axios.post('http://localhost:3001/api/updateData', {
//     id: objIdToUpdate,
//     update: { message: updateToApply },
//     });
// };