import { RECIEVE_PUPPIES, RECIEVE_SINGLE_PUPPY } from "./action-creators";
import { combineReducers } from "redux";
// const hardCodedPuppy = {
//     id: 1,
//     name: 'Taylor',
//     image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
// };

// const initialState = {
//     allPuppies: [],
//     singlePuppy: hardCodedPuppy
// };

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case RECIEVE_PUPPIES:
//             return {...state, allPuppies: action.puppies};

//         case RECIEVE_SINGLE_PUPPY:
//             return {...state, singlePuppy: action.puppy};

//         default: 
//             return state;
//     }
// };

const allPuppiesReducer = (state = [], action) => {
    switch(action.type) {
        case RECIEVE_PUPPIES:
        return action.puppies;
        
        default:
        return state;
    }
};

const selectedPuppyReducer = (state = {}, action) => {
    switch(action.type){
        case RECIEVE_SINGLE_PUPPY:
        console.log(action);
        return action.puppy;

        default:
        return state;
    }
};


const rootReducer = combineReducers({
    allPuppies: allPuppiesReducer,
    singlePuppy: selectedPuppyReducer
});

export default rootReducer;