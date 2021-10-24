import styled from 'styled-components/macro';
import { Link } from '@reach/router';

export const NavBar = styled.div`
  max-height: 100vh;
  height: 100%;
  background: #eff1f4;
  width: 65px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  @media (max-width: 768px) {
    max-height: 70px;
    margin: 0;
    width: 100vw;
  }
  ${props => props.openNavBar && `width: 300px;`}
  > button svg {
    position: absolute;
    top: 45px;
    right: -7px;
    cursor: pointer;
  }
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 10px;
    background: white;
    position: absolute;
    top: 65px;
    right: -20px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const BurgerButton = styled.button`
  ${props => props.closeButton && `@media (max-width: 768px) {display: none}`}
`;

export const Burger = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 5px;
  position: relative;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  -moz-box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  @media (max-width: 768px) {
    position: fixed;
    left: 15px;
    top: 15px;
  }
  svg {
    fill: #306ed8;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      fill: #192b49;
    }
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  ${props => props.closeButton && `svg{width: 14px; height: 14px}`}
`;

export const Img = styled.img`
  width: 175px;
  height: 29px;
`;

export const LogoBig = styled(Link)`
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-top: 0;
    position: fixed;
    top: 20px;
  }
`;

export const NavLinksList = styled.div`
  overflow-y: auto;
  overflow-x: visible;
  width: 100%;
  @media (max-width: 768px) {
    position: fixed;
    top: -100%;
    height: calc(100vh - 20px);
    transition: all 0.4s ease-in-out;
    background: #eff1f4;
    padding-top: 50px;
    ${props => props.openNavBar && `top: 70px;`}
  }
`;

export const SubNav = styled.p`
  font-size: 1.4rem;
  color: #51607d;
  padding-right: 40px;
`;

const navLinkGeneralStyles = props => `
display: flex;
flex-direction: row;
align-items: center;
position: relative;
margin-bottom: 19px;
cursor: pointer;
margin-left: 60px;
p{
  transition: .3s ease-in-out;
}
svg:first-child {
  fill: #a8b2c7;
  width: 21px;
  height: 21px;
  opacity: 0;
  transition: 0.2s ease-in-out;
  position: relative;
  left: -6px;
}
svg:last-child {
  position: absolute;
  right: 17px;
  fill: #515d79;
  width: 24px;
  height: 24px;
  transition: 0.2s ease-in-out;
}
&:hover {
  p {
    color: #0470df;
    cursor: pointer;
  }
  svg {
    fill: #0470df;
  }
  svg:first-child {
    cursor: pointer;
    opacity: 1;
  }
}
`;

export const NavigationSubLink = styled(Link)`
  p {
    padding-right: 30px !important;
  }
  ${navLinkGeneralStyles}

  ${props =>
    props.active === 'active' &&
    `
  svg path {
    fill: #0470df !important;
  }
  p {
    color: #0470df !important;
  }
  a {
    color: #0470df !important;
  }
  &:hover {
    p {
      color: #0470df; !important;
    }
  }`}
`;

export const NavigationSubGroup = styled.div`
  ${navLinkGeneralStyles}
  ${props =>
    props.active === 'active' &&
    `
  svg path {
    fill: #0470df !important;
  }
  p {
    color: #0470df !important;
  }
  a {
    color: #0470df !important;
  }
  &:hover {
    p {
      color: #0470df; !important;
    }
  }`}
`;

export const NavigationLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: white;
  width: 95%;
  margin: 0 auto;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 15px;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 1px #ddd, 0 2px 2px #ccc;
  cursor: pointer;
  svg path {
    transition: 0.3s ease-in-out;
  }
  &:hover {
    svg path {
      fill: #0470df;
    }
  }
  &.activePage {
    background: #0470df;
    svg path {
      fill: white !important;
    }
    p {
      color: white;
    }
    &:hover {
      p {
        color: white !important;
      }
    }
  }
  ${props =>
    props.active === 'active'
      ? `svg path {
      fill: #0470df !important;
    }
    p {
      color: #0470df !important;
    }
    &:hover {
      p {
        color: #0470df; !important;
      }
    }`
      : props.active === 'activePage' &&
        `    background: #0470df;
    svg path {
      fill: white !important;
    }
    p {
      color: white;
    }
    &:hover {
      p {
        color: white !important;
      }
    }`}

  svg {
    fill: #a8b2c7;
    transition: 0.3s ease-in-out;
    &:last-child {
      fill: #515d79;
      position: absolute;
      right: 10px;
    }
  }
  &:hover {
    svg {
      fill: #0470df;
    }
    p {
      color: #0470df;
    }
  }
`;

export const NavTitle = styled.p`
  margin-left: 15px;
  transition: 0.3s ease-in-out;
  color: #51607d;
`;

export const PinnedIcon = styled.div`
  position: absolute;
  top: -100%;
  margin-left: 22px;
  transform: translate(0, 50%);
  transition: 0.3s ease-in-out;
  &:hover {
    svg {
      cursor: pointer;
      transform: scale(1.05);
      transition: 0.3s ease-in-out;
      path {
        transition: 0.3s ease-in-out;
        fill: #0470df;
      }
    }
  }
  ${props =>
    props.pinned &&
    `svg {
      transform: scaleX(-1);
      path{
    fill:  #0470df;
  }}`}
`;

export const NavigationItem = styled.div`
  position: relative;
`;
