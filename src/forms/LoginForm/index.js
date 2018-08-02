import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import Group from '../formFields';

const LoginForm = (props) => {
  const { handleSubmit, ...otherProps } = props;

  const formFieldsObject = {
    email: {
      type: 'textInput',
      placeholder: 'placeholderEmail',
    },
    password: {
      type: 'textInput',
      secureTextEntry: true,
      placeholder: 'placeholderPassword',
    },
  };

  const formFields = [
    pick(formFieldsObject, 'email', 'password'),
  ];

  return (
    <form onSubmit={handleSubmit} className="form login-form">
      {formFields.map((formField) => (
        <Group
          fieldsObject={formField}
          key={formField}
          {...otherProps}
        />
      ))}
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  );
};

LoginForm.defaultProps = {
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const form = reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LoginForm);

export default form;
