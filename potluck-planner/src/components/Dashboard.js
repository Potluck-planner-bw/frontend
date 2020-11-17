import axiosWithAuth from '../utils/axiosWithAuth'
import React, {useContext, useEffect} from 'react'

// components
import { UserContext } from '../App';
import EventCard from './EventCard';
import Header from './Header';

const Dashboard = () => {
	const user = useContext(UserContext);

    const getEvents = () => {
        axiosWithAuth()
            .get()
    }

    useEffect(() => {
        getEvents()
    }, [])

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
                    user.events.filter(event => {
                        return event.id !== user.id
                    }).map(item => {
                        return <EventCard key={item.title} event={item} /> 
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Dashboard;
