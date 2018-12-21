import { RECIEVE_PUPPIES } from "./action-creators";

const initialState = {
    allPuppies: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case RECIEVE_PUPPIES:
            return {...state, allPuppies: action.puppies};

        default: 
            return state;
    }
};

export default reducer;