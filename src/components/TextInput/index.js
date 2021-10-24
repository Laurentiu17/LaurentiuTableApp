// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

type Props = {
  value?: string,
  disabled?: boolean,
  className: Object,
  readOnly?: boolean,
  placeholder?: string,
  onChange?: Function,
  name?: string,
  label?: string,
  children?: Node,
};

const TextInput = ({
  value,
  name,
  disabled,
  className,
  readOnly,
  placeholder,
  onChange,
  label,
  children,
}: Props) => {
  const [val, setVal] = useState(value);
  return (
    <S.InputWrapper>
      <S.Label className="control-label">
        {label}
        {children}
      </S.Label>
      <S.TextInput
        type="text"
        value={val}
        // value={value}
        name={name}
        disabled={disabled}
        className={className}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={e => setVal(e.target.value)}
        // onChange={onChange}
      />
    </S.InputWrapper>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  /** true - Disables the control / false- enables the control */
  disabled: PropTypes.bool,
  /** User cannot edit the input in read only mode */
  readOnly: PropTypes.bool,
  /**  Changes the tect displayed when no option is selected */
  placeholder: PropTypes.string,
  /**  Function called when the value is changed */
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  value: '',
  disabled: false,
  readOnly: false,
  placeholder: '',
  onChange: () => {},
};

export default TextInput;
