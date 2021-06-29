import React from 'react';

export const reducer = (state,action) => {
    console.log("state is " + JSON.stringify(state));
    console.log("action is " + JSON.stringify(action));
    if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people,action.payload];
        return {...state,
                people:newPeople,
                isModelOpen:true,
                modalContetnt:'itemAdded',
                isInvalidInput: false
        };
    }
    if(action.type === 'INVALID'){
        return {...state,isInvalidInput: true};
    }

    if(action.type === 'CLOSE_MODAL'){
        return {...state,isModelOpen:false};
    }
    if(action.type === 'REMOVE_ITEM'){
        const reservedPeople = state.people.filter(person => person.id !== action.payload);
        return {...state,people:reservedPeople};
    }

    throw new Error("no matching action type");
};

