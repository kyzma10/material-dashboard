import React from "react";
import Button from "@material-ui/core/Button";
import { Field, reduxForm, reset } from "redux-form";
import {verifyValidate} from "../../utils/helpers";
import RenderField from "../../components/RenderField/RenderField";

let VerifyForm = props => {
  const { handleSubmit, valid, codeVerify} = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email"></label>
        <Field
          name="email"
          component={RenderField}
          type="email"
          placeholder="enter verify email"
          margin="normal" />
      </div>

      <div>
        <label htmlFor="verify_code"></label>
        <Field
          name="confirm_code"
          component={RenderField}
          type="text"
          placeholder="enter verify code"/>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className="secondary"
        disabled={!valid}>
        Verify Email
      </Button>
      {codeVerify ? <div>Copy paste this code: {codeVerify}</div> : null}
    </form>
  )
};

const afterSubmit = (result, dispatch) => dispatch(reset("verify"));

VerifyForm = reduxForm({
  form: "verify",
  onSubmitSuccess: afterSubmit,
  validate: verifyValidate
})(VerifyForm);

export default VerifyForm