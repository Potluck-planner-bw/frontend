import React, {useState} from 'react'

const Event = props => {
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
            <p>Guests: {event.guests}</p>    
        </div>

        </div>
    )
}

export default Event