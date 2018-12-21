import axios from 'axios';
export const RECIEVE_PUPPIES = 'RECIEVE_PUPPIES';

export const recievePuppies = (puppies) => {
    return{
        type: RECIEVE_PUPPIES,
        puppies
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