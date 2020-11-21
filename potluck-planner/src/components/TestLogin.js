import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

import Header from './Header';

const initialCredentials = {
	id: '',
	username: '',
	password: '',
};

const initialUsers = [];

const TestLogin = () => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState(initialCredentials);
	const [users, setUsers] = useState(initialUsers);
	// console.log('credentials', credentials);

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post(`/auth/login`, {
				username: credentials.username,
				password: credentials.password,
			})
			.then((res) => {
				console.log('login post res', res);
				console.log('res.data.token', res.data.token);
				localStorage.setItem('token', res.data.token);

				const userID = users.filter((user) => {
					return user.username === credentials.username;
				});

				localStorage.setItem('userID', JSON.stringify(userID[0].id));
				localStorage.setItem('username', userID[0].username);

				push(`/dashboard/${userID[0].id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getUserInfo = () => {
		axiosWithAuth()
			.get('/users')
			.then((res) => {
				console.log(res);
				setUsers(res.data);
				// })
			});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit}>
				<h2>log in</h2>
				<input
					type='text'
					name='username'
					placeholder='test username'
					value={credentials.username}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					placeholder='test password'
					value={credentials.password}
					onChange={handleChange}
				/>
				<button>login</button>
			</form>
			{/* <style jsx>{`
				form {
					border: 1px solid red;
				}
			`}</style> */}
		</>
	);
};

export default TestLogin;
