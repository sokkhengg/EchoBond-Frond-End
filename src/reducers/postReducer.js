export default (state = { messages: [], requesting: false}, action) => {
    switch (action.type) {
        case 'START_ADDING_POST_REQUEST':
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