import { RECIEVE_PUPPIES } from "./action-creators";

const hardCodedPuppy = {
    id: 1,
    name: 'Taylor',
    image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

const initialState = {
    allPuppies: [],
    singlePuppy: hardCodedPuppy
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