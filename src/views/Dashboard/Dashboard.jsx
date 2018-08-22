import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
/*import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";*/
/*import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";*/
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
/*import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";*/
// import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { bugs, website, server } from "variables/general";

/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";*/

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  /*state = {
    value: 0
  };*/

  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /*handleChange = (event, value) => {
    this.setState({ value });
  };*/

  /*handleChangeIndex = index => {
    this.setState({ value: index });
  };*/

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>New expenses</h4>
                <p className={classes.cardCategoryWhite}>
                  Please enter new expenses data here
                </p>
              </CardHeader>
              <CardBody>
                <form className={classes.root} autoComplete="off">
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-helper">Category</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={<Input name="age" id="age-helper" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                  />
                  <TextField
                    id="uah"
                    label="Value"
                    placeholder="UAH"
                    className={classes.textField}
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className="secondary"
                    >
                    ADD EXPENSES
                  </Button>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Latest Expenses</h4>
                <p className={classes.cardCategoryWhite}>
                  Here latest 20 expenses
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Date", "Category", "Express", "Value UAH"]}
                  tableData={[
                    ["11.08", "Category1", "Express1", "22.18"],
                    ["12.05", "Category2", "", "27.16"],
                    ["13.03", "Category3", "Express2", "28.19"],
                    ["14.06", "Category4", "Express3", "55.17"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
