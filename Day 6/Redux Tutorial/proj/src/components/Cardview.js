import React, {useEffect} from 'react'
import Card from './Card.js'
import { getProducts } from '../redux/action/action.js'
import {connect} from 'react-redux'


export const Cardview = ({getProducts, product: {products, loading}})=>{
    console.log(products);
    useEffect(()=>{
        getProducts();
    }, [getProducts]);

    let cards;
    if(products === null || loading){
        cards = <div>loading...</div>
    }
    else{
        console.log(products);
        cards = products.map((card)=> <Card key={card.id} cardImg={card.avatar} email={card.email} firstName={card.first_name} lastName={card.last_name} />)
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
