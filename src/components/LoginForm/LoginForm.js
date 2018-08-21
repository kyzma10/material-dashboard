import React from "react";
import Button from "@material-ui/core/Button";
import { Field, reduxForm, reset } from "redux-form";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email"></label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
          margin="normal" />
      </div>

      <div>
        <label htmlFor="password"></label>
        <Field name="password" component="input" type="password" placeholder="Password"/>
      </div>
      <Button type="submit" variant="contained" color="secondary" className={"secondary"}>
        Login in
      </Button>
    </form>
  )
}

const afterSubmit = (result, dispatch) => dispatch(reset("login"));

LoginForm = reduxForm({
  form: "login",
  onSubmitSuccess: afterSubmit
})(LoginForm);

export default LoginForm