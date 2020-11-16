import React, { useState } from 'react';
import '../styles/Header.css';

const initialValue = false;

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(initialValue);
	return (
		<header>
			<a href='/'>
				<h1>&#123;evnt&#125;</h1>
			</a>

			{isLoggedIn ? (
				<nav>
					<a href='/' className='bordered-btn'>
						create event
					</a>
					<a href='/' className='bordered-btn'>
						join event
					</a>
					<a href='/' className='bordered-btn'>
						log out
					</a>
				</nav>
			) : (
				<nav>
					<a href='/'>home</a>
					<a href='/'>about</a>
					<a href='/'>log in</a>
					<a href='/' className='bordered-btn'>
						sign up
					</a>
				</nav>
			)}
		</header>
	);
};

export default Header;
