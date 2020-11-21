import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import '../styles/header.css';

const initialValue = false;

const Header = (props) => {
	const { userInfo } = props;

	const { push } = useHistory();

	console.log('token', localStorage.getItem('token'));

	const handleLogOut = () => {
		localStorage.removeItem('token');
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
				<style jsx>{`
					header {
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 5rem;
					}

					nav {
						display: flex;
						flex-flow: row nowrap;
						align-items: baseline;
					}
					nav a {
						margin-left: 2rem;
					}
					nav a:hover {
						/* color: red; */
						text-decoration: underline;
					}

					.bordered-btn {
						border: 2px solid;
						border-radius: 30px;
						padding: 0.5rem 1rem;
					}
					.bordered-btn:hover {
						background-color: #201b15;
						color: #f7dfdb;
						text-decoration: none;
					}
				`}</style>
			</header>
		);
	} else {
		return (
			<header>
				<Link to='/'>
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
				<style jsx>{`
					header {
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 5rem;
					}

					nav {
						display: flex;
						flex-flow: row nowrap;
						align-items: baseline;
					}
					nav a:hover {
						/* color: red; */
						text-decoration: underline;
					}

					.bordered-btn {
						border: 2px solid;
						border-radius: 30px;
						padding: 0.5rem 1rem;
						font-family: 'Rubik', sans-serif;
						font-size: 1.8rem;
						font-weight: 500;
						margin-left: 2rem;
						background: none;
					}
					.bordered-btn:hover {
						background-color: #201b15;
						color: #f7dfdb;
						text-decoration: none;
					}
				`}</style>
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
