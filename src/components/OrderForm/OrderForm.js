import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import RenderField from "../RenderField/RenderField";
import Button from "@material-ui/core/Button";

let OrderForm = (props) => {
  const { handleSubmit, valid } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="category">Category</label>
        <Field
          name="category"
          component={RenderField}
          type="select"
          placeholder="Category"
          margin="normal"
          label="Category"
        />
      </div>

      <div>
        <label htmlFor="description"></label>
        <Field
          name="description"
          component={RenderField}
          type="text"
          placeholder="Description"/>
      </div>

      <div>
        <label htmlFor="total"></label>
        <Field
          name="total"
          component={RenderField}
          type="text"
          placeholder="Value"/>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className="secondary"
        disabled={!valid}>
        ADD EXPENSES
      </Button>
    </form>
  )
};

const afterSubmit = (result, dispatch) => dispatch(reset("order"));

OrderForm = reduxForm({
  form: "order",
  onSubmitSuccess: afterSubmit,
})(OrderForm);

export default OrderForm;
