import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Profile from './Profile'
import AllBooks from './books/AllBooks'
import MyBooks from './books/MyBooks'
import NewBook from './books/NewBook'
import BookItem from './books/BookItem'
import UserDetails from './users/UserDetails'
import SentRequests from './books/SentRequests'
import ReceivedRequests from './books/ReceivedRequests'


class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
   
  }
  renderContent() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return(
    
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/books" component={AllBooks} />
        <PrivateRoute path="/book/:id" component={BookItem} />
        <PrivateRoute exact path="/mybooks" component={MyBooks} />
        <PrivateRoute exact path="/mybooks/new" component={NewBook} />
        <PrivateRoute path="/sent" component={SentRequests} />
        <PrivateRoute path="/received" component={ReceivedRequests} />
        <PrivateRoute path="/users/:id" component={UserDetails} />
      </div>
    </BrowserRouter>
 

    )
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps, actions)(App)
