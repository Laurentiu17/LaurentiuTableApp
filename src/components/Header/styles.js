import styled from 'styled-components/macro';

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 2px solid #eaeff5;
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    background: #eff1f4;
    margin: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    align-items: flex-start;
    z-index: 999;
  }
  ${props => props.openedProfile && `height: 100vh;`}
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    background: #eff1f4;
    padding-left: 0;
    width: 95%;
    margin: 120px auto 0 auto;
  }
`;

export const Li = styled.li`
  margin-right: 15px;
  cursor: pointer;
  svg {
    width: 28px;
    height: 28px;
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.07);
    }
  }
  @media (max-width: 768px) {
    margin-right: 0;
    background: white;
    width: 100%;
    min-height: 50px;
    margin-bottom: 8px;
    padding: 0 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    p {
      margin-left: 10px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfilePhoto = styled.li`
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 24px;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 0;
    background: white;
    width: 100%;
    height: 62px;
    margin-bottom: 8px;
    padding: 0 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-left: 10px;
    }
    img {
      width: 40px;
      height: 40px;
    }
    div {
      margin-left: 10px;
    }
  }
`;

export const MoreButton = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  position: fixed;
  right: 15px;
  top: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  -moz-box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  box-shadow: 1px 1px 5px 2px rgba(240, 240, 240, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  svg {
    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
      path {
        fill: #306ed8;
      }
    }
  }
  ${props => props.close && 'svg{width: 14px; height: 14px;}'}
`;

export const ProfileLink = styled.p`
  color: #515d79;
  font-weight: 500;
`;
