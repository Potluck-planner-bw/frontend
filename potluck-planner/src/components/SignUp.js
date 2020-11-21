import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Header from './Header';

// 🎒 Initial Values
const initialFormValues = {
	username: '',
	password: '',
};

const SignUp = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newUser = {
			username: formValues.username,
			password: formValues.password,
		};

		axiosWithAuth()
			.post('/auth/register', newUser)
			.then((res) => {
				console.log(res);
				alert(
					`Account successfully created: username: ${formValues.username}, password: ${formValues.password}`
				);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit}>
				<h2>sign up</h2>
				<input
					type='text'
					name='username'
					placeholder='test username'
					value={formValues.username}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					placeholder='test password'
					value={formValues.password}
					onChange={handleChange}
				/>
				<button>Create User</button>
			</form>
		</>
	);
};

export default SignUp;
