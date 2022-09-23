import React, {useEffect} from 'react'
import Card from './Card'
import {getProducts} from '../redux/action/productAction'
import { connect } from "react-redux";
import './card.css'
function Cardview({getProducts, product:{products}}){
    useEffect(() => {
        getProducts();
    }, [getProducts]);
    console.log(products);
    let cards;
    if(products === null){
        cards = <div>loading...</div>
    }
    else{
        cards = products.map((card)=><Card 
            key={card.id}
            firstname={card.first_name}
            lastname={card.last_name}
            email={card.email}
            imageUrl={card.avatar}
        />)
    }
    return (
        <div>
            {cards}
        </div>
    )
}
const mapStateToProps = (state) => ({
    product: state.product,
});

export default connect(mapStateToProps, { getProducts })(
    Cardview
);
