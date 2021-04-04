import React, { Component } from "react"
import { connect } from "react-redux"
import { Link,NavLink } from "react-router-dom"
import { Dropdown,NavItem,Button } from "react-materialize"
import * as actions from '../actions'
class Header extends Component {
  componentDidMount() {
    this.props.fetchReceivedTrade()
  }
  renderContent() {
    let notification=0
    if (this.props.receivedTrade &&this.props.auth) {
      this.props.receivedTrade.forEach(element => {
       if (element.status==='Pending' && element.receiver._user===this.props.auth._id) {
         notification++
         return notification
       } 
      });
     
      
    }

    switch (this.props.auth) {
      case null:
        return
      case false:
        return [
            <li key="1" >
            
            <Dropdown trigger={
                <Button>Login</Button>
              }>
              <NavItem href="/auth/google">Google</NavItem>
              <NavItem href="/auth/twitter">Twitter</NavItem>
              <NavItem href="/auth/github">Github</NavItem>
            </Dropdown>
          </li>
        ]
      default:
        return [
            <ul style={{"width":"280px", "marginTop":"65px"}} className="side-nav fixed" key="1">

         <li><NavLink to="/books" ><i className="material-icons">done_all</i>All Books</NavLink></li>
         <li><NavLink to="/mybooks" ><i className="material-icons">done</i>My Books</NavLink></li>
         <li><NavLink to="/mybooks/new" ><i className="material-icons">add</i>Add Book</NavLink></li>
         <li><NavLink to="/sent" ><i className="material-icons">arrow_upward</i>Sent requests</NavLink><span className="new badge" style={{marginRight:"10px"}}>{notification}</span></li>
         <li><NavLink to="/received" ><i className="material-icons">arrow_downward</i>Received requests</NavLink></li>
         <li><NavLink to="/profile" ><i className="material-icons">account_circle</i>Profile</NavLink></li>
         <li><a href="/api/logout" ><i className="material-icons">do_not_disturb</i>Logout</a></li>
        </ul>  
    ]

       
        
    }
  }
  render() {
    return (
        <div>
        <header>
        <nav className="top-nav  blue-grey darken-1">
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? "/books" : "/"}
            className="left brand-logo"
            
          >
            Book Trading
          </Link>
          <ul className='right'> {this.renderContent()}</ul>
          </div>
          
        </nav>
  </header>
</div>
    )
  }
}

function mapStateToProps({ auth,receivedTrade }) {
  return { auth,receivedTrade }
}

export default connect(mapStateToProps,actions)(Header)

