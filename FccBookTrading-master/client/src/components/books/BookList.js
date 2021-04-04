import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['title']

class BookList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  componentDidMount() {
      this.props.fetchBooks()
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
  renderBooks() {
    const filteredBooks = this.props.books.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
  
    return filteredBooks.reverse().map((book, index) => {
      
      return (
        
        <div className="col s4" key={book._id}>
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={book.pic} style={{height:300,width:411}} alt={book.title}/>
        </div>
        <div className="card-content center">
          <span style={{  whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "400px"}}
             className="card-title activator grey-text text-darken-4">
             {book.title}
             </span>
          <Link className="btn" to={`/book/${book._id}`}><i className="material-icons">details</i>More Infos</Link>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{book.title}<i className="material-icons right">close</i></span>
          <p>{book.description}</p>
        </div>
        </div>
        </div>
  
      )
    })
  }
  render() {
    return (

      <div style={{marginLeft:200}}>
      <SearchInput className="search-input" onChange={this.searchUpdated} />
       
        <div className="row" >
        
        <FlipMove maintainContainerHeight={true} duration={750} easing="cubic-bezier(1, 0, 0, 1)">
          {this.renderBooks()}
          </FlipMove>
         
          </div>
       


      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.book,user:state.user}
}

export default connect(mapStateToProps, actions)(BookList)
