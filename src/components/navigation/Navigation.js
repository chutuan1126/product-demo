import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './nav.css';
import Home from '../index/Home';
import About from '../about/About';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Product from '../product/Product';

class Navigation extends Component {
    Index() {
        return <Home />;
    }

    About() {
        return <About />;
    }

    Services() {
        return <Services />;
    }

    Portfolio() {
        return <Portfolio />;
    }

    Blog() {
        return <Blog />;
    }

    Contact() {
        return <Contact />;
    }

    Product({ match }) {
        let keyCode = match.params.id.split('-');
        let len = keyCode.length;
        keyCode = keyCode[len - 1].split('.')[0];

        return <Product keyCode={keyCode} />;
    }

    render() {
        return (
            <div className='navigation'>
                <nav>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <NavLink className='nav-link active' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='/about/'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='/services/'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='/portfolio/'>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='/blog/'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to='/contact/'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>

                <Route path='/' exact component={this.Index} />
                <Route path='/about/' component={this.About} />
                <Route exact path='/services/' component={this.Services} />
                <Route path='/portfolio/' component={this.Portfolio} />
                <Route path='/blog/' component={this.Blog} />
                <Route path='/contact/' component={this.Contact} />
                <Route exact path='/services/:id/' component={this.Product} />
            </div>
        );
    }
}

export default Navigation;