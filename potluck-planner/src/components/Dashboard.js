import React, { useContext } from 'react';

// components
import { UserContext } from '../App';
import EventCard from './EventCard';
import Header from './Header';

const Dashboard = () => {
	const user = useContext(UserContext);

	return (
		<>
			<Header />
			<div className='dashboard'>
				<div className='dashboard-column'>
					<h2>Joined</h2>
					{user.joinedEvents.map((event) => {
						return <EventCard key={event.title} event={event} />;
					})}
				</div>
				<div className='dashboard-column'>
					<h2>Created</h2>
					{user.createdEvents.map((event) => {
						return <EventCard key={event.title} event={event} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
