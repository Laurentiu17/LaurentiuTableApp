import styled from 'styled-components/macro';

export const MainWrapper = styled.main`
  margin-left: 65px;
  text-align: center;
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
  }
  div {
    font-size: 18px;
    font-weight: 600;
  }
`;
