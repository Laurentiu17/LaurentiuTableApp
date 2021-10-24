// flow
import React from 'react';
import classNames from 'classnames';

import * as S from './styles';

// type Props = {
//   className?: string,
//   primary?: bolean,
//   default?: bolean,
//   big?: bolean,
//   secondary?: bolean,
//   secondaryDefault?: bolean,
//   type?: string,
//   disabled?: bolean,
//   label?: string,
//   children?: Node,
//   onClick: Function,
// };

const Button = props => {
  const getClassName = () =>
    classNames('btn', {
      [props.className]: props.className,
      'btn--primary': props.primary,
      'btn--default': props.default,
      'btn--big': props.big,
      'btn--secondary': props.secondary,
      'btn--secondary_default': props.secondaryDefault,
    });

  return (
    <S.Button
      type={props.type}
      className={getClassName()}
      onClick={props.onClick}
      disabled={props.disabled}
      data-tip={props?.dataTip}
    >
      {props.label}
      {props.children}
    </S.Button>
  );
};

export default Button;
