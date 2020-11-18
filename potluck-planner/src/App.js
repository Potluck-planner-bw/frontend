import React, { useState, useEffect, createContext } from 'react';
import axiosWithAuth from './utils/axiosWithAuth'
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom';
import './styles/App.css';

// components
import Landing from './components/Landing';
import About from './components/About';
import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute'
import EventPage from './components/EventPage';
import TestLogin from './components/TestLogin';
import SignUp from './components/SignUp';
import CreateEvent from './components/CreateEvent';
import JoinEvent from './components/JoinEvent';
import Header from './components/Header';

// API Context
const UserContext = createContext()



function App() {
	const [user, setUser] = useState(null)
	// useRouterMatch

	return (
		<UserContext.Provider value={user}>
		<Router>
				<div className='App'>
					<Route exact path='/dashboard/:id' render={(props)=> <Dashboard {...props} />}	
					/>

					{/* <PrivateRoute exact path ='/protected' component={Dashboard} /> */}
					<Route exact path='/events/:id' render={(props) => (
						<EventPage {...props} />
					)} />

					<Route exact path='/test-log-in' component={TestLogin}/>
					<Route exact path='/' component={Landing}/>
					

					<Route exact path='/about' component={About} />
					{/* <Route exact path='/' component={Landing} /> */}
					<Route exact path='/sign-up' component={SignUp} />

					<Route exact path='/create-event' render={(props) => <CreateEvent {...props} /> }  />

					<Route exact path ='/join-event' component={JoinEvent}/>

				</div>
		</Router>
		</UserContext.Provider>
	);
}

export default App;
