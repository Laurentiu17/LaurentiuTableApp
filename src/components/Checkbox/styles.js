import styled from 'styled-components/macro';

export const BaseCheckboxInput = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'white' : 'grey')};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
  outline: none;
  height: 16px;
  width: 16px;
  border: 1px solid #515d79;
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  label {
    font-size: 1.5rem;
    font-weight: 400;
    color: #3a4254;
    outline: none;
  }
`;
