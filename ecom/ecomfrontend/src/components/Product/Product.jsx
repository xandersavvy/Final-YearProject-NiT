import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

function Product (props) {
    const { product } = props;

    return (
        <div className='card'>
            <Link to={`/product/${product._id}`}>
                <img className='medium' src={`https://via.placeholder.com/70x90.png?text=${product.name}`} alt='product' />
            </Link>
            <div className='card-body-1'>
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                {/* Rating component */}
                {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
                <div className='price'>${product.mrp}</div>
            </div>
        </div>
    );
}

export default Product;
