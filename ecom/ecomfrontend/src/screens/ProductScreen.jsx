import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { detailsProduct } from '../actions/productActions';
import {BiArrowBack} from 'react-icons/bi';
import { GiPriceTag } from 'react-icons/gi';

function ProductScreen (props) {
    
    const dispatch = useDispatch();
    
    const productId = props.match.params.id;

    const [ qty, setQty ] = useState(1);

    const productDetails = useSelector(state => state.productDetails);
    
    const { product, loading, error } = productDetails;

    
    useEffect(() => {
        dispatch(detailsProduct(productId));
    
    }, [dispatch, productId]); 
   
    // direct to cart page when add to cart btn is clicked
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };


    return (
        <div>
            {
                loading ? <LoadingBox />
                    : error ? <MessageBox variant="danger"> { error } </MessageBox>
                        : (
                            <div>
                                {/* back to result link  */}
                                <Link to='/'> <BiArrowBack /></Link>

                                <div className='row top'>
                                    {/* product image */}
                                    <div className='col-2'>
                                        <img className='large' 
                                            src={`https://via.placeholder.com/64x64?text=${product.name}`} alt={product.name} />
                                    </div>
                                    <div className='col-1'>
                                        <ul>
                                            <li>
                                                <h1>{product.name}</h1>
                                            </li>
                                            <li>
                                                <Rating rating="5" numReviews="0" />
                                            </li>
                                            <li> <GiPriceTag/> ${product.mrp}</li>
                                            <li>
                                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia rem dolorum consequatur dolor dolorem fuga, provident id libero, doloremque laudantium officiis adipisci earum quaerat harum voluptatem ullam est vel possimus. </p>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* action */}
                                    <div className='col-1'>
                                        <div className='card card-body'>
                                            <ul>
                                                <li>
                                                    <div className='row'>
                                                        <div>Price </div>
                                                        <div className='price'>${product.mrp}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='row'>
                                                        <div>Status </div>
                                                        <div>
                                                            {
                                                                product.count > 0 ? <span className='success'> In Stock</span> :
                                                                    <span variant='danger'> Unavailable</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* Check product quantity first */}
                                                {
                                                    product.count > 0 && (
                                                        <>
                                                            <li>
                                                                <div className='row'>
                                                                    <div>Qty</div>
                                                                    <div>
                                                                        <select 
                                                                            value={qty} 
                                                                            onChange={(e) => setQty(e.target.value)}
                                                                        >
                                                                            {
                                                                                [...Array(product.count)].map((x, i) => (
                                                                                    <option key={i+1} value={i+1}>{i+1}</option>
                                                                                ))
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <button className='primary block'
                                                                    onClick={addToCartHandler}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
        </div>
    );
}

export default ProductScreen;
