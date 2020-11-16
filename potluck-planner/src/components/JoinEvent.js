import React from 'react';
import Header from './Header';
import '../styles/CreateEvent.css';

const JoinEvent = () => {
	return (
		<>
			<Header />
			<h2>join an event</h2>
			<form>
				<input
					type='text'
					name='joinUrl'
					className='joinUrl'
					placeholder='url'
				/>
				<button>join</button>
			</form>
		</>
	);
};

export default JoinEvent;
