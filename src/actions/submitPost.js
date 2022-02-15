export function submitPost(user, message) {
    console.log("We're reaching the action")
    console.log(user, message)
    return (dispatch) => {
      dispatch({ type: "START_ADDING_POST_REQUEST" });
      fetch("http://localhost:3000/messages", {
        method: "post",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            // "Access-Control-Allow-Headers": "Authorization",
            // "Accept": "application/json"
        },
        body: JSON.stringify({
            user: user, 
            message: message
        })
    })
        .then((response) => response.json())
        .then((messages) => dispatch({ type: "ADD_POST", messages }));
    };
  }
  