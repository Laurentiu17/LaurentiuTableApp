import React from 'react';

const HideMenu = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    aria-labelledby="title"
    viewBox="0 0 20 20"
  >
    <title id="title">Hide Menu</title>
    <g fill="none" fillRule="evenodd">
      <rect
        width="19"
        height="19"
        x=".5"
        y=".5"
        fill="#FFF"
        stroke="#DDE4EE"
        rx="9.5"
      />
      <path
        fill="#306ED8"
        d="M8.293375 13.707125l-3-3c-.391-.391-.391-1.023 0-1.414l3-3c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1.293 1.293h5.586c.552 0 1 .447 1 1 0 .553-.448 1-1 1h-5.586l1.293 1.293c.195.195.293.451.293.707 0 .256-.098.512-.293.707-.391.391-1.023.391-1.414 0z"
      />
    </g>
  </svg>
);

export default HideMenu;
