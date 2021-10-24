import styled from 'styled-components/macro';

export const PasswordInput = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'inherit' : '#515D79')};
  padding: 0.7rem 1.6rem 0.7rem 0;
  border: none;
  border-bottom: 1px solid #f3f5f9;
  font-size: 1.6rem;
  outline: none;
  flex: 1;

  &:placeholder {
    color: #a8b2c7;
    font-size: 1.6rem;
  }
`;

export const PasswordButton = styled.div`
  position: absolute;
  top: 39%;
  right: 0;
  cursor: pointer;

  > svg {
    path {
      fill: ${props => (props.type === 'text' ? '#306ed8' : 'inherit')};
    }
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  &:hover {
    input {
      border-bottom: 1px solid #515d79;
    }

    label {
      color: #515d79;
    }
  }

  &:focus-within {
    label {
      color: #306ed8;
    }

    input {
      border-bottom: 2px solid #306ed8;
    }
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
`;
