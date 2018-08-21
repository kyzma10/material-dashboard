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
          {/*<SearchForm />*/}
          <CustomLogined />
          {/*<CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />*/}
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SignIn;
