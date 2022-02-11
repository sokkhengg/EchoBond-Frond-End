export default (state = { loggedIn: false, name: "", userType: "" }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state,
                loggedIn: action.loggedIn,
                name: action.un,
                userType: action.ut
            }
        case 'LOGOUT':
                return {...state,
                    loggedIn: action.loggedIn,
                    name: action.un,
                    userType: action.ut
                }
        default:
            return state;
    }
}