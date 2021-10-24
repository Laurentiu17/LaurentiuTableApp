import styled from 'styled-components/macro';

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
  position: relative;
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftSideNav = styled.div`
  @media (max-width: 970px) {
    margin-bottom: 10px;
  }
`;

export const GridTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -1.4px;
  color: #1a2948;
  margin-bottom: 20px;
  @media (max-width: 970px) {
    margin-bottom: 10px;
  }
`;

export const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 970px) {
    align-items: flex-start;
  }
`;

export const NavLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
    @media (max-width: 970px) {
      margin-bottom: 10px;
    }
    @media (max-width: 444px) {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 970px) {
    align-items: flex-start;
  }
  button {
    &:not(:last-child) {
      margin-right: 7px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  button:not(:last-child) {
    margin-right: 10px;
  }
`;
