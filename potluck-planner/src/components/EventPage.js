import React, { useContext } from 'react'

// components
import {UserContext} from '../App'

const EventPage = props => {
    const user = useContext(UserContext)

    return (
        <div>
            <h2>Surprise Party</h2>
            <div>
            <div>
                <h3>8/21/21 @ 8:30pm</h3>
                <p>Address here</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div>
                <button>+ add new item</button>
                <ul>
                    <li>Food 1</li>
                    <li>Food 2</li>
                    <li>Food 3</li>
                </ul>
            </div>
            </div>
            <div>
                <h2>Going?</h2>
                <label>Yes
                    <input type='radio'/>
                </label>
                <label>No
                    <input type='radio'/>
                </label>
                <div>Yes
                    <ul>
                        <li>Alden</li>
                        <li>Tj</li>
                        <li>Jake</li>
                        <li>Cody</li>
                    </ul>
                    No
                    <ul>
                        <li>John</li>
                        <li>Tom</li>
                        <li>Dan</li>
                        <li>Jessie</li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default EventPage