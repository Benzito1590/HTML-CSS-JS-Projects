import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Row, Input, Icon,Toast } from "react-materialize"
import { reduxForm, Field} from 'redux-form'
import validate from '../utils/validateProfileForm'
import { saveUser,fetchUser} from '../actions/index'
const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (

  <div>

    <Input {...input} type={type} placeholder={label} style={{ marginBottom: "15px",marginRight: "15px" }}{...custom} validate/>
    <div className="red-text"  style={{marginBottom:'20px'}}>
    {touched && error}
    </div>
    </div>
)

class Profile extends Component {

  componentDidMount() {
    
    this.handleInitialize();
  }
  handleInitialize() {
  
    let initData={}
    if (this.props.auth.address) {
      initData = {
        firstName:this.props.auth.firstName,
        lastName: this.props.auth.lastName,
        email: this.props.auth.email,
        phone: this.props.auth.phone,
        country: this.props.auth.address.country,
        state: this.props.auth.address.state,
        city: this.props.auth.address.city
        }
    }else {
      initData = {
        firstName:"",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        state:"",
        city: ""
        };
    }

  
    this.props.initialize(initData);
  }
  onSubmit = (profile) => {
    this.props.saveUser(this.props.auth._id,profile)
    setTimeout(() => {
      this.props.fetchUser()
    }, 2000)
  }

  renderButton(){
    if (this.props.auth) {
     switch (this.props.auth.firstLogin) {
       case null:
         return 
      case true:
      return (
        <Toast toast="Profile Saved!" className="btn waves-effect waves-light" type="submit" ><i className="material-icons right">done</i>Save</Toast>

      )
     
       default:
         return (
          <Toast toast="Profile Updated!" className="btn waves-effect waves-light" type="submit" ><i className="material-icons right">sync</i>Update</Toast>

         )
     }
  }
  }
  render() {
    
    const { handleSubmit } = this.props

    return (
      <div className="container">
        <h2>Profile</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Row>
            <Field
              name="firstName"
              type="text"
              component={renderField}
              label="First Name"
              s={12}
              
            >
              <Icon>account_circle</Icon>
            </Field>
            <Field
              name="lastName"
              type="text"
              component={renderField}
              label="Last Name"
              s={12}
            >
              <Icon>supervisor_account</Icon>
            </Field>
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
              s={12}
            >
              <Icon>email</Icon>
            </Field>
            <Field
              name="phone"
              type="tel"
              component={renderField}
              label="Phone"
              s={12}
            >
              <Icon>phone</Icon>
            </Field>
            <Field
              name="country"
              type="text"
              component={renderField}
              label="Country"
              s={12}
            />
            <Field
              name="state"
              type="text"
              component={renderField}
              label="State"
              s={12}
            />
            <Field
              name="city"
              type="text"
              component={renderField}
              label="City"
              s={12}
            />
          </Row>
          
          <div>

        {this.renderButton()}
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
  saveUser: (id,profile) => dispatch(saveUser(id,profile)),
  fetchUser:()=> dispatch(fetchUser()),
});
Profile=connect(mapStateToProps,mapDispatchToProps)(Profile)
export default reduxForm({
  form: 'profileForm',
  validate
})(Profile)
