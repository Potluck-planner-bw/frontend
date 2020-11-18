import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

import Header from './Header';

const initialCredentials = {
	username: '',
	password: '',
};

const TestLogin = () => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState(initialCredentials);
	console.log('credentials', credentials);

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
				push(`/dashboard`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit}>
				<h2>test login</h2>
				<p>username: Test1</p>
				<p>password: password</p>
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
		</>
	);
};

export default TestLogin;
