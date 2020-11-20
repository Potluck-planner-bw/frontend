import React, { useContext, useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

// components
import Header from './Header';

const EventPage = (props) => {
	const [food, setFood] = useState('');

	const params = useParams();
	const { push } = useHistory();

	const [event, setEvent] = useState('');

	const fetchEvent = (id) => {
		axiosWithAuth()
			.get(`/events/${id}`)
			.then((res) => {
				setEvent(res.data[0]);
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	};

	useEffect(() => {
		fetchEvent(params.id);
	}, []);

	const changeHandler = (e) => {
		setFood(e.target.value);
	};

	const addFood = (e) => {
		e.preventDefault();
	};

	const addGuestToYesList = () => {
		if (event.guests.includes(localStorage.getItem('username'))) {
			setEvent({
				...event,
				guests: event.guests.replace(localStorage.getItem('username'), ''),
			});
		}
		if (event.yesList > 0) {
			if (!event.yesList.includes(localStorage.getItem('username'))) {
				setEvent({
					...event,
					yesList: event.yesList + ', ' + localStorage.getItem('username'),
				});
			}
		} else {
			setEvent({
				...event,
				yesList: event.yesList + ', ' + localStorage.getItem('username'),
			});
		}
		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const addGuestToNoList = () => {
		if (event.guests.includes(localStorage.getItem('username'))) {
			setEvent({
				...event,
				guests: event.guests.replace(localStorage.getItem('username'), ''),
			});
		}
		if (event.noList > 0) {
			if (!event.noList.includes(localStorage.getItem('username'))) {
				setEvent({
					...event,
					noList: event.noList + ', ' + localStorage.getItem('username'),
				});
			}
		} else {
			setEvent({
				...event,
				noList: event.noList + ', ' + localStorage.getItem('username'),
			});
		}

		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	// const addGuestToList = (e) => {
	// 	axiosWithAuth()
	// 		.put(`/events/${event.id}`, {
	// 			...event,
	// 			[e.target.name]:
	// 				event['e.target.name'] + ', ' + localStorage.getItem('username'),
	// 		})
	// 		.then((res) => {
	// 			// console.log(res);
	// 			console.log('yesList', event.yesList);
	// 			console.log('noList', event.noList);
	// 			// yesPeople = event.yesList.split(' ');
	// 			// console.log(yesPeople);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	return (
		<div className='event-page'>
			<Header />
			<h2 className='event-page-title'>{}</h2>
			<div className='event-page-column'>
				<div>
					{console.log('event', event)}
					<h2>{event.event_name}</h2>
					<p>{event.dates}</p>
					<p>{event.time}</p>
					<p>{event.description}</p>
				</div>
				<div>
					<form onSubmit={addFood}>
						<input
							name='food'
							type='text'
							placeholder='enter food'
							onChange={changeHandler}
						/>
						<button>add new item</button>
					</form>
					<ul>
						{/* map out foods here from state; currently these are placeholders */}
						{}
						<li>Food 1</li>
						<li>Food 2</li>
						<li>Food 3</li>
					</ul>
				</div>
			</div>
			<div className='event-page-column'>
				<h2>Going?</h2>
				<button onClick={addGuestToYesList} name='yesList'>
					yes
				</button>
				<button onClick={addGuestToNoList} name='noList'>
					no
				</button>
				{/* <label>
					Yes
					<input type='radio' id='yes' name='isGoing' value='yes' />
				</label> */}
				{/* <label>
					No
					<input type='radio' id='no' name='isGoing' value='no' />
				</label> */}
				<div className='column-names'>
					<div>
						<p>invited</p>
						<p>{event.guests}</p>
					</div>
					<div>
						<p>Yes</p>
						<p>{event.yesList}</p>
					</div>
					<div>
						<p>No</p>
						<p>{event.noList}</p>
					</div>
				</div>
				<button>Delete Event</button>
			</div>
		</div>
	);
};

export default EventPage;
