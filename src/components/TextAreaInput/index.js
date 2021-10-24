// @flow

import React, { useState } from 'react';
import type { Node } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

type Props = {
  disabled: boolean,
  readOnly: boolean,
  className: string,
  placeholder: string,
  value: string,
  label?: string,
  children?: Node,
};

function TextareaInput(props: Props) {
  const {
    disabled,
    readOnly,
    className,
    placeholder,
    value,
    label,
    children,
  } = props;
  const [val, setVal] = useState(value);

  return (
    <S.TextareaWrapper>
      <S.Label className="control-label">
        {label}
        {children}
      </S.Label>
      <S.TextareaInput
        disabled={disabled}
        readOnly={readOnly}
        className={className}
        placeholder={placeholder}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    </S.TextareaWrapper>
  );
}
TextareaInput.propTypes = {
  /** true - Disables the control / false- enables the control */
  disabled: PropTypes.bool,
  /** User cannot edit the input in read only mode */
  readOnly: PropTypes.bool,
  /** Define element's class name */
  className: PropTypes.string,
  /**  Changes the tect displayed when no option is selected */
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextareaInput.defaultProps = {
  disabled: false,
  readOnly: false,
  className: '',
  placeholder: '',
  value: '',
};
export default TextareaInput;
