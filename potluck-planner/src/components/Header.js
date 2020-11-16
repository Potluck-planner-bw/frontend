import React from 'react';
import '../styles/Header.css';

const Header = () => {
	return (
		<header>
			<a href='/'>
				<h1>&#123;evnt&#125;</h1>
			</a>
			<nav>
				<a href='/'>home</a>
				<a href='/'>about</a>
				<a href='/'>log in</a>
				<a href='/' className='signup-btn'>
					sign up
				</a>
			</nav>
		</header>
	);
};

export default Header;
