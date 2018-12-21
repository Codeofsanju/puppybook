import {createStore, applyMiddleware} from 'redux';


const initialState = {
    allPuppies: [  { id: 1, name: 'Cody' },
    { id: 2, name: 'Ben' },
    { id: 3, name: 'Bubba' }
    ]
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

const store = createStore(reducer);

export default store;