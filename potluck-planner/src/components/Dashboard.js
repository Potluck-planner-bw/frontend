import axiosWithAuth from '../utils/axiosWithAuth'
import React, {useEffect, useState, useParams} from 'react'

// components
import EventCard from './EventCard';
import Header from './Header';

// initial user state
const initialCredentials = {
	id: '',
	username: '',
	password: '',
};

const Dashboard = (props) => {
    const [userInfo, setUserInfo] = useState(initialCredentials);
    const params = useParams();

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
		getUserInfo();
    }, []);

    return (
        <>
        <Header />
        <div className='dashboard'>
            <div className='dashboard-column'>
                <h2>My Events</h2>
                {
                    userInfo.events.filter(event => {
                        return event.id === userInfo.id
                    }).map(item => {
                        return <EventCard key={item.title} event={item} /> 
                    })
                }
            </div>
            <div className='dashboard-column'>
                <h2>Joined Events</h2>
                {
                    userInfo.events.filter(event => {
                        return event.id !== userInfo.id
                    }).map(item => {
                        return <EventCard key={item.title} event={item} /> 
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Dashboard;
