import React, {useState, useEffect} from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'


const JoinEvent = () => {
	const [userID, setUserID] = useState('')
	const [event, setEvent] = useState([])
	const { push } = useHistory()

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
			let guestList = res.data[0].guests
			guestList += `, ${localStorage.getItem('username')}`
			console.log('guest list', guestList)
			setEvent({
				...event,
				guests: guestList
			})
        })
        .catch((err) => {
            console.log(err);
		});

		axiosWithAuth()
		.put(`/events/${userID}`, event)
		.then(res => {
			console.log(res)
			push(`/dashboard/${localStorage.getItem('userID')}`)
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
