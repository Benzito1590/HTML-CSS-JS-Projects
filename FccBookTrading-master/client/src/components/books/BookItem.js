import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Modal, Button, Row, Input } from "react-materialize"
import * as actions from '../../actions'

const renderField = ({ input, label, type, ...custom }) => (
  <div>
    <Input {...input} type={type} style={{ marginBottom: "15px", marginRight: "15px" }}{...custom} />
  </div>
)


class BookItem extends Component {
  componentDidMount() {
    this.props.book ? this.props.userProfile(this.props.book._user) : ""
  }
  renderOptions() {
    if (this.props.books && this.props.auth) {
      const filtered = this.props.books.filter((book) => {
        if (book._user === this.props.auth._id) {
          return true
        }
      })
      return filtered.map((book) => {
        return <option value={book.title} key={book._id}>{book.title}</option>
      })
    }
  }

  renderBook() {


    const { handleSubmit } = this.props
    if (this.props.book && this.props.user) {

      return (
        <div className="center">
          <h2>{this.props.book.title}</h2>
          <img src={this.props.book.pic} alt={this.props.book.title} />
          <p><strong>Description</strong> : {this.props.book.description}</p>
          <h4>Owner informations : </h4>
          <p>Country : {this.props.user.address.country}</p>
          <p>State: {this.props.user.address.state}</p>
          <p>City : {this.props.user.address.city}</p>
       

          {this.props.book._user!==this.props.auth._id?
            <Modal
            header='New Trade Request'
            trigger={<Button>Trade</Button>}
            actions={
              <div className="modal-footer">
                <button type="submit" className="modal-close waves-effect waves-green btn-flat"
                  onClick={handleSubmit((value) => {
                    const values = {
                      "senderID": this.props.auth._id,
                      "senderBookTitle": value,
                      "receiverID": this.props.book._user,
                      "receiverBookTitle": this.props.book.title
                    }
                    this.props.sendTradeRequest(values)
                    this.props.fetchReceivedTrade()
                    this.props.history.push('/sent')
                  })}

                >Confirm</button>
                <a className="modal-close waves-effect waves-green btn-flat right">Cancel</a>
              </div>
            }
          >
            <p>Select a book to trade with :</p>
            <form>
              <Row>
                <Field
                  name="bookTitle"
                  type="select"
                  component={renderField}
                  label="Book Title"
                  s={12}
                >
                  <option value="" disabled selected>Choose your option</option>

                  {this.renderOptions()}

                </Field>
              </Row>
            </form>
          </Modal>
          :
          ""
          }
          
        </div>
      )
    }
  }
  render() {
    return (
      <div className="container">
        {this.renderBook()}

      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return { book: state.book.find((book) => book._id === props.match.params.id), user: state.user, books: state.book, auth: state.auth }
}

BookItem = connect(mapStateToProps, actions)(BookItem)

export default reduxForm({
  form: 'tradeForm'
})(BookItem)