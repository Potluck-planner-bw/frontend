import React from 'react'


const Profile = props => {
    return (
        <div className='dashboard'>
        {/* <div className='dashboard-column'>
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
        </div> */}
    </div>
    )
}

export default Profile