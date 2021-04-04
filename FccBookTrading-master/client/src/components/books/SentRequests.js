import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import FlipMove from 'react-flip-move'

class SentRequest extends Component {
  componentDidMount() {
    this.props.fetchSentTrade()
  }
  renderSentTrades(){
    if (this.props.trade) {
      return this.props.trade.map((trade,index)=>{
        return (
          <li className="collection-item avatar" key={trade._id}>
          <i className="material-icons circle green">compare_arrows</i>
          <span className="title">#{index+1}</span>
          <p><strong>Exchange Book :</strong> {trade.sender.bookTitle}</p>
        <p><strong>Requested Book :</strong> {trade.receiver.bookTitle}</p>
        {trade.status==='Accepted'?
        <p style={{"textColor":"red"}}><Link to={`/users/${trade.receiver._user}`}>View Book Owner details</Link></p>:
        
        <p>You will be able to see the book owner details once he accepets your request</p>
      
      }
          <p><strong>Status : </strong> {trade.status}</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      )
      })
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row">

          <div className="col s12" id="1"  style={{marginLeft:120}}>
            <h3>Sent Requests</h3>
            <ul className="collection">
            <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
              {this.renderSentTrades()}
              </FlipMove>
            </ul>
          </div>
    </div>
  
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { trade:state.sentTrade}
}


export default connect(mapStateToProps, actions)(SentRequest)