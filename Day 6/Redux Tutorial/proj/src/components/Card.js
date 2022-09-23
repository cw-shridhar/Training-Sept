import react from 'react'
import './card.css'
function Card({carName, carImageUrl, carPrice, carLocation, carA}){
    return (
        <div className="card">
            <img src={carImageUrl} alt=""/>
            <h2 id="title">{carName}</h2>
            <div className="card-info">
                <p>Price : {carPrice}</p>
                <p>Location: {carLocation}</p>
                <p>{carA}</p>
            </div>
        </div>
    )
}

export default Card