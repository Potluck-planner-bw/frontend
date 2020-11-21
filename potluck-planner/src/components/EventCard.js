import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const EventCard = (props) => {
	const { event } = props;
	const [showInfo, setShowInfo] = useState(false);

	const toggleInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<div className='event-card'>
			<div>
				<h3>{event.event_name}</h3>
				<h4>
					{event.dates} @ {event.time}
				</h4>
				<p>{event.address}</p>
			</div>
			<div className={!showInfo ? 'event-info' : null}>
				<p>{event.location}</p>
				<p>{event.description}</p>
				<Link to={`/events/${event.id}`}>see people and details &gt;&gt;</Link>
			</div>
			<style jsx>{`
				.event-card {
					border: 3px solid #201b15;
					border-radius: 20px;
					padding: 2rem;
					margin: 2rem 0;
				}
			`}</style>
		</div>
	);
};

export default EventCard;
