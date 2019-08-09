import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from '../../util/products.json';
import './ser.css';

class Services extends Component {
    render() {
        if (db.product.length) {
            return (
                <div className='container card-products'>
                    {
                        db.product.map((product, key) => {
                            return (
                                <div className="card" key={key} style={{ width: '16rem' }}>
                                    <Link to={`/services/${product.proName.split(' ').join('-')}-${product.id}.html`}>
                                        <img src={product.avatar} className="card-img-top" alt={product.proName} />
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/services/${product.proName.split(' ').join('-')}-${product.id}.html`}>
                                            <h5 className="card-title">{product.proName}</h5>
                                        </Link>
                                        <h5 className="card-title">{product.proPrice}</h5>
                                        <div className='card-btn'>
                                            <Link to='/' className="btn btn-primary">Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Not thing here !</h2>
                </div>
            );
        }

    }
}

export default Services;