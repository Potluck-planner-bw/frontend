import React, { useState, createContext, useEffect } from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

// components
import Landing from './components/Landing';
import About from './components/About';
import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute'
import EventPage from './components/EventPage';

import TestLogin from './components/TestLogin';

// API Context
export const UserContext = createContext();

// login response data
const initialLogin = {
	id: '2',
	username: 'Jake',
	password: 'password',
};

// initial user state
const initialUserInfo = {
	id: 2,
	username: 'Jake',
	password: 'password',
	events: [
		{
			id: 1,
			event_name: 'Fairmount Park Meet Up',
			time: '10:00am',
			address: 'Fairmount Park, Philadelphia',
			dates: '11-20-20',
			guests: 'TJ, Alden, Jake, Cory',
			description: 'add description here',
			users_id: 2,
		},
	],
};

function App() {
	const [userInfo, setUserInfo] = useState(initialUserInfo);

	const getUserInfo = () => {
		axiosWithAuth()
			.get(`/users/${initialLogin.id}/events`)
			.then((res) => {
				setUserInfo(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<Router>
			<UserContext.Provider value={userInfo}>
				<div className='App'>
					<Route exact path='/dashboard' component={Dashboard} />
					{/* <PrivateRoute exact path ='/protected' component={Dashboard} /> */}
					<Route
						exact
						path='/events/:id'
						render={(props) => (
							<EventPage
								{...props}
								userInfo={userInfo}
								setUserInfo={setUserInfo}
							/>
						)}
					/>

					<Route exact path='/test-log-in' component={TestLogin} />

					<Route exact path='/about' component={About} />
					<Route exact path='/' component={Landing} />
				</div>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
