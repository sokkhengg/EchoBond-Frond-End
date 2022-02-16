/**
 * Gets all the posts from the server and dispatches them to the reducer.
 * @returns None
 */
export function getPosts() {
  console.log("c")
    return (dispatch) => {
      dispatch({ type: "START_ADDING_POST_REQUEST" });
      fetch("http://localhost:3000/messages", {
        // method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
            // "Access-Control-Allow-Headers": "Authorization",
            // "Content-Type": "application/json",
            // "Accept": "application/json"
        }
    })
        .then((response) => response.json())
        .then((messages) => {
          console.log("IT RAN")
          console.log(messages)
          dispatch({ type: "ADD_POST", messages })
        });
    };
  }