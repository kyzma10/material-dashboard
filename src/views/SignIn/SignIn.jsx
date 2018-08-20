import React from "react";

import Button from "@material-ui/core/Button";

import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";

const SignIn = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={8} md={8}>
          <div>
            <h2>Sign into Home Expense App</h2>
            <h5>Please enter your email and password</h5>
            <form>
              <input type="email" placeholder="Email address"/>
              <input type="password" placeholder="Password"/>
              <Button variant="contained" color="secondary" className={"secondary"}>
                Secondary
              </Button>
            </form>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SignIn;
