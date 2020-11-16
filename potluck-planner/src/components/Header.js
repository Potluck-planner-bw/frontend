import React from 'react';
import '../styles/header.css';

const Header = () => {
	return (
		<header>
			<h1>&#123;evnt&#125;</h1>
			<nav>
				<a>home</a>
				<a>about</a>
				<a>log in</a>
				<a>sign up</a>
			</nav>
		</header>
	);
};

export default Header;
