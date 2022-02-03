import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="App">
        <Header currentUser={currentUser} />

    </div>
  );
}

export default App;
