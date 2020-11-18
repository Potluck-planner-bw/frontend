import axiosWithAuth from '../utils/axiosWithAuth'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

// components
import Header from './Header';

// initial user state
const initialCredentials = {
	id: '',
	username: '',
	password: '',
};

const Dashboard = (props) => {
    const [userInfo, setUserInfo] = useState(initialCredentials);
    const params = useParams()
    
	const getUserInfo = () => {
		axiosWithAuth()
			.get(`/users/${params.id}/events`)
			.then(res => {
				console.log(res)
				setUserInfo(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
        getUserInfo()
    }, []);

    return (
        <>
        <Header />
        <div>Hello</div>
        </>
    )
}

export default Dashboard;
