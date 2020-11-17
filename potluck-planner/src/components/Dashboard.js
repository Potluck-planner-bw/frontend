<<<<<<< HEAD
import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, {useContext, useEffect} from 'react'
=======
import React, { useContext } from 'react';
>>>>>>> feature/jake-grella

// components
import { UserContext } from '../App';
import EventCard from './EventCard';
import Header from './Header';

const Dashboard = () => {
	const user = useContext(UserContext);

<<<<<<< HEAD
    const getEvents = () => {
        axiosWithAuth()
            .get()
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
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
                    user.events.filter(event => {
                        return event.id !== user.id
                    }).map(item => {
                        return <EventCard key={item.title} event={item} /> 
                    })
                }
            </div>
        </div>
    )
}
=======
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
>>>>>>> feature/jake-grella

export default Dashboard;
