// @flow

import React, { useState } from 'react';
import type { Node } from 'react';
import PropTypes from 'prop-types';

import { Preview, PreviewPassword } from '@icons';

import * as S from './styles';

type Props = {
  disabled: boolean,
  placeholder: string,
  label: string,
  children: Node,
};

function PasswordInput(props: Props) {
  const { disabled, placeholder, label, children } = props;
  const [type, setType] = useState('password');

  const showHide = () => {
    let inputType = '';
    if (type === 'text') {
      inputType = 'password';
    } else {
      inputType = 'text';
    }
    return inputType;
  };

  return (
    <S.PasswordWrapper>
      <S.Label className="control-label">
        {label}
        {children}
      </S.Label>
      <S.PasswordInput
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
      <S.PasswordButton type={type} onClick={() => setType(showHide)}>
        {type === 'password' && <Preview />}
        {type === 'text' && <PreviewPassword />}
      </S.PasswordButton>
    </S.PasswordWrapper>
  );
}

PasswordInput.propTypes = {
  /** true - Disables the control / false- enables the control */
  disabled: PropTypes.bool,
  /**  Changes the tect displayed when no option is selected */
  placeholder: PropTypes.string,
};

PasswordInput.defaultProps = {
  disabled: false,
  placeholder: '',
};

export default PasswordInput;
