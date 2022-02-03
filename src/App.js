import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
// components
import Header from './components/Header/Header';
import Forms from './components/User/Forms';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="App">
        <Header currentUser={currentUser} />
        <Routes>
        <Route path="/login" element={<Forms setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        {/* <Route path="/search" element={<Search setCurrentUser={setCurrentUser} currentUser={currentUser} />} /> */}
        {/* <Route path="/podcasts/:id" element={<PodcastDetail currentUser={currentUser} />} */}
        
      </Routes>

    </div>
  );
}

export default App;
