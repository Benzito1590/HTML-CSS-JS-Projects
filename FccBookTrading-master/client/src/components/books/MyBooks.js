import React, { Component } from 'react'
import {connect} from 'react-redux'
import FlipMove from 'react-flip-move'
import { Modal, Button } from "react-materialize"
import * as actions from '../../actions'
import moment from 'moment'

class MyBooks extends Component {
componentDidMount() {
  this.props.fetchMyBooks()
}
renderBook() {

  return this.props.books.reverse().map((book, index) => {
    
    return (
      <li className="collection-item avatar" key={book._id}>
      <img src={book.pic} alt="" className="circle"/>
      <span className="title">{book.title}</span>
      <Modal
      header='Are you sure you wish to delete this book?'
      trigger={<Button className="secondary-content btn"><i className="material-icons">delete</i></Button>}
      actions={
        <div className="modal-footer">
        <a onClick={()=>{
          this.props.deleteBook(book._id)
          this.props.fetchMyBooks()
        }} className="modal-close waves-effect waves-green btn-flat">Confirm</a>
        <a className="modal-close waves-effect waves-green btn-flat right">Cancel</a>
      </div>
    }
    >
    </Modal>
    <p>{book.added?moment(book.added).format("dddd, MMMM  YYYY"):""}</p>
    </li>
    

    )
  })
}
  render() {
    return (
      <div className="container">
      <ul className="collection" style={{marginLeft:200}}>
      <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
        {this.renderBook()}
        </FlipMove>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.book,user:state.user}
}


export default connect(mapStateToProps, actions)(MyBooks)
