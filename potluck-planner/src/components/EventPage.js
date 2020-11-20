import React, { useContext, useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

// components
import Header from './Header';

const EventPage = (props) => {
	const [food, setFood] = useState('');

	const params = useParams();
	const { push } = useHistory();

	const [event, setEvent] = useState('');

	const fetchEvent = (id) => {
		axiosWithAuth()
			.get(`/events/${id}`)
			.then((res) => {
				setEvent(res.data[0]);
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	};

	useEffect(() => {
		fetchEvent(params.id);
	}, []);

	const changeHandler = (e) => {
		setFood(e.target.value);
	};

	const addFood = (e) => {
		e.preventDefault();
	};

	const addGuestToYesList = () => {
		if (event.guests.includes(localStorage.getItem('username'))) {
			setEvent({
				...event,
				guests: event.guests.replace(localStorage.getItem('username'), ''),
			});
		}
		if (event.yesList > 0) {
			if (!event.yesList.includes(localStorage.getItem('username'))) {
				setEvent({
					...event,
					yesList: event.yesList + ', ' + localStorage.getItem('username'),
				});
			}
		} else {
			setEvent({
				...event,
				yesList: event.yesList + ', ' + localStorage.getItem('username'),
			});
		}
		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const addGuestToNoList = () => {
		if (event.guests.includes(localStorage.getItem('username'))) {
			setEvent({
				...event,
				guests: event.guests.replace(localStorage.getItem('username'), ''),
			});
		}
		if (event.noList > 0) {
			if (!event.noList.includes(localStorage.getItem('username'))) {
				setEvent({
					...event,
					noList: event.noList + ', ' + localStorage.getItem('username'),
				});
			}
		} else {
			setEvent({
				...event,
				noList: event.noList + ', ' + localStorage.getItem('username'),
			});
		}

		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	// const addGuestToList = (e) => {
	// 	axiosWithAuth()
	// 		.put(`/events/${event.id}`, {
	// 			...event,
	// 			[e.target.name]:
	// 				event['e.target.name'] + ', ' + localStorage.getItem('username'),
	// 		})
	// 		.then((res) => {
	// 			// console.log(res);
	// 			console.log('yesList', event.yesList);
	// 			console.log('noList', event.noList);
	// 			// yesPeople = event.yesList.split(' ');
	// 			// console.log(yesPeople);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	return (
		<div className='event-page'>
			<Header />
			<h2 className='event-page-title'>{}</h2>
			<div className='event-page-column'>
				<div>
					{console.log('event', event)}
					<h2>{event.event_name}</h2>
					<p>{event.dates}</p>
					<p>{event.time}</p>
					<p>{event.description}</p>
				</div>
				<div>
					<form onSubmit={addFood}>
						<input
							name='food'
							type='text'
							placeholder='enter food'
							onChange={changeHandler}
						/>
						<button>add new item</button>
					</form>
					<ul>
						{/* map out foods here from state; currently these are placeholders */}
						{}
						<li>Food 1</li>
						<li>Food 2</li>
						<li>Food 3</li>
					</ul>
				</div>
			</div>
			<div className='event-page-column'>
				<h2>Going?</h2>
				<button onClick={addGuestToYesList} name='yesList'>
					yes
				</button>
				<button onClick={addGuestToNoList} name='noList'>
					no
				</button>
				{/* <label>
					Yes
					<input type='radio' id='yes' name='isGoing' value='yes' />
				</label> */}
				{/* <label>
					No
					<input type='radio' id='no' name='isGoing' value='no' />
				</label> */}
				<div className='column-names'>
					<div>
						<p>invited</p>
						<p>{event.guests}</p>
					</div>
					<div>
						<p>Yes</p>
						<p>{event.yesList}</p>
					</div>
					<div>
						<p>No</p>
						<p>{event.noList}</p>
					</div>
				</div>
				<button>Delete Event</button>
			</div>
		</div>
	);
};

// export default EventPage;
// import React, { useEffect, useState } from 'react'
// import axiosWithAuth from '../utils/axiosWithAuth'
// import { useHistory, useParams } from "react-router-dom";

// const EventPage = props => {
//     const [userInfo, setUserInfo] = useState([])
//     const params = useParams()
//     const { push } = useHistory()
//     const [event, setEvent] = useState([])
//     const [itemList, setItemList] = useState([])
//     const [guestList, setGuestList] = useState([])
//     const [yesList, setYesList] = useState([])
//     const [noList, setNoList] = useState([])

//     const getUserInfo = () => {
//         axiosWithAuth()
//         .get(`/users/${localStorage.getItem('userID')}`)
//         .then(res => {
//             console.log(res)
//             setUserInfo(res.data[0])
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     const fetchEvent = (id) => {
//         axiosWithAuth()
//         .get(`/events/${id}`)
//             .then(res => {
//                 console.log(res)
//                 setEvent(res.data[0])
//                 setItemList(res.data[0].items.split(', '))
//                 setGuestList(res.data[0].guests.split(', '))
//                 console.log(params.id)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         getUserInfo()
//         fetchEvent(params.id)
//     }, [])

//     useEffect(() => {

//     }, [yesList, noList])

//     const deleteHandler = () => {
//         axiosWithAuth()
//         .delete(`/events/${event.id}`)
//         .then(res => {
//             console.log(res)
//             push(`/dashboard/${localStorage.getItem('userID')}`)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     const submitHandler = (e) => {
//         e.preventDefault()
//         console.log(e)

//     }

//     const radioHandler = (e) => {
//         console.log(e)
//         if (e.target.value === 'yes' && !yesList.includes(userInfo.username)) {
//             let newYesList = yesList
//             newYesList.push(userInfo.username)
//             setYesList(newYesList)

//         } else if (e.target.value === 'no' && !noList.includes(userInfo.username)) {
//             let newNoList = noList
//             newNoList.push(userInfo.username)
//             setNoList(newNoList)
//         } else {
//             return null
//         }
//     }

//     return (
//         <div className='event-page'>
//             <div className='event-page-column'>
//                 <div>
//                     <h2>{event.event_name}</h2>
//                     <h3>{event.dates} @ {event.time}</h3>
//                     <p>{event.address}</p>
//                     <p>{event.description}</p>
//                 </div>
//                 <div>
//                 <h3>Items</h3>
//                     <ul>
//                     {itemList.map(item => {
//                         return <li key={item.id}>{item}</li>
//                     })}
//                     </ul>
//                 </div>
//             </div>
//             <div className='event-page-column'>
//                 <h3>Guests</h3>
//                 <ul>
//                 {guestList.map(item => {
//                         return <li key={item.id}>{item}</li>
//                     })}
//                 </ul>
//                 {event.users_id == localStorage.getItem('userID') && <button onClick={() => {push(`/edit-event/${event.id}`)}}>Edit</button>}
//                 {event.users_id == localStorage.getItem('userID') && <button onClick={deleteHandler}>Delete Event</button>}
//             </div>
//             <h3>Going?</h3>
//             <form onSubmit={submitHandler}>
//                 <label>Yes
//                 <input
//                     type='radio'
//                     id='yes'
//                     name='isGoing'
//                     value='yes'
//                     onChange={radioHandler}
//                     />
//                 </label>
//                 <label>No
//                 <input
//                     type='radio'
//                     id='no'
//                     name='isGoing'
//                     value='no'
//                     onChange={radioHandler}
//                     />
//                 </label>
//                 <button type='submit'>Submit</button>
//             </form>

//                 <div className='column-names'>
//                 <div className='yes-column'>
//                     <p>Yes</p>
//                     <ul>
//                     {yesList.map((guest, index) => {
//                         return <li key={index}>{guest}</li>
//                     })}
//                     </ul>
//                 </div>
//                 <div>
//                 <p>No</p>
//                 <ul className='no-column'>
//                 {noList.map((guest, index) => {
//                         return <li key={index}>{guest}</li>
//                     })}
//                 </ul>
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default EventPage
