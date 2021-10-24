import styled from 'styled-components/macro';

import { device } from '@styles/breakpoints';

export const ActionItem = styled.div`
  height: 40px;
  width: ${props => (props.isIcon ? '40px' : 'initial')};
  border: ${props => (props.isIcon ? '1px solid #a8b2c7' : 'initial')};
  border-radius: ${props => (props.isIcon ? '4px' : 'initial')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: ${props => (props.isIcon ? '1px solid #306ed8' : 'initial')};

    svg {
      path {
        fill: ${props => (props.isClosing ? '#D0021B' : '#306ed8')};
      }
    }
  }

  &.hasDropdown {
    position: relative;
    z-index: 2;
  }
`;

export const Dropdown = styled.div`
  background: #fff;
  position: absolute;
  top: 44px;
  right: 0px;
  border: 1px solid #dde4ee;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
  z-index: 2;
  min-width: 240px;
  width: calc(100vw - 32px);
  margin: 0px !important;
  @media ${device.tablet} {
    width: 240px;
  }
`;
export const DropdownMenu = styled.div`
  a {
    text-decoration: none;
  }
`;
export const DropdownItem = styled.div`
  padding: 18px 16px;
  font-size: 16px;
  color: #515d79;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (!props.isClosing ? '#515d79' : '#D0021B')};
  fill: ${props => (!props.isClosing ? '#515d79' : '#D0021B !important')};

  span {
    margin-left: 8px;
    @media ${device.tablet} {
      display: none;
    }
  }

  &:hover {
    color: ${props => (!props.isClosing ? '#306ed8' : '#D0021B')};

    svg {
      path {
        fill: ${props => (!props.isClosing ? '#306ed8' : '#D0021B')};
      }
    }
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #dde4ee;
  }
`;

export const ActionTopBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -4px;
  justify-content: flex-end;
  flex-wrap: wrap;
  min-width: 180px;

  > div {
    margin: 4px;
  }
`;
