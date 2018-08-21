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
    <div>
      <Card plain={"false"} >
        <CardHeader color="primary" plain={true} >
          <h2>Sign into Home Expense App</h2>
          <h5>Please enter your email and password</h5>
        </CardHeader>
        <CardBody>
          <LoginContainers />
          {/*<form>
            <input type="email" placeholder="Email address"/>
            <input type="password" placeholder="Password"/>
            <Button variant="contained" color="secondary" className={"secondary"}>
              Secondary
            </Button>
          </form>*/}
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomLogined;
