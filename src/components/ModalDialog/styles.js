import styled from 'styled-components/macro';
import { BaseModalBackground } from 'styled-react-modal';

import { device } from '@styles/breakpoints';

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: scroll;
`;

export const ModalWrapper = styled.div`
  overflow: auto;

  width: 45%;
  /* min-height: 20rem; */
  max-height: 75%;
  overflow: scroll;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background-color: #fff;
  transition: opacity ease 500ms;

  //mobile
  max-height: 100%;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    width: 45%;
    max-height: 75%;
  }
`;
