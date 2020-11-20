import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const EventCard = props => {
    const {event} = props
    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return(
        <div className='event-card'>
        <div>
            <span>Title: {event.event_name}</span>
            <span>Date: {event.date}</span>
            <span>Time: {event.time}</span>
            <span>Location: {event.address}</span>
        </div>
        <div className={!showInfo ? 'event-info' : null }>
            <p>{event.location}</p>
            <p>Description: {event.description}</p>
            <Link to={`/events/${event.id}`}>see people and details >></Link>    
        </div>
        </div>
    )
}

export default EventCard