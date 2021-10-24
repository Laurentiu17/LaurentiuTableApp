import styled from 'styled-components/macro';

export const TooltipWrapper = styled.div`
  /* .__react_component_tooltip {
    &.type-dark,
    &.type-info {
      min-width: 500px;
      max-width: 600px;
      background-color: red !important;
      &.place-bottom {
        &:after {
          border-bottom-color: red;
        }
      }
      &.place-top {
        &:after {
          border-top-color: red;
        }
      }
      &.place-right {
        &:after {
          border-right-color: red;
        }
      }
      &.place-left {
        &:after {
          border-left-color: red;
        }
      }
    }

    span {
      color: #fff;
      font-size: 14px !important;
    }
    a {
      color: #fff;
      opacity: 0.8;
      margin-left: 0 !important;
    }
    &.type-info {
      min-width: auto;
      max-width: 600px;
    }
  } */

  .__react_component_tooltip {
    color: #fff;
    background: #3a4254;
    border-radius: 3px;
    padding: 8px;
    font-size: 12px;

    &.place-bottom {
      &:after {
        border-bottom-color: #3a4254;
      }
    }
    &.place-top {
      &:after {
        border-top-color: #3a4254;
      }
    }
    &.place-right {
      &:after {
        border-right-color: #3a4254;
      }
    }
    &.place-left {
      &:after {
        border-left-color: #3a4254;
      }
    }
  }
`;
