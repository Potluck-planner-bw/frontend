import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Guest from './Guest'

const EventCard = props => {
    const {event} = props
    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return(
        <div className='event-card'>
        <div>
            <span>Title: {event.title}</span>
            <span>Date: {event.date}</span>
            <span>Time: {event.time}</span>
            <button onClick={toggleInfo}>Click to Expand</button>
        </div>
        <div className={!showInfo ? 'event-info' : null }>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <p>Guests:</p>
            {event.guests.map((guest, index) => {
                return <Guest guest={guest} key={index}/>
            })}
            <Link to='/event'>see people and details >></Link>    
        </div>

        </div>
    )
}

export default EventCard