import React from 'react'

const Card = ({firstname, lastname, email, imageUrl}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt=""/>
            <div>
                <p>{firstname} {lastname}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
