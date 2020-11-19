import React, { useContext, useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from "react-router-dom";

// components


const EventPage = props => {
    // food state
    const [food, setFood] = useState('')

    const params = useParams()
    const { push } = useHistory()
    const [event, setEvent] = useState([])

    const fetchEvent = (id) => {
        axiosWithAuth()
        .get(`/events/${id}`)
            .then(res => {
                console.log(res)
                setEvent(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchEvent(params.id)
    }, [])

    const changeHandler = e => {
        setFood(e.target.value)
    }

    const addFood = e => {
        e.preventDefault()
    }

    return (
        <div className='event-page'>
            <h2 className='event-page-title'></h2>
            <div className='event-page-column'>
                <div>
                    <h2>{event.event_name}</h2>
                    <h3>{event.dates} @ {event.time}</h3>
                    <p>{event.address}</p>
                    <p>{event.description}</p>
                </div>
                <div>
                <form onSubmit={addFood}>
                    <input name='food' type='text' placeholder='enter food' onChange={changeHandler}/>
                    <button>add new item</button>
                </form>
                    <ul>
                    {/* {event.items.split(', ').map(item => {
                        return <li>{item}</li> 
                    })} */}
                    </ul>
                </div>
            </div>
            <div className='event-page-column'>
                <h2>Going?</h2>
                <label>Yes
                    <input
                        type='radio'
                        id='yes'
                        name='isGoing'
                        value='yes'
                        />
                </label>
                <label>No
                    <input
                        type='radio'
                        id='no'
                        name='isGoing'
                        value='no'
                        />
                </label>
                <div className='column-names'>
                    <div className='yes-column'>
                        <p>Yes</p>
                        <ul>
                            <li>Alden</li>
                            <li>Tj</li>
                            <li>Jake</li>
                            <li>Cody</li>
                        </ul>
                    </div>
                <div>
                <p>No</p>
                    <ul className='no-column'>
                        <li>John</li>
                        <li>Tom</li>
                        <li>Dan</li>
                        <li>Jessie</li>
                    </ul>
                </div>
                </div>
                <button>Delete Event</button>
            </div>    
        </div>
    )
}

export default EventPage