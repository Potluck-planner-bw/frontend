import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';
import Item from '../Item';
import Header from './Header';

const EventPage = (props) => {
	const [userInfo, setUserInfo] = useState([]);
	const params = useParams();
	const { push } = useHistory();
	const [event, setEvent] = useState([]);
	const [itemList, setItemList] = useState([]);
	const [guestList, setGuestList] = useState([]);
	const [yesList, setYesList] = useState([]);
	const [noList, setNoList] = useState([]);
    const [editingItem, setEditingItem] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false)

	const getUserInfo = () => {
		axiosWithAuth()
			.get(`/users/${localStorage.getItem('userID')}`)
			.then((res) => {
				console.log(res);
				setUserInfo(res.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchEvent = (id) => {
		axiosWithAuth()
			.get(`/events/${id}`)
			.then((res) => {
				console.log(res);
				setEvent(res.data[0]);
				setItemList(res.data[0].items.split(', '));
				setGuestList(res.data[0].guests.split(', '));
				console.log(params.id);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getUserInfo();
		fetchEvent(params.id);
	}, []);

	useEffect(() => {}, [yesList, noList]);

	const deleteHandler = () => {
		axiosWithAuth()
			.delete(`/events/${event.id}`)
			.then((res) => {
				console.log(res);
				push(`/dashboard/${localStorage.getItem('userID')}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(e);
	};

	const radioHandler = (e) => {
		console.log(e);
		if (e.target.value === 'yes' && !yesList.includes(userInfo.username)) {
			let newYesList = yesList;
			newYesList.push(userInfo.username);
			setYesList(newYesList);
		} else if (e.target.value === 'no' && !noList.includes(userInfo.username)) {
			let newNoList = noList;
			newNoList.push(userInfo.username);
			setNoList(newNoList);
		} else {
			return null;
		}
	};

	const onChangeHandler = (value, key) => {
		console.log(itemList);
		const newItems = itemList.map((item, index) => {
			if (index === key) {
				item = value;
			}
			return item;
		});
		setItemList(newItems);
		setEvent({
			...event,
			items: itemList.join(', '),
		});
	};

	const updateItems = () => {
		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const yesClicked = () => {
		console.log('yes clicked');
		console.log('event', event);
		console.log('userInfo', userInfo);
		if (event.yesList.includes(userInfo.username)) {
			// if yesList includes username do nothing
		} else if (!event.yesList.includes(userInfo.username)) {
			// if yesList does not include username, add username to yesList
			let yesArray = [];
			if (yesArray.length === 0) {
				yesArray.push(userInfo.username);
				yesArray.join('');
			} else {
				// yesArray = event.yesList.split(', ')
				yesArray.push(userInfo.username);
				yesArray.join(', ');
			}
			setEvent({
				...event,
				// yesList: event.yesList + `, ${userInfo.username}`,
				yesList: event.yesList + ', ' + yesArray,
			});
		}
		if (event.noList.includes(userInfo.username)) {
            // if noList includes username, remove username from noList
            let noArray = [];
			if (noArray.length === 0) {
				noArray.push(userInfo.username);
				noArray.join('');
			} else {
				// noArray = event.yesList.split(', ')
				noArray.push(userInfo.username);
				noArray.join(', ');
			}
			setEvent({
                ...event,
                noList: noArray
				// noList: event.noList.replace(`${userInfo.username}, `, ''),
				// noList: '
			});
		}

		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getUserInfo();
	}, [event]);

	const noClicked = () => {
		console.log('no clicked');
		// if noList includes username do nothing
		// if noList does not include username, add username to noList
        // if yesList includes username, remove username from yesList
        if (event.noList.includes(userInfo.username)) {
		} else if (!event.noList.includes(userInfo.username)) {
			let noArray = [];
			if (noArray.length === 0) {
				noArray.push(userInfo.username);
				noArray.join('');
			} else {
				// noArray = event.yesList.split(', ')
				noArray.push(userInfo.username);
				noArray.join(', ');
			}
			setEvent({
				...event,
				// yesList: event.yesList + `, ${userInfo.username}`,
				noList: event.noList + ', ' + noArray,
			});
		}
		if (event.yesList.includes(userInfo.username)) {
            let yesArray = []
            if (event.yesList.length === 1) {
                yesArray = event.yesList.split('')
            } else {

            }
			setEvent({
                ...event,
                yesList: yesArray
				// noList: event.noList.replace(`${userInfo.username}, `, ''),
				// noList: '
			});
		}
		axiosWithAuth()
			.put(`/events/${event.id}`, event)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
    };
    
    const removeButtons = e => {
        setButtonClicked(true)
    }

	return (
		<div className='event-page'>
			<Header />
			<div className='event-page-column'>
				<div>
					<h2>{event.event_name}</h2>
					<h3>
						{event.dates} @ {event.time}
					</h3>
					<p>{event.address}</p>
					<p>{event.description}</p>
				</div>
				<div>
					<h3>Items</h3>
					<p>
						Add your name to each item you would like to bring then push the
						update items button. Make sure to type the last letter of your name
						twice so it does not get cut off!
					</p>
					{itemList.map((item, index) => {
						return (
							<div>
								<input
									type='text'
									id={index}
									value={item}
									onChange={(e) => {
										onChangeHandler(e.target.value, index);
									}}
								/>
							</div>
						);
					})}
					<button onClick={updateItems}>Update Items</button>
				</div>
			</div>
			<div className='event-page-column'>
				<h3>Guests</h3>
				<ul>
					{guestList.map((item) => {
						return <li key={item.id}>{item}</li>;
					})}
				</ul>
				{event.users_id == localStorage.getItem('userID') && (
					<button
						onClick={() => {
							push(`/edit-event/${event.id}`);
						}}
					>
						Edit
					</button>
				)}
				{event.users_id == localStorage.getItem('userID') && (
					<button onClick={deleteHandler}>Delete Event</button>
				)}
			</div>
			<h2>Going?</h2>
            <div onDoubleClick={removeButtons} className={buttonClicked ? `removeButtons` : '' }>
                <button onClick={yesClicked}>yes</button>
                <button onClick={noClicked}>no</button>
            </div>

			<h3>invited</h3>
			{guestList.map((item) => {
				return <p key={item.id}>{item}</p>;
			})}
			<h3>yes</h3>
            <p>{event.yesList}</p>
            {/* {event.yesList.split(', ').length > 1 ? event.yesList.split(', ').map(item => {
                return <p>{item}</p>
            }) : 
            event.yesList.split('').map(item => {
                return <p>{item}</p>
            })
            } */}
			<h3>no</h3>
            <p>{event.noList}</p>
            {/* {event.noList.split(', ').map(item => {
                return <p>{item}</p>
            })} */}
		</div>
	);
};

export default EventPage;

{
	/* <form onSubmit={submitHandler}>
				<label>
					Yes
					<input
						type='radio'
						id='yes'
						name='isGoing'
						value='yes'
						onChange={radioHandler}
					/>
				</label>
				<label>
					No
					<input
						type='radio'
						id='no'
						name='isGoing'
						value='no'
						onChange={radioHandler}
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>

			<div className='column-names'>
				<div className='yes-column'>
					<p>Yes</p>
					<ul>
						{yesList.map((guest, index) => {
							return <li key={index}>{guest}</li>;
						})}
					</ul>
				</div>
				<div>
					<p>No</p>
					<ul className='no-column'>
						{noList.map((guest, index) => {
							return <li key={index}>{guest}</li>;
						})}
					</ul>
				</div>
			</div> */
}
