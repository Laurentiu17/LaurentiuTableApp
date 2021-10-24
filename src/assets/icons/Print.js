import React from 'react';

const Print = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-labelledby="title"
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick}
  >
    <path
      d="M19 8H5c-1.655 0-3 1.345-3 3v6h4v4h12v-4h4v-6c0-1.655-1.345-3-3-3zm-3 11H8v-5h8v5zm3-7c-.555 0-1-.445-1-1 0-.555.445-1 1-1 .555 0 1 .445 1 1 0 .555-.445 1-1 1zm-1-9H6v4h12V3z"
      fill="#515D79"
      fillRule="nonzero"
    />
  </svg>
);

export default Print;
