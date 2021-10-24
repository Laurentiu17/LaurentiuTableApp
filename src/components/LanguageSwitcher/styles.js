import styled from 'styled-components/macro';

export const LangWrapper = styled.div`
  width: 100%;
`;

export const SelectLanguageMenu = styled.div`
  position: absolute;
  top: 75px;
  right: 95px;
  width: 180px;
  border: 1px solid #dde4ee;
  border-radius: 4px;
  overflow: hidden;
  z-index: 99;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    border: none;
    width: 108%;
    left: -15px;
  }
`;
export const SelectableMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const LangHeader = styled.p`
  padding: 15px 15px;
  background: #e9ecf0;
  height: 45px;
  display: flex;
  align-items: center;
  color: #515d79;
  font-weight: 500;
  @media (max-width: 768px) {
    background: white;
    padding: 15px 7px;
  }
`;

export const LangItem = styled.div`
  padding: 15px 15px;
  background: white;
  display: flex;
  height: 45px;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:not(:last-child) {
    border-bottom: 1px solid #dde4ee;
  }
  position: relative;
  svg:first-child {
    margin-right: 8px;
  }
  &:hover {
    background: #e9ecf0;
  }
  @media (max-width: 768px) {
    color: #515d79;
    font-weight: 500;
  }
`;

export const Selected = styled.div`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #306ed8;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 10px;
    height: 10px;
    margin-right: 0 !important;
    path {
      fill: white;
    }
  }
  @media (max-width: 768px) {
    right: 30px;
  }
`;
