/**
*
* TextInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    input,
  } = props;

  return (
    <input
      placeholder="placeholderText"
      defaultValue={input.value}
      onChange={input.onChange}
    />
  );
};

TextInput.defaultProps = {
  input: {
    value: false,
    onChange: () => null,
  },
};

TextInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
};

export default TextInput;
