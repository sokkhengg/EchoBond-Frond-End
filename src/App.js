import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Forms from "./components/User/Forms";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Companies from "./components/Companies/Companies";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   // debugger
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetch(`http://localhost:3000/auto_login`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         setCurrentUser(data);
  //       });
  //   }
  // }, []);

  


  return (
    <div className="App g-0">
      <Header currentUser={currentUser} />

      <Routes>
        <Route
          path="/register"
          element={
            <Forms setCurrentUser={setCurrentUser} currentUser={currentUser} />
          }
        />
      <Route path="/" element={<Home currentUser={currentUser} />} />
      <Route path="/companies" element={<Companies currentUser={currentUser} />} />

        
      </Routes>
    </div>
  );
}

export default App;
