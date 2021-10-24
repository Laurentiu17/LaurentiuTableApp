import styled from 'styled-components/macro';

import { device } from '@styles/breakpoints';

// TODO: change color to variable
export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    height: fit-content;
    margin-top: 10vh;
  }
`;
export const Text = styled.div`
  margin: 24px 0;
  color: #515d79;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.71px;
`;
