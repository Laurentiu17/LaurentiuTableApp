import React from 'react';
import styled from 'styled-components/macro';
import { hideVisually } from 'polished';
import uuid from 'uuid';

type Props = {
  value?: string | boolean | Object | number,
  disabled: boolean,
  className: Object,
  checked: boolean,
  indeterminate: boolean,
  name?: string,
  label?: string,
  _ref: React.Ref,
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide checkbox visually but remain accessible to screen readers. */
  ${hideVisually()};
`;

const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
  position: relative;
  top: -1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  min-width: 1.6rem;
  min-height: 1.6rem;
  background: ${props =>
    props.checked || props.indeterminate
      ? '#306ed8'
      : props.disabled
      ? '#e9ecef'
      : '#fff'};
  border: 1px solid transparent;
  border-color: ${props =>
    props.checked || props.indeterminate ? '#007bff' : '#515D79'};
  border-radius: 0.25rem;
  transition: all 0.15s;
  outline: none;
  cursor: pointer;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #c4dffe;
  }
  ${Icon} {
    visibility: ${props =>
      props.checked || props.indeterminate ? 'visible' : 'hidden'};
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
  color: ${props => (props.disabled ? '#6c757d' : '#3A4254')};
  display: flex;
  align-items: center;
  outline: none;

  span {
    margin-left: 1rem;
  }
`;

const Checkbox = ({
  value,
  disabled,
  className,
  checked,
  indeterminate,
  name,
  label,
  _ref,
  ...props
}: Props) => {
  let randomId = uuid.v4();
  return (
    <React.Fragment>
      <StyledLabel htmlFor={randomId} disabled={disabled}>
        <HiddenCheckbox
          id={randomId}
          name={name && name.length > 0 ? name : randomId}
          value={value}
          disabled={disabled}
          className={className}
          checked={checked}
          ref={_ref}
          {...props}
        />
        <StyledCheckbox
          type="checkbox"
          value={value}
          disabled={disabled}
          className={className}
          checked={checked}
          indeterminate={indeterminate}
        >
          <Icon viewBox="0 0 24 24">
            {!indeterminate && <polyline points="20 6 9 17 4 12" />}
            {indeterminate && <line x1="5" y1="12" x2="19" y2="12" />}
          </Icon>
        </StyledCheckbox>
        {label && <span>{label}</span>}
      </StyledLabel>
    </React.Fragment>
  );
}; //

Checkbox.defaultProps = {
  value: undefined,
  disabled: false,
  className: '',
  checked: false,
  indeterminate: false,
  name: '',
  label: '',
  _ref: undefined,
};

export default Checkbox;
