import './App.css';
import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'

// API Context
export const UserContext = createContext();

// initial user state
const initialUserInfo = {
  username: 'alden',
  email: 'ach52@gmail.com',
  password: 'donkey',
  joinedEvents: [
    {
      title: 'joes cookout',
      date: '10-15-20',
      time: '10am',
      location: 'pavillion',
      description: 'bring your favorite bbq',
      guests: ['mary', 'bob', 'sally']
    }
  ],
  createdEvents: [
    {
      title: 'joes cookout',
      date: '10-15-20',
      time: '10am',
      location: 'pavillion',
      description: 'bring your favorite bbq',
      guests: ['mary', 'bob', 'sally']
    }
  ]
}

function App() {
  const [userInfo] = useState(initialUserInfo)

  const getUserInfo = () => {
    axios.get(``)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <Router>
      <UserContext.Provider value={userInfo} >
        <div className="App">
          <Dashboard />
          {/* <PrivateRoute exact path ='/protected' component={Dashboard} /> */}
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;