import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { Context } from './lib/Context';

function App() {
  const[userName,setuserName] = useState("")
  const[showProfile,setShowProfile] = useState(false)
  return (
    <div className="App">
      <Context.Provider value={{userName,setuserName,showProfile,setShowProfile}}>
     {showProfile?<Profile/>:<Login/>}
      </Context.Provider>
    </div>
  );
}

export default App;
