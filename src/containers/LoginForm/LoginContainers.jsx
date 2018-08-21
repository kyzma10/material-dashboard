import React, { Component } from "react";
// import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
/*import { reduxForm } from "redux-form";
import { auth } from "../../actions/authActions";*/

class LoginContainers extends Component {

  submit = (values) => {
    // print the form values to the console
    console.log(values)
  };

  render() {
    return (
      <LoginForm onSubmit={this.submit} />
    );
  }
}

/*
const mapDispatchToProps = dispatch => ({
  auth: val => dispatch(auth(val))
});
*/

export default LoginContainers;