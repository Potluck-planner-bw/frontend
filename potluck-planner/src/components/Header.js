import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const initialValue = false;

const Header = (props) => {
	const { userInfo } = props;

	const { push } = useHistory();

	console.log('token', localStorage.getItem('token'));

	const handleLogOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userID');
		localStorage.removeItem('username');
		push(`/`);
	};

	if (localStorage.getItem('token') === null) {
		return (
			<header>
				<Link to='/'>
					<h1>&#123;evnt&#125;</h1>
				</Link>
				<nav>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
					<Link to='/test-log-in'>log in</Link>
					<Link to='/sign-up' className='bordered-btn'>
						sign up
					</Link>
				</nav>
			</header>
		);
	} else {
		return (
			<header>
				<Link to={`/dashboard/${localStorage.getItem('userID')}`}>
					<h1>&#123;evnt&#125;</h1>
				</Link>
				<nav>
					<Link to={`/create-event`} className='bordered-btn'>
						create event
					</Link>
					<Link to='/join-event' className='bordered-btn'>
						join event
					</Link>
					{/* <Link to='/' className='bordered-btn'>
						log out
					</Link> */}
					<button onClick={handleLogOut} className='bordered-btn'>
						log out
					</button>
				</nav>
			</header>
		);
	}

	// {
	// 	return (
	// 		<header>
	// 			<Link to='/'>
	// 				<h1>&#123;evnt&#125;</h1>
	// 			</Link>
	// 			{isLoggedIn ? (
	// 				<nav>
	// 					<Link to='/create-event' className='bordered-btn'>
	// 						create event
	// 					</Link>
	// 					<Link to='/join-event' className='bordered-btn'>
	// 						join event
	// 					</Link>
	// 					<Link to='/' className='bordered-btn'>
	// 						log out
	// 					</Link>
	// 				</nav>
	// 			) : (
	// 				<nav>
	// 					<Link to='/'>home</Link>
	// 					<Link to='/about'>about</Link>
	// 					<Link to='/test-log-in'>log in</Link>
	// 					<Link to='/sign-up' className='bordered-btn'>
	// 						sign up
	// 					</Link>
	// 				</nav>
	// 			)}
	// 		</header>
	// 	);
	// }
};

export default Header;
