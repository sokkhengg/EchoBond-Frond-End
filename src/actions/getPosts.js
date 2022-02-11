export function getPosts() {
  console.log("c")
    return (dispatch) => {
      dispatch({ type: "START_ADDING_POST_REQUEST" });
      fetch("https://culturefitapp.herokuapp.com/messages", {
        method: "get",
        headers: {
            "Access-Control-Allow-Headers": "Authorization",
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
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