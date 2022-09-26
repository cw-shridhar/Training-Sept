import React, { useEffect, useState, useRef } from 'react'
import Card from './Card'
import { getProducts } from '../redux/action/productAction'
import { connect } from "react-redux";
import './card.css'

let totalPage = 2;

function Cardview({ getProducts, product: { products, loading } }) {
    const [pageNum, setPageNum] = useState(1);
    const [lastEle, setLastEle] = useState(null);
    console.log('data : ', products);
    const observer = useRef(
        new IntersectionObserver((entries) => {
            // console.log(entries);
            // console.log();
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNum(pageNum + 1 );
            }
        })
    )

    useEffect(() => {
        getProducts(pageNum)
    }, [getProducts, pageNum])

    useEffect(() => {
        const currentElement = lastEle;
        const currentObserver = observer.current;
        // console.log('Current observer', currentObserver);
        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [lastEle])

    // useEffect(() => {
    //     getProducts();
    // }, [getProducts]);
    // console.log(products);


    // let cards;
    // if(products === null){
    //     cards = <div>loading...</div>
    // }
    // else{
    //     cards = products.map((card)=><Card 
    //         key={card.id}
    //         firstname={card.first_name}
    //         lastname={card.last_name}
    //         email={card.email}
    //         imageUrl={card.avatar}
    //     />)
    // }
    // return (
    //     <div>
    //         {cards}
    //     </div>
    // )

    return (
        <div>
            <div className='all-cards'>
                {products.length > 0 && products.map((card, i) => {
                    return i + 1 === products.length && !loading &&
                        pageNum <= totalPage ? (
                            <div
                                key={`${card.first_name}-${i}`}
                                ref={setLastEle}
                            >
                                <Card key={card.id}
                                    firstname={card.first_name}
                                    lastname={card.last_name}
                                    email={card.email}
                                    imageUrl={card.avatar}
                                />
                            </div>
                        )
                        :
                        (
                            <Card key={`${card.first_name}-${i}`}
                                firstname={card.first_name}
                                lastname={card.last_name}
                                email={card.email}
                                imageUrl={card.avatar}
                            />
                        )
                })}
            </div>
            {loading && <p>loading...</p>}
        </div>
    )
}
const mapStateToProps = (state) => ({
    product: state.product,
});

export default connect(mapStateToProps, { getProducts })(
    Cardview
);
