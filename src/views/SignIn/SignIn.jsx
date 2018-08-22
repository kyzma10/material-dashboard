import React from "react";

/*import Button from "@material-ui/core/Button";*/

import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomLogined from "../../components/CustomLogined/CustomLogined.jsx";
/*import BugReport from "../../../node_modules/@material-ui/icons/BugReport";
import Code from "../../../node_modules/@material-ui/icons/Code";
import Cloud from "../../../node_modules/@material-ui/icons/Cloud";

import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";*/
// import { bugs, website, server } from "variables/general";

/*import SearchForm from "../../components/SearchForm/SeearchForm";*/

const SignIn = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={10} md={8}>
          <CustomLogined />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SignIn;
