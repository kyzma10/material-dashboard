import React from "react";
import Button from "@material-ui/core/Button";
import { Field, reduxForm, reset } from "redux-form";

const renderField = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning }
                     }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 12) {
    errors.password = 'Sorry, your password to long'
  } else if (values.password.length < 4) {
    errors.password = 'Sorry, your password to short'
  }
  return errors
}

let LoginForm = props => {
  const { handleSubmit, valid } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email"></label>
        <Field
          name="email"
          component={renderField}
          type="email"
          placeholder="Email"
          margin="normal" />
      </div>

      <div>
        <label htmlFor="password"></label>
        <Field name="password" component={renderField} type="password" placeholder="Password"/>
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
}

const afterSubmit = (result, dispatch) => dispatch(reset("login"));

LoginForm = reduxForm({
  form: "login",
  onSubmitSuccess: afterSubmit,
  validate
})(LoginForm);

export default LoginForm