// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { messages: [], requesting: false}, action) => {
    switch (action.type) {
        case 'START_ADDING_POST_REQUEST':
            /**
             * Takes in a state object and returns a new state object with the requesting property set to true.
             */
            return {...state,
                messages: [...state.messages],
                requesting: true
            }
        case 'ADD_POST':
                return {...state,
                    messages: action.messages,
                    requesting: false
                }
        default:
            return state;
    }
}

// Reducer for the inversion reducer. 
//  * @param state - the current state of the inversion reducer. 
//  * @param action - the action to be performed. 
//  * @returns the new state of the inversion reducer. 