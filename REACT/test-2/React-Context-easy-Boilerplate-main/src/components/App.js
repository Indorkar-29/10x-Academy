import React, { createContext } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

export const UserContext=createContext();

const App = () => {

  return (
    <div id="main">
      <UserContext.Provider value={{name:"10xAcademy", age:3}}>
        {<UserProfile />}
      </UserContext.Provider>
    </div>
  )
}

export default App;

