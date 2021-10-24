// import React from 'react';
import styled from 'styled-components/macro';

export const RadioInput = styled.input`
  outline: none;
  visibility: hidden;
  position: absolute;

  input[type='radio']:checked ~ .check {
    border: 5px solid #0dff92;
  }

  input[type='radio']:checked ~ .check::before {
    background: red;
  }

  input[type='radio']:checked ~ label {
    color: #0dff92;
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 400;
  color: #3a4254;
  align-self: center;
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
  padding-left: 2.5rem;
  z-index: 9;
`;

export const Check = styled.div`
  display: block;
  position: absolute;
  border: ${props =>
    props.checked ? '1px solid #306ED8' : '1px solid #515d79'};
  border-radius: 100%;
  height: 16px;
  width: 16px;
  top: 0;
  left: 0;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;

  &:before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    top: 2px;
    left: 2px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
    background: ${props => (props.checked ? '#306ED8' : 'transparent')};
  }
`;
export const Inside = styled.div``;
export const RadioWrapper = styled.div`
  position: relative;
`;
