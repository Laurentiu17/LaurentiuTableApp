import styled from 'styled-components/macro';

export const MainWrapper = styled.main`
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
  }
  button {
    margin: 15px auto;
  }
`;

export const LoginPage = styled.div`
  width: 300px;
  margin: 200px auto 0 auto;
  text-align: center;
`;

export const Hero = styled.h1`
  color: #192b49;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;

export const SubHero = styled.p`
  font-weight: 500;
  color: #0c0c0c;
  font-size: 16px;
`;

export const WelcomePage = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #192b49;
  font-size: 18px;
  font-weight: 600;
`;
