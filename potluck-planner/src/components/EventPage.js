import React, { useContext, useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

// components
import { UserContext } from '../App';

const EventPage = (props) => {
	// const {userInfo, setUserInfo} = props
	// const [user, setUser] = useState(null)

	// food state
	const [food, setFood] = useState('');

	const params = useParams();
	const { push } = useHistory();

	// API context
	const user = useContext(UserContext);
	const [userInfo, setUserInfo] = useState(user);
	const [event, setEvent] = useState(null);

	const fetchEvent = (id) => {
		axiosWithAuth()
			.get(`/events/${id}`)
			.then((res) => {
				console.log(res);
				setEvent(res.data);
			})
			.catch((err) => {
				console.log(err);
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

	return (
		<div className='event-page'>
			<h2 className='event-page-title'>{event.event_name}</h2>
			<div className='event-page-column'>
				<div>
					<h3>
						{event_time}, {event_dates}
					</h3>
					<p>{event_address}</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.{' '}
					</p>
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
				<label>
					Yes
					<input type='radio' id='yes' name='isGoing' value='yes' />
				</label>
				<label>
					No
					<input type='radio' id='no' name='isGoing' value='no' />
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
	);
};

export default EventPage;
