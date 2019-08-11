import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './services.css';

class Services extends Component {
    render() {
        if (this.props.products.length) {
            return (
                <div className='container card-products'>
                    {
                        this.props.products.map((product, key) => {
                            return (
                                <div className="card" key={key} style={{ width: '16rem' }}>
                                    <Link to={`/services/${product.proName.split(' ').join('-')}-${product._id}.html`}>
                                        <img src={product.avatar} className="card-img-top" alt={product.proName} />
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/services/${product.proName.split(' ').join('-')}-${product._id}.html`}>
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

const mapStateToProps = (state, ownProps) => {
    return {
      products: state.product
    }
  }
  
  export default connect(mapStateToProps)(Services);