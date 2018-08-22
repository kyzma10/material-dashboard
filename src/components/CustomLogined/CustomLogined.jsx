import React from "react";
/*import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";*/
import Card from "@material-ui/core/Card";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody";
/*import Button from "@material-ui/core/Button";
import CustomInput from "../CustomInput/CustomInput.jsx";*/
import LoginContainers from "../../containers/LoginForm/LoginContainers";

const CustomLogined = () => {
  return (
      <Card>
        <CardHeader color="primary" >
          <h4>Sign into Home Expense App</h4>
          <p>Please enter your email and password</p>
        </CardHeader>
        <CardBody>
            <LoginContainers />
        </CardBody>
      </Card>
  );
};

export default CustomLogined;
