import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TableRow from "@material-ui/core/TableRow";

const style = {
  backgroundColor: "#00acc1",
  padding: "10px 30px",
  margin: "0 3px",
  color: "white"
};

const styleWarn = {
  backgroundColor: "#ff9800",
  padding: "10px 30px",
  margin: "0 3px",
  color: "white"
};

const OrderListItem = ({ category, id, moveUp, moveDown, removeElem }) => {
  return (
    <TableRow>
      <TableCell>{category}</TableCell>
      <TableCell>
        <Button variant="contained" style={style} onClick={() => moveUp(id)}>
          <Icon>arrow_upward</Icon>
        </Button>
        <Button variant="contained" style={style} onClick={() => moveDown(id)}>
          <Icon>arrow_downward</Icon>
        </Button>
        <Button variant="contained" style={styleWarn} onClick={() => removeElem(id)}>
          <Icon>cancel</Icon>
        </Button>
        <Button variant="contained" style={style}>
          <Icon>*</Icon>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderListItem;
