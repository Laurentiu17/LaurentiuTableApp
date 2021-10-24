import React from 'react';

const DropdownArrow = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-labelledby="title"
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick}
    data-tip={props?.dataTip}
  >
    <title>Dropdown Arrow</title>
    <path fill="#515D79" fillRule="nonzero" d="M7 9l5 6 5-6z" />
  </svg>
);

export default DropdownArrow;
