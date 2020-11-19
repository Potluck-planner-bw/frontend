import axiosWithAuth from '../utils/axiosWithAuth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventCard from './EventCard';

// components
import Header from './Header';

// initial user state
const initialCredentials = {
	id: '',
	username: '',
	password: '',
	events: [],
};

const Dashboard = (props) => {
	const [userInfo, setUserInfo] = useState(initialCredentials);
	const [events, setEvents] = useState([]);
	const params = useParams();

	const getUserInfo = () => {
		axiosWithAuth()
			.get(`/users/${params.id}/events`)
			.then((res) => {
				console.log(res);
				setUserInfo(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getEvents = () => {
		axiosWithAuth()
			.get(`/events`)
			.then((res) => {
				console.log(res);
				setEvents(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserInfo();
		getEvents();
	}, []);

	return (
		<>
			<Header userInfo={userInfo} />
			<div className='dashboard'>
				<div className='dashboard-column'>
					<h2>My Events</h2>
					{events
						.filter((event) => {
							return event.users_id === userInfo.id;
						})
						.map((item) => {
							return <EventCard key={item.title} event={item} />;
						})}
				</div>
				<div className='dashboard-column'>
					<h2>Attending Events</h2>
					{events
						.filter((ev) => {
							{
								/* console.log(userInfo) */
							}
							return ev.guests.split(', ').includes(userInfo.username);
						})
						.map((item) => {
							return <EventCard key={item.title} event={item} />;
						})}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
