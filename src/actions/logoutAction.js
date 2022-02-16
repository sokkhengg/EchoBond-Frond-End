export const logoutAction = () => dispatch => {
    dispatch({
        type: "LOGOUT",
        loggedIn: false, 
        un: "",
        ut: ""
    })
}