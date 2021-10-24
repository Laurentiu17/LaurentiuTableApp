import styled from 'styled-components/macro';

import color from '@styles/colors';

export const Button = styled.button`
  box-sizing: border-box;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: ${color.white};
  font-size: 1.4rem;
  padding: 1.1rem 2.3rem;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn {
    &--primary {
      background: ${color.d8};
      color: ${color.white};
      opacity: ${props => (props.disabled ? '0.4' : 'inherit')};
      border: 1px solid ${color.d8};

      &:hover {
        background: ${color.cd};
        border: 1px solid ${color.cd};
      }
    }

    &--default {
      background: ${color.white};
      color: ${color.d79};
      border: 1px solid ${color.c7};
      opacity: ${props => (props.disabled ? '0.4' : 'inherit')};

      &:hover {
        border: 1px solid ${color.d79};
      }
    }

    &--big {
      background: ${color.d8};
      border: 1px solid ${color.d8};
      color: ${color.white};
      width: 100%;

      &:hover {
        background: ${color.cd};
        border: 1px solid ${color.cd};
      }
    }

    &--secondary {
      background: ${color.white};
      color: ${color.d8};
      border: 2px solid ${color.d8};
      opacity: ${props => (props.disabled ? '0.4' : 'inherit')};

      &:hover {
        color: ${color.cd};
        border: 2px solid ${color.cd};
      }
    }

    &--secondary_default {
      color: ${color.d79};
      background: ${color.white};
      border: 2px solid ${color.c7};
      opacity: ${props => (props.disabled ? '0.4' : 'inherit')};
    }
  }
  &.small-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  &.revert-arrow {
    svg {
      transform: scaleX(-1);
    }
  }
  &.bold-btn {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;
