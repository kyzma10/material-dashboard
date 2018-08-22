import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const Settings = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className=''>Edit category</h4>
              <p className=''>
                Please config your categories
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
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
};

export default Settings;
