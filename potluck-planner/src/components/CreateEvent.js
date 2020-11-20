import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link, useHistory, useParams } from 'react-router-dom';

const initialValues = {
	event_name: '',
	time: '',
	address: '',
	dates: '',
	guests: '',
	description: '',
	items: '',
	created: '',
	users_id: '',
};

// this object worked for TJ in postman
// {
// 	"event_name": "Thanksgiving Food Drive 2021",
// 	"time": "10:00am",
// 	"address": "Phoenix, Arizona",
// 	"dates": "11-20-20",
// 	"guests": "TJ, Alden, Jake, Cory",
// 	"description": "The safest way to celebrate Thanksgiving this year is to celebrate with people in your household.",
// 	"created": 1,
// 	"users_id": 2
// }

const CreateEvent = (props) => {
	const [values, setValues] = useState(initialValues);
	const [userID, setUserID] = useState(null);
	const { push } = useHistory();

	useEffect(() => {
		setUserID(localStorage.getItem('userID'));
		console.log(userID);
	}, []);

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newEvent = {

			"event_name": values.event_name,
			"time": values.time,
			"address": values.address,
			"dates": values.dates,
			"guests": values.guests,
			'items': values.foods,
			"description": values.description,
			"created": 1,
			"users_id": userID
		}

		axiosWithAuth()
			.post(`/events`, newEvent)
			.then((res) => {
				// console.log('login post res', res);
				// console.log('res.data.token', res.data.token);
				// localStorage.setItem('token', res.data.token);

				// const userID = users.filter(user => {
				// 	return user.username === credentials.username
				// })

				// push(`/dashboard/${userID[0].id}`);
				console.log(res);
				push(`/dashboard/${localStorage.getItem('userID')}`);
			})
			.catch((err) => {
				console.log(err);
				console.log(newEvent);
			});
	};

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='event_name'
					className='eventTitle'
					placeholder='event title'
					onChange={handleChange}
				/>
				<div>
					<input
						type='date'
						name='dates'
						className='eventDate'
						onChange={handleChange}
					/>
					<span>@</span>
					<input
						type='time'
						name='time'
						className='eventTime'
						onChange={handleChange}
					/>
				</div>

				<input
					type='text'
					name='address'
					className='eventStreetAddress'
					placeholder='street address'
					onChange={handleChange}
				/>
				{/* <div>
					<input
						type='text'
						name='city'
						className='eventCity'
						placeholder='city'
						onChange={handleChange}
					/>
					<input
						type='text'
						name='state'
						className='eventState'
						placeholder='state'
						onChange={handleChange}
					/>
					<input
						type='text'
						name='zip'
						className='eventZip'
						placeholder='zip'
						onChange={handleChange}
					/>
				</div> */}
				<input
					type='text'
					name='description'
					className='eventDescription'
					placeholder='description'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='guests'
					className='eventDescription'
					placeholder='enter guest usernames with a comma and space (, ) between each (i.e Jake, TJ, Cory)'
					onChange={handleChange}
				/>
				<input
					type='text'
					name='foods'
					className='eventDescription'
					placeholder='enter foods with a comma and space (, ) between each food (i.e chip, dressing, steak)'
					onChange={handleChange}
				/>
				<button className='form-bordered-btn'>create event</button>
				<Link
					to={`/dashboard/${localStorage.getItem('userID')}`}
					className='form-bordered-btn'
				>
					cancel
				</Link>
			</form>
		</>
	);
};

export default CreateEvent;
