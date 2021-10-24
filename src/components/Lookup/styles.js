import styled from 'styled-components/macro';

export const LookupInput = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'grey' : '#306ED8')};
  padding: 1.1rem calc(2.4rem + 8rem) 1.1rem 0;

  border-radius: 4px;
  border: 2px solid #dde4ee;
  font-size: 1.6rem;
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;

  &::placeholder {
    font-size: 1.5rem;
    color: #a8b2c7;
  }
`;

export const LookupInputWrapper = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #f3f5f9;

  > input {
    flex: 1;
  }

  > svg {
    position: absolute;
    top: 8px;
    right: 0;
    /* width: 22px; */

    path {
      fill: #a8b2c7;
    }
  }
`;

export const SearchWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
