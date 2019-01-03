import axios from 'axios';
export const RECIEVE_PUPPIES = 'RECIEVE_PUPPIES';
export const RECIEVE_SINGLE_PUPPY = 'RECIEVE_SINGLE_PUPPIES';

export const recievePuppies = (puppies) => {
    return{
        type: RECIEVE_PUPPIES,
        puppies
    };
};

export const recieveSinglePuppy = (puppy) => {
    return {
        type: RECIEVE_SINGLE_PUPPY,
        puppy
    };
};

// thunk middleware to get all puppies from database
export const recievePuppiesThunk = () => {
    return async (dispatch) => {
        try {
            let puppies = await axios.get('/api/puppies');
            puppies = puppies.data;
            const action = recievePuppies(puppies);
            dispatch(action);
            
        } catch (error) {
            console.log(error);
        }
    }; 
};

export const recieveSinglePuppyThunk = (id) => {
    return async (dispatch) => {
        try {
            let singlePuppy = await axios.get(`/api/puppies/${id}`);
            singlePuppy = singlePuppy.data;
            const action = recieveSinglePuppy(singlePuppy);
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };
};