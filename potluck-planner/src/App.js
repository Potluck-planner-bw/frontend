import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';

// components
import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute'
import EventPage from './components/EventPage';

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
      location: '453 beach st santa monica, ca',
      description: 'bring your favorite bbq',
      guests: ['mary', 'bob', 'sally'],
      food: ['chicken', 'chips', 'beer']
    }
  ],
  createdEvents: [
    {
      title: 'My BBQ',
      date: '11-22-20',
      time: '2pm',
      location: '934 nw color way chicago, il',
      description: 'bring your own bear',
      guests: ['Jake', 'TJ', 'Cody'],
      food: ['cornbread', 'brisket', 'soda']
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
        {/* <Dashboard /> */}
			{/* <Landing /> */}
			{/* <About /> */}
			{/* <CreateEvent /> */}
			{/* <JoinEvent /> */}

          <Route exact path='/' component={Dashboard}/>
          {/* <PrivateRoute exact path ='/protected' component={Dashboard} /> */}

          <Route path='/event/' component={EventPage} />

        </div>
      </UserContext.Provider>
    </Router>
  );

}

export default App;