import styled from 'styled-components/macro';

export const Dropdown = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  &:focus-within {
    label {
      color: #306ed8;
    }

    .react-select > div:first-of-type {
      border-bottom: 2px solid #306ed8;
      box-shadow: none;
    }
  }

  .react-select {
    width: 400px;

    > div:first-of-type {
      background: ${props => (props.disabled ? 'lightgrey' : 'white')};
      color: ${props => (props.disabled ? 'inherit' : '#515D79')};
      padding: 0.7rem 0 0.7rem 0;
      border: none;
      border-bottom: 1px solid #f3f5f9;
      font-size: 1.6rem;
      outline: none;
      flex: 1;
      border-radius: 0;
      box-shadow: none !important;
    }

    > div:last-of-type {
      /* Menu list*/
      > div {
        /* Options */
        > div:hover {
          background: #f3f5f9 !important;
          cursor: pointer !important;
        }
      }
    }
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
`;
