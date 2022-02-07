import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Forms from "./components/User/Forms";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Company from "./components/Companies/Company";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    // debugger
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentUser(data);
        });
    }
  }, []);

  useEffect(() => {
    // debugger
      fetch(`http://localhost:3000/companies`)
      .then((resp) => resp.json())
      .then((data) => {
        setCompanies(data);
      });
    }
    , []);

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

      <Route path="/home" element={<Home currentUser={currentUser} />} />
      <Route path="/company" element={<Company currentUser={currentUser} companies={companies} />} />

        
      </Routes>
    </div>
  );
}

export default App;
