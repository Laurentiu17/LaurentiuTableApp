import styled from 'styled-components/macro';

import smallArrow from '@icons/smallArrow.svg';

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  color: #a8b2c7;
  font-size: 1.4rem;
  letter-spacing: -0.41px;
  display: flex;
  align-items: center;
  > div {
    &:not(:last-of-type) {
      &:after {
        content: '';
        display: inline-block;
        color: red;
        background-image: url(${smallArrow});
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
      }
    }
    &:hover {
      color: #306ed8;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export const BreadcrumbItem = styled.div`
  color: #a8b2c7;
  font-size: 1.4rem;
  letter-spacing: -0.41px;
  display: flex;
  align-items: center;

  &.clickable {
    &:hover {
      color: #306ed8;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
