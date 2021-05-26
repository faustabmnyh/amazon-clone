import React from 'react';
import { useStateValue } from '../../utils/StateProvider';
import "./Product.css";

function Product({id,title,image,price,rating,displayPrice}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                displayPrice: displayPrice,
                items: 1,
            }
        })
        
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <small>IDR</small>
                    <strong>{displayPrice}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                     ))}
                </div>
            </div>
            <img src={image} alt=""/>

                <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
