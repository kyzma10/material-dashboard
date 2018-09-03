import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { register } from "../../actions/authActions";
import { connect } from "react-redux";

class RegisterContainer extends Component {
  submit = (values) => {
    this.props.register(values);
  };

  render() {
    const { error } = this.props;
    return (
      <SignUpForm onSubmit={this.submit} error={error}/>
    );
  }
}

const mapStateToProps = state => ({
  isRegister: state.auth.isRegister,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  register: value => dispatch(register(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);