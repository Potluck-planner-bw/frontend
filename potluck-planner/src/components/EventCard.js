import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Guest from './Guest';

import '../styles/eventCard.css';

const EventCard = (props) => {
	const { event } = props;
	const [showInfo, setShowInfo] = useState(false);
	console.log('event', event);

	const toggleInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<div className='event-card'>
			<div className='event-info'>
				<h3>{event.event_name}</h3>
				<h4>{event.dates}</h4>
				<h4>{event.time}</h4>
				<p>{event.address}</p>
				<button onClick={toggleInfo}>Click to Expand</button>
			</div>
			<div className={!showInfo ? 'event-info' : null}>
				<p>{event.location}</p>
				<p>Description: {event.description}</p>
				<Link to={`/events/${event.id}`}>see people and details >></Link>
			</div>
		</div>
	);
};

export default EventCard;
