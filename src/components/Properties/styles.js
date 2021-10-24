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
