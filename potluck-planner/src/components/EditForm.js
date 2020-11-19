import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const initialValues = {
	event_name: '',
	time: '',
	address: '',
	dates: '',
	guests: '',
	description: '',
	items: '',
	created: '',
	users_id: ''
}

const EditForm = props => {
    const {push} = useHistory()
    const [event, setEvent] = useState([])
    const { id } = useParams()
    const [itemList, setItemList] = useState([])
    const [guestList, setGuestList] = useState([])

    const fetchEvent = (id) => {
        axiosWithAuth()
        .get(`/events/${id}`)
            .then(res => {
                console.log(res)
                console.log(id)
                setEvent(res.data[0])
                setItemList(res.data[0].items.split(', '))
                setGuestList(res.data[0].guests.split(', '))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchEvent(id)
    }, [])

    const handleChange = (e) => {
        e.persist()
		setEvent({
			...event,
			[e.target.name]: e.target.value,
		});
    };

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/events/${id}`, event)
        .then(res => {
            console.log(res)
            push(`/events/${id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
		<>
        <h2>Edit Form</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='event_name'
					className='eventTitle'
					placeholder='event title'
					onChange={handleChange}
                    value={event.event_name}
				/>
				<div>
					<input type='date' name='dates' className='eventDate' onChange={handleChange} value={event.dates} />
					<span>@</span>
					<input type='time' name='time' className='eventTime' onChange={handleChange} value={event.time} />
				</div>

				<input
					type='text'
					name='address'
					className='eventStreetAddress'
					placeholder='street address'
					onChange={handleChange}
                    value={event.address}
				/>
				<input
					type='text'
					name='description'
					className='eventDescription'
					placeholder='description'
					onChange={handleChange}
                    value={event.description}
				/>
				<input
					type='text'
					name='guests'
					className='eventDescription'
					placeholder='enter guest usernames with a comma and space (, ) between each (i.e Jake, TJ, Cory)'
					onChange={handleChange}
                    value={event.guests}
				/>			
				<input
					type='text'
					name='foods'
					className='eventDescription'
					placeholder='enter foods with a comma and space (, ) between each food (i.e chip, dressing, steak)'
					onChange={handleChange}
                    value={event.items}
				/>			
				<button className='form-bordered-btn'>Update</button>
			</form>
		</>
	);
}

export default EditForm