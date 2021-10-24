import styled from 'styled-components/macro';

import { device } from '@styles/breakpoints';

export const ModalActions = styled.div`
  display: flex;
  margin-left: -8px;

  @media ${device.tablet} {
    margin-top: initial;
  }

  > button {
    margin-left: 8px;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  //mobile
  max-height: 100%;
  width: 100%;
  height: 100%;
`;

export const TopbarUpper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const TopbarBottom = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const ModalTopBar = styled.div`
  border-bottom: 1px solid #dde4ee;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: #fff;
`;

export const ModalTitle = styled.div`
  color: #1b2b4a;
  font-size: 22px;
  letter-spacing: -0.79px;
  font-weight: 500;
`;

export const ModalContent = styled.div`
  padding: 0px 16px 0 16px;

  > textarea {
    background: ${props => (props.disabled ? 'lightgrey' : 'white')};
    color: ${props => (props.disabled ? 'inherit' : '#515D79')};
    padding: 0.7rem 1.6rem 0.7rem 0;
    border: none;
    border-bottom: 1px solid #f3f5f9;
    font-size: 1.6rem;
    outline: none;
    flex: 1;
    width: 100%;

    &:placeholder {
      color: #a8b2c7;
      font-size: 1.6rem;
    }
  }
`;

export const DraggableItem = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DraggableNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DraggableName = styled.div`
  color: #3b4558;
  margin-left: 8px;
`;
export const DraggableIcon = styled.div`
  background: #4e5d7c;
  box-shadow: 0 -5px #4e5d7c, 0 -10px #4e5d7c, 0 -5px #4e5d7c, 0 5px #4e5d7c;
  height: 1px;
  width: 16px;
  margin: 0 6px;
`;
