import styled from 'styled-components/macro';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ModalTopBar = styled.div`
  border-bottom: 1px solid #dde4ee;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalTitle = styled.div`
  color: #1b2b4a;
  font-size: 22px;
  letter-spacing: -0.79px;
  font-weight: 500;
`;
export const ModalContent = styled.div`
  padding: 14px 16px;
  flex: 1;
`;
export const ModalFooter = styled.div`
  border-top: 1px solid #dde4ee;
  padding: 14px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;

  button {
    margin-left: 8px;
  }
`;
export const PossibleId = styled.div`
  text-align: right;
`;
export const InputGroup = styled.div`
  margin: 1.6rem 0;

  .invalid-feedback {
    color: #e03124;
    font-size: 14px;
    margin-top: 4px;
  }
`;
export const Input = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'inherit' : '#515D79')};
  padding: 0.7rem 1.6rem 0.7rem 0;
  border: none;
  border-bottom: ${props =>
    props.error ? '1px solid #e03124' : '1px solid #f3f5f9'};
  font-size: 1.6rem;
  outline: none;
  flex: 1;

  &:placeholder {
    color: #a8b2c7;
    font-size: 1.6rem;
  }

  /* Fix for blue color displayed when select prefilled value to text input */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 100px white inset !important;
  }
`;
export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => (props.error ? '#e03124' : '#515d79')};
`;
export const FormAlert = styled.div`
  &.d-none {
    display: none;
  }

  &.alert {
    color: #e03124;
    display: block;
    font-size: 14px;
  }

  &.submit-errors {
    margin-top: 1.6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 1.6rem 0;

  &:hover {
    input {
      border-bottom: ${props =>
        props.error ? '1px solid #e03124' : '1px solid #515d79'};
    }

    label {
      color: ${props => (props.error ? '#e03124' : '#515d79')};
    }
  }

  &:focus-within {
    label {
      color: ${props => (props.error ? '#e03124' : '#306ed8')};
    }

    input {
      border-bottom: ${props =>
        props.error ? '1px solid #e03124' : '1px solid #306ed8'};
    }
  }

  .invalid-feedback {
    color: #e03124;
    font-size: 14px;
    margin-top: 4px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  .btn:not(:first-of-type) {
    margin-left: 10px;
  }
`;
