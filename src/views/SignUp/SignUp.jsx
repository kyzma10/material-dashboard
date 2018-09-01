import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
/*import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CustomLogined from "../../components/CustomLogined/CustomLogined";*/
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
// import LoginContainers from "../../containers/LoginForm/LoginContainers";
import Card from "@material-ui/core/Card";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
/*import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";*/

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { register } from "../../actions/authActions";
import routes from "../../utils/routes";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {isReg: false}
  }

  submit = (values) => {
    // print the form values to the console
    // console.log(values);
    this.props.register(values);
  };

  render() {
    const {isRegister, error} = this.props;
    console.log(error);
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Sign into Home Expense App</h4>
                <p>Please enter your email and password</p>
              </CardHeader>
              <CardBody>
                <SignUpForm onSubmit={this.submit} />
                {error ? <div>{error.message}</div> : null}
                {isRegister ? <Redirect from={routes.register} to={routes.verify}/> : null}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStaateToProps = state => ({
  isRegister: state.auth.isRegister,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  register: value => dispatch(register(value))
});

export default connect(mapStaateToProps, mapDispatchToProps)(SignUp);
