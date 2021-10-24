// @flow

import React, { useState } from 'react';
import type { Node } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import * as S from './styles';

type Props = {
  options: Array<Object>,
  isDisabled: boolean,
  isLoading: boolean,
  isClearable: boolean,
  isRtl: boolean,
  isSearchable: boolean,
  isMulti: boolean,
  placeholder: string,
  isOpen: boolean,
  label: string,
  children: Node,
};

function Dropdown(props: Props) {
  const {
    options,
    isDisabled,
    isLoading,
    isClearable,
    isRtl,
    isSearchable,
    isMulti,
    placeholder,
    isOpen,
    label,
    children,
    defaultValue,
    onChange,
    value,
  } = props;

  const styles = {
    option: (styles, { isDisabled, isSelected }) => ({
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'default',
      padding: 15,
      borderBottom: '1px solid #DDE4EE',
      color: isSelected ? '#306ED8' : '#515D79',
      background: '#ffffff !important',
    }),
    indicatorSeparator: styles => ({
      ...styles,
      backgroundColor: 'transparent',
    }),
  };

  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);
  if (!options) {
    return null;
  }

  return (
    <S.Dropdown>
      <S.Label className="control-label">
        {label}
        {children}
      </S.Label>
      <Select
        options={options}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        isMulti={isMulti}
        placeholder={placeholder}
        menuIsOpen={menuIsOpen}
        // onInputChange={(inputValue, { action }) => {
        //   setMenuIsOpen(inputValue ? true : false);
        // }}
        onChange={value => onChange(value)}
        className="react-select"
        styles={styles}
        defaultValue={defaultValue}
        value={value}
      />
    </S.Dropdown>
  );
}

Dropdown.propTypes = {
  /** Array of objects containing the options the user can select from */
  options: PropTypes.arrayOf(PropTypes.object),
  /** true - Disables the control / false- enables the control */
  isDisabled: PropTypes.bool,
  /**  The select is in a state of loading */
  isLoading: PropTypes.bool,
  /**  The select value is clearable */
  isClearable: PropTypes.bool,
  /**  The select direction right to left */
  isRtl: PropTypes.bool,
  /**  The search functionality on select */
  isSearchable: PropTypes.bool,
  /**  Allows the user to select multiple values */
  isMulti: PropTypes.bool,
  /**  Changes the tect displayed when no option is selected */
  placeholder: PropTypes.string,
  /** Control whether the menu is open  */
  isOpen: PropTypes.bool,
};

Dropdown.defaultProps = {
  options: [{}],
  isDisabled: false,
  isLoading: false,
  isClearable: false,
  isRtl: false,
  isSearchable: false,
  isMulti: false,
  placeholder: 'Select...',
};

export default Dropdown;
