import React, { Component } from 'react'
import {connect} from 'react-redux'
import { userProfile} from '../../actions/index'

 class UserDetails extends Component {
  componentDidMount() {
    this.props.userProfile(this.props.match.params.id)
  }

  renderUser(){
    if (this.props.user) {
     return (

      <div className="row">
      <div className="col s12">
        <div className="card blue-grey darken-1 center">
          <div className="card-content white-text">
            <span className="card-title">User Details</span>
            <p>{this.props.user.firstName} {this.props.user.lastName}</p>
            <p>Phone Number : {this.props.user.phone}</p>
            <p>Email: {this.props.user.email}</p>
            <p>Country : {this.props.user.address.country}</p>
            <p>State : {this.props.user.address.state}</p>
            <p>City : {this.props.user.address.city}</p>
          </div>
        </div>
      </div>
    </div>
    

     ) 

    }
      
  }
  render() {
    return (
      <div className="container" >
      {this.renderUser()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  userProfile: (id) => dispatch(userProfile(id)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)