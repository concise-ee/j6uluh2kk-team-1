import React from 'react'

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <h2>Is it hell yet? {christmas.isItChristmasYet ? 'Yep yep' : 'Nope'}</h2></div>
    )
}