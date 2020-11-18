import React, {useState, useEffect} from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';
import axiosWithAuth from '../utils/axiosWithAuth';


const JoinEvent = () => {
	const [userID, setUserID] = useState('')
    const [event, setEvent] = useState([])

	const onChange = e => {
		setUserID(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		axiosWithAuth()
        .get(`/events/${userID}`)
        .then(res => {
            console.log(res)
            setEvent(res.data[0])
        })
        .catch((err) => {
            console.log(err);
		});
		
		console.log('event', event)
		console.log('guest list', event.guests)

		// const username = localStorage.getItem('username')
		// const newGuestList = event.guests.concat(`, ${username}`)

		setEvent({
			...event,
			guests: newGuestList
		})
		
		console.log('checking event', event)

		axiosWithAuth()
		.put(`/events/${userID}`, event)
		.then(res => {
			console.log(res)

		})
		.catch(err => {
			console.log(err)
		})
	}
	return (
		<>
			<Header />
			<h2>join an event</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='id'
					className='joinUrl'
					placeholder='event id'
					value={userID}
					onChange={onChange}
				/>
				<button>join</button>
			</form>
		</>
	);
};

export default JoinEvent;
