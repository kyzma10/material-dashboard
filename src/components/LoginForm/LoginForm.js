import React from "react";
import Button from "@material-ui/core/Button";
import { Field, reduxForm, reset } from "redux-form";
import { loginValidate } from "../../utils/helpers";
import RenderField from "../../components/RenderField/RenderField";

let LoginForm = props => {
  const { handleSubmit, valid } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email">Enter yor email</label>
        <Field
          name="email"
          component={RenderField}
          type="email"
          placeholder="Email"
          margin="normal" />
      </div>

      <div>
        <label htmlFor="password">Enter password</label>
        <Field
          name="password"
          component={RenderField}
          type="password"
          placeholder="Password"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className="secondary"
        disabled={!valid}>
        Login in
      </Button>
    </form>
  )
};

const afterSubmit = (result, dispatch) => dispatch(reset("login"));

LoginForm = reduxForm({
  form: "login",
  onSubmitSuccess: afterSubmit,
  validate: loginValidate
})(LoginForm);

export default LoginForm