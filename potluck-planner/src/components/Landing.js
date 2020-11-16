import React from 'react';
import Header from './Header';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

const Landing = () => {
	return (
		<>
			<Header />
			<h2>
				plan your events with &#123;evnt&#125;. the best way to make sure
				everyone, and everything, gets to where it needs to.
			</h2>
			<div>
				<FiTwitter />
				<FiInstagram />
				<FiFacebook />
			</div>
		</>
	);
};

export default Landing;
