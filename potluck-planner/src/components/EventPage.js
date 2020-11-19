import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from "react-router-dom";

const EventPage = props => {

    const params = useParams()
    const { push } = useHistory()
    const [event, setEvent] = useState([])
    const [itemList, setItemList] = useState([])
    const [guestList, setGuestList] = useState([])

    const fetchEvent = (id) => {
        axiosWithAuth()
        .get(`/events/${id}`)
            .then(res => {
                console.log(res)
                setEvent(res.data[0])
                setItemList(res.data[0].items.split(', '))
                setGuestList(res.data[0].guests.split(', '))
                console.log(params.id)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchEvent(params.id)
    }, [])

    const deleteHandler = () => {
        axiosWithAuth()
        .delete(`/events/${event.id}`)
        .then(res => {
            console.log(res)
            push(`/dashboard/${localStorage.getItem('userID')}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='event-page'>
            <div className='event-page-column'>
                <div>
                    <h2>{event.event_name}</h2>
                    <h3>{event.dates} @ {event.time}</h3>
                    <p>{event.address}</p>
                    <p>{event.description}</p>
                </div>
                <div>
                <h3>Items</h3>
                    <ul>
                    {itemList.map(item => {
                        return <li key={item.id}>{item}</li>
                    })}
                    </ul>
                </div>
            </div>
            <div className='event-page-column'>
                <h3>Guests</h3>
                <ul>
                {guestList.map(item => {
                        return <li key={item.id}>{item}</li>
                    })}
                </ul>
                {event.users_id == localStorage.getItem('userID') && <button onClick={deleteHandler}>Delete Event</button>}
            </div>    
        </div>
    )
}

export default EventPage

// Yes or no lists with select buttons

// <label>Yes
// <input
//     type='radio'
//     id='yes'
//     name='isGoing'
//     value='yes'
//     />
// </label>
// <label>No
// <input
//     type='radio'
//     id='no'
//     name='isGoing'
//     value='no'
//     />
// </label>
// <div className='column-names'>
// <div className='yes-column'>
//     <p>Yes</p>
//     <ul>
//         <li>Alden</li>
//         <li>Tj</li>
//         <li>Jake</li>
//         <li>Cody</li>
//     </ul>
// </div>
// <div>
// <p>No</p>
// <ul className='no-column'>
//     <li>John</li>
//     <li>Tom</li>
//     <li>Dan</li>
//     <li>Jessie</li>
// </ul>
// </div>
// </div>