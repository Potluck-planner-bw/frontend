import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from "react-router-dom";
import Item from '../Item';

const EventPage = props => {
    const [userInfo, setUserInfo] = useState([])
    const params = useParams()
    const { push } = useHistory()
    const [event, setEvent] = useState([])
    const [itemList, setItemList] = useState([])
    const [guestList, setGuestList] = useState([])
    const [yesList, setYesList] = useState([])
    const [noList, setNoList] = useState([])
    const [editingItem, setEditingItem] = useState('')

    const getUserInfo = () => {
        axiosWithAuth()
        .get(`/users/${localStorage.getItem('userID')}`)
        .then(res => {
            console.log(res)
            setUserInfo(res.data[0])
        })
        .catch(err => {
            console.log(err)
        })
    }

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
        getUserInfo()
        fetchEvent(params.id)
    }, [])

    useEffect(() => {

    }, [yesList, noList])

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

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e)

    }

    const radioHandler = (e) => {
        console.log(e)
        if (e.target.value === 'yes' && !yesList.includes(userInfo.username)) {
            let newYesList = yesList
            newYesList.push(userInfo.username)
            setYesList(newYesList)

            
        } else if (e.target.value === 'no' && !noList.includes(userInfo.username)) {
            let newNoList = noList
            newNoList.push(userInfo.username)
            setNoList(newNoList)
        } else {
            return null
        }
    }

    const onChangeHandler = (value, key) => {
        console.log(itemList)
        const newItems = itemList.map((item, index) => {
            if (index === key) {
                item = value
            }
            return item
        })
        setItemList(newItems)
        setEvent({
            ...event,
            items: itemList.join(', ')
        })
    }

    const updateItems = () => {


        axiosWithAuth()
        .put(`/events/${event.id}`, event)
        .then(res => {
            console.log(res)
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
                    {itemList.map((item, index) => {
                        return (
                            <div>
                            <input 
                                type='text'
                                id={index}
                                value={item}
                                onChange={(e) => {onChangeHandler(e.target.value, index)}}
                            />
                            </div>
                        ) 
                    })}
                    <button onClick={updateItems}>Update Items</button>
                </div>
            </div>
            <div className='event-page-column'>
                <h3>Guests</h3>
                <ul>
                {guestList.map(item => {
                        return <li key={item.id}>{item}</li>
                    })}
                </ul>
                {event.users_id == localStorage.getItem('userID') && <button onClick={() => {push(`/edit-event/${event.id}`)}}>Edit</button>}
                {event.users_id == localStorage.getItem('userID') && <button onClick={deleteHandler}>Delete Event</button>}
            </div>
            <h3>Going?</h3>
            <form onSubmit={submitHandler}>
                <label>Yes
                <input
                    type='radio'
                    id='yes'
                    name='isGoing'
                    value='yes'
                    onChange={radioHandler}
                    />
                </label>
                <label>No
                <input
                    type='radio'
                    id='no'
                    name='isGoing'
                    value='no'
                    onChange={radioHandler}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
            
                <div className='column-names'>
                <div className='yes-column'>
                    <p>Yes</p>
                    <ul>
                    {yesList.map((guest, index) => {
                        return <li key={index}>{guest}</li>
                    })}
                    </ul>
                </div>
                <div>
                <p>No</p>
                <ul className='no-column'>
                {noList.map((guest, index) => {
                        return <li key={index}>{guest}</li>
                    })}
                </ul>
                </div>
                </div>    
        </div>
    )
}

export default EventPage


