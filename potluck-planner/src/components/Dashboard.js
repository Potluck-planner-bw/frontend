import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, {useContext, useEffect} from 'react'

// components
import {UserContext} from '../App'
import EventCard from './EventCard'

const Dashboard = () => {
    const user = useContext(UserContext)

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
                    user.events.map(event => {
                        return <EventCard key={event.title} event={event} />
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard