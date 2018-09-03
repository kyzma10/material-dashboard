import React, { Component } from "react";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
// import LoginContainers from "../../containers/LoginContainer/LoginContainers";
import Card from "@material-ui/core/Card";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

import {connect} from 'react-redux';
import { verifyEmail } from "../../actions/authActions";
import VerifyForm from "../../components/VerifyForm/VerifyForm";

class EmailVerify extends Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values);
    this.props.verifyEmail(values)
  };

  render() {
    const { codeVerify, userEmail } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Email Verification to finish registration</h4>
                <p>Please confirm email address</p>
              </CardHeader>
              <CardBody>
                <VerifyForm
                  codeVerify={codeVerify}
                  userEmail={userEmail}
                  onSubmit={this.submit} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  codeVerify: state.auth.codeVerify,
  userEmail: state.auth.userEmail
});

const mapDispatchToProps = dispatch => ({
  verifyEmail: value => dispatch(verifyEmail(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerify);
