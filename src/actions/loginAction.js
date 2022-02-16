export const loginAction = (username, usertype) => dispatch => {
    dispatch({
        type: "LOGIN",
        loggedIn: true, 
        un: username,
        ut: usertype
    })
}
