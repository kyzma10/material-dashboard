import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
/*import { reduxForm } from "redux-form";*/
import { auth } from "../../actions/authActions";
// import {Redirect} from "react-router-dom";
// import routes from "../../utils/routes";

class LoginContainers extends Component {

  handleSubmit = values => {
    this.props.auth(values);
  };

  render() {
    // const {isLoged} = this.props;
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />
        {/*{isLoged ? <Redirect from={routes.login} to={routes.dashboard} /> : null}*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoged: state.auth.isLoged
});

const mapDispatchToProps = dispatch => ({
  auth: val => dispatch(auth(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainers);