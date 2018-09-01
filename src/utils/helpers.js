export const signValidate = (values) => {
  const errors = {};

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
  if (!values.confirm_password) {
    errors.confirm_password = 'Required'
  } else if (values.confirm_password.length > 12) {
    errors.confirm_password = 'Sorry, your password to long'
  } else if (values.password.length < 4) {
    errors.password = 'Sorry, your password to short'
  }
  if (values.password !== values.confirm_password) {
    errors.confirm_password = 'Your password dies not match'
  }
  return errors
};

export const loginValidate = values => {
  const errors = {};

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
};

export const verifyValidate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.verify_code) {
    errors.verify_code = 'Required'
  }
  return errors
};