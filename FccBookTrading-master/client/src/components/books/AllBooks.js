import React, { Component } from 'react'
import BookList from './BookList'



export default class AllBooks extends Component {

  render() {
    return (
      <div className="container">
        <BookList {...this.props}/>
      </div>
    );
  }
}
