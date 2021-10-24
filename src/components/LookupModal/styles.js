import styled from 'styled-components/macro';

export const CommentModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ModalLookupTopBar1 = styled.div`
  border-bottom: 1px solid #dde4ee;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 45%;
  background: #fff;
  margin: 0 !important;
  z-index: 33;
`;

export const ModalTitle = styled.div`
  color: #1b2b4a;
  font-size: 22px;
  letter-spacing: -0.79px;
  font-weight: 500;
`;

export const LookupContentTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    flex: 1;
  }

  .lookup input {
    border-bottom: 0 !important;
  }
`;

export const LookupContentResponse = styled.div`
  min-height: 150px;
  margin-top: 16px;
`;

export const LookupDropdownWrapper = styled.div`
  margin-right: 16px;
`;

export const LookupContentEmpty = styled.div`
  color: #515d79;
  font-size: 14px;
  margin-top: 25px;
`;

export const LookupContentText = styled.div`
  color: #515d79;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const LookupTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dde4ee;
  border-radius: 4px;
`;
export const LookupHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #dde4ee;

  > div {
    font-weight: bold;
    font-size: 15px;
    color: #515d79;
  }
`;
export const LookupRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
  color: ${props => (props.isSelected ? 'blue' : '#515d79')};

  &:hover {
    background: #f3f5f9;
  }
`;

export const LookupColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 16px 8px;
  font-size: 15px;
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

export const FooterResults = styled.div`
  margin-right: auto;
`;

export const ModalLookupContent = styled.div`
  padding: 14px 16px;
  margin-bottom: 16px;
  padding-top: 70px;
`;
