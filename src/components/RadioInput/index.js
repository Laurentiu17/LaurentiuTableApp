// @flow
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import * as S from './styles';

type Props = {
  value?: string | boolean | Object | number,
  disabled?: boolean,
  className: Object,
  checked?: boolean,
  name?: string,
  label?: string,
  onChange: Function,
};

const Radio = ({
  value,
  disabled,
  className,
  checked,
  name,
  label,
  onChange,
}: Props) => {
  let randomId = uuid.v4();
  const [val, setVal] = useState(checked);
  // console.log('checked', checked, disabled, name, randomId);
  return (
    <S.RadioWrapper>
      <S.RadioInput
        type="radio"
        id={randomId}
        name={name && name.length > 0 ? name : randomId}
        value={value}
        disabled={disabled}
        className={className}
        checked={val}
        onChange={e => {
          return setVal(e.target.checked);
        }}
      />
      <S.Label htmlFor={randomId}>{label}</S.Label>
      <S.Check checked={val}>
        <S.Inside />
      </S.Check>
    </S.RadioWrapper>
  );
};

Radio.propTypes = {
  value: PropTypes.any,
  className: PropTypes.object,
  /**  true - Disables the control / false- enables the control */
  disabled: PropTypes.bool,
  /** true - The radio button is selected / false - radion button is not selected */
  checked: PropTypes.bool,
  /**  Name used for radio button */
  name: PropTypes.string,
  /**  Label used for radio button */
  label: PropTypes.string,
};

Radio.defaultProps = {
  value: null,
  disabled: false,
  checked: false,
  name: '',
  label: '',
};

export default Radio;
