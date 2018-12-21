export const RECIEVE_PUPPIES = 'RECIEVE_PUPPIES';

export const recievePuppies = (puppies) => {
    return{
        type: RECIEVE_PUPPIES,
        puppies
    };
};