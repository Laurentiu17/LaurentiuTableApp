import styled from 'styled-components/macro';

export const TextInput = styled.input`
  background: ${props => (props.disabled ? 'lightgrey' : 'white')};
  color: ${props => (props.disabled ? 'inherit' : '#515D79')};
  padding: 0.7rem 1.6rem 0.7rem 0;
  border: none;
  border-bottom: 1px solid #f3f5f9;
  font-size: 1.6rem;
  outline: none;
  flex: 1;
  cursor: pointer;

  &:placeholder {
    color: #a8b2c7;
    font-size: 1.6rem;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => (props.dropdownOpen ? '#306ED8' : '#515D79')};
`;

export const ArrowWrapper = styled.div`
  transform: ${props =>
    props.dropdownOpen ? 'rotate(-90deg)' : 'rotate(90deg)'};
`;

export const SimpleDropdownWrapper = styled.div`
  .dropdown {
    width: 100%;

    &.show {
      border-bottom: 2px solid #306ed8;
    }

    .dropdown-toggle {
      width: 100%;
      padding: 0;
      border: none;
      font: inherit;
      color: ${props => (props.disabled ? 'inherit' : '#515D79')};
      background-color: transparent;
      cursor: pointer;
      padding: 0.7rem 1.6rem 0.7rem 0;
      border-bottom: 1px solid #f3f5f9;
      font-size: 1.6rem;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:focus {
        outline: none;
      }
    }

    .dropdown-menu {
      width: 70%;
      max-height: 294px;
      border: 1px solid #dde4ee;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
      overflow: scroll;
      flex-direction: column;
      display: none;
      margin-top: 8px;
      margin-left: 29%;

      &.show {
        display: flex;
      }

      button {
        width: 100%;
        padding: 0;
        border: none;
        font: inherit;
        font-size: 1.6rem;
        padding: 1.5rem 1.7rem;
        cursor: pointer;

        &:not(:last-of-type) {
          border-bottom: 1px solid #dde4ee;
        }
      }
    }
  }
`;
