import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const initialValue = false;

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(initialValue);
	
	return (
		<header>
			<Link to='/'>
				<h1>&#123;evnt&#125;</h1>
			</Link>

			{isLoggedIn ? (
				<nav>
					<Link to='/create-event' className='bordered-btn'>
						create event
					</Link>
					<Link to='/join-event' className='bordered-btn'>
						join event
					</Link>
					<Link to='/' className='bordered-btn'>
						log out
					</Link>
				</nav>
			) : (
				<nav>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
					<Link to='/log-in'>log in</Link>
					<Link to='/sign-up' className='bordered-btn'>
						sign up
					</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
