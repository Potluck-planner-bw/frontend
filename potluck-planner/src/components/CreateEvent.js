import React, {useState} from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';
import axiosWithAuth from '../utils/axiosWithAuth'
import {useParams} from 'react-router-dom'


const initialValues = {
	event_name: '',
	time: '',
	address: '',
	dates: '',
	guests: '',
	users_id: ''
}

const CreateEvent = () => {
	const [values, setValues] = useState(initialValues)
	const params = useParams()


	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newEvent = {
			event_name: values.event_name,
			time: values.time,
			address: values.address,
			dates: values.dates,
			guests: values.guests,
			users_id: params.id
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
				console.log(res)
			})
			.catch(err => {
				console.log(err);
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
					<input type='date' name='dates' className='eventDate' onChange={handleChange} />
					<span>@</span>
					<input type='time' name='time' className='eventTime' onChange={handleChange} />
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
				{/* <input
					type='text'
					name='description'
					className='eventDescription'
					placeholder='description'
					onChange={handleChange}
				/> */}
				<input
					type='text'
					name='guests'
					className='eventDescription'
					placeholder='enter guest usernames with a comma (,) between each (i.e Jake,TJ,Cory)'
					onChange={handleChange}
				/>			
				<button className='form-bordered-btn'>create event</button>
			</form>
		</>
	);
};

export default CreateEvent;
