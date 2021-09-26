import React from 'react';
import './Details.css'

const Details = (props) => {

    const { name, img, Price, brand, engin, speed } = props.car || {};
    console.log(props.car)

    return (
        <div className="col-md-4 g-4">
            <div className="col">
                <div className="card">
                    <img src={img} style={{ 'height': '200px' }} alt="" />
                    <div className="card-body">
                        <h5 className="card-title"><small>Name: {name}</small></h5>
                        <p className="card-text"><small>Brand: {brand}</small></p>
                        <p className="card-text"><small>Engine: {engin}</small></p>
                        <p className="card-text"><small>Speed: {speed}</small></p>
                        <p className="card-text"><small>Price: {Price}</small></p>
                        <button onClick={() => props.handleAddCart(props.car)}
                            className='cart-btn'><i className="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;