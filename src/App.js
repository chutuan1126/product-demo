import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';
import axios from 'axios';

const getProducts = () =>
  axios.get('/product/')
    .then((response) => response.data)
    .catch((error) => {
      // handle error
      console.log(error);
    })

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      isLogged: false
    }
  }

  componentWillMount() {
    var { dispatch } = this.props;
    if (this.state.data === null) {
      getProducts().then((response) => {
        dispatch({ type: 'getProduct', getDataInDatabase: response });
      })
    }
  }

  login() {
    this.setState({
      isLogged: true
    })
  }

  logout() {
    this.setState({
      isLogged: false
    })
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Router>
        {
          isLogged === false && (<Redirect to='/login/' />)
        }
        <Register login={this.login.bind(this)} />
        {
          isLogged === true && <Navigation />
        }
      </Router>
    );
  }
}

export default connect()(App);