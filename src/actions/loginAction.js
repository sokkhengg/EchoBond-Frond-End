export const loginAction = (username, usertype) => dispatch => {
    dispatch({
        type: "LOGIN",
        loggedIn: true, 
        un: username,
        ut: usertype
    })
}

export const logoutAction = () => dispatch => {
    dispatch({
        type: "LOGOUT",
        loggedIn: false, 
        un: "",
        ut: ""
    })
}