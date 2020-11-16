import React from 'react'

const Guest = props => {
    const {guest} = props

    const addFood = () => {

    }

    return (
        <div onClick={addFood}>
            <p>{guest}</p>
            <input 
                type='text'
                name='food-item'
                placeholder='food'
            />
        </div>
    )
}

export default Guest