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

class SignUp extends Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values);
  };

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
            <Card plain={"false"} >
              <CardHeader color="primary" plain={true} >
                <h2>Sign into Home Expense App</h2>
                <h5>Please enter your email and password</h5>
              </CardHeader>
              <CardBody>
                <SignUpForm onSubmit={this.submit} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default SignUp;
