import React from "react";
import Button from "@material-ui/core/Button";
import { Field, reduxForm, reset } from "redux-form";
import { signValidate } from "../../utils/helpers";
import RenderField from "../../components/RenderField/RenderField";

let SignUpForm = props => {
  const { handleSubmit, valid, error } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email"></label>
        <Field
          name="email"
          component={RenderField}
          type="email"
          placeholder="Email"
          label="Email"
          margin="normal" />
      </div>

      <div>
        <label htmlFor="password"></label>
        <Field
          name="password"
          component={RenderField}
          type="password"
          placeholder="Password"
          label="Password"/>
      </div>

      <div>
        <label htmlFor="confirm_password"></label>
        <Field
          name="confirm_password"
          component={RenderField}
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"/>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className="secondary"
        disabled={!valid}>
        Sign in
      </Button>
      {error ? <div>{error}</div> : null }
    </form>
  )
};

const afterSubmit = (result, dispatch) => dispatch(reset("signUp"));

SignUpForm = reduxForm({
  form: "signUp",
  onSubmitSuccess: afterSubmit,
  validate: signValidate
})(SignUpForm);

export default SignUpForm