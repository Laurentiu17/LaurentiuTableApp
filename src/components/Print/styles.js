import styled from 'styled-components/macro';

export const PrintWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background: #fff;
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
  overflow: hidden;

  @media print {
    width: initial;
    height: initial;
    overflow: initial;

    div {
      margin: 0 auto !important;
    }

    table {
      border-collapse: collapse !important;
      margin: 0;
    }

    table {
      break-inside: auto;
    }

    tr {
      break-inside: avoid !important;
      break-after: auto;
    }

    thead {
      display: table-header-group;
    }
  }

  button {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    color: #fff;
    font-size: 1.4rem;
    padding: 1.1rem 2.3rem;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #306ed8;
    border: 1px solid #306ed8;

    &:hover {
      background: #2b67cd;
      border: 1px solid #2b67cd;
    }
  }
`;
