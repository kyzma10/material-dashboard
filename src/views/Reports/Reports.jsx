import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const style = {
  backgroundColor: "#00acc1",
  padding: "10px 30px",
  margin: "0 3px",
  color: "white"
};

const stylePrim = {
  backgroundColor: "#9c27b0",
  margin: "0 3px",
  color: "white"
};

const stylePrimNotIcon = {
  backgroundColor: "#9c27b0",
  margin: "0 3px",
  padding: "10px 0",
  color: "white"
};

const Reports = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className=''>Expenses reports</h4>
              <p className=''>
                Here is some one expenses reports
              </p>
            </CardHeader>
            <CardBody>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Sun 14 jul 2018
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" style={stylePrim}>
                        <Icon>keyboard_arrow_left</Icon>
                      </Button>
                      <Button variant="contained" style={stylePrim}>
                        <Icon>keyboard_arrow_right</Icon>
                      </Button>
                      <Button variant="contained" style={stylePrimNotIcon}>
                        DAY
                      </Button>
                      <Button variant="contained" style={stylePrimNotIcon}>
                        WEEK
                      </Button>
                      <Button variant="contained" style={stylePrimNotIcon}>
                        MONTH
                      </Button>
                      <Button variant="contained" style={stylePrimNotIcon}>
                        PERIOD
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Category
                    </TableCell>
                    <TableCell>
                      Expenses value, UAH
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Categories</TableCell>
                    <TableCell>
                      <Button variant="contained" style={style}>
                        <Icon>arrow_upward</Icon>
                      </Button>
                      <Button variant="contained" style={style}>
                        <Icon>arrow_downward</Icon>
                      </Button>
                      <Button variant="contained" style={style}>
                        <Icon>cancel</Icon>
                      </Button>
                      <Button variant="contained" style={style}>
                        <Icon>*</Icon>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Reports;
