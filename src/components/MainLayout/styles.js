import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const ContentPage = styled.div`
  margin-top: 15px;
  margin-left: 300px;
  margin-right: 27px;
  @media (max-width: 768px) {
    width: 95vw;
    margin: 95px auto 0 auto;
  }
  ${props =>
    props.openNavBar && !props.hiddenSideBar
      ? 'margin-left: 320px'
      : 'margin-left: 100px;'}
  ${props => props.hiddenSideBar && 'margin-left: 20px !important'}
`;
