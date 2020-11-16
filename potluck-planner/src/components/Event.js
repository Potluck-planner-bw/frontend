import React from 'react'

const Event = props => {
    const {event} = props

    return(
        <div>
            <h3>Title: {event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <p>Guests: {event.guests}</p>
        </div>
    )
}

export default Event