import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import { Dropdown,NavItem,Button } from "react-materialize"
import FlipMove from 'react-flip-move'


class ReceivedRequest extends Component {
  componentDidMount() {
    this.props.fetchReceivedTrade()
  }
  submitChoice(id,choice){
   this.props.tradeChoice(id,choice)
   this.props.fetchReceivedTrade()
  }
  renderReceivedTrades(){
    if (this.props.trade) {
      return this.props.trade.map((trade,index)=>{
        return (
          <li className="collection-item avatar" key={trade._id}>
          <i className="material-icons circle green">compare_arrows</i>
          <span className="title">#{index+1}</span>
          <p><strong>Exchange Book :</strong> {trade.sender.bookTitle}</p>
        <p><strong>Requested Book :</strong> {trade.receiver.bookTitle}</p>
        <p><Link to={`/users/${trade.sender._user}`}>View Book Owner Details</Link></p>

          
          <p><strong>Status : </strong>{trade.status}</p>
          {trade.status==='Pending'?
          <Dropdown trigger={
            <Button  className="secondary-content">Choice</Button>
          }
         
          >
          <NavItem onClick={
            ()=>{this.submitChoice(trade._id,{"answer":"Accepted"})}
          }>Accept</NavItem>
          <NavItem onClick={
            ()=>{this.submitChoice(trade._id,{"answer":"Rejected"})}
          }
          
          >Decline</NavItem>
        </Dropdown>
        
        :<p></p>
      
      }

     
        </li>
      )
      })
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row">

          <div className="col s12" id="1" style={{marginLeft:120}}>
            <h3>Received Requests</h3>
            <ul className="collection">
            <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
              {this.renderReceivedTrades()}
              </FlipMove>
            </ul>
          </div>
    </div>
  
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { trade:state.receivedTrade}
}


export default connect(mapStateToProps, actions)(ReceivedRequest)