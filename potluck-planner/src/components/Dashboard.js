<<<<<<< HEAD
import axiosWithAuth from '../utils/axiosWithAuth';
import React, { useContext, useEffect } from 'react';
=======
import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, {useContext, useEffect} from 'react'
>>>>>>> f1e50d7574287a0f058233b977e050f43136b2ff

// components
import { UserContext } from '../App';
import EventCard from './EventCard';
import Header from './Header';

const Dashboard = () => {
	const user = useContext(UserContext);

<<<<<<< HEAD
	const getEvents = () => {
		axiosWithAuth().get();
	};
=======
    const getEvents = () => {
        axiosWithAuth()
            .get()
    }
>>>>>>> f1e50d7574287a0f058233b977e050f43136b2ff

	useEffect(() => {
		getEvents();
	}, []);

<<<<<<< HEAD
	return (
		<div className='dashboard'>
			<div className='dashboard-column'>
				<h2>My Events</h2>
				{user.events
					.filter((event) => {
						return event.id === user.id;
					})
					.map((item) => {
						return <EventCard key={item.title} event={item} />;
					})}
			</div>
			<div className='dashboard-column'>
				<h2>Joined Events</h2>
				{user.events
					.filter((event) => {
						return event.id !== user.id;
					})
					.map((item) => {
						return <EventCard key={item.title} event={item} />;
					})}
			</div>
		</div>
	);
};
=======
    return (
      <>
        <Header />
        <div className='dashboard'>
            <div className='dashboard-column'>
                <h2>My Events</h2>
                {
                    user.events.filter(event => {
                        return event.id === user.id
                    }).map(item => {
                        return <EventCard key={item.title} event={item} /> 
                    })
                }
            </div>
            <div className='dashboard-column'>
                <h2>Joined Events</h2>
                {
                    user.events.map(event => {
                        return <EventCard key={event.title} event={event} />
                    })
                }
            </div>
        </div>
    </>
    )
}
>>>>>>> f1e50d7574287a0f058233b977e050f43136b2ff

export default Dashboard;
