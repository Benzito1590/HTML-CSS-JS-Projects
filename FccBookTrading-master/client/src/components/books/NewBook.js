import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Input, Icon } from "react-materialize"
import { reduxForm, Field } from 'redux-form'
import { addBook } from '../../actions/index'

const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (

  <div>
    <label>{label}</label>

    <Input {...input} type={type} placeholder={label} style={{ marginBottom: "15px", marginRight: "15px" }}{...custom} validate />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
)

class NewBook extends Component {
  onSubmit = (book) => {
    this.props.addBook(this.props.auth._id, book)
    this.props.history.push('/mybooks');
  }
  render() {
    const { handleSubmit } = this.props

    return (
      <div className="container">
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Row>
            <Field
              name="title"
              type="text"
              component={renderField}
              label="Book Title"
              s={12}

            >
              <Icon>title</Icon>
            </Field>
            <Field
              name="pic"
              type="text"
              component={renderField}
              label="Cover image "
              s={12}
            >
              <Icon>image</Icon>
            </Field>
            <Field
              name="description"
              type="text"
              component={renderField}
              label="Description"
              s={12}
            >
              <Icon>description</Icon>
            </Field>
          </Row>

          <div>
            <button className="btn waves-effect waves-light" type="submit" ><i className="material-icons right">done</i>Add</button>

          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = (dispatch) => ({
  addBook: (id,book) => dispatch(addBook(id,book))
});
NewBook = connect(mapStateToProps, mapDispatchToProps)(NewBook)
export default reduxForm({
  form: 'bookForm',
})(NewBook)
