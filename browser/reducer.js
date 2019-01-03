import { RECIEVE_PUPPIES, RECIEVE_SINGLE_PUPPY } from "./action-creators";
import { combineReducers } from "redux";


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