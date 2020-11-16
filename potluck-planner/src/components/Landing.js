import React from 'react';
import Header from './Header';
import SocialIcons from './SocialIcons';
import '../styles/Landing.css';

const Landing = () => {
	return (
		<>
			<Header />
			<h2>
				plan your events with &#123;evnt&#125;. the best way to make sure
				everyone, and everything, gets to where it needs to.
			</h2>
			<SocialIcons />
		</>
	);
};

export default Landing;
