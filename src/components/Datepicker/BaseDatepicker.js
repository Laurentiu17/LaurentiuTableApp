import styled from 'styled-components/macro';

export const BaseDatepicker = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'white' : 'grey')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
  outline: none;
`;
