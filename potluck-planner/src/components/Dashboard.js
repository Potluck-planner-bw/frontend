import React, {useContext} from 'react'

import {UserContext} from '../App'

const Dashboard = () => {
    const user = useContext(UserContext)

    return (
        <div>
        Hello again {user.username}
        </div>
    )
}

export default Dashboard