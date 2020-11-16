import React from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';

const CreateEvent = () => {
	return (
		<>
			<Header />
			<form>
				<input
					type='text'
					name='eventTitle'
					className='eventTitle'
					placeholder='event title'
				/>
				<div>
					<input type='date' name='eventDate' className='eventDate' />
					<span>@</span>
					<input type='time' name='eventTime' className='eventTime' />
				</div>

				<input
					type='text'
					name='eventStreetAddress'
					className='eventStreetAddress'
					placeholder='street address'
				/>
				<div>
					<input
						type='text'
						name='eventCity'
						className='eventCity'
						placeholder='city'
					/>
					<input
						type='text'
						name='eventState'
						className='eventState'
						placeholder='state'
					/>
					<input
						type='text'
						name='eventZip'
						className='eventZip'
						placeholder='zip'
					/>
				</div>
				<input
					type='text'
					name='eventDescription'
					className='eventDescription'
					placeholder='description'
				/>
			</form>
			<button className='form-bordered-btn'>create event</button>
		</>
	);
};

export default CreateEvent;
